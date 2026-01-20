/*
The case of the Python Syndicate
Stage 3


Officer: 2366615
CaseNum: 301-2-94228534-2366615

Right kid let’s work out which of our ‘friends’ is connected to the syndicate.

- An object for Countess hamilton has been declared and initialised
- Modify the x and y parameters of each image command using the x and y
properties from the Countess hamilton object so the images remain at their correct
positions on the board.
- To do this you will need to combine add and subtract operators with the
relevant property for each parameter



*/

var photoBoard;
var robbieKrayImage;
var cecilKarpinskiImage;
var linaLovelaceImage;
var countessHamiltonImage;
var annaKarpinskiImage;
var pawelKarpinskiImage;

var countessHamiltonObj;




function preload()
{
	photoBoard = loadImage('photoBoard.png');
	robbieKrayImage = loadImage("krayBrothers2.png");
	cecilKarpinskiImage = loadImage("karpinskiBros1.png");
	linaLovelaceImage = loadImage("lina.png");
	countessHamiltonImage = loadImage("countessHamilton.png");
	annaKarpinskiImage = loadImage("karpinskiWoman.png");
	pawelKarpinskiImage = loadImage("karpinskiBros2.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	countessHamiltonObj = {
		x: 115,
		y: 309,
		image: countessHamiltonImage
	};
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(countessHamiltonObj.image, countessHamiltonObj.x, countessHamiltonObj.y);

	image(robbieKrayImage, countessHamiltonObj.x, countessHamiltonObj.y-269);
	image(cecilKarpinskiImage, countessHamiltonObj.x+293, countessHamiltonObj.y-269);
	image(linaLovelaceImage, countessHamiltonObj.x+586, countessHamiltonObj.y-269);
	image(annaKarpinskiImage, countessHamiltonObj.x+293, countessHamiltonObj.y);
	image(pawelKarpinskiImage, countessHamiltonObj.x+586, countessHamiltonObj.y);

}