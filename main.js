const startAnim = document.querySelector("#startAnim");
const navEl = document.querySelector("#drop-menu");
const links = document.querySelector(".mobile-links");

startAnim.addEventListener("click", () => {
	if (navEl.style.height == "30vh") {
		setTimeout(() => {
			navEl.style.height = "0";
		}, 130);
		links.style.opacity = 0;
		startAnim.children[0].children[0].children[0].className = "arrow down";
	} else {
		navEl.style.height = "30vh";
		setTimeout(() => {
			links.style.opacity = 1;
		}, 150);
		startAnim.children[0].children[0].children[0].className = "arrow up";
	}
});
