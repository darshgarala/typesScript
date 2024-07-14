"use strict";
function printId(id) {
    console.log(`ID: ${id}`);
}
printId(101); // ID: 101
printId("202"); // ID: 202
const teamLead = {
    name: "darsh",
    startDate: new Date(),
    department: "Software developer"
};
// type = interface & type //true
// interface = interface & type //false
// interface can be implement by classes
// types let u do unions and intersection
// --------------------\
// interface P{}
// interface Q{}
// interface x extends P,Q{
// }
