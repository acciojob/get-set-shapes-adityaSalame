//complete this code
class Rectangle {
	constructor(width,height){
		this.w=width;
		this.h=height;
	}

	get width(){
		return this.w;
	}

	get height(){
		return this.h;
	}

	getArea(){
		return (this.w*this.h);
	}
}

class Square extends Rectangle {
	this.w=this.h;
	getPerimeter(){
		return 4*this.w;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
