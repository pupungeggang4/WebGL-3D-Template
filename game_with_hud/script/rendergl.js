// 3D rendering functions.
class RenderGL {
    static renderCuboidTex(gl, glVar, camera, cuboid, texImage) {
        // Texture enabled
        gl.uniform1i(glVar.location['u_mode_f'], 2)
        gl.uniform3f(glVar.location['u_c_pos'], camera.pos.x, camera.pos.y, camera.pos.z)
        gl.uniform4f(glVar.location['u_c_proj'], camera.fov, camera.asp, camera.near, camera.far)
        gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texImage)
        gl.uniform3f(glVar.location['u_m_pos'], cuboid.pos.x, cuboid.pos.y, cuboid.pos.z)
        gl.uniform3f(glVar.location['u_m_size'], cuboid.size.x, cuboid.size.y, cuboid.size.z)
        gl.uniform3f(glVar.location['u_m_rot'], cuboid.rot.x, cuboid.rot.y, cuboid.rot.z)

        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.bCuboid)
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, glVar.bCuboidIndexF)
        gl.vertexAttribPointer(glVar.location['a_position'], 3, gl.FLOAT, false, 5 * 4, 0 * 4)
        gl.vertexAttribPointer(glVar.location['a_texcoord'], 2, gl.FLOAT, false, 5 * 4, 3 * 4)

        gl.enableVertexAttribArray(glVar.location['a_position'])
        gl.enableVertexAttribArray(glVar.location['a_texcoord'])
        gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0)
    }

    static renderCuboidColor(gl, glVar, camera, cuboid, color) {
        // Texture disabled
        gl.uniform1i(glVar.location['u_mode_f'], 1)
        gl.uniform3f(glVar.location['u_c_pos'], camera.pos.x, camera.pos.y, camera.pos.z)
        gl.uniform4f(glVar.location['u_c_proj'], camera.fov, camera.asp, camera.near, camera.far)
        gl.uniform3f(glVar.location['u_color'], color[0], color[1], color[2])
        gl.uniform3f(glVar.location['u_m_pos'], cuboid.pos.x, cuboid.pos.y, cuboid.pos.z)
        gl.uniform3f(glVar.location['u_m_size'], cuboid.size.x, cuboid.size.y, cuboid.size.z)
        gl.uniform3f(glVar.location['u_m_rot'], cuboid.rot.x, cuboid.rot.y, cuboid.rot.z)

        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.bCuboid)
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, glVar.bCuboidIndexF)
        gl.vertexAttribPointer(glVar.location['a_position'], 3, gl.FLOAT, false, 5 * 4, 0 * 4)
        //gl.bindBuffer(gl.ARRAY_BUFFER, glVar.bCuboidTex)
        //gl.vertexAttribPointer(glVar.location['a_texcoord'], 2, gl.FLOAT, false, 5 * 4, 3 * 4)

        gl.enableVertexAttribArray(glVar.location['a_position'])
        gl.disableVertexAttribArray(glVar.location['a_texcoord'])
        gl.drawElements(gl.TRIANGLES, 36, gl.UNSIGNED_SHORT, 0)
    }
}
