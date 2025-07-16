// 3D rendering functions.
class RenderGL {
    static renderCuboidTex(gl, glVar, camera, cuboid, texImage, border, light, lightDirection) {
        // Texture enabled
        if (light === false) {
            gl.uniform1i(glVar.location['u_mode_f'], 2)
        } else {
            gl.uniform1i(glVar.location['u_mode_f'], 4)
            gl.uniform3f(glVar.location['u_light_d'], 0.0, 0.0, -1.0)
        }
        gl.uniform3f(glVar.location['u_c_pos'], camera.pos.x, camera.pos.y, camera.pos.z)
        gl.uniform4f(glVar.location['u_c_proj'], camera.fov, camera.asp, camera.near, camera.far)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texImage)
        gl.uniform3f(glVar.location['u_m_pos'], cuboid.pos.x, cuboid.pos.y, cuboid.pos.z)
        gl.uniform3f(glVar.location['u_m_size'], cuboid.size.x, cuboid.size.y, cuboid.size.z)
        gl.uniform3f(glVar.location['u_m_rot'], cuboid.rot.x, cuboid.rot.y, cuboid.rot.z)

        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.bCuboid)
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, glVar.bCuboidIndexF)
        gl.vertexAttribPointer(glVar.location['a_position'], 3, gl.FLOAT, false, 8 * 4, 0 * 4)
        gl.vertexAttribPointer(glVar.location['a_texcoord'], 2, gl.FLOAT, false, 8 * 4, 3 * 4)
        gl.vertexAttribPointer(glVar.location['a_normal'], 3, gl.Float, false, 8 * 4, 6 * 4)

        gl.enableVertexAttribArray(glVar.location['a_position'])
        gl.enableVertexAttribArray(glVar.location['a_texcoord'])
        gl.enableVertexAttribArray(glVar.location['a_normal'])
        gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0)

        if (border === true) {
            gl.disableVertexAttribArray(glVar.location['a_texcoord'])
            gl.disableVertexAttribArray(glVar.location['a_normal'])
            gl.uniform1i(glVar.location['u_mode_f'], 1)
            gl.uniform3f(glVar.location['u_color'], 0.0, 0.0, 0.0)
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, glVar.bCuboidIndexE)
            gl.drawElements(gl.LINES, 24, gl.UNSIGNED_SHORT, 0)
        }
    }

    static renderCuboidColor(gl, glVar, camera, cuboid, color, border, light, lightDirection) {
        // Texture disabled
        if (light === false) {
            gl.uniform1i(glVar.location['u_mode_f'], 1)
        } else {
            gl.uniform1i(glVar.location['u_mode_f'], 3)
            gl.uniform3f(glVar.location['u_light_d'], 0.0, 0.0, -1.0)
        }
        gl.uniform3f(glVar.location['u_c_pos'], camera.pos.x, camera.pos.y, camera.pos.z)
        gl.uniform4f(glVar.location['u_c_proj'], camera.fov, camera.asp, camera.near, camera.far)
        gl.uniform3f(glVar.location['u_color'], color[0], color[1], color[2])
        gl.uniform3f(glVar.location['u_m_pos'], cuboid.pos.x, cuboid.pos.y, cuboid.pos.z)
        gl.uniform3f(glVar.location['u_m_size'], cuboid.size.x, cuboid.size.y, cuboid.size.z)
        gl.uniform3f(glVar.location['u_m_rot'], cuboid.rot.x, cuboid.rot.y, cuboid.rot.z)

        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.bCuboid)
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, glVar.bCuboidIndexF)
        gl.vertexAttribPointer(glVar.location['a_position'], 3, gl.FLOAT, false, 8 * 4, 0 * 4)
        gl.vertexAttribPointer(glVar.location['a_texcoord'], 2, gl.FLOAT, false, 8 * 4, 3 * 4)
        gl.vertexAttribPointer(glVar.location['a_normal'], 3, gl.Float, false, 8 * 4, 6 * 4)

        gl.enableVertexAttribArray(glVar.location['a_position'])
        gl.disableVertexAttribArray(glVar.location['a_texcoord'])
        gl.enableVertexAttribArray(glVar.location['a_normal'])
        gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0)

        if (border === true) {
            gl.disableVertexAttribArray(glVar.location['a_texcoord'])
            gl.disableVertexAttribArray(glVar.location['a_normal'])
            gl.uniform1i(glVar.location['u_mode_f'], 1)
            gl.uniform3f(glVar.location['u_color'], 0.0, 0.0, 0.0)
            gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, glVar.bCuboidIndexE)
            gl.drawElements(gl.LINES, 24, gl.UNSIGNED_SHORT, 0)
        }
    }
}
