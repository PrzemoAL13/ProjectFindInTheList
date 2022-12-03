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
	inValue.addEventListener("keyup", checkEnterBtn);
	inValue.addEventListener("keyup", searchText);
};

const checkEnterBtn = e => {
	if (e.key === "Enter") {
		console.log("Enter keydown");
	}
};

const searchText = e => {
	console.log("keyup");
	//console.log(e.target);
	console.log(e.target.value);
	//console.log(inValue.value);
	compareInputValue();
};

const compareInputValue = () => {};

//after DOM Loaded
document.addEventListener("DOMContentLoaded", main);
