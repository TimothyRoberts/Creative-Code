# Sorting Images

### Introduction
This exercise involves loading in the pixels from an image, then using a nested for loop to go across and down the canvas (80 iterations each) and retrieve colour information about the pixels in that position. We store then print those colour values as rectangles, giving us a pixelated version of the picture.

### Setup
First we prepare our colors array which we will later store color objects with the pixel information in. We decide on a rectCount which will determine the length of the loop and size of the rectangles. We then load in our image.

```js
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
```

### Draw
After loading in our pixels, we loop across and down the canvas 80 times. px and py find the target pixel coordinates, and i is a formula to get to that position in the pixel array. py * img.width finds the correct row, + px finds the correct place in that row. We multiply by 4 as there are 4 values per each pixel.

Then we simply push those four pixel values into our colour array as a colour object.

```js
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
```

From here we just need to display rectangles with the colour information we have stored in our colors array.

```js
	let i = 0;
	for (let gridY = 0; gridY < rectCount; gridY ++) {
		for (let gridX = 0; gridX < rectCount; gridX ++) {

			fill(colors[i]);
			rect(gridX * rectSize, gridY * rectSize, rectSize, rectSize);
            i++;
            
		}
	}


}
```