namespace SpriteKind {
    export const startButton = SpriteKind.create()
}
/**
 * To finish:
 * 
 * Level, Shooting, Bugs, and Polishing.
 */
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    Y_Velocity = 0
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    startGame = 1
})
function Shoot () {
	
}
let Y_Velocity = 0
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
game.splash("This game goes on as long as you can avoid the obstacles.")
let jetMan = sprites.create(assets.image`Idle`, SpriteKind.Player)
jetMan.setStayInScreen(true)
music.play(music.stringPlayable("C D C D C D C D ", 50), music.PlaybackMode.LoopingInBackground)
info.setLife(3)
jetMan.setPosition(24, 60)
scene.cameraFollowSprite(jetMan)
tiles.setCurrentTilemap(tilemap`level`)
forever(function () {
    if (startGame == 1) {
        if (controller.B.isPressed() == true) {
            Shoot()
            pause(100)
        }
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
game.onUpdateInterval(100, function () {
    if (startGame == 1) {
        jetMan.setImage(assets.image`Idle 2`)
    }
})
