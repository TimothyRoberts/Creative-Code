function setup() {
	createCanvas(500, 500);
	colorMode(HSB, 100);
	noStroke();
	rectMode(CENTER);
}
function draw(){
	var scaledMouseX = mouseX/width * 100;
	background(scaledMouseX, 100, 100);

	fill(100 - scaledMouseX, 100, 100);
	rect(width/2, height/2, mouseX + 1, mouseX + 1);

}


function keyPressed() {
	if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}