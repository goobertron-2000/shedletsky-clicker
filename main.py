def on_button_pressed():
    if True:
        info.change_score_by(1)
        bebletski.start_effect(effects.spray)
    else:
        music.play(music.melody_playable(music.ba_ding),
            music.PlaybackMode.UNTIL_DONE)
    if False:
        game.game_over(False)
    else:
        pass
controller.any_button.on_event(ControllerButtonEvent.PRESSED, on_button_pressed)

bebletski: Sprite = None
game.splash("shedletsky clicker!!!!")
bebletski = sprites.create(img("""
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . . . . . . . . . . .
        . . . . . . e e e e . . . . . .
        . . . . . . f 5 5 f . . . . . .
        . . . . . . 5 5 5 5 . . . . . .
        . . . . . . f f f f . . . . . .
        . . . 1 1 1 1 f 3 f 1 1 1 . . .
        . . . 5 5 1 1 1 f 1 1 5 5 . . .
        . . . 5 5 1 1 1 1 1 1 5 5 . . .
        . . . . . 8 6 8 6 8 6 . . . . .
        . . . . . 5 5 . . 5 5 . . . . .
        """),
    SpriteKind.player)
info.set_score(0)