/*

Officer: 2366615
CaseNum: 101-3-77016947-2366615

Case 101 - The Case of Lina Lovelace
Stage 4 - The Plaza Hotel

Okay this place is more Lina’s style. Now’s our chance to find out the root of all
of this. Lets see who is Lina meeting.

Identify Lina by drawing a yellow filled rectangle with a blue outline.
She’s the woman in the red dress of course.

Identify the man with the monocle smoking the cigar magenta filled
rectangle with a green outline around him.

Identify the man reading the newspaper by drawing a magenta filled rectangle
with a yellow outline around him.

Identify the woman with the dog by drawing a blue filled rectangle with a
red outline around her. Make sure you include the dog too.

The rectangles should cover the targets as accurately as possible without
including anything else.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  rect()
  fill() Use only 255 or 0 for r,g,b values. Set alpha to 100 for some opacity.
	stroke() Use only 255 or 0 for r,g,b values.

*/

var img;

function preload()
{
	img = loadImage('img.jpg');
}

function setup()
{
	createCanvas(img.width,img.height);
	strokeWeight(2);
}

function draw()
{
	image(img,0,0);

	//Write your code below here ...
    // Lina by drawing a yellow filled rectangle with a blue outline.
    stroke(0, 0, 255)
    fill(255, 255, 0)
    rect(638, 69, 180, 345)
    
    
    // the man with the monocle smoking the cigar magenta filled
    // rectangle with a green outline around him.
    stroke(0, 255, 0)
    fill(255, 0, 255)
    rect(101, 202, 160, 210)
    
    
    
    // the man reading the newspaper by drawing a magenta filled rectangle
    // with a yellow outline around him.
    stroke(255, 255, 0)
    fill(255, 0, 255)
    rect(1227, 118, 150, 295)
    
    
    
    // the woman with the dog by drawing a blue filled rectangle with a
    // red outline around her. Make sure you include the dog too.
    stroke(255, 0, 0)
    fill(0, 0, 255)
    rect(1029, 48, 160, 355 )

}
