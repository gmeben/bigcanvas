$(document).ready(() => {
    const canvas = $('#bigcanvas')
    const ctx = canvas.get(0).getContext('2d')
    let pixelSize = 2

    const repeatX = 20
    const repeatY = 15
    const dimension = 25

    const width = dimension * repeatX * pixelSize
    const height = dimension * repeatY * pixelSize
    let selectedBox = null

    canvas.attr('width', width)
    canvas.attr('height', height)

    ctx.strokeStyle = 'rgba(0,0,0,0.25)'
    for (let i = 0; i < dimension * repeatX; i++) {
        if (i % dimension != 0) { 
            continue
        }
        x = i * pixelSize
        ctx.beginPath()
        ctx.moveTo(x, 0)
        ctx.lineTo(x, height)
        ctx.stroke()

        y = i * pixelSize
        ctx.beginPath()
        ctx.moveTo(0, y)
        ctx.lineTo(width, y)
        ctx.stroke()
    }

    $('#bigcanvas-wrapper').css({width: width + 2})

    canvas.on('mousemove', (e) => {
        let pixel = [
            Math.floor(e.offsetX / (pixelSize * dimension)), 
            Math.floor(e.offsetY / (pixelSize * dimension))
        ]
        if (pixel[0] < 0 
            || pixel[1] < 0 
            || pixel[0] >= repeatX 
            || pixel[1] >= repeatY) {
            return
        }

        if (!selectedBox) {
            selectedBox = $('<div id="selected-box"></div>')
            selectedBox.css({
                width: dimension * pixelSize - 2, 
                height: dimension * pixelSize - 2
            })
            $('#bigcanvas-wrapper').prepend(selectedBox)
        }
        selectedBox.css({
            left: pixel[0] * pixelSize * dimension + 1,
            top: pixel[1] * pixelSize * dimension
        });
    })
})