// The Record utility type and the Map object in TypeScript offer two powerful ways to work with 
// collections of key-value pairs. Each has its own use cases and benefits, depending on the 
// requirements of your application.

//------------------ Record -------------------
// The `Record<K, T>` utility type is used to construct a type with a set of properties `K` of a given type `T`. 
// It provides a cleaner and more concise syntax for typing objects when you know the shape of the values but 
// not the keys in advance.



interface UserRecord {
  id: string;
  name: string;
}

// Using Record to type an object with string keys and User values
type UsersRecord = Record<string, UserRecord>;

const usersReco: UsersRecord = {
  'abc123': { id: 'abc123', name: 'John Doe' },
  'xyz789': { id: 'xyz789', name: 'Jane Doe' },
};

console.log(usersReco['abc123']); // Output: { id: 'abc123', name: 'John Doe' }