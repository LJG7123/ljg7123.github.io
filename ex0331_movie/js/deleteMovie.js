document.addEventListener("click", (e) => {
	if (e.target.matches("button[name='delItem']")) {
		let idEle =
			e.target.parentElement.previousElementSibling.previousElementSibling
				.previousElementSibling;
		localStorage.removeItem(idEle.innerText);

		let tr = e.target.parentElement.parentElement;
		if (tr.matches("tr")) tr.remove();
	}
});
