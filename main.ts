namespace SpriteKind {
    export const startButton = SpriteKind.create()
    export const badProjectile = SpriteKind.create()
}
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    startGame = 1
})
function Shoot () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 6 6 6 6 6 6 . . . . . 
        . . . . 6 9 9 9 9 9 9 6 . . . . 
        . . . . 6 9 9 9 9 9 9 6 . . . . 
        . . . . . 6 6 6 6 6 6 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, jetMan, 200, 0)
    music.setVolume(50)
    music.play(music.melodyPlayable(music.pewPew), music.PlaybackMode.InBackground)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava1, function (sprite, location) {
    info.changeLifeBy(-1)
    for (let index = 0; index < 12; index++) {
        jetMan.y += -5
    }
    pause(100)
})
info.onLifeZero(function () {
    game.setGameOverMessage(false, "WHOMP WHOMP GET OUT!!!")
    game.setGameOverEffect(false, effects.dissolve)
    game.gameOver(false)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    music.setVolume(70)
    music.play(music.melodyPlayable(music.knock), music.PlaybackMode.InBackground)
    pause(100)
})
let Y_Velocity = 0
let badBoi: Sprite = null
let projectile: Sprite = null
let jetMan: Sprite = null
let startGame = 0
startGame = 0
let startNotice = sprites.create(assets.image`Start Prompt`, SpriteKind.startButton)
startNotice.setPosition(30, 57)
startNotice.startEffect(effects.halo)
scene.setBackgroundImage(assets.image`Title Screen`)
while (startGame == 0) {
    music.play(music.stringPlayable("C5 A B G A F G E ", 120), music.PlaybackMode.UntilDone)
}
scene.setBackgroundImage(assets.image`Game BG`)
sprites.destroy(startNotice)
game.splash("Welcome to JetMan ONE!")
game.splash("Hold The A button to fly.")
game.splash("Avoid obstacles to complete the game!")
jetMan = sprites.create(assets.image`Idle`, SpriteKind.Player)
jetMan.setStayInScreen(true)
music.play(music.stringPlayable("C D C D C D C D ", 50), music.PlaybackMode.LoopingInBackground)
info.setLife(3)
jetMan.setPosition(24, 60)
scene.cameraFollowSprite(jetMan)
tiles.setCurrentTilemap(tilemap`level`)
game.onUpdateInterval(5000, function () {
    badBoi = sprites.create(assets.image`enemyPlane`, SpriteKind.Enemy)
    tiles.placeOnRandomTile(badBoi, assets.tile`transparency16`)
})
forever(function () {
    Y_Velocity += 0.2
    jetMan.y += Y_Velocity
})
forever(function () {
    if (startGame == 1) {
        if (controller.A.isPressed() == true) {
            music.setVolume(40)
            music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.UntilDone)
        }
    }
})
forever(function () {
    if (startGame == 1) {
        jetMan.x += 0.5
    }
})
forever(function () {
    if (startGame == 1) {
        if (controller.A.isPressed() == true) {
            jetMan.setImage(assets.image`Flying`)
            Y_Velocity += -0.6
        }
    }
})
forever(function () {
    if (startGame == 1) {
        if (controller.B.isPressed() == true) {
            Shoot()
            pause(100)
        }
    }
})
game.onUpdateInterval(100, function () {
    if (startGame == 1) {
        jetMan.setImage(assets.image`Idle 2`)
    }
})
