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
				}
			});
		}, { rootMargin: '-10% 0px -50% 0px', threshold: 0 });

		sections.forEach(function (section) { observer.observe(section); });
		return true;
	}

	function init() {
		var menu = document.getElementById('menu');
		if (!menu) return;

		var ul = menu.querySelector('ul');
		var indicator = menu.querySelector('.menu-indicator');
		if (!ul || !indicator) return;

		var tabs = Array.prototype.filter.call(ul.children, function (li) {
			return !li.classList.contains('menu-indicator');
		});
		if (!tabs.length) return;

		if (!setupScrollSpy(tabs)) {
			setActiveByPath(tabs);
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
				if (link) window.location.href = link.getAttribute('href');
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
