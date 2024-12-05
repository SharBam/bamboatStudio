function setup() {
	createCanvas(windowWidth, windowHeight);
  background(255, 0);
	textAlign(CENTER, CENTER);
		textSize(64);
}

function draw() {
      stroke(0);
			strokeWeight(0.5);
	fill(random(255, 255));
	if (mouseX > 0 && mouseY > 0) {
			text('Coming Soon', mouseX, mouseY);
	}

}

function mousePressed() {
	background(255);
}

function mouseReleased() {
	background(255);
}
