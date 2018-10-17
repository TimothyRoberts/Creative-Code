var Xstep;
var Ystep;

function setup() {
	createCanvas(600, 400);
	colorMode(HSB, width, height, 100);
	noStroke();
}
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