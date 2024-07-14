"use strict";
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right"; //3    //17
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    if (keyPressed == Direction.Up) {
    }
}
doSomething(Direction.Up);
doSomething(Direction.Down);
console.log(Direction.Up);
console.log(Direction.Down);
console.log(Direction.Left);
console.log(Direction.Right);
// enum Direction {
//     Up = 1,
//     Down, // becomes 2 by default
//     Left, // becomes 3
//     Right // becomes 4
// }
// function doSomething(keyPressed: Direction) {
// 	// do something.
// }
// doSomething(Direction.Down)
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }
// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })
