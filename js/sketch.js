//setup function runs once at the start
function setup() {
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");
}
//draw function is a continous loop, runs from the start, at 60fps
function draw() {
    background(220); //light grey background

    fill(0, 0, 0); //setting fill to rgb value for white
    ellipse(600, 200, 200); //circle beinng drawn on our canvas
    
    fill(255, 16, 240)
    square(535,135,130)

    fill(0, 0, 0)
    square(550, 150, 100)



    fill(0)
    ellipse(600, 600, 200)


    fill(255, 0, 0)
    ellipse(600, 600, 170)

    fill(0)
    ellipse(600, 600, 140)


    fill(0)
    ellipse(300, 600, 200)
}