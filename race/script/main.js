// Run main function when window is loaded
window.onload = main
window.onerror = errorHandle // Handling error
window.oncontextmenu = rightClick // Disable right click menu

let game

// Running game
function main() {
    game = new Game()
}

function errorHandle(err, url, line, col, obj) {
    if (obj != null) {
        cancelAnimationFrame(game.gameLoop)
    }
}

function rightClick() {
    return false
}
