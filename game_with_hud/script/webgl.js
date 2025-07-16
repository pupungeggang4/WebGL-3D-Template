class WebGLF {
    static glInit(gl, glVar) {
        // Compiling shader.
        glVar.vShader = gl.createShader(gl.VERTEX_SHADER)
        gl.shaderSource(glVar.vShader, vSource)
        gl.compileShader(glVar.vShader)
        glVar.fShader = gl.createShader(gl.FRAGMENT_SHADER)
        gl.shaderSource(glVar.fShader, fSource)
        gl.compileShader(glVar.fShader)
        glVar.program = gl.createProgram()
        gl.attachShader(glVar.program, glVar.fShader)
        gl.attachShader(glVar.program, glVar.vShader)
        gl.linkProgram(glVar.program)

        if (!gl.getShaderParameter(glVar.vShader, gl.COMPILE_STATUS)) {
            console.log(gl.getShaderInfoLog(glVar.vShader))
        }

        if (!gl.getShaderParameter(glVar.fShader, gl.COMPILE_STATUS)) {
            console.log(gl.getShaderInfoLog(glVar.fShader))
        }

        // Setting location
        glVar.location = {}
        glVar.location['a_position'] = gl.getAttribLocation(glVar.program, 'a_position')
        glVar.location['a_texcoord'] = gl.getAttribLocation(glVar.program, 'a_texcoord')
        glVar.location['a_normal'] = gl.getAttribLocation(glVar.program, 'a_normal')
        glVar.location['u_mode_v'] = gl.getUniformLocation(glVar.program, 'u_mode_v')
        glVar.location['u_mode_f'] = gl.getUniformLocation(glVar.program, 'u_mode_f')
        glVar.location['u_m_pos'] = gl.getUniformLocation(glVar.program, 'u_m_pos')
        glVar.location['u_m_size'] = gl.getUniformLocation(glVar.program, 'u_m_size')
        glVar.location['u_m_rot'] = gl.getUniformLocation(glVar.program, 'u_m_rot')
        glVar.location['u_c_pos'] = gl.getUniformLocation(glVar.program, 'u_c_pos')
        glVar.location['u_c_proj'] = gl.getUniformLocation(glVar.program, 'u_c_proj')
        glVar.location['u_color'] = gl.getUniformLocation(glVar.program, 'u_color')
        glVar.location['u_light_d'] = gl.getUniformLocation(glVar.program, 'u_light_d')

        // VAOs and buffers
        glVar.vao = gl.createVertexArray()
        gl.bindVertexArray(glVar.vao)
        glVar.bHUD = gl.createBuffer(gl.ARRAY_BUFFER)
        glVar.bHUDIndex = gl.createBuffer(gl.ELEMENT_ARRAY_BUFFER)
        glVar.bCuboid = gl.createBuffer(gl.ARRAY_BUFFER)
        glVar.bCuboidTex = gl.createBuffer(gl.ARRAY_BUFFER)
        glVar.bCuboidIndexF = gl.createBuffer(gl.ARRAY_BUFFER)
        glVar.bCuboidIndexE = gl.createBuffer(gl.ARRAY_BUFFER)

        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.bHUD)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -1.0, -1.0, 0.0, 1.0,
            1.0, -1.0, 1.0, 1.0,
            1.0, 1.0, 1.0, 0.0,
            -1.0, 1.0, 0.0, 0.0
        ]), gl.STATIC_DRAW)
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, glVar.bHUDIndex)
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
            1, 2, 0, 0, 2, 3
        ]), gl.STATIC_DRAW)
        gl.bindBuffer(gl.ARRAY_BUFFER, glVar.bCuboid)
        gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([
            -0.5, -0.5, -0.5,  1.0,  1.0,  0.0,  0.0, -1.0,
             0.5, -0.5, -0.5,  0.0,  1.0,  0.0,  0.0, -1.0,
             0.5,  0.5, -0.5,  0.0,  0.0,  0.0,  0.0, -1.0,
            -0.5,  0.5, -0.5,  1.0,  0.0,  0.0,  0.0, -1.0,
            -0.5, -0.5,  0.5,  0.0,  1.0,  0.0,  0.0,  1.0,
             0.5, -0.5,  0.5,  1.0,  1.0,  0.0,  0.0,  1.0,
             0.5,  0.5,  0.5,  1.0,  0.0,  0.0,  0.0,  1.0,
            -0.5,  0.5,  0.5,  0.0,  0.0,  0.0,  0.0,  1.0,
            -0.5, -0.5,  0.5,  1.0,  1.0, -1.0,  0.0,  0.0,
            -0.5, -0.5, -0.5,  0.0,  1.0, -1.0,  0.0,  0.0,
            -0.5,  0.5, -0.5,  0.0,  0.0, -1.0,  0.0,  0.0,
            -0.5,  0.5,  0.5,  1.0,  0.0, -1.0,  0.0,  0.0,
             0.5, -0.5,  0.5,  0.0,  1.0,  1.0,  0.0,  0.0,
             0.5, -0.5, -0.5,  1.0,  1.0,  1.0,  0.0,  0.0,
             0.5,  0.5, -0.5,  1.0,  0.0,  1.0,  0.0,  0.0,
             0.5,  0.5,  0.5,  0.0,  0.0,  1.0,  0.0,  0.0,
            -0.5, -0.5,  0.5,  1.0,  1.0,  0.0, -1.0,  0.0,
             0.5, -0.5,  0.5,  0.0,  1.0,  0.0, -1.0,  0.0,
             0.5, -0.5, -0.5,  0.0,  0.0,  0.0, -1.0,  0.0,
            -0.5, -0.5, -0.5,  1.0,  0.0,  0.0, -1.0,  0.0,
            -0.5,  0.5,  0.5,  0.0,  1.0,  0.0,  1.0,  0.0,
             0.5,  0.5,  0.5,  1.0,  1.0,  0.0,  1.0,  0.0,
             0.5,  0.5, -0.5,  1.0,  0.0,  0.0,  1.0,  0.0,
            -0.5,  0.5, -0.5,  0.0,  0.0,  0.0,  1.0,  0.0
        ]), gl.STATIC_DRAW)
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, glVar.bCuboidIndexF)
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
            3, 2, 0, 0, 2, 1, 5, 6, 4, 4, 6, 7,
            11, 10, 8, 8, 10, 9, 13, 14, 12, 12, 14, 15,
            19, 18, 16, 16, 18, 17, 21, 22, 20, 20, 22, 23
        ]), gl.STATIC_DRAW)
        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, glVar.bCuboidIndexE)
        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([
            0, 1, 1, 2, 2, 3, 3, 0, 0, 4, 1, 5, 2, 6, 3, 7, 4, 5, 5, 6, 6, 7, 7, 4
        ]), gl.STATIC_DRAW)

        // Texture
        glVar.texture = gl.createTexture()
        gl.bindTexture(gl.TEXTURE_2D, glVar.texture)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.NEAREST)
        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.NEAREST)
    }
}
