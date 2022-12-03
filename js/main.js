let inValue; //place where user enter data
let ulListValue; //ul list
let liList; //li elements

const main = () => {
	prepereDOMElements();
	prepereDOMEvent();
};

const prepereDOMElements = () => {
	//queary selectors
	inValue = document.querySelector(".header-section__input");
	ulListValue = document.querySelector(".main-section__ullist");
	liList = document.querySelectorAll("li");
};

const prepereDOMEvent = () => {
	//listeners
	//	inValue.addEventListener("keyup", checkEnterBtn);
	inValue.addEventListener("keyup", searchText);
};

const checkEnterBtn = e => {
	if (e.key === "Enter") {
		console.log("Enter keydown");
	}
};

const searchText = e => {
	const searchTextValue = e.target.value;
	compareInputValue(searchTextValue);
};

const compareInputValue = textValue => {
	liList.forEach(el => {
		if (el.textContent.indexOf(textValue) != -1) {
			el.style.display = "block";
		} else {
			el.style.display = "none";
		}
	});
};

//after DOM Loaded
document.addEventListener("DOMContentLoaded", main);
