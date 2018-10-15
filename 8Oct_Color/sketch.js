var colorsLeft = [];
var colorsRight = [];
var myColor;
var numOfCols;
var numOfRows = 10;
var tileWidth, tileHeight;
var interpolateShortest = 'true';

function setup() {
	createCanvas(800, 500);
	colorMode(HSB);
	shakeColors();
	// noLoop();
	noStroke();

}

function draw() {

	numOfCols = map(mouseX, 0, width, 1, 50);
	// numOfRows = mouseY;

	tileWidth = width/numOfCols;
	tileHeight = height/numOfRows;

	for(var gridY = 0; gridY < numOfRows; gridY ++) {

		for(var gridX = 0; gridX < numOfCols; gridX ++) {
			var amount = map(gridX,0,numOfCols,0,1);
			var startColor = colorsLeft[gridY];
			var endColor = colorsRight[gridY];

			fill(lerpColor(startColor, endColor, amount));

			// fill(colorsLeft[gridX]);
			rect(tileWidth * gridX, tileHeight * gridY, tileWidth, tileHeight);
		}

	}

}

function shakeColors() {
	for (var i = 0; i  < numOfRows; i++) {
		colorsLeft[i] = color(random(0, 255), random(0, 255), random(0, 255));
		colorsRight[i] = color(random(0, 255), random(0, 255), random(0, 255));
	}

	console.log(colorsLeft);

}