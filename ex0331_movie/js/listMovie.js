for (let i = 0; i < localStorage.length; i++) {
	let key = localStorage.key(i);
	let value = localStorage.getItem(key);

	let [name, img, price] = value.split(",");

	let table = document.querySelector("table");
	let row = table.insertRow();
	let imgCell = row.insertCell(0);
	let idCell = row.insertCell(1);
	let nameCell = row.insertCell(2);
	let priceCell = row.insertCell(3);
	let btnCell = row.insertCell(4);

	imgCell.innerHTML = `<img width=150px height=120px src="${img}"/>`;
	idCell.innerHTML = key;
	nameCell.innerHTML = name;
	priceCell.innerHTML = price;
	btnCell.innerHTML = `<button name="delItem">삭제</button>`;
}
