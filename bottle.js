status = "";
objects = [];
function preload() {
 img = loadImage('bottle.png');
}
function setup() {
canvas = createCanvas(500, 350);
canvas.position(400, 150);
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById('status').innerHTML = "Status : Detecting";
}
function draw() {
    image(img, 0, 0, 500, 350);
    if(status != "") {
        for(x = 0; x < objects.length; x++) {
            document.getElementById('status').innerHTML = "Status : Detected" ;
            document.getElementById('objectNum').innerHTML = "Objects Detected : " + objects.length;
            stroke('#00000');
            strokeWeight(1);
            percentage = floor(objects[x].confidence * 100);
            text(objects[x].label + " " + percentage + "%" , objects[x].x, objects[x].y + 45);
            noFill();
            strokeWeight(3);
            stroke("#557571");
            rect(objects[x].x, objects[x].y + 50, objects[x].width, objects[x].height);
        }
    }
}
function home() {
 location.href="index.html";
}

function modelLoaded() {
    console.log("model loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}
function gotResult(error, result) {
    if(error) {
        console.error();
    } 
        console.log(result);
        objects = result;
}