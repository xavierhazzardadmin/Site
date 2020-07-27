const startAnim = document.querySelector("#startAnim");
const navEl = document.querySelector("#drop-menu");
const links = document.querySelector(".mobile-links");
const pictures = document.querySelector("#big-pic");

startAnim.addEventListener("click", () => {
	// alert(window.innerHeight);

	if (navEl.style.height == "35vh") {
		setTimeout(() => {
			navEl.style.height = "0";
		}, 130);
		links.style.opacity = 0;
		startAnim.children[0].children[0].children[0].className = "arrow down";
	} else {
		navEl.style.height = "35vh";
		setTimeout(() => {
			links.style.opacity = 1;
		}, 150);
		startAnim.children[0].children[0].children[0].className = "arrow up";
	}
});

pictures.addEventListener("click", (event) => {
	console.log(event.target.getAttribute("src"));
});
