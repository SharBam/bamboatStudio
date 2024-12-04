function setup() {
	createCanvas(windowWidth, windowHeight);
	background(255);
	frameRate(120);
}

function draw() {
	noStroke();
	fill(mouseX / 3, mouseX / 6, mouseY / 2, 229);
	circle(mouseX - 1, mouseY - 1, 12 * noise(frameCount / mouseX + mouseY));
}

function mousePressed() {
	background(0);
}

function mouseReleased() {
	background(255);
}
