let videoEle = document.querySelector("video");

document.querySelectorAll("button[name='vplay']").forEach(function (btn) {
	btn.addEventListener("click", function () {
		videoEle.src = btn.getAttribute("data-media-src");
		videoEle.play();
	});
});
