// Handling primitives and shapes.
// 2D vector
class Vector2 {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
}

// 3D vector
class Vector3 {
    constructor(x, y, z) {
        this.x = x
        this.y = y
        this.z = z
    }
}

// Cuboid3
class Cuboid3 {
    constructor(px, py, pz, sx, sy, sz, rx, ry, rz) {
        this.pos = new Vector3(px, py, pz)
        this.size = new Vector3(sx, sy, sz)
        this.rot = new Vector3(rx, ry, rz)
    }
}