/* Lets the mobile tab bar's sliding indicator be dragged between items
   with a finger. A plain tap still just follows the link normally; this
   only takes over once the touch has moved enough to count as a drag. */
(function () {
	function isMobile() {
		return window.matchMedia('(max-width: 960px)').matches;
	}

	/* Which tab is "active" used to be hardcoded onto Work in the markup,
	   so it was wrong on every other page and never moved. This tracks
	   the real current section (scroll-spy on the single-page index) or
	   the current page (everywhere else) and toggles .active for real. */
	function setActiveTab(tabs, name) {
		tabs.forEach(function (li) {
			var a = li.querySelector('a');
			var href = a && a.getAttribute('href');
			var isMatch = !!href && href.indexOf('#' + name) !== -1;
			li.classList.toggle('active', isMatch);
		});
	}

	function setActiveByPath(tabs) {
		var path = window.location.pathname;
		var name = 'about';
		if (/about\.html$/.test(path)) {
			name = 'about';
		} else if (/contact\.html$/.test(path)) {
			name = 'contact';
		} else if (/\/work(\.html)?($|\/)/.test(path) || /\/work\//.test(path)) {
			name = 'work';
		}
		setActiveTab(tabs, name);
	}

	function isIndexPage() {
		return /\/(index\.html)?$/.test(window.location.pathname);
	}

	/* Always the top of the site — case studies live one level down in
	   /work/, so they need the extra ../ to get there. */
	function backHref() {
		return /\/work\//.test(window.location.pathname) ? '../index.html' : 'index.html';
	}

	// The back-link SVG, shared by both flavors of the back button below.
	var BACK_ARROW_SVG = '<svg width="16" height="17" viewBox="0 0 16 17" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.61697 10.1824C1.39232 9.39508 1.39232 7.60491 2.61697 6.81764L10.9185 1.48097C12.2495 0.625314 14 1.581 14 3.16333V13.8367C14 15.419 12.2495 16.3747 10.9185 15.519L2.61697 10.1824Z"/></svg>';

	/* Prefers a real browser back-navigation (preserves scroll position on
	   the page you came from) over always landing at the top of index.html
	   — but only when that history actually leads back into this site. */
	function goBack(e) {
		var ref = document.referrer;
		var cameFromSite = ref && ref.indexOf(window.location.origin) === 0;
		if (cameFromSite && window.history.length > 1) {
			e.preventDefault();
			window.history.back();
		}
	}

	/* On mobile, subpages don't need the full four-icon dock — there's
	   nowhere to jump to but back. Collapse it into a single round back
	   button in the same glass material as the tab bar, no label. */
	function setupBackButton(menu) {
		if (isIndexPage()) return;

		menu.classList.add('is-subpage');

		var back = document.createElement('a');
		back.className = 'menu-back';
		back.href = backHref();
		back.setAttribute('aria-label', 'Back');
		back.innerHTML = BACK_ARROW_SVG;
		back.addEventListener('click', goBack);

		menu.appendChild(back);
	}

	/* Desktop's in-content "Back" pill, dropped in as the first thing in
	   the page's first .contentBox. Generated here — not hand-copied into
	   each case study's markup — so any future subpage gets it for free
	   just by loading this script and having a #container > .contentBox;
	   nothing else to wire up. */
	function setupContentBackLink() {
		if (isIndexPage()) return;

		var contentBox = document.querySelector('#container .contentBox');
		if (!contentBox) return;

		var back = document.createElement('a');
		back.className = 'back-link';
		back.href = backHref();
		back.innerHTML = BACK_ARROW_SVG + 'Back';
		back.addEventListener('click', goBack);

		contentBox.insertBefore(back, contentBox.firstChild);
	}

	/* Keeps the URL in sync with whichever section is on screen, so a
	   refresh (or a shared link) lands back on the same section instead
	   of always snapping to the top. replaceState (not pushState) so
	   scrolling doesn't spam the back button with a stop per section. */
	function updateHash(name) {
		var target = name === 'about' ? window.location.pathname + window.location.search : '#' + name;
		if (window.location.hash === '#' + name) return;
		if (name === 'about' && !window.location.hash) return;
		if (window.history && window.history.replaceState) {
			window.history.replaceState(null, '', target);
		}
	}

	/* Cross-page hrefs like "../index.html#work" need a real navigation;
	   only a bare "#id" can be scrolled to in place. */
	function isSamePageHash(href) {
		return !!href && href.charAt(0) === '#';
	}

	/* Smooth-scrolls to a same-page section instead of letting the browser's
	   default anchor-click jump the URL there instantly — that jump used to
	   race ahead of the scroll-spy observer, so the address bar would say
	   "#work" while the indicator was still sitting on "About" until the
	   scroll caught up. Scrolling this way means the observer is the only
	   thing that ever moves the indicator or the URL, so they can't drift
	   apart. Returns false (and does nothing) if there's no such section,
	   so the caller can fall back to a normal navigation. */
	function goToSection(href) {
		var target = document.getElementById(href.slice(1));
		if (!target) return false;
		target.scrollIntoView({ behavior: 'smooth', block: 'start' });
		return true;
	}

	function setupScrollSpy(tabs) {
		var ids = ['about', 'work', 'writing', 'contact'];
		var sections = ids
			.map(function (id) { return document.getElementById(id); })
			.filter(Boolean);
		// Only meaningful on the single-page index, where all four
		// sections actually live in this same document.
		if (sections.length < 2 || !('IntersectionObserver' in window)) return false;

		// A thin band dead-center in the viewport (-40%/-40%) means a fast
		// flick can jump clean over it between samples, so a section's
		// "entering" crossing never fires and the indicator sticks on
		// whatever was last active. Use a much wider, top-biased zone
		// instead, so there's far more room to catch the crossing.
		var observer = new IntersectionObserver(function (entries) {
			entries.forEach(function (entry) {
				if (entry.isIntersecting) {
					setActiveTab(tabs, entry.target.id);
					updateHash(entry.target.id);
				}
			});
		}, { rootMargin: '-10% 0px -50% 0px', threshold: 0 });

		sections.forEach(function (section) { observer.observe(section); });
		return true;
	}

	function init() {
		var menu = document.getElementById('menu');
		if (!menu) return;

		setupBackButton(menu);
		setupContentBackLink();

		var ul = menu.querySelector('ul');
		var indicator = menu.querySelector('.menu-indicator');
		if (!ul || !indicator) return;

		var tabs = Array.prototype.filter.call(ul.children, function (li) {
			return !li.classList.contains('menu-indicator');
		});
		if (!tabs.length) return;

		if (!setupScrollSpy(tabs)) {
			setActiveByPath(tabs);
		} else {
			tabs.forEach(function (li) {
				var a = li.querySelector('a');
				var href = a && a.getAttribute('href');
				if (!isSamePageHash(href)) return;
				a.addEventListener('click', function (e) {
					if (goToSection(href)) e.preventDefault();
				});
			});
		}

		var dragging = false;
		var moved = false;
		var startX = 0;
		var lastIndex = -1;

		function nearestIndex(clientX) {
			var best = 0;
			var bestDist = Infinity;
			tabs.forEach(function (tab, i) {
				var r = tab.getBoundingClientRect();
				var center = r.left + r.width / 2;
				var dist = Math.abs(clientX - center);
				if (dist < bestDist) {
					bestDist = dist;
					best = i;
				}
			});
			return best;
		}

		function moveIndicatorTo(clientX) {
			var ulRect = ul.getBoundingClientRect();
			var indicatorWidth = indicator.getBoundingClientRect().width;
			var x = clientX - ulRect.left - indicatorWidth / 2;
			x = Math.max(0, Math.min(x, ulRect.width - indicatorWidth));
			indicator.style.transform = 'translateX(' + x + 'px)';
		}

		ul.addEventListener('touchstart', function (e) {
			if (!isMobile()) return;
			dragging = true;
			moved = false;
			startX = e.touches[0].clientX;
			lastIndex = nearestIndex(startX);
			indicator.style.transition = 'none';
		}, { passive: true });

		ul.addEventListener('touchmove', function (e) {
			if (!dragging) return;
			var x = e.touches[0].clientX;
			if (Math.abs(x - startX) > 6) moved = true;
			if (moved) {
				e.preventDefault();
				moveIndicatorTo(x);
				lastIndex = nearestIndex(x);
			}
		}, { passive: false });

		ul.addEventListener('touchend', function () {
			if (!dragging) return;
			dragging = false;
			indicator.style.transition = '';
			indicator.style.transform = '';
			if (moved && lastIndex > -1) {
				var link = tabs[lastIndex].querySelector('a');
				var href = link && link.getAttribute('href');
				if (href && (!isSamePageHash(href) || !goToSection(href))) {
					window.location.href = href;
				}
			}
			moved = false;
		});

		ul.addEventListener('touchcancel', function () {
			dragging = false;
			moved = false;
			indicator.style.transition = '';
			indicator.style.transform = '';
		});
	}

	if (document.readyState === 'loading') {
		document.addEventListener('DOMContentLoaded', init);
	} else {
		init();
	}
})();
