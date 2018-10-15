function setup() {
	createCanvas(500, 500);
	colorMode(HSB, 100);
	noStroke();
	rectMode(CENTER);
}
function draw(){
	var scaledMouseX = mouseX/width * 100;
	background(scaledMouseX, 100, 100);

	fill(scaledMouseX -500, 100, 100);
	rect(width/2, height/2, 50, 50);

}	