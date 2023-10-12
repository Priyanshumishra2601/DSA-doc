//javascript for tab navigation horizontal scroll bar buttons
const btnLeft = document.querySelector(".left-btn");
const btnRight = document.querySelector(".right-btn");
const tabMenu = document.querySelector(".tab-menu");

btnRight.addEventListener("click",() => {
	tabMenu.scrollLeft += 150;
});

btnLeft.addEventListener("click",() => {
	tabMenu.scrollLeft -= 50;
});