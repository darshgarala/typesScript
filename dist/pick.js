"use strict";
// The Pick utility type in TypeScript is a powerful feature that allows you to construct 
// new types by selecting a subset of properties from an existing type. This can be particularly 
// useful when you need to work with only certain fields of a complex type, enhancing type safety and code 
// readability without redundancy.
;
// Function that accepts a UserProfile type
const displayUserProfile = (user) => {
    console.log(`Name: ${user.name}, Email: ${user.e_mail}`);
};
