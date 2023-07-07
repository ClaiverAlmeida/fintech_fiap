const showButton = document.getElementById("showMoney");
const hideButton = document.getElementById("hideMoney");
const moneyValue = document.getElementById("moneyValue");
const moneyHidden = document.getElementById("moneyHidden");

let previousValue = 0;

function formatCurrency(value) {
	return value.toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
}

function generateRandomValue(minValue) {
	const random = Math.random();
	const range = 100000;
	const value = Math.floor(random * range) + minValue;
	return value;
}

showButton.addEventListener("click", function () {
	moneyValue.classList.add("show");
	moneyValue.classList.remove("hide");
	moneyHidden.classList.add("hide");
	moneyHidden.classList.remove("show");
	hideButton.classList.add("show");
	hideButton.classList.remove("hide");
	showButton.classList.add("hide");
	showButton.classList.remove("show");
	const newValue = generateRandomValue(previousValue + 1);
	moneyValue.textContent = formatCurrency(newValue);
	previousValue = newValue;
});

hideButton.addEventListener("click", function () {
	moneyValue.classList.add("hide");
	moneyValue.classList.remove("show");
	moneyHidden.classList.add("show");
	moneyHidden.classList.remove("hide");
	hideButton.classList.add("hide");
	hideButton.classList.remove("show");
	showButton.classList.add("show");
	showButton.classList.remove("hide");
});
