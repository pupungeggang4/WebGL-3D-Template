class SceneTitle {
    static loop(game) {
        SceneTitle.render(game)
    }

    static render(game) {
        game.ctx.strokeRect(0, 0, 40, 40)
        game.ctx.drawImage(Img.testImage, 0, 0)
    }

    static mouseUp(game, pos, button) {

    }

    static mouseDown(game, pos, button) {

    }

    static keyDown(game, key) {

    }

    static keyUp(game, key) {

    }
}
