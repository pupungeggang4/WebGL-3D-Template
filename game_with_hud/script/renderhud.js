// HUD UI rendering function
class RenderHUD {
    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.lineWidth = 2
        ctx.strokeStyle = 'white'
        ctx.clearRect(0, 0, 1280, 720)
        ctx.fillStyle = 'black'
    }

    static drawImageUI(ctx, img, pos) {
        ctx.drawImage(img, pos[0], pos[1])
    }
}
