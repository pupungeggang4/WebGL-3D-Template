class World {
    constructor() {
        this.camera = new Camera3()
        this.thing = [new Kart()]
        this.light = new Vector3(0.0, -1.0, 1.0)
    }

    handleTick(game) {
        this.thing[0].handleTick(game)
    }

    render(game) {
        let gl = game.gl
        let glVar = game.glVar
        gl.uniform1i(glVar.location['u_mode_v'], 2)
        this.thing[0].render(game, this.camera, this.light)
    }
}

class Camera3 {
    constructor() {
        this.fov = 60.0 * Math.PI / 180.0
        this.asp = 16.0 / 9.0
        this.near = 0.1
        this.far = 10.0
        this.pos = new Vector3(0.0, 1.0, -3.0)
        this.rot = new Vector3(0.1, 0, 0)
    }
}

class Kart {
    constructor() {
        this.model = new Kart3()
        this.pos = new Vector3(0.0, 1.0, 0.0)
        this.size = new Vector3(1.5, 1.5, 1.5)
        this.rot = new Vector3(0.0, 0.0, 0.0)
        this.model.pos = this.pos
        this.model.size = this.size
        this.model.rot = this.rot
    }

    handleTick(game) {
        this.pos.x = Math.sin(performance.now() / 1000)
    }

    render(game, camera, light) {
        this.model.render(game, camera, light)
    }
}
