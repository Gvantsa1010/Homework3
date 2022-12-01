//1

const restFunction = (num1, num2,...num3) => {
    let mutliply = 1;
    const sum = num1 + num2;
    for(const num of num3){
        mutliply *= num;
    }
    return [sum, mutliply];
}
console.log(restFunction(1,2,3,4,5,6,7,8,9)); //[3, 181440]

//3
const user = {
    name: 'Gigo',
    age: 2,
    address: {
        city: 'Tbilisi',
    },
};

function createNewUser (user){
    let newUser = {};
    for(const feildname in user){
        if(typeof user[feildname] === 'Object'){
            newUser[feildname] = {
                ...user.feildname,
            }
        }else {
            newUser[feildname] = {
                ...user,
            }
        }
    }
    return newUser;
}
const newUser = createNewUser(user);
newUser.name = 'Gvantsa';
newUser.address.city = 'Paris';
console.log(user.name, newUser.name, user.address.city, newUser.address.city); //Gigo Gvantsa Tbilisi Paris

//3
const user2 = {
    banks: [
        ['tbc', {address: {city: 'Tbilisi'}}],
        ['BoG', {address: {city: 'Tbilisi'}}],
        ['SNB', {address: {city: 'Switzerland'}}],

    ]

}

    const {banks: [, , [, {address: {city} = {}}]]} = user2;
    console.log(city); //Switzerland

