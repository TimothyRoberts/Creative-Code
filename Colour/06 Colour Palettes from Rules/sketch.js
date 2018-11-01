const hValues = [];
const sValues = [];
const bValues = [];
const rectWidthSizes = [];
let rectCount = 15;
let rectPosition = 0;
let rectWidthTotal = 0; //adds all rect width sizes 
let mappedWidth = 0;

function setup() {
	createCanvas(windowWidth,windowHeight);
	colorMode(HSB, 100);
	background(0);
	noLoop();
	noStroke();
}

function draw() {
	for (let i = 0; i < rectCount; i++) {
		if (i % 2) {
			hValues[i] = random(0, 5);
			sValues[i] = random(80, 100);
			bValues[i] = random(20, 90);
		} else {
			hValues[i] = random(10, 15);
			sValues[i] = 40;
			bValues[i] = 95;
		}

		rectWidthSizes[i] = random(20, 50);
	}

	//calculate total for random rect width sizes (between 20 - 50 each) 
	for (let i = 0; i < rectWidthSizes.length; i++) {
		rectWidthTotal += rectWidthSizes[i];
	}

	//map random width to canvas width
	for (let i = 0; i < rectWidthSizes.length; i++) {
		mappedWidth = map(rectWidthSizes[i], 0, rectWidthTotal, 0, width);
		fill(hValues[i], sValues[i], bValues[i]);
		rect(rectPosition, 0, mappedWidth, height);
		

		rectPosition += mappedWidth;

	}


}