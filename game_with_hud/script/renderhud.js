// HUD UI rendering function
class RenderHUD {
    // Initializing 2D HUD canvas.
    static init(ctx) {
        ctx.font = '32px neodgm'
        ctx.textAlign = 'left'
        ctx.textBaseline = 'top'
        ctx.lineWidth = 2
        ctx.strokeStyle = 'white'
        ctx.clearRect(0, 0, 1280, 720)
        ctx.fillStyle = 'black'
    }

    // Filling rect on 2D HUD.
    static fillRectUI(ctx, rect) {
        ctx.fillRect(rect[0], rect[1], rect[2], rect[3])
    }

    // Stroking rect on 2D HUD.
    static strokeRectUI(ctx, rect) {
        ctx.strokeRect(rect[0], rect[1], rect[2], rect[3])
    }

    // Filling text on 2D HUD.
    static fillTextUI(ctx, text, pos) {
        ctx.fillText(text, pos[0], pos[1])
    }

    // Drawing image on 2D HUD.
    static drawImageUI(ctx, img, pos) {
        ctx.drawImage(img, pos[0], pos[1])
    }
}
