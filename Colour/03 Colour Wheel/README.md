# Colour Wheel

To create a colour wheel, we want to use the triangle fan shape to create the segments of the circle, incrementing the hue for each segment.

First we want to decide how many segments we want our circle to begin with and the radius of this colour wheel. We want our hue to be scaled to 360 (the degrees which form a circle.)

```js
var vx, vy, angleIncrement, segmentCount, radius;

segmentCount = 5;
radius = 200;

function setup() {
    createCanvas(600, 400);
    colorMode(HSB, 360, 100, 100);
    noStroke();

}

```
360 divided by our segmentCount will give us a value for our angle to increase by after each segment. We start our fan point in the middle, then since we know our radius (hypothenues) and angle, we can use cosine and sine to find our x and y points for the outer point in our triangle fan shape.

```js
function draw() {
    background(50, 0, 100);

    angleIncrement = 360/segmentCount;
    
    beginShape(TRIANGLE_FAN);
    vertex(width/2, height/2);

    for(var angle = 0; angle <= 360; angle += angleIncrement){
        vx = radius * cos(radians(angle)) + width/2;
        vy = radius * sin(radians(angle)) + height/2;
        vertex(vx, vy);
        fill(angle, 100, 100);
        
    }
    endShape();
    
}
```
Finally, we add a switch statement to increase or decrease the amount of segments in our wheel when a number on the keyboard is pressed. 

```js
function keyPressed(){
    if(key == 's' || key == 'S') saveCanvas(gd.timestamp(), 'png');
    
    switch(key) {
        case'1':
            segmentCount = 360;
            break;
        case'2':
            segmentCount = 45;
            break;
        case'3':
            segmentCount = 24;
            break;
        case'4':
            segmentCount = 12;
            break;
        case'5':
            segmentCount = '6';
            break;
    
    }
    
}


