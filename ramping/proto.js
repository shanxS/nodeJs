var a = {
	x: 10,
	calculate: function(z) {
		return this.x + this.y + z;
	}
};

var b = {
	y: 20,
	__proto__: a
};

var c = {
	y: -10,
	__proto__: a
};

console.log(b.calculate(10));
console.log(c.calculate(10));