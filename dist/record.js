"use strict";
// The Record utility type and the Map object in TypeScript offer two powerful ways to work with 
// collections of key-value pairs. Each has its own use cases and benefits, depending on the 
// requirements of your application.
const usersReco = {
    'abc123': { id: 'abc123', name: 'John Doe' },
    'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};
console.log(usersReco['abc123']); // Output: { id: 'abc123', name: 'John Doe' }
