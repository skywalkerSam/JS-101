function setup()
{
	createCanvas(800, 600);
}



function draw()
{
    background(0);
    fill(255, 0, 0);
    strokeWidth(3);
    vertex(mouseX, mouseY);
}