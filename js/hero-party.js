// "product designer" hover/tap -> rainbow party background on the hero box.
// "urbanist" hover/tap -> a bike rides across the hero, masked by its bounds.
(function () {
	function init() {
		var heroBox = document.querySelector('#about .contentBox');
		if (!heroBox) return;

		var partyTrigger = document.getElementById('partyTrigger');
		if (partyTrigger) {
			var partyTapTimer;

			function startParty() {
				heroBox.style.backgroundColor = '';
				heroBox.classList.add('party-mode');
			}
			function stopParty() {
				if (!heroBox.classList.contains('party-mode')) return;
				// Freeze the mid-cycle color, drop the animation, then let the
				// box's own transition ease that frozen color back to base —
				// removing the animation alone would otherwise jump instantly.
				var current = getComputedStyle(heroBox).backgroundColor;
				heroBox.style.backgroundColor = current;
				heroBox.classList.remove('party-mode');
				requestAnimationFrame(function () {
					requestAnimationFrame(function () {
						heroBox.style.backgroundColor = '';
					});
				});
			}

			partyTrigger.addEventListener('mouseenter', startParty);
			partyTrigger.addEventListener('mouseleave', stopParty);
			partyTrigger.addEventListener('touchstart', function () {
				startParty();
				clearTimeout(partyTapTimer);
				partyTapTimer = setTimeout(stopParty, 1800);
			}, { passive: true });
		}

		var urbanistWord = document.getElementById('urbanistWord');
		var bikeRider = heroBox.querySelector('.bike-rider');
		if (urbanistWord && bikeRider) {
			function rideBike() {
				if (heroBox.classList.contains('bike-riding')) return; // locked until current ride finishes
				heroBox.classList.add('bike-riding');
			}

			bikeRider.addEventListener('animationend', function () {
				heroBox.classList.remove('bike-riding');
			});

			urbanistWord.addEventListener('mouseenter', rideBike);
			urbanistWord.addEventListener('touchstart', rideBike, { passive: true });
		}
	}

	document.addEventListener('DOMContentLoaded', init);
})();
