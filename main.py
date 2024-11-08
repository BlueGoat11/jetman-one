@namespace
class SpriteKind:
    startButton = SpriteKind.create()
    badProjectile = SpriteKind.create()
"""

To finish:

Level, GROUND MECHANICS, Shooting, Bugs, and Polishing.

"""

def on_b_pressed():
    global startGame
    startGame = 1
controller.B.on_event(ControllerButtonEvent.PRESSED, on_b_pressed)

def Shoot():
    global projectile
    projectile = sprites.create_projectile_from_sprite(img("""
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
        """),
        jetMan,
        200,
        0)
    music.set_volume(50)
    music.play(music.melody_playable(music.pew_pew),
        music.PlaybackMode.IN_BACKGROUND)

def on_overlap_tile(sprite, location):
    info.change_life_by(-1)
    for index in range(12):
        jetMan.y += -5
    pause(100)
scene.on_overlap_tile(SpriteKind.player,
    sprites.dungeon.hazard_lava1,
    on_overlap_tile)

def on_life_zero():
    game.set_game_over_message(False, "WHOMP WHOMP GET OUT!!!")
    game.set_game_over_effect(False, effects.dissolve)
    game.game_over(False)
info.on_life_zero(on_life_zero)

badboiBullet: Sprite = None
Y_Velocity = 0
badBoi: Sprite = None
projectile: Sprite = None
jetMan: Sprite = None
startGame = 0
startGame = 0
startNotice = sprites.create(assets.image("""
        Start Prompt
    """),
    SpriteKind.startButton)
startNotice.set_position(30, 57)
startNotice.start_effect(effects.halo)
scene.set_background_image(assets.image("""
    Title Screen
"""))
while startGame == 0:
    music.play(music.string_playable("C5 A B G A F G E ", 120),
        music.PlaybackMode.UNTIL_DONE)
scene.set_background_image(assets.image("""
    Game BG
"""))
sprites.destroy(startNotice)
game.splash("Welcome to JetMan ONE!")
game.splash("Hold The A button to fly.")
game.splash("Avoid obstacles to complete the game!")
jetMan = sprites.create(assets.image("""
    Idle
"""), SpriteKind.player)
jetMan.set_stay_in_screen(True)
music.play(music.string_playable("C D C D C D C D ", 50),
    music.PlaybackMode.LOOPING_IN_BACKGROUND)
info.set_life(3)
jetMan.set_position(24, 60)
scene.camera_follow_sprite(jetMan)
tiles.set_current_tilemap(tilemap("""
    level
"""))

def on_update_interval():
    global badBoi
    badBoi = sprites.create(assets.image("""
        enemyPlane
    """), SpriteKind.enemy)
    tiles.place_on_random_tile(badBoi, assets.tile("""
        transparency16
    """))
game.on_update_interval(5000, on_update_interval)

def on_forever():
    if startGame == 1:
        if controller.B.is_pressed() == True:
            Shoot()
            pause(100)
forever(on_forever)

def on_forever2():
    global Y_Velocity
    if startGame == 1:
        if controller.A.is_pressed() == True:
            jetMan.set_image(assets.image("""
                Flying
            """))
            Y_Velocity += -0.6
forever(on_forever2)

def on_forever3():
    global Y_Velocity
    Y_Velocity += 0.2
    jetMan.y += Y_Velocity
forever(on_forever3)

def on_forever4():
    if startGame == 1:
        if controller.A.is_pressed() == True:
            music.set_volume(40)
            music.play(music.melody_playable(music.beam_up),
                music.PlaybackMode.UNTIL_DONE)
forever(on_forever4)

def on_forever5():
    if jetMan.overlaps_with(badboiBullet):
        info.change_life_by(-1)
        music.set_volume(70)
        music.play(music.melody_playable(music.knock),
            music.PlaybackMode.IN_BACKGROUND)
forever(on_forever5)

def on_forever6():
    global badboiBullet
    badboiBullet = sprites.create(img("""
            . . . . . . . . . . . . . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . 4 4 4 5 5 4 4 4 . . . . 
                    . . . 3 3 3 3 4 4 4 4 4 4 . . . 
                    . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
                    . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
                    . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
                    . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
                    . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
                    . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
                    . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
                    . . . 4 2 2 2 2 2 2 2 2 4 . . . 
                    . . . . 4 4 2 2 2 2 4 4 . . . . 
                    . . . . . . 4 4 4 4 . . . . . . 
                    . . . . . . . . . . . . . . . .
        """),
        SpriteKind.badProjectile)
    pause(500)
forever(on_forever6)

def on_forever7():
    if startGame == 1:
        jetMan.x += 0.5
forever(on_forever7)

def on_update_interval2():
    if startGame == 1:
        jetMan.set_image(assets.image("""
            Idle 2
        """))
game.on_update_interval(100, on_update_interval2)
