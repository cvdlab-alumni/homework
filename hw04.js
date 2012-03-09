/* randomPoint */

var sqrt = Math.sqrt;
var pow = Math.pow;
var random = Math.random;

/* POINT */

var Point = function (x, y) {
  this.x = x || 0;
  this.y = y || 0;
}

Point.prototype.getDistance = function(point) {
  return sqrt(pow(point.y - this.y, 2) + pow(point.x - this.y, 2));
};

Point.prototype.translate = function(dx, dy) {
  this.x += dx;
  this.y += dy;

  return this;
};


/* TRIANGLE */

var Triangle = function (p1, p2, p3) {
  this.p1 = p1;
  this.p2 = p2;
  this.p3 = p3;

  this.l1 = p2.getDistance(p3);
  this.l2 = p3.getDistance(p1);
  this.l3 = p1.getDistance(p2);
}

Triangle.prototype.getPerimeter = function() {
  return this.l1 + this.l2 + this.l3;
};

Triangle.prototype.getArea = function() {
  var p = this.getPerimeter() / 2;

  return sqrt(p*(p - this.l1)*(p - this.l2)*(p - this.l3));
};


var randomPoint = function () {
  var x1 = random() * 200 - 100;
  var y1 = random() * 200 - 100;
  
  return new Point(x1, y1);
};

var p1 = randomPoint();
var p2 = randomPoint();
var p3 = randomPoint();
