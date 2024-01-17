# topic1

## Checkpoint - show icon

Show icon on start.

```blocks

basic.showIcon()

```

## Assessment - storyteller

Create a short-animated story and present to your teacher and classmates.

```blocks

basic.showIcon()
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

```