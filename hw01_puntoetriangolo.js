var punto = function (x , y) {
	
	this.x = x;
	this.y = y;
	
	this.getDistanza = function (p) {
		
		return Math.sqrt(Math.pow((p.x - this.x),2)+Math.pow((p.y - this.y),2));
		
	};
	
	this.toString = function () {
		return 'x:'+ this.x +' , y:'+ this.y;
		
	};
	
}


var triangolo = function (p1 , p2 , p3) {
	
	this.p1 = p1;
	this.p2 = p2;
	this.p3 = p3;
	
	this.getPerimetro = function () {
		return p1.getDistanza(p2) + p1.getDistanza(p3) + p2.getDistanza(p3);
		
	}
	
	this.getArea = function () {
		
		var p = this.getPerimetro() / 2;
		var a = p1.getDistanza(p2);
		var b = p1.getDistanza(p3);
		var c = p2.getDistanza(p3);
		
		return Math.sqrt(p * (p - a) * (p - b) * (p - c));
		
	}
	
}





