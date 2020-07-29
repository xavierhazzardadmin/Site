const startAnim = document.querySelector("#startAnim");
const navEl = document.querySelector("#drop-menu");
const links = document.querySelector(".mobile-links");

var currentImg;

startAnim.addEventListener("click", () => {
	// alert(window.innerHeight);

	if (navEl.style.height == "35vh") {
		setTimeout(() => {
			navEl.style.height = "0";
		}, 130);
		links.style.opacity = 0;
		startAnim.children[0].children[0].children[0].className = "arrow down";
		return;
	}
	navEl.style.height = "35vh";
	setTimeout(() => {
		links.style.opacity = 1;
	}, 150);
	startAnim.children[0].children[0].children[0].className = "arrow up";
});
