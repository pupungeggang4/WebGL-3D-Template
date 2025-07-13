// Handling game
class Game {
    // When the game object is created.
    constructor() {
        Img.imageLoad()

        // Handling whether mouse is pressed.
        this.mousePressed = false

        // Keyboard binding.
        this.keyMapping = {} // Edit this. {'action': 'key'}

        // Handling whether keyboard is pressed.
        this.keyPressed = {}
        for (let k in this.keyMapping) {
            this.keyPressed[k] = false
        }

        this.scene = 'title'
        this.state = ''
        this.menu = false

        // Temp
        this.c1 = new Cuboid3(-0.5, 0.0, 0.0, 0.5, 0.5, 0.5, -0.5, -0.5, 0.0)
        this.c2 = new Cuboid3(0.5, 0.0, 0.0, 0.5, 0.5, 0.5, -0.5, 0.5, 0.0)

        // Creating canvas and HUD var.
        this.canvas = document.getElementById('screen')
        this.gl = this.canvas.getContext('webgl2')
        this.hud = document.createElement('canvas')
        this.hud.width = 1280
        this.hud.height = 720
        this.ctx = this.hud.getContext('2d')
        this.glVar = {}

        WebGLF.glInit(this.gl, this.glVar)

        // Adding Input listener
        window.addEventListener('mousedown', (event) => this.mouseDown(event), false)
        window.addEventListener('mouseup', (event) => this.mouseUp(event), false)
        window.addEventListener('keydown', (event) => this.keyDown(event), false)
        window.addEventListener('keyup', (event) => this.keyUp(event), false)

        // Ticks
        this.frameCurrent = performance.now()
        this.framePrevious = performance.now() - 16
        this.delta = 16

        // Defining game loop.
        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    // Loop
    loop() {
        // Calculating Delta
        this.framePrevious = this.frameCurrent
        this.frameCurrent = performance.now()
        this.delta = this.frameCurrent - this.framePrevious

        // Actions by scene
        if (this.scene === 'title') {
            SceneTitle.loop(this)
        }

        this.gameLoop = requestAnimationFrame(() => this.loop())
    }

    mouseDown(event) {
        // Find rect area of canvas
        let targetRect = this.canvas.getBoundingClientRect
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * this.canvas.width,
            y: (event.clientY - targetRect.top) / targetRect.height * this.canvas.height
        }
        let button = event.button

        this.mousePressed = true
        // Actions by scene
        if (this.scene === 'title') {
            SceneTitle.mouseDown(this, pos, button)
        }
    }

    mouseUp(event) {
        // Find rect area of canvas
        let targetRect = this.canvas.getBoundingClientRect
        let pos = {
            x: (event.clientX - targetRect.left) / targetRect.width * this.canvas.width,
            y: (event.clientY - targetRect.top) / targetRect.height * this.canvas.height
        }
        let button = event.button

        this.mousePressed = false
        // Actions by scene
        if (this.scene === 'title') {
            SceneTitle.mouseUp(this, pos, button)
        }
    }

    keyDown(event) {
        let key = event.key

        // Handling whether key is pressed.
        for (let k in this.keyPressed) {
            if (key === this.keyMapping[k]) {
                this.keyPressed[k] = true
            }
        }

        // Actions by scene
        if (this.scene === 'title') {
            SceneTitle.keyDown(this, key)
        }
    }

    keyUp(event) {
        let key = event.key

        // Handling whether key is pressed.
        for (let k in this.keyPressed) {
            if (key === this.keyMapping[k]) {
                this.keyPressed[k] = false
            }
        }

        // Actions by scene
        if (this.scene === 'title') {
            SceneTitle.keyUp(this, key)
        }

    }
}
