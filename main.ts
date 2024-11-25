namespace SpriteKind {
    export const speed = SpriteKind.create()
    export const slow = SpriteKind.create()
    export const plus5 = SpriteKind.create()
}
scene.onHitWall(SpriteKind.slow, function (sprite, location) {
    tiles.placeOnRandomTile(powerUPP, assets.tile`transparency16`)
})
scene.onHitWall(SpriteKind.Player, function (sprite, location) {
    gameStart = 0
    tiles.setCurrentTilemap(tilemap`gameOver`)
    scene.setBackgroundImage(assets.image`endBG`)
    info.changeLifeBy(-1)
    if (info.score() > firstScore && info.score() > secondScore) {
        game.splash("You win JetMan! You even", "got a score of " + ("" + info.score() + "!"))
        game.gameOver(true)
    } else if (info.score() < firstScore) {
        if (info.score() < secondScore) {
            game.splash("Sorry Jetman, you didn't win...", "You got third place :(")
            game.gameOver(false)
        } else {
            game.splash("Good job Jetman! You beat Little Timmy,", "but are not our champion.")
            game.gameOver(false)
        }
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.speed, function (sprite, otherSprite) {
    sprites.destroy(powerUPP)
    speed += 0.5
    pause(2000)
    speed += -0.5
    info.changeScoreBy(2)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.slow, function (sprite, otherSprite) {
    sprites.destroy(powerUPP)
    speed += -0.5
    pause(2000)
    speed += 0.5
    scoreAdd += -0.5
})
scene.onHitWall(SpriteKind.speed, function (sprite, location) {
    tiles.placeOnRandomTile(powerUPP, assets.tile`transparency16`)
})
scene.onHitWall(SpriteKind.plus5, function (sprite, location) {
    tiles.placeOnRandomTile(powerUPP, assets.tile`transparency16`)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.plus5, function (sprite, otherSprite) {
    info.changeScoreBy(5)
    sprites.destroy(powerUPP)
})
function Spawn_Powerup () {
    temp = randint(1, 3)
    if (temp == 1) {
        powerUPP = sprites.create(assets.image`speedy`, SpriteKind.speed)
    } else if (temp == 2) {
        powerUPP = sprites.create(assets.image`slow`, SpriteKind.slow)
    } else {
        powerUPP = sprites.create(assets.image`plus5`, SpriteKind.plus5)
    }
    tiles.placeOnRandomTile(powerUPP, assets.tile`transparency16`)
}
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.collectibleInsignia, function (sprite, location) {
    sprites.destroy(powerUPP)
    if (randint(1, 2) == 1) {
        tiles.setCurrentTilemap(tilemap`trees`)
        scene.setBackgroundImage(assets.image`forrestBG`)
    } else {
        if (randint(1, 2) == 1) {
            tiles.setCurrentTilemap(tilemap`dungeon`)
            scene.setBackgroundImage(assets.image`dungeonBG`)
        } else {
            tiles.setCurrentTilemap(tilemap`city`)
            scene.setBackgroundImage(assets.image`cityBG`)
        }
    }
    if (randint(1, 3) != 2) {
        Spawn_Powerup()
    }
    speed += 0.1
    jetMan.x += -925
    pause(100)
})
let y_vel = 0
let temp = 0
let scoreAdd = 0
let powerUPP: Sprite = null
let jetMan: Sprite = null
let secondScore = 0
let firstScore = 0
let gameStart = 0
scene.setBackgroundImage(assets.image`introScreen`)
music.play(music.stringPlayable("C5 A B G A F G E ", 70), music.PlaybackMode.UntilDone)
scene.setBackgroundImage(assets.image`dungeonBG`)
gameStart = 1
game.showLongText("Jetman is currently V1.2.0. The link is github.com/ BlueGoat11/jetman-one", DialogLayout.Full)
game.splash("Welcome to the J-Games", " Jetman!")
game.splash("Before we start, here are", "the competitor's scores.")
firstScore = randint(40, 50)
secondScore = randint(20, 30)
game.splash("Our champ Johnny has", "" + firstScore + "!")
game.splash("Little Timmy has", "" + secondScore + ".")
game.showLongText("To fly, hold the Up button. To fall, don't. The speed will get higher as you go!", DialogLayout.Bottom)
let speed = 1.2
jetMan = sprites.create(assets.image`jetMan idle`, SpriteKind.Player)
jetMan.setStayInScreen(true)
jetMan.setFlag(SpriteFlag.AutoDestroy, true)
jetMan.y += 30
scene.cameraFollowSprite(jetMan)
tiles.setCurrentTilemap(tilemap`dungeon`)
info.setLife(1)
forever(function () {
    if (gameStart == 1) {
        jetMan.y += y_vel
        if (controller.up.isPressed()) {
            jetMan.setImage(assets.image`jetman fly`)
            y_vel += -0.4
            music.setVolume(50)
            music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        }
    }
})
forever(function () {
    if (gameStart == 1) {
        jetMan.x += speed
    }
})
forever(function () {
    y_vel += 0.15
})
forever(function () {
    if (gameStart == 1) {
        scoreAdd = 1
        pause(2000)
        info.changeScoreBy(scoreAdd)
    }
})
game.onUpdateInterval(100, function () {
    jetMan.setImage(assets.image`jetMan idle`)
})
