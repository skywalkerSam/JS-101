/*
The case of the Python Syndicate
Stage 4

Officer: 2366615
CaseNum: 301-3-36821890-2366615

To really crack the Python Syndicate we need to go in deep. I want to understand
all the connections. I have the data but it’s a mess and I need you to sort it out.

Organise each syndicate member into an object. I’ve done one for you as an example.
Be sure to replicate the naming conventions for your own objects.
Use image command together with the objects you created to organise the mugshots.

- Once you have done this you can comment out or delete the old variables.

*/

var photoBoard;
var cecil_karpinski_image;
var robbie_kray_image;
var lina_lovelace_image;
var countess_hamilton_image;
var rocky_kray_image;
var anna_karpinski_image;

var rocky_kray_obj;


//declare your new objects below


var cecil_karpinski_coordinate_x = 115;
var cecil_karpinski_coordinate_y = 40;
var robbie_kray_coordinate_x = 408;
var robbie_kray_coordinate_y = 40;
var lina_lovelace_coordinate_x = 701;
var lina_lovelace_coordinate_y = 40;
var countess_hamilton_coordinate_x = 115;
var countess_hamilton_coordinate_y = 309;
var anna_karpinski_coordinate_x = 701;
var anna_karpinski_coordinate_y = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	cecil_karpinski_image = loadImage("karpinskiBros1.png");
	robbie_kray_image = loadImage("krayBrothers2.png");
	lina_lovelace_image = loadImage("lina.png");
	countess_hamilton_image = loadImage("countessHamilton.png");
	rocky_kray_image = loadImage("krayBrothers1.png");
	anna_karpinski_image = loadImage("karpinskiWoman.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
	rocky_kray_obj = {
		x: 408,
		y: 309,
		image: rocky_kray_image
	};



	//define your new objects below
	anna_karpinski_obj = {
		x: 701,
		y: 309,
		image: anna_karpinski_image
	};

	cecil_karpinski_obj = {
		x: 115,
		y: 40,
		image: cecil_karpinski_image
	};

	robbie_kray_obj = {
		x: 408,
		y: 40,
		image: robbie_kray_image
	};

	lina_lovelace_obj = {
		x: 701,
		y: 40,
		image: lina_lovelace_image
	};

	countess_hamilton_obj = {
		x: 115,
		y: 309,
		image: countess_hamilton_image
	};

}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(cecil_karpinski_obj.image, cecil_karpinski_obj.x, cecil_karpinski_obj.y);

	image(robbie_kray_obj.image, robbie_kray_obj.x, robbie_kray_obj.y);

	image(lina_lovelace_obj.image, lina_lovelace_obj.x, lina_lovelace_obj.y);

	image(countess_hamilton_obj.image, countess_hamilton_obj.x, countess_hamilton_obj.y);

	image(rocky_kray_obj.image, rocky_kray_obj.x, rocky_kray_obj.y);

	image(anna_karpinski_obj.image, anna_karpinski_obj.x, anna_karpinski_obj.y);


}