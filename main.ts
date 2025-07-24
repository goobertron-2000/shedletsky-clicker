controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    if (true) {
        info.changeScoreBy(1)
        bebletski.startEffect(effects.fire, 500)
        bebletski.sayText("")
        scene.setBackgroundColor(0)
    } else {
        music.play(music.melodyPlayable(music.baDing), music.PlaybackMode.UntilDone)
    }
})
info.onScore(100, function () {
    if (true) {
        info.changeScoreBy(10)
    }
})
let bebletski: Sprite = null
game.splash("shedletsky clicker!!!!")
bebletski = sprites.create(img`
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
    `, SpriteKind.Player)
info.setScore(0)
