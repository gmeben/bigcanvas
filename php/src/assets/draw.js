$(document).ready(() => {
    const canvas = $('#canvas')
    const ctx = canvas.get(0).getContext('2d')
    const gridDimension = 25
    const canvasWidth = canvas.width()
    const canvasHeight = canvas.height()
    const pixelSize = canvasWidth / gridDimension
    let selectedColor = '#ffc90e'
    let enabled = true

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
        if (!enabled) {
            return
        }
        let offsetX = e.offsetX
        let offsetY = e.offsetY

        if (e.buttons !== 1) {
            return
        }
        pixel = [Math.floor(offsetX / pixelSize), Math.floor(offsetY / pixelSize)]
        fillPixel(pixel)
    }

    function fillPixel(pixel) {
        ctx.fillStyle = selectedColor
        ctx.fillRect(pixel[0] * pixelSize, pixel[1] * pixelSize, pixelSize - 1, pixelSize - 1)
    }

    const pickr = Pickr.create({
        el: '#pickr',
        theme: 'classic', // or 'monolith', or 'nano'
    
        components: {
            opacity: true,
            hue: true,
        }
    });

    pickr.on('init', () => {
        pickr.setColor(selectedColor)
    })
    pickr.on('show', ()=> {
        enabled = false
    })
    pickr.on('hide', ()=> {
        setTimeout(() => {
            enabled = true
        }, 300)
    })
    pickr.on('change', () => {
        selectedColor = pickr.getColor().toHEXA().toString()
        pickr.setColor(selectedColor)
    })
})