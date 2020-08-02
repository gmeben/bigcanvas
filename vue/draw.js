const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')
const gridSize = 25
const width = canvas.width
const height = canvas.height

ctx.strokeStyle = 'rgba(0,0,0,0.1)'
for (let i = 0; i < gridSize; ++i) {
    x = Math.floor(i * width / gridSize)
    ctx.beginPath()
    ctx.moveTo(x, 0)
    ctx.lineTo(x, height)
    ctx.stroke()

    y = Math.floor(i * height/ gridSize)
    ctx.beginPath()
    ctx.moveTo(0, y)
    ctx.lineTo(width, y)
    ctx.stroke()
}