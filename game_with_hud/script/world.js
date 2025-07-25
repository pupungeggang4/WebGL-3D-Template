class World {
    constructor() {
        this.camera = new Camera3()
        this.thing = [
            new Kart()
        ]
        this.light = new Vector3(0.0, 0.0, 1.0)
    }

    handleTick(game) {
        this.camera.pos.x = Math.sin(performance.now()/ 1000)
    }

    render(game) {
        let gl = game.gl
        let glVar = game.glVar
        gl.uniform1i(glVar.location['u_mode_v'], 1)
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
