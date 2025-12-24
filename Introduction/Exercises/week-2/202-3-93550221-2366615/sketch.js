/*

Officer: 2366615
CaseNum: 202-3-93550221-2366615

Case 202 - The case of Bob and Daisy - stage 4

Here’s the final letter from Daisy (aka. Woz). Decode it to uncover the
final details about Woz and Job’s dastardly plan.

Discover the hidden code by commenting out all text commands except
those which produce pink filled text with magenta outline in Ballpointprint font.
Only comment out text commands - leave fill & stroke, push and pop commands uncommented.

There are many possible ways of investigating this case, but you
should use ONLY the following commands:

  // comments are all that are needed for this case.
  Do NOT add any new lines of code.

*/

var letterFont;

function preload()
{
	Ballpointprint = loadFont('Ballpointprint.ttf');
	Melissa = loadFont('Melissa.otf');
	Diggity = loadFont('Diggity.ttf');
	RonsFont = loadFont('RonsFont.ttf');
}

function setup()
{
	createCanvas(581,460);
	textSize(28);
}

function draw()
{
	background(255);

	fill(0,255,255);
	stroke(255,0,0);
	textFont(Melissa);
	// text("more", 142,206);
	// text("so", 184,238);
	fill(255,192,203);
	textFont(RonsFont);
	// text("?", 532,115);
	push();
	fill(255,255,0);
	stroke(0,255,0);
	textFont(Melissa);
	// text("can", 383,147);
	pop();
	stroke(0,255,0);
	textFont(Ballpointprint);
	// text("sort", 157,115);
	push();
	textFont(Melissa);
	// text("delays.", 391,177);
	// text("ding", 134,84);
	// text("no", 55,177);
	pop();
	textFont(Diggity);
	// text("so,", 316,147);
	// text("Are", 15,84);
	stroke(255,0,255);
	textFont(Ballpointprint);
	text("ignore", 156,177);
	text("guard", 210,238);
	push();
	fill(255,255,0);
	textFont(Diggity);
	// text("secr", 371,206);
	pop();
	text("safe", 469,115);
	text("break", 42,115);
	fill(255,165,0);
	// text("I", 349,147);
	push();
	stroke(255,0,0);
	// text("our", 336,115);
	pop();
	textFont(Melissa);
	// text("cash.", 479,147);
	stroke(255,0,0);
	textFont(Diggity);
	// text("out.", 269,115);
	push();
	stroke(0,255,0);
	// text("take", 244,206);
	pop();
	textFont(RonsFont);
	// text("inual", 330,177);
	fill(255,192,203);
	stroke(0,255,0);
	// text("me", 170,84);
	stroke(0,0,255);
	textFont(Diggity);
	// text("money", 188,147);
	push();
	textFont(Ballpointprint);
	// text("Are", 21,147);
	pop();
	textFont(RonsFont);
	// text("silence.", 10,238);
	textFont(Ballpointprint);
	// text("much", 83,206);
	fill(0,255,255);
	stroke(0,255,0);
	// text("Perhaps", 228,84);
	push();
	textFont(Melissa);
	// text("?", 252,147);
	// text("how", 46,206);
	pop();
	// text("you", 60,84);
	// text("a", 17,115);
	push();
	fill(255,165,0);
	// text("?", 298,206);
	pop();
	textFont(RonsFont);
	// text("x", 81,350);
	// text("rling", 76,28);
	push();
	fill(255,165,0);
	stroke(255,0,0);
	textFont(Diggity);
	// text("ets,", 409,206);
	pop();
	textFont(Diggity);
	// text("I", 186,206);
	fill(255,255,0);
	textFont(RonsFont);
	// text("I", 526,147);
	fill(255,192,203);
	// text("da", 49,28);
	push();
	stroke(0,0,0);
	textFont(Diggity);
	// text("can", 13,177);
	pop();
	stroke(0,0,0);
	textFont(Ballpointprint);
	// text("You", 94,238);
	push();
	fill(0,255,255);
	textFont(Melissa);
	// text("sometimes.", 307,238);
	pop();
	textFont(Melissa);
	// text("?", 212,84);
	push();
	fill(255,165,0);
	textFont(Diggity);
	// text("Is", 313,115);
	// text("and", 114,115);
	pop();
	textFont(RonsFont);
	// text("away", 451,84);
	// text("we", 320,84);
	stroke(0,0,255);
	textFont(Melissa);
	// text("you", 74,147);
	fill(255,165,0);
	stroke(0,0,0);
	// text("should", 361,84);
	textFont(Ballpointprint);
	// text("Forever", 7,294);
	fill(255,255,0);
	stroke(255,0,255);
	textFont(Melissa);
	// text("avoi", 104,84);
	fill(255,192,203);
	textFont(Diggity);
	// text("this", 203,115);
	textFont(RonsFont);
	// text("My", 7,28);
	// text("I'm", 449,177);
	textFont(Ballpointprint);
	text("the", 453,206);
	push();
	fill(255,255,0);
	// text("not", 502,177);
	pop();
	stroke(0,0,0);
	textFont(Melissa);
	// text("yours,", 99,294);
	fill(255,165,0);
	textFont(RonsFont);
	// text("longer", 79,177);
	push();
	fill(0,255,255);
	// text("cont", 281,177);
	pop();
	fill(0,255,255);
	stroke(0,255,0);
	textFont(Melissa);
	// text("of", 164,147);
	fill(255,255,0);
	stroke(255,0,0);
	textFont(Ballpointprint);
	// text("Daisy", 7,350);
	// text("short", 106,147);
	push();
	stroke(0,0,0);
	// text("can", 200,206);
	pop();
	stroke(0,0,255);
	// text("send", 416,147);
	// text("ed", 263,238);
	fill(0,255,255);
	textFont(Melissa);
	// text("these", 231,177);
	textFont(Ballpointprint);
	// text("If", 268,147);
	push();
	stroke(255,0,0);
	textFont(Melissa);
	// text("sure", 7,206);
	pop();
	textFont(Diggity);
	// text("are", 142,238);
	fill(255,255,0);
	stroke(0,0,0);
	textFont(Melissa);
	// text("relationship", 375,115);
	// text("all", 247,115);
	fill(0,255,255);
	stroke(255,0,0);
	textFont(Ballpointprint);
	// text("go", 415,84);
	textFont(RonsFont);
	// text("The", 329,206);
	push();
	fill(255,255,0);
	stroke(0,255,0);
	textFont(Ballpointprint);
	// text("Bob,", 138,28);
	pop();
	fill(255,255,0);
	stroke(0,0,0);
	textFont(Ballpointprint);
	// text("for", 516,84);



}
