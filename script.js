var numberOfSquare = 6;
var colors = generateRandomColor(numberOfSquare);
var squares = document.querySelectorAll(".square");
var colorPicked = pickColor();
var rgbDisplay = document.getElementById("rgbDisplay");
var msgDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("reset");
var diffBtn = document.querySelectorAll(".difficulty")

for (var i = 0; i < diffBtn.length; i++) {
	diffBtn[i].addEventListener("click", function () {
		diffBtn[0].classList.remove("selected");
		diffBtn[1].classList.remove("selected");
		this.classList.add("selected")
		this.textContent === "Easy" ? numberOfSquare = 3 : numberOfSquare = 6;
		reset();
	});
}

function reset() {
	colors = generateRandomColor(numberOfSquare);
	colorPicked = pickColor();
	rgbDisplay.textContent = colorPicked;
	this.textContent = 'New Colors'
	for (var i = 0; i < squares.length; i++) {
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
	h1.style.background = "steelblue";
	msgDisplay.textContent = "";
}


resetBtn.addEventListener("click", function () {
	reset();
	this.textContent = "New Colors";
});

rgbDisplay.textContent = colorPicked;

for (var i = 0; i < squares.length; i++) {
	squares[i].style.background = colors[i];
	squares[i].addEventListener("click", function () {
		var clickedColor = this.style.background;
		if (colorPicked === clickedColor) {
			msgDisplay.textContent = "Correct";
			changeColor(colorPicked);
			h1.style.background = colorPicked;
			resetBtn.textContent = "Play Again ?";
		} else {
			this.style.background = "#232323";
			msgDisplay.textContent = "Try Again";
		}
	});
}
function changeColor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
	}
}
function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}
function generateRandomColor(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}