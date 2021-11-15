const hobbies= ['Sports', 'Cooking']

for(let hobby of hobbies)
    console.log(hobby);

console.log(hobbies.map(hobby=> 'Hobby: '+hobby))

// coppied array
const copiedArray = hobbies.slice()
console.log(copiedArray);

// use of spread array
const array = [...hobbies];
console.log(array);

// use of REST operation
const toArray = (... args)=>{
    return args;
}
console.log(toArray(1,2,3,4));


const person={
    name: 'Vishwanath Pratap Singh',
    age: 19,
    greet(){
        console.log('Hii, I am '+this.name);
    }
};
// first method of destructuring
const printName = (personData)=>{
    console.log(personData.name);
}
printName(person);

// Second mehtod
const Name=({name})=>{
    console.log(name);
}
Name(person);

// Third method of destrucuring
const thridMethod=({...args})=>{
    console.log(args);
}
thridMethod(person);