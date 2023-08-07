//complete this code
class Rectangle {
	constructor(width,height){
		this.w=width;
		this.h=height;
		if(height==null) this.h=width;
	}

	get width(){
		return this.w;
	}

	set height(val){
		this.h=val;
	}

	get height(){
		return this.h;
	}

	getArea(){
		return (this.w*this.h);
	}
}

class Square extends Rectangle {
	
	getPerimeter(){
		return 4*this.w;
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
