// -------------- Map ---------------
// The `Map` object in TypeScript (inherited from JavaScript) represents a collection of key-value pairs 
// where both the keys and values can be of any type. Maps remember the original insertion order of the keys,
//  which is a significant difference from plain JavaScript objects.

interface UserMap {
  id: string;
  name: string;
}

// Initialize an empty Map with string keys and User values
const usersMap = new Map<string, UserMap>();

// Add users to the map using .set
usersMap.set('abc123', { id: 'abc123', name: 'John Doe' });
usersMap.set('xyz789', { id: 'xyz789', name: 'Jane Doe' });


// Accessing a value using .get
console.log(usersMap.get('abc123')); // Output: { id: 'abc123', name: 'John Doe' }