status = "";

function setup(){
    canvas = createCanvas(500,400);
    canvas.center();
    video = createVideo(VIDEO);
    video.hide();
}

function start(){
   objectDetection = ml5.objectDetector('cocossd', modelLoaded);
   document.getElementById("status").innerHTML = "Status: Detecting Objects";
   value = getElementById("objectName").value;
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
}

function draw(){
    image(video,0,0,500,400);
}