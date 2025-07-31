class World {
    constructor() {
        this.camera = new Camera3()
        this.thing = []
        this.light = new Vector3(0.0, 0.0, 1.0)

        for (let i = 0; i < 20; i++) {
            let x = Math.random() * 2 - 1
            let y = Math.random() * 2 - 1
            let z = Math.random() * 2 + 1
            let shape = new Cuboid3(x, y, z, 0.2, 1.0, 1.0, 0.0, 0.0, 0.0)
            let color = [Math.random(), Math.random(), Math.random()]
            let cuboid = new ColorCuboid3(shape, color)
            this.thing.push(cuboid)
        }
    }

    handleTick(game) {
        for (let i = 0; i < this.thing.length; i++) {
            this.thing[i].cuboid.rot.x += 1.0 * game.delta / 1000
            this.thing[i].cuboid.rot.y += 1.0 * game.delta / 1000
            this.thing[i].cuboid.rot.z += 0.5 * game.delta / 1000
        }
    }

    render(game) {
        let gl = game.gl
        let glVar = game.glVar
        for (let i = 0; i < this.thing.length; i++) {
            this.thing[i].render(game, this.camera, this.light)
        }
    }
}

class Camera3 {
    constructor() {
        this.fov = 60.0 * Math.PI / 180.0
        this.asp = 16.0 / 9.0
        this.near = 0.1
        this.far = 10.0
        this.pos = new Vector3(0.0, 0.0, -1.0)
        this.rot = new Vector3(0, 0, 0)
    }
}

