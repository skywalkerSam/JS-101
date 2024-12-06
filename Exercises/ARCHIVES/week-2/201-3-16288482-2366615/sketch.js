/*
201 - The case of Judge Hopper
Stage 4 - The warehouse

Officer: 2366615
CaseNum: 201-3-16288482-2366615

As you enter the ALGOL warehouse you are struck by the most horrendous stench - it’s not the fish. Lying amongst piles of fish carcasses you find the body of Judge Hopper. Gathering yourself together, you tie a handkerchief around your nose and mouth and quickly set about recording the evidence.

Draw around the Judge’s body ...


*/

var img;

function preload()
{
    img = loadImage('scene.png');
}

function setup()
{
    createCanvas(img.width,img.height);
}

function draw()
{

    image(img,0,0);
    stroke(255, 0, 0);
    strokeWeight(3);
    noFill();

    // write the code to draw around the Judge's body below
    beginShape();
    vertex(234, 180);
    vertex(235, 210);
    vertex(265, 225);
    vertex(330, 225);
    vertex(355, 215);
    vertex(399, 220);
    vertex(402, 235);
    vertex(386, 326);
    vertex(378, 475);
    vertex(389, 482);
    vertex(418, 463);
    vertex(420, 468);
    vertex(382, 515);
    vertex(399, 527);
    vertex(431, 500);
    vertex(449, 505);
    vertex(449, 448);
    vertex(458, 451);
    vertex(455, 497);
    vertex(453, 522);
    vertex(479, 516);
    vertex(489, 507);
    vertex(493, 437);
    vertex(520, 433);
    vertex(499, 315);
    vertex(509, 247);
    vertex(544, 260);
    vertex(562, 252);
    vertex(591, 195);
    vertex(586, 168);
    vertex(562, 177);
    vertex(566, 197);
    vertex(549, 227);
    vertex(522, 213);
    vertex(509, 195);
    vertex(513, 178);
    vertex(484, 156);
    vertex(467, 123);
    vertex(440, 128);
    vertex(415, 145);
    vertex(397, 130);
    vertex(351, 187);
    vertex(278, 197);
    vertex(247, 176);
    vertex(234, 180);

    endShape();
}
