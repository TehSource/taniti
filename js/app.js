(function(){
	const btn = document.getElementById('menuToggle');
	const nav = document.getElementById('siteNav');
	const backdrop = document.getElementById('backdrop');
	if(!btn || !nav || !backdrop) return;

	function closeNav(){
		nav.classList.remove('open');
		btn.setAttribute('aria-expanded','false');
		backdrop.hidden = true;
	}
	btn.addEventListener('click', () => {
		const open = nav.classList.toggle('open');
		btn.setAttribute('aria-expanded', String(open));
		backdrop.hidden = !open;
	});
	backdrop.addEventListener('click', closeNav);
	nav.querySelectorAll('a').forEach(a => a.addEventListener('click', closeNav));
})();
