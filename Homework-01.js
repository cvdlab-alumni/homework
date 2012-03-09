function Point(x,y) {
	this.x = x || 0; // per dare valori di default con costruttore senza argomenti
	this.y = y || 0;
}


Point.prototype.toString = function() {
	return "x = " + this.x + " , y = " + this.y;
};


Point.prototype.getDistance = function(p2) {
	return Math.sqrt(Math.pow(this.x - p2.x,2) + Math.pow(this.y - p2.y,2));
};


Point.prototype.translate = function(dx,dy) {
	this.x += dx;
	this.y += dy;
	return this; // utile per il chaining
};


var randomPoint = function() {
	var x = Math.cos(Math.random() * Math.PI) * 100;
	var y = Math.cos(Math.random() * Math.PI) * 100;
	return new Point(x,y);
}


var randomPointAlternative = function() {
	var x = Math.random() * 200 - 100;
	var y = Math.random() * 200 - 100;
	return new Point(x,y);
}


var generatePoints = function(n) {
	var n = n || 1;
	var array = new Array(n);
	for (var i = 0; i < n; i++) {
		array[i] = randomPoint();
	}
	return array;
}


function Triangle(p1,p2,p3) {
	this.p1 = p1;
	this.p2 = p2;
	this.p3 = p3;
}


Triangle.prototype.toString = function() {
	return "A = (" + this.p1.x + " , " + this.p1.y + ") , " +
	"B = (" + this.p2.x + " , " + this.p2.y + ") , " +
	"C = (" + this.p3.x + " , " + this.p3.y + ")";
};


Triangle.prototype.getPerimeter = function() {
	var edge1 = this.p1.getDistance(this.p2);
	var edge2 = this.p1.getDistance(this.p3);
	var edge3 = this.p2.getDistance(this.p3);
	return edge1+edge2+edge3;
};


Triangle.prototype.getArea = function() {
	var edge1 = this.p1.getDistance(this.p2);
	var edge2 = this.p1.getDistance(this.p3);
	var edge3 = this.p2.getDistance(this.p3);
	var p = (edge1+edge2+edge3)/2;
	return Math.sqrt(p*(p-edge1)*(p-edge2)*(p-edge3));
};