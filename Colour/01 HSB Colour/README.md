# Introducing HSB Colour

### Setting up HSB colour mode in p5.js

Until now, I have been working with the RGB colour mode which creates colour by mixing red, green, blue, and alpha values. The HSB colour mode instead uses hue, saturation, and brightness values. The parameters following HSB define the range of the hue, saturation and brightness (set from 0 - 100 in the following code).

```js
function setup() {
	createCanvas(500, 500);
	colorMode(HSB, 100, 100, 100);
	noStroke();
	rectMode(CENTER);
}
```

In the draw function, which loops while the sketch is running, scaledMouseX calculates the mouse X within a range of 100 (The same as what we defined our HSB range to be.) The background colour's hue values are then set to the scaled mouse X value 0 - 100.

Finally, a rectangle is drawn in the middle of the screen. It's colour is set to be the contrast of the background with values of 100 - 0. The rectangle's size is determined by the mouse X coordinates.

```js
function draw(){
	var scaledMouseX = mouseX/width * 100;
	background(scaledMouseX, 100, 100);

	fill(100 - scaledMouseX, 100, 100);
	rect(width/2, height/2, mouseX + 1, mouseX + 1);

}	
```

The function keyPressed() is launched whenever the keyboard is used. The code inside this function saves the current frame as a .png file if the key 's' is pressed.

```js
function keyPressed() {
	if (key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
}
```