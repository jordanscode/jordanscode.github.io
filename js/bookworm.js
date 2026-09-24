// Plays the "bookworm" wave animation on hover (desktop) and tap (touch).
// Both paths freeze each letter's mid-wave position before stopping the
// animation, then release it a frame later so the box's own transition
// (see .bookworm .letter in style.css) eases it back to rest instead of
// snapping — removing the animation alone would jump instantly.
(function () {
	function init() {
		var el = document.getElementById('bookwormWord');
		if (!el) return;

		var letters = el.querySelectorAll('.letter');
		var tapTimer;

		function startWave(cls) {
			el.classList.add(cls);
		}

		function stopWave(cls) {
			if (!el.classList.contains(cls)) return;
			letters.forEach(function (letter) {
				var current = getComputedStyle(letter).transform;
				letter.style.transform = current === 'none' ? '' : current;
			});
			el.classList.remove(cls);
			requestAnimationFrame(function () {
				requestAnimationFrame(function () {
					letters.forEach(function (letter) {
						letter.style.transform = '';
					});
				});
			});
		}

		el.addEventListener('mouseenter', function () {
			startWave('worm-hover');
		});
		el.addEventListener('mouseleave', function () {
			stopWave('worm-hover');
		});

		el.addEventListener('touchstart', function () {
			if (el.classList.contains('worm-active')) return;
			startWave('worm-active');
			clearTimeout(tapTimer);
			tapTimer = setTimeout(function () {
				stopWave('worm-active');
			}, 1300);
		}, { passive: true });
	}

	document.addEventListener('DOMContentLoaded', init);
})();
