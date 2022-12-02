let inValue; //place where user enter data
let ulListValue; //ul list

const main = () => {
	prepereDOMElements();
	prepereDOMEvent();
};

const prepereDOMElements = () => {
	//queary selectors
	inValue = document.querySelector(".header-section__input");
	ulList = document.querySelector(".main-section__ullist");
};

const prepereDOMEvent = () => {
	//listeners
	inValue.addEventListener("keyup", ckeckEnterBtn);
};

const ckeckEnterBtn = e => {
	if (e.key === "Enter") {
		//console.log("Enter");
		console.log("Enter keydown");
	}
};

//after DOM Loaded
document.addEventListener("DOMContentLoaded", main);
