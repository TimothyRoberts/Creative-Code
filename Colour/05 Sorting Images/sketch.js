//STEP 4 - IMAGE MANIPULATION

let colors = [];
let rectCount = 80;

function preload() {
	img = loadImage('images/chicken500.JPG');
	console.log(img);
}

function setup() {
	createCanvas(500, 500);
	noCursor();
	noLoop();
}

function draw() {
	img.loadPixels();
	let rectSize = width/rectCount;

	for (let gridY = 0; gridY < rectCount; gridY ++) {
		for (let gridX = 0; gridX < rectCount; gridX ++) {
			let px = int(gridX * rectSize);
			let py = int(gridY * rectSize);

			let i = (py * img.width + px) * 4;

			let c = color(img.pixels[i], img.pixels[i + 1], 
					img.pixels[i + 2], img.pixels[i + 3]);

			colors.push(c);
		}
	}

	let i = 0;
	for (let gridY = 0; gridY < rectCount; gridY ++) {
		for (let gridX = 0; gridX < rectCount; gridX ++) {
			//fills using color object calculated in colors array
			fill(colors[i]);
			//Draws rectangle at position based on rectCount
			rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
			i++;
		}
	}


}
