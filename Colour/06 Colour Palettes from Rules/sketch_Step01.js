//STEP 1 random colour array

const hValues = [];
const sValues = [];
const bValues = [];
rectCount = 10;

function setup() {
	createCanvas(500, 500);
	colorMode(HSB, 100);
	background(0);
	noLoop();
	noStroke();
}

function draw() {
	for (let i = 0; i < rectCount; i++) {
		if (i % 2) {
			hValues[i] = random(20, 40);
			sValues[i] = random(80, 100);
			bValues[i] = random(20, 90);
		} else {
			hValues[i] = random(20, 40);
			sValues[i] = 10;
			bValues[i] = 95;
		}

		fill(hValues[i], sValues[i], bValues[i]);
		rect(i * width/rectCount, 0, width/rectCount, height);
	}
}