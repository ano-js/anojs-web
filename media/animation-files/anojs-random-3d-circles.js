let canvasDiv = document.querySelector("#anojs-random-3d-circles")

canvasDiv.innerHTML += "<canvas id='anojs-random-3d-circles-canvas'></canvas>"

let canvas = document.querySelector("#anojs-random-3d-circles-canvas")

let innerWidth = window.innerWidth
let innerHeight = window.innerHeight

canvas.width = innerWidth
canvas.height = innerHeight

let c = canvas.getContext("2d")

// Event Listeners
addEventListener("resize", () => {
  innerWidth = window.innerWidth
  innerHeight = window.innerHeight
})

class Ball {
  constructor(x, y, dx, dy, radius, color) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.color = color
  }

  draw() {
    c.fillStyle = this.color
    c.strokeStyle = "black"
    c.beginPath()
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
    c.stroke()
    c.fill()
    c.closePath()
  }

  update() {
    // if (this.x + this.radius + this.dx >= innerWidth || this.x + this.radius + this.dx <= 0) {
    //   this.dx = -this.dx
    // }
    //
    // if (this.y + this.radius + this.dy >= innerHeight || this.y + this.radius + this.dy <= 0) {
    //   this.dy = -this.dy
    // }

    this.x += this.dx
    this.y += this.dy
    this.draw()
  }
}

let balls = []

let init = () => {
  for (var i = 0; i < 200; i++) {
    let x = Math.random() * (innerWidth - 50) + 25
    let y = Math.random() * (innerHeight - 50) + 25
    let dx = (Math.random() - 0.5) * 10
    let dy = (Math.random() - 0.5) * 10
    let radius = 30
    let color = "lightblue"

    let ball = new Ball(x, y, dx, dy, radius, color)
    balls.push(ball)
  }
}

let animate = () => {
  requestAnimationFrame(animate)

  balls.forEach(ball => {
    ball.update()
  })
}

init()
animate()
