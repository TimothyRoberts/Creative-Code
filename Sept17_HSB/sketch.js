function setup() {
	createCanvas(720, 720);
	colorMode(HSB, 100);
	noStroke();
}
function draw(){
	background(0, 100, 100);
	var numberOfColumns = 10;
	var numberOfRows = 10;
	var Xstep = width/numberOfColumns;
	var Ystep = height/numberOfRows;
	var incrementColor = 0;


	for(var Ygrid = 0; Ygrid < height; Ygrid += Ystep){
		for(var Xgrid = 0; Xgrid < width; Xgrid += Xstep){
			fill(incrementColor,incrementColor,100);
			rect(Xgrid, Ygrid, Xstep, Ystep);
			incrementColor ++;
		}
	}

}