# Colour Spectrum in a Grid

In this sketch we want to create a grid of rectangles where the hue increments from left to right, and our saturation increments from bottom to top.

 To do this, we should scale our colour hue to the canvas width, our saturation to the canvas height, and our brightness to 100. This scales our colour perfectly to the canvas dimensions.

```js
var Xstep;
var Ystep;

function setup() {
	createCanvas(600, 400);
	colorMode(HSB, width, height, 100);
	noStroke();
}
```

Xstep and Ystep will determine the height and width of the rectangles and are set to our mouseX and mouseY (+2 so they're not too small!) 

The nested for loop creates row after row of rectangles, making our grid shape. The higher Xstep (based on how far our mouseX is to the right), the less the loop will iterate therefore creating less rectangles in the x direction. Same idea goes for the y axis. 

The hue of the rectangles increments from left to right with Xstep too. The saturation begins fully-saturated, and decrements from top to bottom with Ystep

```js
function draw(){	
	Xstep = mouseX + 2;
	Ystep = mouseY + 2;

	for(var Ygrid = 0; Ygrid < height; Ygrid += Ystep){
		for(var Xgrid = 0; Xgrid < width; Xgrid += Xstep){
			fill(Xgrid, height - Ygrid, 100);
			rect(Xgrid, Ygrid, Xstep, Ystep);
		}
	}

}
```
