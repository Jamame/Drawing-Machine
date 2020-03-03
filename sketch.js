// drawing project

//changing color, maybe speed?
var clicked;
var c;

// for moving circle
var velx;
var vely;
var posx;
var posy;

// for randomness
var x;
var y;
var p;
var r;
var z;

var timer = 4;

function setup() {
  clicked = true;
  c = color(130, 130, 130);
  velx = 6;
  vely = 5;
  posx = 40;
  posy = 40;
  createCanvas(600, 600);
  background(0, 0, 0);
  //background(20, 100, 160);
// prints "The value of x is 10"
}


function draw() {
  x = random(0, 256);
  y = random(0, 256);
  r = random(-2, 3);
  z = random(-2, 3);
  p = random(0, 256)

  smooth();
  stroke(c);
  strokeWeight(5);
  fill(c);
  circle(posx,posy,10);
  //point(r, z);
  //point(x, y);
  //line(x, y, r, z);
  //line(y, x, z, r);
  randomColorChange();
  changeSpeed();
  moving();
  contact();
  outBounds();
  //print(velx);
  // print(vely);
  // print(posx);
   //print(posy);



  }


  function duplicate(){
    //lower bound included, upper excluded
    let randomCircle = random(1,3);
    let randomVel = random(1,2);
    for(let i = 0; i < randomCircle; i++){
      if(randomVel === 1){
        circle(posx, posy, 20);
      }else{
        circle(posx, posy, 20);
      }
    }
  }

  function randomColorChange(){

    if (frameCount % 60 === 0 && timer > 0) {
      timer --;
     }

    if (timer === 0){
      c = color(x, y, p);
      timer = 4;
    }
  }



  function limitSpeed(){
    if(velx > 30){
      velx -= 6;
    }

    if(velx < -30){
      velx += 6;
    }

    if(vely > 30){
      vely -= 5;
    }

    if(vely < -30){
      vely += 5;
    }
  }

  function changeSpeed(){
    limitSpeed();
    velx += r;
    vely += z;
  }

  function moving(){
    posx += velx;
    posy += vely;
  }

  function contact(){
    if(posx >= 590 || posx <= 10){
      velx = -velx;
    }

    if (posy >= 590 || posy <= 10){
      vely = -vely;
    }
  // save('dontsave.jpg');
    //duplicate()
    //c = color(x,y,z,200);
  }

  function outBounds(){
    if(posx >= 610 || posx <= -10){
      posx = 300;
    }

    if (posy >= 610 || posy <= -10){
      posy = 300;
    }
  }



  function mouseClicked() {
    //background(0,0,0);
    if(clicked){
      c = color(x, y, p);
    //  velx = 5;
    //  vely = 5;
      clicked = false;
    }else{
      c = color(p, x, y);
    //  velx = 0;
    //  vely = 0;
      clicked = true;
    }

}
