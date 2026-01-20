function setup()
{
	//create a large square canvas
	createCanvas(1070, 810);
}

function draw()
{

	//set the fill colour to red
	fill(255, 0, 0);

	//set a thick stroke weight for the black lines
	strokeWeight(30);

	//draw the red rectangle 
	rect(235, -15, 850, 600);

	//left white rectangles
	fill(255, 255, 255);
	rect(-15, -15, 250, 250);
	rect(-15, 260, 250, 330);

	//bottom-left blue rectangle
	fill(0, 0, 255);
	rect(-15, 585, 250, 300);

	//bottom rectangle
	fill(255, 255, 255);
	rect(230, 585, 700, 300);

	//bottom-right rectangle
	rect(930, 585, 200, 110);

	//bottom-right yellow rectangle
	fill(255, 255, 0)
	rect(930, 695, 200, 150);



}