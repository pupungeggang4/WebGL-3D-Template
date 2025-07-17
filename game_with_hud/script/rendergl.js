// 3D rendering functions.
class RenderGL {
    static renderCuboid(gl, glVar, camera, light, cuboid, mode, color, texImage) {
        // Mode 1: no light color, 2: no light texture, 3: light color, 4: light texture
        gl.uniform1i(glVar.location['u_mode_f'], mode)
        if (mode == 1 || mode == 3) {
            gl.uniform3f(glVar.location['u_color'], color[0], color[1], color[2])
        } else {
            gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texImage)
        }

        gl.uniform3f(glVar.location['u_m_pos'], cuboid.pos.x, cuboid.pos.y, cuboid.pos.z)
        gl.uniform3f(glVar.location['u_m_size'], cuboid.size.x, cuboid.size.y, cuboid.size.z)
        gl.uniform3f(glVar.location['u_m_rot'], cuboid.rot.x, cuboid.rot.y, cuboid.rot.z)
        gl.uniform3f(glVar.location['u_c_pos'], camera.pos.x, camera.pos.y, camera.pos.z)
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

    static renderCuboidEdge(gl, glVar, camera, cuboid, color) {
        gl.uniform1i(glVar.location['u_mode_f'], 1)
        gl.uniform3f(glVar.location['u_color'], color[0], color[1], color[2])

        gl.uniform3f(glVar.location['u_m_pos'], cuboid.pos.x, cuboid.pos.y, cuboid.pos.z)
        gl.uniform3f(glVar.location['u_m_size'], cuboid.size.x, cuboid.size.y, cuboid.size.z)
        gl.uniform3f(glVar.location['u_m_rot'], cuboid.rot.x, cuboid.rot.y, cuboid.rot.z)
        gl.uniform3f(glVar.location['u_c_pos'], camera.pos.x, camera.pos.y, camera.pos.z)
        gl.uniform4f(glVar.location['u_c_proj'], camera.fov, camera.asp, camera.near, camera.far)

        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.bCuboid)
        gl.vertexAttribPointer(glVar.location['a_position'], 3, gl.FLOAT, false, 8 * 4, 0 * 4)
        gl.vertexAttribPointer(glVar.location['a_texcoord'], 2, gl.FLOAT, false, 8 * 4, 3 * 4)
        gl.vertexAttribPointer(glVar.location['a_normal'], 3, gl.FLOAT, false, 8 * 4, 5 * 4)
        gl.enableVertexAttribArray(glVar.location['a_position'])
        gl.disableVertexAttribArray(glVar.location['a_texcoord'])
        gl.disableVertexAttribArray(glVar.location['a_normal'])
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, glVar.bCuboidIndexE)
        gl.drawElements(gl.LINES, 24, gl.UNSIGNED_SHORT, 0)
    }
}
