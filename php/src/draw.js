$(document).ready(() => {
    const canvas = $('#canvas')
    const ctx = canvas.get(0).getContext('2d')
    const gridDimension = 25
    const width = canvas.width()
    const height = canvas.height()

    ctx.strokeStyle = 'rgba(0,0,0,0.1)'
    for (let i = 0; i < gridDimension; i++) {
        x = Math.floor(i * width / gridDimension)
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()

        y = Math.floor(i * height / gridDimension)
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
    }
})