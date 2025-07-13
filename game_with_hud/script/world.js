class World {
    constructor() {
        this.camera = new Camera3()
        this.thing = []
    }
}

class Camera3 {
    constructor() {
        this.fov = 60.0 * Math.PI / 180.0
        this.asp = 16.0 / 9.0
        this.near = 0.1
        this.far = 10.0
        this.pos = new Vector3(0, 0, -2.0)
        this.rot = new Vector3(0, 0, 0)
    }
}
