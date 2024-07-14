"use strict";
var Direction;
(function (Direction) {
    Direction["Up1"] = "UP";
    Direction["Down1"] = "Down";
    Direction["Left1"] = "Left";
    Direction["Right1"] = "Right";
})(Direction || (Direction = {}));
function doSomething1(keyPressed) {
    // do something.
}
doSomething1(Direction.Down1);
doSomething1(Direction.Up1);
console.log(Direction.Down1);
console.log(Direction.Up1);
console.log(Direction.Left1);
console.log(Direction.Right1);
