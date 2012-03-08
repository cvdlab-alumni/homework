/* insert your code here */

p1 = new Point(x1, y1);
p2 = new Point(x2, y2);
p3 = new Point(x3, y3);

d = p1.getDistance(p2);

t = new Triangle(p1, p2, p3);

p = t.getPerimeter();
a = t.getArea();

