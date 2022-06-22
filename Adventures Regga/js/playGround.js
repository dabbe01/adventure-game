
let myGameCaracter


function startGame() {
    myGameArea.start();
    myGameCaracter = new component(30, 30, "red", 10, 120)
}

var myGameArea = {
    canvas : document.createElement("canvas"),
    start : function() {
        this.canvas.width = 800;
        this.canvas.height = 400;
        this.context = this.canvas.getContext("2d");
        document.body.insertBefore(this.canvas, document.body.childNodes[0]);
    }
}

function component(width, height, color, x, y){
this.width = width
this.height = height
this.x = x
this.y = y
ctx = myGameArea.context
ctx.fillstyle = color
ctx.fillRect(this.x, this.y, this.width, this.height)

}