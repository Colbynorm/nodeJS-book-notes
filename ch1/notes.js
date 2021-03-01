Window.onload = function(){
    //When all requested document resources are loaded, 
    //do something with the resulting environment
}

Element.onclick = function(){
    // Do something when the user clicks on this element.
}

let foo = 'bar';
if(foo == 'bar'){
    let foo = 'baz';
    console.log(foo);
}
console.log(foo);

let obj = {
    foo1: 'foo!',
    bar: 'bar!',
    baz: 'baz!'
};
let {foo1, baz} = obj;
console.log(foo1, baz);




const week = ['mon', 'tue', 'wed', 'thur', 'fri'];
const weekend = ['sat', 'sun'];
console.log([...week, ...weekend]);

week.push(...weekend);
console.log(week);




//arrow function
// function Counter(){
//     this.count = 0;
//     setInterval(function(){
//         console.log(this.count++)
//     }, 1000);
// }
// new Counter();

// setInterval(() => {
//     console.log(this);
//     console.log(this.count++);
// }, 1000);




//string manipulation
let name1 = 'Colby';
console.log('My name is ' + name1);
console.log(`My name is ${name1}`);

console.log(`2 + 2 = ${2+2}`);

for(let c of 'Mastering Node.js'){
    console.log(c);
}
console.log([...'Mastering Node.js']);




//process object
const size = process.argv[2];
const n = process.argv[3] || 100;
const buffers = [];

for(i=0; i <n; i++){
    buffers.push(Buffer.alloc(size));
    process.stdout.write(process.memoryUsage().heapTotal + "\n");
}
//run this with node process.js 1000000 100