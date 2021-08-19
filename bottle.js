function preload() {
 img = loadImage('https://www.gannett-cdn.com/presto/2020/04/02/USAT/6e94ea0e-a80e-4269-b780-afa8e4db93ff-yeti-rambler-water-bottle.jpg');
}
function setup() {
canvas = createCanvas(550, 400);
canvas.position(370, 125);
}
function draw() {
    image(img, 0, 0, 550, 400);
}