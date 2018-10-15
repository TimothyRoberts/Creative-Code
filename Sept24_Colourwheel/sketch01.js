'use strict'

var vx, vy, angleIncrement, segmentCount, radius;

    segmentCount = 5;

function setup() {
    createCanvas(800, 400);
    colorMode(HSB, 360, 100, 100);
    noStroke();
//    background(50);

}

function draw() {
    background(50, 100, 96);
    
    for(var j = 0; j < height; j+= 10){
        for(var i = 0; i < width; i += 10){
            fill(60, 100, 100);
            ellipse(i, j, 2, 2);
        }
    }
    
//    segmentCount = map(mouseY, 0, 800, 1, 360);
//    numberOfSteps = 50;
    angleIncrement = 360/segmentCount;
    radius = 200;
    
    beginShape(TRIANGLE_FAN);
    vertex(width/2, height/2);
        for(var angle = 0; angle < 360; angle += angleIncrement){
            vx = radius * cos(radians(angle)) + width/2;
            vy = radius * sin(radians(angle)) + height/2;
            vertex(vx, vy);
            fill(angle, 100, 100);
            
        }
    endShape();
    
}

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

