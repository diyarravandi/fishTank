background(3, 196, 255);
draw = function() {};

var centerX = 200;
var centerY = 100;
var bodyLength = 107;
var bodyHeight = 74;
var bodyColor = color(162+random(-100,100), 0, 255+random(-100,100));

var drawFish = function(centerX, centerY,bodyLength, bodyHeight) {
noStroke();
fill(random(219, 27), random(1,255), random(1,265));

// body
ellipse(centerX, centerY, bodyLength, bodyHeight);
fill(random(219, 27), random(1,255), random(1,265));

// tail
var tailWidth = bodyLength/6;
var tailHeight = bodyHeight/2;
triangle(centerX-bodyLength/2, centerY,
         centerX-bodyLength/2-tailWidth, centerY-tailHeight,
         centerX-bodyLength/2-tailWidth, centerY+tailHeight);
         
// eye
fill(0, 0, 0);
fill(random(219, 27), random(1,255), random(1,265));
ellipse(centerX+bodyLength/3, centerY, bodyHeight/5, bodyHeight/5);
};

drawFish(297,243,73,71);
drawFish(273,80,222,74);
drawFish(221,327,239,40);
drawFish(137,151,140,73);
drawFish(122,250,59,98);
