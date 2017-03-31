function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
}

//random val between 0 and 255
var hexRandom = function(){
	return Math.floor(Math.random() * 255) + 1;
}
//set rbg values
var r = hexRandom();
var b = hexRandom();
var g = hexRandom();


//random number of shapes
//for each shape, 
	// random number between 3 and 12 - vertices [does this get better if we have more vertices]
	//random number between 0 and maxwidth of canvas - horizontal position
	//random number between 0 and maxheight of canvas - vertical position
	// random hex code - color of the shape



function draw() {
  background( r, b, g );
  // console.log( r, b, g ); - works now

  push();
  //triangle: 
  translate(width*0.2, height*0.5); //translate here works how you'd expect
  polygon(0, 0, 82, 3); //center at 0, 0; 82px wide, 3 sides
  pop();
  
  push();
  //20-gon
  translate(width*0.2, height*0.5);
  polygon(0, 0, 80, 20); 
  pop();
  
  push();
  //septagon
  translate(width*0.2, height*0.5);
  polygon(0, 0, 70, 7); 
  pop();
  //note to self: the later ones are added later, so they will overlay the earlier ones if they intersect. 

  push();
  irregular();
  
}


//regular polygon function - taken from p5js
function polygon(x, y, radius, npoints) {
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

//irregular polugon function: coming back to this
function irregular() {
	beginShape();
	vertex(20, 23); //x-coord and y-coord
	vertex(44, 288);
	vertex(40, 40);
	vertex(60, 40);
	vertex(60, 60);
	vertex(20, 60);
	endShape(CLOSE);

}