// The Partial utility type in TypeScript is used to create a new type by making all properties 
// of an existing type optional. This is particularly useful when you want to update a subset of 
// an object's properties without needing to provide the entire object.



interface UserPartialData {
    id: string;
    name: string;
    age: string;
    email: string;
    password: string;
};

// Selecting 'name', 'age', and 'email' properties from User
type UpdateProps = Pick<UserPartialData, 'name' | 'age' | 'email'>

// Making the selected properties optional
type UpdatePropsOptional = Partial<UpdateProps>

// Function that accepts an object with optional 'name', 'age', and 'email' properties
function updateUser(updatedProps: UpdatePropsOptional) {
    // hit the database to update the user
}

// Example usage of updateUser
updateUser({ name: "Alice" }); // Only updating the name
updateUser({ age: "30", email: "alice@example.com" }); // Updating age and email
updateUser({}); // No updates, but still a valid call