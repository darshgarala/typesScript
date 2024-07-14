enum Direction {
    Up1 = "UP",
    Down1 = "Down",
    Left1 = "Left",
    Right1 = 'Right'
}

function doSomething1(keyPressed: Direction) {
	// do something.
}

doSomething1(Direction.Down1)
doSomething1(Direction.Up1)
console.log(Direction.Down1)
console.log(Direction.Up1)
console.log(Direction.Left1)
console.log(Direction.Right1)