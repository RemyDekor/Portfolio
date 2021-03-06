var logo = [];
var rdmLogo;
var lastRdmLogo = [];
var visible;
var lightOn;
var animate;
var y;
var vel;
var acc;
var t;
var canvasListener;
var buttonListener;
var cube;

function preload() {
  for(var i = 0 ; i <= 4   ; i++) {
    logo[i] = loadImage("images/logos/logo" + nf(i) + ".png");
    console.log("loaded : logo" + nf(i) + ".png");
  }
}

function rollLogo() { 
  rdmLogo = logo[floor(random(4.999))];

  for (i = 0 ; i <= 3 ; i++) {
    while (rdmLogo === lastRdmLogo[i]) {
      rdmLogo = logo[floor(random(4.999))];
    }
  }

 lastRdmLogo[0] = lastRdmLogo[1];
 lastRdmLogo[1] = lastRdmLogo[2];
 lastRdmLogo[2] = lastRdmLogo[3];
 lastRdmLogo[3] = rdmLogo;

 //Penser à faire MIEUX un Array avec l'historique des Logo affichés
 //pour éviter d'avoir les même logos dans un intervalle de deux roll
}

function setup(){
  var canvas = createCanvas(275, 340, WEBGL);
  canvas.parent('logo');

  buttonListenerDesktop = select('#thisdesktop');
  buttonListenerTablet = select('#thistablet');
  // canvasListener = select('canvas');
  rectListener = select('#rectListener');

  buttonListenerDesktop.mousePressed(myFunction);
  buttonListenerTablet.mousePressed(myFunction);
  // canvasListener.mousePressed(myFunction);
  rectListener.mousePressed(myFunction);


  y = 0;
  vel = 0;
  acc = 0.9;
  t = 0;
  visible = -1; // -1 = non visible, 0 = visible
  animate = false;

  clear();
  background(237);
  rollLogo();

  /*CODE TO MAKE THE CUBE FALL FROM THE SKY AT OPENING*/
    y = -285;
    t = 190;
    myFunction();
    rdmX = -2;
    rdmY = -2;
    rdmZ = 1.5;
  /*****************************************************/

}

function draw(){
  clear();
  background(237);
  ambientMaterial(0);
  ambientLight(21,16,15);
  directionalLight(90, 100, 115, -0.8, 1, -0.1);
  directionalLight(115, 100, 90, 0.5, 0.5, -0.1);

  roll();

  //rotateX(frameCount *0.01);
  //rotateY(frameCount *0.02);
  //rotateZ(frameCount *0.015);
    displayBox();
}

function myFunction() {
  animate = true;
  vel = -20;
  if (t<=60){
    t += 150;
  }else{
    t += 20;
  }

  rollLogo();

  rdm_X = round(random(-1.9,1.9));
  rdmX = rdm_X >= 0 ? rdm_X + 0.5 : rdm_X -0.5;
  rdmY = random(-2.4,2.4);
  rdmZ = random(-2.4,2.4);
}

function displayBox() {

  push();
  box(136);
  pop();

  push();
  translate(0, 0, 68);
  plane(136, 136);


  if (t <= 70) {
    visible = 1;
  }else{
    visible = -1;
  }


  translate(0, 0, visible)
  specularMaterial(250,0,0,200);
  texture(rdmLogo);
  ambientLight(255-(t*3.5));
  plane(136, 136);
  pop();
}

function roll() {
  if (animate == true){
    translate(0, y, 0);
    y += vel;
    vel += acc;
    //console.log(vel);
    if (y >= 1) {
      y = 0;
      vel = -vel*0.75 + 1.6;
    }
    if (abs(y) <= 1 && abs(vel) <= 1 && t <=2) {
      y = 0;
      vel = 0;
      //console.log(t);
      t=0;
      animate = false;
    }


    rectListener.style("top", String(82+y)+"px");

    rotateX(Math.easeInCubic(t,0,6,160)*rdmX);
    rotateY(Math.easeInCubic(t,0,6,160)*rdmY);
    rotateZ(Math.easeInCubic(t,0,6,160)*rdmZ);


    if (t > 0){
      t--;
    }
  }
  //console.log(animate);
}

Math.easeInCubic = function (t, b, c, d) {
	t /= d;
	return c*t*t*t + b;
};
