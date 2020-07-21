function debugLogo() {
	const elem = document.getElementById("logo");

	if (!elem.style.border) {
		elem.style.border = "1px solid black";
	} else {
		elem.style.border = null;
	}
}
function debugNavLinks() {
	const elem = document.getElementById("page-links");

	if (!elem.style.border) {
		elem.style.border = "1px solid black";
	} else {
		elem.style.border = null;
	}
}

function debugNavList() {
	const elem = document.querySelector("#test");

	// if (!elem.style.border) {
	// 	elem.style.border = "1px solid black";
	// } else {
	// 	elem.style.border = null;
	// }

	console.log(elem.style.margin);
}
