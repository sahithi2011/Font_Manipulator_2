function setup(){
    video = createCapture(VIDEO);
    video.size(500, 500);
    video.position(140,100);
 
    canvas = createCanvas(430, 430);
    canvas.position(660,150);
 
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
 }
 
 function modelLoaded(){
     console.log("System is initialized!");
 }
 
 function draw(){
     background('#ad4040');
 }
 
 function gotPoses(){
     if(results.length > 0){
         console.log(results);
     }
 }
