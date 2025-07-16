class World {
    constructor() {
        this.camera = new Camera3()
        this.thing = [
            new Cuboid3(-0.5, 0.0, 0.2, 0.5, 0.5, 0.5, 0.5, 0.5, 0.0),
            new Cuboid3(0.5, 0.0, 0.2, 0.5, 0.5, 0.5, 0.0, 0.5, 0.5),
        ]
    }

    render(game) {
        RenderGL.renderCuboidColor(game.gl, game.glVar, this.camera, this.thing[0], [0.0, 1.0, 0.0], true, true, [0.0, 0.0, 1.0])
        RenderGL.renderCuboidTex(game.gl, game.glVar, this.camera, this.thing[1], Img.testImage, true, true, [0.0, 0.0, 1.0])
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
