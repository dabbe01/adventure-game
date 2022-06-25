const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = 1024
canvas.height = 576

c.fillRect(0, 0, canvas.width, canvas.height)



class Sprite {
  constructor({position, velocity, color = 'blue', width, height}) {
    this.position = position
    this.velocity = velocity
    this.width = width 
    this.height = height
    this.color = color
  
  }

  draw(){
    c.fillStyle = this.color
    c.fillRect(this.position.x, this.position.y, this.width, this.height)
  }

  update(){
    this.draw()
    this.position.x += this.velocity.x
    this.position.y += this.velocity.y
    
   
  }

  }

const player = new Sprite({
  position: {
    x: 30,
    y: 30    
  },
  velocity: {
    x: 0,
    y: 0
  },
  width: 50,
  height: 50
  

})


const enemy = new Sprite({
  position: {
    x: 800,
    y: 350   
  },
  velocity: {
    x: 0,
    y: 0
  },
  width: 50,
  height: 50,
  color: 'red'
})

const wall = new Sprite({
  position: {
    x: 110,
    y: 0    
  },
  velocity: {
    x: 0,
    y: 0
  },
  width: 50,
  height: 300,
  color: 'white'
  

})
const wall2 = new Sprite({
  position: {
    x: 250,
    y: 278   
  },
  velocity: {
    x: 0,
    y: 0
  },
  width: 50,
  height: 300,
  color: 'white'
  

})




const keys = {
  a: {
    pressed: false
  },
  d: {
    pressed: false
  },
  w: {
    pressed: false
  },
  s: {
    pressed: false
  }
}

let lastKey

function animate(){
  window.requestAnimationFrame(animate)
  c.fillStyle = 'black'
  c.fillRect(0, 0, canvas.width, canvas.height)
  player.update()
  enemy.update()
  wall.update()
  wall2.update()
 

  player.velocity.x = 0
  player.velocity.y = 0
  if (keys.a.pressed && lastKey === 'a'){
    player.velocity.x = -1
  }else if (keys.d.pressed && lastKey === 'd'){
    player.velocity.x = 1
  }else if (keys.w.pressed && lastKey === 'w'){
    player.velocity.y = -1
  }else if (keys.s.pressed && lastKey === 's'){
    player.velocity.y = 1
  }

  if (player.position.x + player.width >= wall.position.x && 
    player.position.x <= wall.position.x + wall.width &&
    player.position.y + player.height >= wall.position.y &&
    player.position.y <= wall.position.y + wall.height
    ){
        wall.color = 'green'
    }else{
      wall.color = 'white'
    }

 
  // if (player.attackBox.position.x + player.attackBox.width >= enemy.position.x 
  //   && player.attackBox.position.x <= enemy.position.x + enemy.width
  //   && player.attackBox.position.y + player.attackBox.height >= enemy.position.y
  //   && player.attackBox.position.y <= enemy.position.y + enemy.height 
  //   && player.isAttacking
  
  //   ){
  //     player.isAttacking = false
  //     enemy.health -= 20
  //     document.querySelector('#enemyHealth').style.width = enemy.health + '%'
  //   console.log('test')
  // }

  // if (enemy.health <= 0 || player.health <= 0){
  //   document.querySelector('#displayText').innerHTML = 'You won!!'
  //   document.querySelector('#displayText').style.display = 'flex'
  //   enemy.position.x = -100
  // }
}

animate()

window.addEventListener('keydown', (event) =>{
  switch (event.key) {
    case 'd':
    keys.d.pressed = true
    lastKey = 'd'
    break
    case 'a':
      keys.a.pressed = true
      lastKey = 'a'
    break
    case 'w':
        keys.w.pressed = true
        lastKey = 'w'
    break
    case 's':
          keys.s.pressed = true
          lastKey = 's'
      break
   
    
  }
  
})

window.addEventListener('keyup', (event) =>{
  switch (event.key) {
    case 'd':
      keys.d.pressed = false
    break
    case 'a':
      keys.a.pressed = false
      break
     case 'w':
        keys.w.pressed = false
      break
      case 's':
        keys.s.pressed = false
      break
  }
  
})

