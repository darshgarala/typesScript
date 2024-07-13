function maxValue(arr: number[]) {
    let max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}

console.log(maxValue([1, 2, 3]));



interface UserData {
	firstName: string;
	lastName: string;
	age: number;
}

function filteredUsers(users: UserData[]) {
    return users.filter(x => x.age >= 18);
}

console.log(filteredUsers([{
    firstName: "darsh",
    lastName: "garala",
    age: 21
}, {
    firstName: "Raman",
    lastName: "Singh",
    age: 16
}, ]));