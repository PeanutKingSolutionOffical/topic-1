basic.showIcon(IconNames.Heart)
basic.pause(100)
basic.forever(function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
