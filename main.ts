let x = 0
let y = 0
input.onButtonPressed(Button.A, function () {
	
})
basic.forever(function () {
    if (x < 5) {
        led.plot(x, y)
        x += 1
        basic.pause(200)
        basic.clearScreen()
    } else {
        x = 0
        y += 1
        led.plot(0, y)
        if (y == 5) {
            y = 0
        }
    }
})
