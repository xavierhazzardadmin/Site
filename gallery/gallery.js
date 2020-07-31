const model = document.querySelector(".model");
const previews = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");
const nav = document.querySelector("nav");

//opening a picture
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
