
let myGameCaracter
let myGameHouse
let myGameHouseDoor
let myGameEnemy


function startGame() {
    myGameCaracter = new component(20, 20, "blue", 320, 300);
    myGameHouse = new component(100, 100, "red", 290, 40);
    myGameHouseDoor = new component(20, 30, "black", 330, 110);
    myGameEnemy = new component(20, 20, "green", 500, 200);
    myGameArea.start();
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 700;
        this.canvas.height = 350;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
        this.interval = setInterval(updateGameArea, 20)
        window.addEventListener('keydown', function (e) {
            myGameArea.keys = (myGameArea.keys || []);
            myGameArea.keys[e.keyCode] = true;
          })
          window.addEventListener('keyup', function (e) {
            myGameArea.keys[e.keyCode] = false;
          })
    },
    clear : function(){
        this.context.clearRect(0, 0, this.canvas.width, this.canvas.height)
    },
    stop : function() {
        clearInterval(this.interval);
      }
    
}

function component(width, height, color, x, y){
    this.gamearea = myGameArea
    this.width = width
    this.height = height
    this.speedX = 0
    this.speedY = 0
    this.x = x
    this.y = y

    this.update = function(){
    ctx = myGameArea.context
    ctx.fillStyle = color
    ctx.fillRect(this.x, this.y, this.width, this.height)

    }
    this.newPos = function(){
        this.x += this.speedX
        this.y += this.speedY
    }

    this.crashWith = function(otherobj) {
        var myleft = this.x;
        var myright = this.x + (this.width);
        var mytop = this.y;
        var mybottom = this.y + (this.height);
        var otherleft = otherobj.x;
        var otherright = otherobj.x + (otherobj.width);
        var othertop = otherobj.y;
        var otherbottom = otherobj.y + (otherobj.height);
        var crash = true;
        if ((mybottom < othertop) ||
        (mytop > otherbottom) ||
        (myright < otherleft) ||
        (myleft > otherright)) {
          crash = false;
        }
        return crash;
      }
}

function updateGameArea(){
    if (myGameCaracter.crashWith(myGameEnemy)) {
        myGameArea.stop();
      } else {
          myGameArea.clear()
          myGameHouse.update();
          myGameHouseDoor.update()
          myGameEnemy.update()
          myGameCaracter.speedX = 0
          myGameCaracter.speedY = 0
          if (myGameArea.keys && myGameArea.keys[37]) {myGameCaracter.speedX = -2; }
          if (myGameArea.keys && myGameArea.keys[39]) {myGameCaracter.speedX = 2; }
          if (myGameArea.keys && myGameArea.keys[38]) {myGameCaracter.speedY = -2; }
          if (myGameArea.keys && myGameArea.keys[40]) {myGameCaracter.speedY = 2; }
          myGameCaracter.newPos();    
          myGameCaracter.update()
      }
    
}

