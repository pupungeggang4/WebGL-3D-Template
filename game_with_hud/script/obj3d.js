class Part3 {
    constructor(primitive, pos, size, rot, surfaceMode, color, texImage) {
        this.primitive = primitive
        if (primitive === 'cuboid') {
            this.shape = new Cuboid3(pos.x, pos.y, pos.z, size.x, size.y, size.z, rot.x, rot.y, rot.z)
            this.surfaceMode = surfaceMode
            this.color = color
            this.texImage = texImage
        }
    }
}

class Obj3 {
    constructor() {
        this.pos = new Vector3(0.0, 0.0, 0.0)
        this.size = new Vector3(1.0, 1.0, 1.0)
        this.rot = new Vector3(0.0, 0.0, 0.0)
        this.part = [
            
        ]
    }

    render(game, camera, light) {
        let gl = game.gl
        let glVar = game.glVar
        gl.uniform1i(glVar.location['u_mode_v'], 2)
        gl.uniform3f(glVar.location['u_m_pos'], this.pos.x, this.pos.y, this.pos.z)
        gl.uniform3f(glVar.location['u_m_size'], this.size.x, this.size.y, this.size.z)
        gl.uniform3f(glVar.location['u_m_rot'], this.rot.x, this.rot.y, this.rot.z)

        for (let i = 0; i < this.part.length; i++) {
            let part = this.part[i]
            part.shape.render(game, camera, light, part.surfaceMode, part.color, part.texImage)
        }
    }
}

class Kart3 extends Obj3 {
    constructor() {
        super()
        this.part = [
            new Part3('cuboid', new Vector3(0.0, -0.1, 0.0), new Vector3(0.7, 0.1, 0.6), new Vector3(0.0, 0.0, 0.0), 3, [1.0, 1.0, 1.0], Img.testImage),
            new Part3('cuboid', new Vector3(-0.3, 0.0, 0.0), new Vector3(0.1, 0.1, 0.6), new Vector3(0.0, 0.0, 0.0), 3, [1.0, 1.0, 0.0], Img.testImage),
            new Part3('cuboid', new Vector3(0.3, 0.0, 0.0), new Vector3(0.1, 0.1, 0.6), new Vector3(0.0, 0.0, 0.0), 3, [1.0, 1.0, 0.0], Img.testImage),
            new Part3('cuboid', new Vector3(0.0, 0.0, 0.25), new Vector3(0.5, 0.1, 0.1), new Vector3(0.0, 0.0, 0.0), 3, [1.0, 1.0, 0.0], Img.testImage),
        ]
    }
}
