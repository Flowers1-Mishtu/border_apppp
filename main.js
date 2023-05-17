function preload()
{

}

function setup()
{
    canvas = createCanvas(300, 300)
    canvas.position(110, 300);
    video = createCapture(VIDEO);
    video.hide();

   

}

function draw()
{
    image(video, 0, 0, 300, 300);
    fill("pink")
    rect(1, 2, 20, 400);
    rect(279, 2, 20, 400);
    fill("blue")
    circle(1, 2, 100);
    circle(300, 2, 100);
    circle(1, 299, 100);
    circle(300, 299, 100);
    fill("yellow")
    circle(235, 2, 100);
    circle(160, 2, 100);
    circle(70, 2, 100);
    circle(235, 299, 100);
    circle(160, 299, 100);
    circle(70, 299, 100);
  
}

function take_snapshot()
{
    save('cool_border.png');
}


