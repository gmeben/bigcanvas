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
    
        swatches: [
            'rgba(244, 67, 54, 1)',
            'rgba(233, 30, 99, 0.95)',
            'rgba(156, 39, 176, 0.9)',
            'rgba(103, 58, 183, 0.85)',
            'rgba(63, 81, 181, 0.8)',
            'rgba(33, 150, 243, 0.75)',
            'rgba(3, 169, 244, 0.7)',
            'rgba(0, 188, 212, 0.7)',
            'rgba(0, 150, 136, 0.75)',
            'rgba(76, 175, 80, 0.8)',
            'rgba(139, 195, 74, 0.85)',
            'rgba(205, 220, 57, 0.9)',
            'rgba(255, 235, 59, 0.95)',
            'rgba(255, 193, 7, 1)'
        ],
    
        components: {
    
            // Main components
            opacity: true,
            hue: true,
    
            // Input / output Options
            interaction: {
                hex: true,
                rgba: true,
                hsla: true,
                hsva: true,
                cmyk: true,
                input: true
            }
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