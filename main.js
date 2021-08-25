status = "";
sound = "";
object = [];
function preload() {
    sound = loadSound('pager.mp3');
}
function setup() {
canvas = createCanvas(400, 400);
canvas.position(440, 120);
sound.loop();
video = createCapture(VIDEO);
video.hide();
objectDetector = ml5.objectDetector('cocossd', modelLoaded);
document.getElementById('status').innerHTML = "Status : Looking for baby";
}

function draw() {
    image(video, 0, 0, 400, 400);
    if(status != "") {
        for(i = 0; i < object.length; i++) {
            r = random(255);
            g = random(255);
            b = random(255);

            if(object[i].label == "person") {
                sound.stop();
                document.getElementById('status').innerHTML  = "Status : Baby Found";
            } else{
                sound.play();
                document.getElementById('status').innerHTML = "Status : Baby Not Found";
            }

            stroke(r,g,b);
            strokeWeight(1);    
            percentage = floor(object[i].confidence * 100);
            text(object[i].label + " " + percentage + "%", object[i].x - 70, object[i].y - 15);
            noFill();
            strokeWeight(3);
            stroke(r,g,b);
            rect(object[i].x - 70, object[i].y - 10, object[i].width, object[i].height - 150);
        }
    }
}
function modelLoaded() {
    console.log("model loaded!");
    status = true;
    objectDetector.detect(video, gotResult);
}
function gotResult(error, result) {
if(error) {
    console.error();
} 
    console.log(result);
    object = result;
}