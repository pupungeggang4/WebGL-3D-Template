class World {
    constructor() {
        this.camera = new Camera3()
        this.thing = [
            new Cuboid3(-0.5, 0.5, 0.2, 0.5, 0.5, 0.5, 0.5, 0.5, 0.0),
            new Cuboid3(0.5, 0.5, 0.2, 0.5, 0.5, 0.5, 0.0, 0.5, 0.5),
            new Cuboid3(0.5, -0.5, 0.2, 0.5, 0.5, 0.5, 0.0, 0.0, 0.0),
            new Cuboid3(-0.5, -0.5, 0.2, 0.5, 0.5, 0.5, 0.0, 0.0, 0.0),
            new Kart()
        ]
        this.light = new Vector3(0.0, 0.0, 1.0)
    }

    handleTick(game) {
        this.thing[0].rot.x += 0.5 * game.delta / 1000
        this.thing[0].rot.y += 0.5 * game.delta / 1000
        this.thing[1].rot.y += 0.5 * game.delta / 1000
        this.thing[1].rot.x += 0.5 * game.delta / 1000
        this.thing[2].rot.x += 0.5 * game.delta / 1000
        this.thing[2].rot.y += 0.5 * game.delta / 1000
        this.thing[3].rot.y += 0.5 * game.delta / 1000
        this.thing[3].rot.x += 0.5 * game.delta / 1000
    }

    render(game) {
        let gl = game.gl
        let glVar = game.glVar
        gl.uniform1i(glVar.location['u_mode_v'], 1)
        this.thing[0].render(game, this, 1, [0.0, 1.0, 0.0], null)
        this.thing[1].render(game, this, 2, [0.0, 1.0, 1.0], Img.testImage)
        this.thing[2].render(game, this, 3, [0.0, 1.0, 1.0], null)
        this.thing[3].render(game, this, 4, [0.0, 1.0, 1.0], Img.testImage)
        this.thing[0].renderEdge(game, this, [0.0, 0.0, 0.0])
        gl.uniform1i(glVar.location['u_mode_v'], 2)
        this.thing[4].render(game, this)
    }
}

class Camera3 {
    constructor() {
        this.fov = 60.0 * Math.PI / 180.0
        this.asp = 16.0 / 9.0
        this.near = 0.1
        this.far = 10.0
        this.pos = new Vector3(0.8, -1.0, -3.0)
        this.rot = new Vector3(0.1, 0, 0)
    }
}
