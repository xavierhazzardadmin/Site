const startAnim = document.querySelector("#startAnim");
const navEl = document.querySelector("#drop-menu");
const links = document.querySelector(".mobile-links");
const pictures = document.querySelector(".big-pic");
const exit = document.querySelector(".exit");
const frame = document.querySelector(".pic-full");

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

pictures.addEventListener("click", (e) => {
	const url = new URL(e.target.src).pathname;
	const image = document.createElement("img");
	currentImg = e.target;
	e.target.style.display = "none";
	frame.style.display = "block";
	image.src = url;
	image.classList.add("full");
	frame.appendChild(image);

	if (window.innerWidth <= "760px") {
	}
});

exit.addEventListener("click", () => {
	const image = document.querySelector(".full");
	frame.style.display = "none";
	frame.removeChild(image);
	currentImg.style.display = "block";
});
