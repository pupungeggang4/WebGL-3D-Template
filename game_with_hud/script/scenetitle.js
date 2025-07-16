class SceneTitle {
    static loop(game) {
        SceneTitle.render(game)
    }

    static render(game) {
        // Drawing HUD
        RenderHUD.init(game.ctx)
        game.ctx.fillStyle = 'white'
        RenderHUD.fillRectUI(game.ctx, UI.title.boxTest)
        game.ctx.fillStyle = 'black'
        RenderHUD.fillTextUI(game.ctx, 'This is UI.', UI.title.textTest)
        RenderHUD.drawImageUI(game.ctx, Img.testImage, UI.title.imgTest)

        let gl = game.gl
        let glVar = game.glVar

        gl.clearColor(0.0, 0.0, 0.0, 1.0)
        gl.enable(gl.BLEND)
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA)
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT)
        gl.lineWidth(2)
        gl.useProgram(glVar.program)
        gl.bindVertexArray(glVar.vao)

        // Rendering 3D world.
        gl.enable(gl.DEPTH_TEST)
        gl.uniform1i(glVar.location['u_mode_v'], 1)
        game.world.render(game)

        // Rendering 2D UI.
        gl.disable(gl.DEPTH_TEST)
        gl.uniform1i(glVar.location['u_mode_v'], 0)
        gl.uniform1i(glVar.location['u_mode_f'], 0)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, game.hud)
        
        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.bHUD)
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, glVar.bHUDIndex)
        gl.vertexAttribPointer(glVar.location['a_position'], 2, gl.FLOAT, false, 4 * 4, 0 * 4)
        gl.vertexAttribPointer(glVar.location['a_texcoord'], 2, gl.FLOAT, false, 4 * 4, 2 * 4)

        gl.enableVertexAttribArray(glVar.location['a_position'])
        gl.enableVertexAttribArray(glVar.location['a_texcoord'])
        gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0)
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
