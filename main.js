const startAnim = document.querySelector("#startAnim");
const navEl = document.querySelector("#drop-menu");
const links = document.querySelector(".mobile-links");
const model = document.querySelector(".model");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");
const nav = document.querySelector("nav");

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

previews.forEach((preview) => {
	preview.addEventListener("click", () => {
		model.classList.add("open");
		original.classList.add("open");
		//Dynamically change text and img
		const originalSrc = preview.getAttribute("data-original");
		const imgCaption = preview.alt;
		original.src = `./img/full/${originalSrc}`;
		imgText.innerText = imgCaption;
		nav.style.display = "none";
		
	});
});

model.addEventListener("click", (e) => {
	if (e.target.classList.contains("model")) {
		model.classList.remove("open");
		original.classList.remove("open");
		nav.style.display = "inline-block";
	}
});
