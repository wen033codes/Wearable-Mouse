bluetooth.onBluetoothConnected(function () {
    basic.showIcon(IconNames.Yes)
})
bluetooth.onBluetoothDisconnected(function () {
    basic.showIcon(IconNames.No)
})
input.onButtonPressed(Button.A, function () {
    if (speed <= 0.44) {
        speed += 0.05
    } else {
        speed = 0.45
    }
    basic.showNumber(Math.trunc(speed / 0.05))
})
input.onButtonPressed(Button.AB, function () {
    speed = 0.1
    basic.showNumber(Math.trunc(speed / 0.05))
})
input.onButtonPressed(Button.B, function () {
    if (speed <= 0.06) {
        speed = 0.05
    } else {
        speed += -0.05
    }
    basic.showNumber(Math.trunc(speed / 0.05))
})
let Y = 0
let MoveY = 0
let X = 0
let MoveX = 0
let NewY = 0
let NewX = 0
let speed = 0
mouse.startMouseService()
basic.showIcon(IconNames.Heart)
speed = 0.1
basic.forever(function () {
    NewX = input.acceleration(Dimension.X)
    NewY = input.acceleration(Dimension.Y) * -1
    MoveX = speed * (NewX - X)
    MoveY = speed * (NewY - Y)
    mouse.movexy(MoveX, MoveY)
    X = speed * NewX + (1 - speed) * X
    Y = speed * NewY + (1 - speed) * Y
})
