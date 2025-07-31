class ColorCuboid3 {
    constructor(cuboid, color) {
        this.cuboid = cuboid
        this.renderMode = 3
        this.color = color
        this.texImage = null
    }

    render(game, camera, light) {
        let gl = game.gl
        let glVar = game.glVar

        gl.uniform1i(glVar.location['u_mode_v'], 1)
        gl.uniform1i(glVar.location['u_mode_f'], this.renderMode)
        if (this.renderMode == 1 || this.renderMode == 3) {
            gl.uniform3f(glVar.location['u_color'], this.color[0], this.color[1], this.color[2])
        } else {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texImage)
        }

        gl.uniform3f(glVar.location['u_m_pos'], this.cuboid.pos.x, this.cuboid.pos.y, this.cuboid.pos.z)
        gl.uniform3f(glVar.location['u_m_size'], this.cuboid.size.x, this.cuboid.size.y, this.cuboid.size.z)
        gl.uniform3f(glVar.location['u_m_rot'], this.cuboid.rot.x, this.cuboid.rot.y, this.cuboid.rot.z)
        gl.uniform3f(glVar.location['u_c_pos'], camera.pos.x, camera.pos.y, camera.pos.z)
        gl.uniform3f(glVar.location['u_c_rot'], camera.rot.x, camera.rot.y, camera.rot.z)
        gl.uniform4f(glVar.location['u_c_proj'], camera.fov, camera.asp, camera.near, camera.far)
        gl.uniform3f(glVar.location['u_light_d'], light.x, light.y, light.z)

        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.bCuboid)
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, glVar.bCuboidIndexF)
        gl.vertexAttribPointer(glVar.location['a_position'], 3, gl.FLOAT, false, 8 * 4, 0 * 4)
        gl.vertexAttribPointer(glVar.location['a_texcoord'], 2, gl.FLOAT, false, 8 * 4, 3 * 4)
        gl.vertexAttribPointer(glVar.location['a_normal'], 3, gl.FLOAT, false, 8 * 4, 5 * 4)

        gl.enableVertexAttribArray(glVar.location['a_position'])
        gl.enableVertexAttribArray(glVar.location['a_texcoord'])
        gl.enableVertexAttribArray(glVar.location['a_normal'])
        gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0)
    }
}
