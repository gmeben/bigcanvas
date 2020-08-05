$(document).ready(() => {
    const canvas = $('#canvas')
    const ctx = canvas.get(0).getContext('2d')
    const gridDimension = 25
    const canvasWidth = canvas.width()
    const canvasHeight = canvas.height()
    const pixelSize = canvasWidth / gridDimension

    ctx.strokeStyle = 'rgba(0,0,0,0.1)'
    for (let i = 0; i < gridDimension; i++) {
        x = Math.floor(i * canvasWidth / gridDimension)
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, canvasHeight)
        ctx.stroke()

        y = Math.floor(i * canvasHeight / gridDimension)
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(canvasWidth, y)
        ctx.stroke()
    }

    canvas.on('mousemove touchmove touchstart mousedown', mouseFill)
    function mouseFill(e) {
        let offsetX = e.offsetX
        let offsetY = e.offsetY

        pixel = [Math.floor(offsetX / pixelSize), Math.floor(offsetY / pixelSize)]
        fillPixel(pixel)
    }

    function fillPixel(pixel) {
        ctx.fillStyle = '#000000'
        ctx.fillRect(pixel[0] * pixelSize, pixel[1] * pixelSize, pixelSize - 1, pixelSize - 1)
    }
})