/*
The case of the Python Syndicate
Stage 2


Officer: 2366615
CaseNum: 301-1-45160238-2366615

- Word on the street is that there is a new gang in town - The Python Syndicate.
It seems my bones were correct on this one. I need you to organise the gang
around the suspected leader Rocky kray

- The variables for Rocky kray have been declared and
initialised.
- Modify the x and y parameters of each image command using these two variables
so the images maintain their correct positions their correct positions on the board.
- To do this you will need to combine add and subtract operators with variables
Rocky kray for for each parameter.
- Do not create any new variables
- Do not add any additional commands


*/

var photoBoard;
var bones_karpinski_img;
var cecil_karpinski_img;
var anna_karpinski_img;
var robbie_kray_img;
var rocky_kray_img;
var lina_lovelace_img;


var rocky_kray_x_pos = 408;
var rocky_kray_y_pos = 309;


function preload()
{
	photoBoard = loadImage('photoBoard.png');
	bones_karpinski_img = loadImage("karpinskiDog.png");
	cecil_karpinski_img = loadImage("karpinskiBros1.png");
	anna_karpinski_img = loadImage("karpinskiWoman.png");
	robbie_kray_img = loadImage("krayBrothers2.png");
	rocky_kray_img = loadImage("krayBrothers1.png");
	lina_lovelace_img = loadImage("lina.png");

}

function setup()
{
	createCanvas(photoBoard.width, photoBoard.height);
}

function draw()
{
	image(photoBoard, 0, 0);

	//And update these image commands with your x and y coordinates.
	image(rocky_kray_img, rocky_kray_x_pos, rocky_kray_y_pos);

	image(bones_karpinski_img, rocky_kray_x_pos - 293, rocky_kray_y_pos-269);
	image(cecil_karpinski_img, rocky_kray_x_pos, rocky_kray_y_pos-269);
	image(anna_karpinski_img, rocky_kray_x_pos+293, rocky_kray_y_pos-269);
	image(robbie_kray_img, rocky_kray_x_pos-293, rocky_kray_y_pos);
	image(lina_lovelace_img, rocky_kray_x_pos+293, rocky_kray_y_pos);

}