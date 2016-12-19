document.addEventListener('DOMContentLoaded',function() {
	const checkboxes = document.querySelectorAll('input[type=checkbox');
	const uncheck_all = document.getElementById('uncheck_all');
	let inBetween = false;
	let lastChecked;

	function handleCheck(e) {
		if(e.shiftKey && this.checked) {
			checkboxes.forEach(checkbox => {
				if(this === checkbox || checkbox === lastChecked)
					inBetween = !inBetween;
				if(inBetween)
					checkbox.checked = true;
			});
		}
		lastChecked = this;
	}

	function uncheckAll() {
		checkboxes.forEach(checkbox => {
			checkbox.checked = false;
		});
	}

	checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));


	uncheck_all.addEventListener('click',uncheckAll);
});
