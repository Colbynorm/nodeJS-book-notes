//async/await
const db = {
    getFullName: Promise.resolve('Colby Norman'),
    getAddress: Promise.resolve('123 Main St'),
    getFavorites: Promise.resolve('Lean')
}

async function profile(){
    let fullName = await db.getFullName;
    let address = await db.getAddress;
    let favorites = await db.getFavorites;

    return {fullName, address, favorites};
}

profile().then(res => console.log(res));

//try/catch with async
async function makeError(){
    try{
        console.log(`This doesn't exist`);
    }catch(error){
        console.error(error);
    }
}
makeError();



//generators and iterators
function* threeThings(){
    yield 'one';
    yield 'two';
    yield 'three';
}

let tt = threeThings();

console.log(tt);
console.log(tt.next());
console.log(tt.next());
console.log(tt.next());
console.log(tt.next());


function demoIterator(arr){
    let idx = 0;
    return {
        next: () => {
            return idx < arr.length ? {
                value: arr[idx++],
                done: false
            } : {done: true};
        }
    };
}
let it = demoIterator(['one', 'two', 'three']);
console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());



function getArraySomehow(){
    //slice into a copy; dont send original
    return ['one', 'two', 'three', 'four', 'five'].slice(0);
}
let state = getArraySomehow();
for(let x=0; x < state.length; x++){
    console.log(state[x].toUpperCase());
}



function* liveData(){
    let state = ['one', 'two', 'three', 'four', 'five'];
    let current;
    while(current = state.shift()){
        yield current;
    }
}
let list = liveData();
let item;
while(item = list.next()){
    if(!item.value){
        break;
    }
    console.log('generated: ', item.value);
}



function* range(start=1, end=2){
    do{
        yield start;
    }while(++start <= end)
}
for(let num of range(1, 3)){
    console.log(num);
}