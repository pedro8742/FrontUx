
let time = 6000,
    currentImageIndex = 0,
    images = document
        .querySelectorAll(".slider img")
max = images.length;

function nextImage() {

    images[currentImageIndex]
        .classList.remove("selected")

    currentImageIndex++

    if (currentImageIndex >= max)
        currentImageIndex = 0

    images[currentImageIndex]
        .classList.add("selected")
}

function start() {
    setInterval(() => {
        // troca de image
        nextImage()
    }, time)
}

window.addEventListener("load", start)

/*var closeBtn = document.getElementById('close-btn');
var menuBtn = document.getElementById('menu-btn');
var menu = document.getElementById('menu');

menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
});

closeBtn.addEventListener('click', function () {
    closeBtn.classList.remove('active');
});*/


var menuBtn = document.getElementById('menu-btn');
		var menu = document.getElementById('menu');
		var backBtn = document.getElementById('back-btn');

		menuBtn.addEventListener('click', function() {
			menuBtn.classList.toggle('active');
			menu.classList.toggle('active');
		});

		backBtn.addEventListener('click', function() {
			menuBtn.classList.remove('active');
			menu.classList.remove('active');
		});