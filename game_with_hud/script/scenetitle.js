class SceneTitle {
    static loop(game) {
        SceneTitle.render(game)
    }

    static render(game) {
        RenderHUD.init(game.ctx)
        game.ctx.drawImage(Img.testImage, 0, 0)

        let gl = game.gl
        let glVar = game.glVar

        gl.clearColor(0.0, 0.0, 0.0, 1.0)
        gl.enable(gl.BLEND)
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
        gl.useProgram(glVar.program)

        gl.bindVertexArray(glVar.vao)
        gl.enableVertexAttribArray(glVar.location['a_position_hud'])
        gl.enableVertexAttribArray(glVar.location['a_texcoord'])
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, game.hud)
        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.bHUD)
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, glVar.bHUDIndex)
        gl.drawElements(gl.TRIANGLES, 0, gl.UNSIGNED_SHORT, 6)
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
