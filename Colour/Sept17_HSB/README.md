# Introducing HSB Colour

###Setting up HSB colour mode in p5.js
```js
function setup() {
	createCanvas(500, 500);
	colorMode(HSB, 100, 100, 100);
	noStroke();
	rectMode(CENTER);
}
```
Until now, I have been working with the RGB colour mode which creates colour by mixing red, green, blue, and alpha values. The HSB colour mode instead uses hue, saturation, and brightness values. The parameters following HSB define the range of the hue, saturation and brightness.

```js
function draw(){
	var scaledMouseX = mouseX/width * 100;
	background(scaledMouseX, 100, 100);

	fill(scaledMouseX -500, 100, 100);
	rect(width/2, height/2, 50, 50);
}
```
In the draw function, which loops while the sketch is running, 
