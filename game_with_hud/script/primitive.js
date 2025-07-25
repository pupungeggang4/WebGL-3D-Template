// Handling primitives and shapes.
// 2D vector
class Vector2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

// 3D vector
class Vector3 {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }
}

// Cuboid3
class Cuboid3 {
    constructor(px, py, pz, sx, sy, sz, rx, ry, rz) {
        this.pos = new Vector3(px, py, pz)
        this.size = new Vector3(sx, sy, sz)
        this.rot = new Vector3(rx, ry, rz)
    }

    render(game, world, mode, color, texImage) {
        let gl = game.gl
        let glVar = game.glVar
        gl.uniform1i(glVar.location['u_mode_f'], mode)
        if (mode == 1 || mode == 3) {
            gl.uniform3f(glVar.location['u_color'], color[0], color[1], color[2])
        } else {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texImage)
        }

        gl.uniform3f(glVar.location['u_p_pos'], this.pos.x, this.pos.y, this.pos.z)
        gl.uniform3f(glVar.location['u_p_size'], this.size.x, this.size.y, this.size.z)
        gl.uniform3f(glVar.location['u_p_rot'], this.rot.x, this.rot.y, this.rot.z)
        gl.uniform3f(glVar.location['u_c_pos'], world.camera.pos.x, world.camera.pos.y, world.camera.pos.z)
        gl.uniform3f(glVar.location['u_c_rot'], world.camera.rot.x, world.camera.rot.y, world.camera.rot.z)
        gl.uniform4f(glVar.location['u_c_proj'], world.camera.fov, world.camera.asp, world.camera.near, world.camera.far)
        gl.uniform3f(glVar.location['u_light_d'], world.light.x, world.light.y, world.light.z)

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

    renderEdge(game, world, color) {
        let gl = game.gl
        let glVar = game.glVar
        gl.uniform1i(glVar.location['u_mode_f'], 1)
        gl.uniform3f(glVar.location['u_color'], color[0], color[1], color[2])

        gl.uniform3f(glVar.location['u_p_pos'], this.pos.x, this.pos.y, this.pos.z)
        gl.uniform3f(glVar.location['u_p_size'], this.size.x, this.size.y, this.size.z)
        gl.uniform3f(glVar.location['u_p_rot'], this.rot.x, this.rot.y, this.rot.z)
        gl.uniform3f(glVar.location['u_c_pos'], world.camera.pos.x, world.camera.pos.y, world.camera.pos.z)
        gl.uniform3f(glVar.location['u_c_rot'], world.camera.rot.x, world.camera.rot.y, world.camera.rot.z)
        gl.uniform4f(glVar.location['u_c_proj'], world.camera.fov, world.camera.asp, world.camera.near, world.camera.far)
        gl.uniform3f(glVar.location['u_light_d'], world.light.x, world.light.y, world.light.z)

        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.bCuboid)
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, glVar.bCuboidIndexF)
        gl.vertexAttribPointer(glVar.location['a_position'], 3, gl.FLOAT, false, 8 * 4, 0 * 4)
        gl.vertexAttribPointer(glVar.location['a_texcoord'], 2, gl.FLOAT, false, 8 * 4, 3 * 4)
        gl.vertexAttribPointer(glVar.location['a_normal'], 3, gl.FLOAT, false, 8 * 4, 5 * 4)

        gl.enableVertexAttribArray(glVar.location['a_position'])
        gl.disableVertexAttribArray(glVar.location['a_texcoord'])
        gl.disableVertexAttribArray(glVar.location['a_normal'])
        gl.drawElements(gl.LINES, 36, gl.UNSIGNED_SHORT, 0)
    }
}
