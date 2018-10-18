# Interpolating Colour Pallete

##### Introduction
In this example we want to create two columns of colour on the left and right of the canvas, and interpolate the colours from left to right, meaning we want to visualize the transition of colour from the left to right.

##### Setup
First we want to create two arrays for each column of colour on the left and right. numberOfCols will vary based on our mouseX coordinates which will be seen later on. Our rows will be set to 10.

```js
var colorsLeft = [];
var colorsRight = [];
var numOfCols;
var numOfRows = 10;
var tileWidth, tileHeight;

function setup() {
	createCanvas(800, 500);
	colorMode(HSB);
	shakeColors();
	noStroke();

}
```

##### Draw
Here we are mapping the mouseX to range from 1 - 50 and using that value as our number of columns. We then calculate the tile width based on that value (Our tile height will stay the same throughout).

```js
function draw() {

	numOfCols = map(mouseX, 0, width, 1, 50);

	tileWidth = width/numOfCols;
    tileHeight = height/numOfRows;
```

##### Nested loop
Now we draw out rows of rectangles using a nested loop. Start colour, end colour and amount are calculated for each column iteration, and are used as arguments to lerpColor which takes two colours and the amount (between 0 and 1) to interpolate them. The amount maps our current gridX value between 0 and 1. Finally a rectangle is drawn with this colour using tileWidth (based on mouseX) and tileHeight.

```js
	for(var gridY = 0; gridY < numOfRows; gridY ++) {

		for(var gridX = 0; gridX < numOfCols; gridX ++) {
			var amount = map(gridX,0,numOfCols,0,1);
			var startColor = colorsLeft[gridY];
			var endColor = colorsRight[gridY];

			fill(lerpColor(startColor, endColor, amount));
			rect(tileWidth * gridX, tileHeight * gridY, tileWidth, tileHeight);
		}

	}

}
```
The function shakeColors will change the colours in the left and right colour arrays when the mouse is released, causing our program to draw new colours and interpolations.

```js
function mouseReleased() {
  shakeColors();
}

function shakeColors() {
	for (var i = 0; i  < numOfRows; i++) {
		colorsLeft[i] = color(random(0, 255), random(0, 255), random(0, 255));
		colorsRight[i] = color(random(0, 255), random(0, 255), random(0, 255));
	}
}
```