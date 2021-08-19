function preload() {
    img = loadImage('data:image/jpeg;base64,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');
   }
   function setup() {
   canvas = createCanvas(550, 400);
   canvas.position(370, 125);
   }
   function draw() {
       image(img, 0, 0, 550, 400);
   }