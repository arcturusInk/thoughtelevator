var lines = []; // array of Line objects

function setup() {
	var canvas = createCanvas(windowWidth, windowHeight);
	canvas.parent("sketch-holder");
	// Create objects
	for (var i=0; i<50; i++) {
		lines.push(new Line());
	}
}

function draw() {
	background(255);
	for (var i=0; i<lines.length; i++) {
		lines[i].rotate();
		lines[i].display();
	}
}

//Lines class
function Line() { 
	//values for creating the lines
	this.x1 = random(0,300);
	this.x2 = random(0,300);
	this.y1 = random(0,300);
	this.y2 = random(0,300);
	
	//values for translating the lines
	this.x = random(width);
	this.y = random(height);

	this.speed = 0.001;
	this.rotation = 0;

	//how much each lines rotate for every time the draw function is called
	//in this instance, not using the normal rotate func given by p5
	//rotating at a speed of 0.003
	this.rotate = function() {
		this.rotation += this.speed;
	};

	//getting the lines organically from browser's values
	//rotating the lines around their midpoint
	this.display = function() {
		//the color of the lines
		stroke('#C0C0C0');
		push();
		//translate func determines around which point to rotate
		//making sure they translate somewhere within the screen
		translate(this.x, this.y);
		rotate(this.rotation);
		line(this.x1,this.x2, this.y1, this.y2);
		pop();
	};
}