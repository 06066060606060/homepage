var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


canvas.width = 1200;
canvas.height = 800;

var object = {
  height: 40,
  width: 40,
  x: 10,
  y: 10,
  color: "#FF0000",
};

var object1 = {
    height: 40,
    width: 40,
    x: 180,
    y: 180,
    color: "#FF0000",
  };

var dx = 0,
  dy = 0;
var speed = 150; // px per second

var activeKey = 0;
document.addEventListener("keydown", function (e) {
  if (activeKey == e.keyCode) return;
  activeKey = e.keyCode;

  //left
  if (e.keyCode == 37) {
    dx = -1;
  }
  //top
  else if (e.keyCode == 38) {
    dy = -1;
  }
  //right
  else if (e.keyCode == 39) {
    dx = 1;
  }
  //bottom
  else if (e.keyCode == 40) {
    dy = 1;
  }
});
document.addEventListener("keyup", function (e) {
  switch (e.keyCode) {
    case 37: // left
    case 39: // right
      dx = 0;
      break;

    case 38: // up
    case 40: // down
      dy = 0;
      break;
  }

  activeKey = 0;
});

function renderCanvas() {
  ctx.fillStyle = "#222222";
  ctx.fillRect(0, 0, 1200, 800);
}

function renderObject() {
  ctx.fillStyle = "#FF0000";
  ctx.fillRect(object.x, object.y, object.width, object.height);
}

function renderObject1() {
    ctx.fillStyle = "#444444";
    ctx.fillRect(object1.x, object1.y, object1.width, object1.height);
  }
  

function collision() {
  if (object.x < 10) {
    object.x = 10;
  } else if (object.x > 1150) {
    object.x = 1150;
  }
  if (object.y < 10) {
    object.y = 10;
  } else if (object.y > 750) {
    object.y = 750;
  }
}


function fun() {
  renderCanvas();

  object.x += (dx / 40) * speed;
  object.y += (dy / 40) * speed;
  renderObject();
  renderObject1();
  collision();


  requestAnimationFrame(fun);
}

requestAnimationFrame(fun);
