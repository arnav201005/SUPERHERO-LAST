var canvas = new fabric.Canvas("mycanvas");

player_x=400;
player_y=400;

block_width=30;
block_height=30;

var player_object="";
var block_object="";

function  player_image() 
{
    fabric.Image.fromURL("player.png", function(Img) {
        player_object=Img;

        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);

        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);

    });
}

function  block_image(get_image) 
{
    fabric.Image.fromURL(get_image, function(Img) {
        block_object=Img;

        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);

        block_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_object);

    });
}
 window.addEventListener("keydown",my_keydown);

 function   my_keydown(e) {
   kp= e.keyCode;
   console.log(kp);
   if(kp == '84'){
       block_image('player.png');
       console.log("t")
   }

   if(kp == '68'){
    block_image('player.png');
    console.log("d")
}


if(kp == '76'){
    block_image('light_green.png');
    console.log("l")
}


if(kp == '71'){
    block_image('ground.png');
    console.log("g")
}


if(kp == '87'){
    block_image('player.png');
    console.log("w")
}


if(kp == '89'){
    block_image('player.png');
    console.log("y")
}


if(kp == '82'){
    block_image('roof.jpg');
    console.log("r")
}


if(kp == '67'){
    block_image('cloud.jpg');
    console.log("c")
}


if(kp == '85'){
    block_image('unique.png');
    console.log("u")
}


if(kp == '38'){
    up();
    console.log("up")

}


if(kp == '40'){
    down();
    console.log("down")
}

if(kp == '39'){
    right();
    console.log("right")
}

if(kp == '37'){
    left();
    console.log("left")
}

if(kp == '80' && e.shiftKey== true){
    block_width=block_width+10;
    block_height=block_height+10
    console.log("shift & p")
    document.getElementById("current_width").innerHTML= block_width;
    document.getElementById("current_height").innerHTML= block_height;
    

}

if(kp == '77' && e.shiftKey== true){
    block_width=block_width - 10;
    block_height=block_height - 10
    console.log("shift & m")
    document.getElementById("current_width").innerHTML= block_width;
    document.getElementById("current_height").innerHTML= block_height;
    

}

 }
 function up() {
    if (player_y>0){
        player_y=player_y-block_height;
        console.log(player_y);
        canvas.remove(player_object);
        player_image();
        
    }
 }
 
 function down() {
    if (player_y<500){
        player_y=player_y + block_height;
        console.log(player_y);
        canvas.remove(player_object);
        player_image();
        
    }
 }
 function left() {
    if (player_x>0){
        player_x=player_x - block_height;
        console.log(player_x);
        canvas.remove(player_object);
        player_image();
        
    }
 }
 function right() {
    if (player_x<800){
        player_x=player_x + block_height;
        console.log(player_x);
        canvas.remove(player_object);
        player_image();
        
    }
 }