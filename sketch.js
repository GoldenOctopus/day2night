var b2w = 0;
var m2s = 255;
var r = 255
var g = 255;

function setup() {
  createCanvas (1000, 500)
}

function draw() {
  b2w = map (mouseX, 0, 1000, 0, 255)
  background (b2w)
  m2s = map (mouseX, 0, 1000, 255, 0)
  
  noStroke ()
  fill (255,255,m2s)
  ellipse (mouseX, 255, 50)
}