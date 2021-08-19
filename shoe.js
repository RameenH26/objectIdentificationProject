function preload() {
    img = loadImage('https://5.imimg.com/data5/ANDROID/Default/2020/10/RW/EB/KX/113109586/product-jpeg-500x500.jpg');
   }
   function setup() {
   canvas = createCanvas(550, 400);
   canvas.position(370, 125);
   }
   function draw() {
       image(img, 0, 0, 550, 400);
   }