document.querySelectorAll("button[name='cartinsert']").forEach(function (btn) {
	btn.onclick = () => {
		let key = btn.id;
		let value = btn.dataset.info;

		localStorage.setItem(key, value);
	};
});
