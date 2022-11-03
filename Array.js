// Array is A collection in Javascript and have alot of inbuild Methods


const myArrCollection = [1, 23, 4, 4, 55, 4, "Adiljan", "Baloch"];

//   Map Method
myArrCollection.map((elem, index) => {
     return console.log(`[${index}] =  ${elem}`);

})

// reverse Method
const reversArr = myArrCollection.reverse();
console.log(reversArr)

// concat Method
const AnotherArr = [10, 20, 30];
const newArr = myArrCollection.concat(AnotherArr);
console.log(newArr)

// forEach Method

myArrCollection.forEach((elem) => {
     return console.log(elem);
})

// Every Method
const resOfEveryMethod = myArrCollection.every((elem) => {
     return elem > 0;
});
console.log(resOfEveryMethod)


// At method 
// return the element of the index we passing to it
const myElm = myArrCollection.at(0);
console.log(myElm)

const newEmArr = [];
const newCopyedArr = myArrCollection.copyWithin("best", 2, 5);
console.log(newCopyedArr)

// fill Method
myArrCollection.fill("newEntery", 0, 3);
console.log(myArrCollection)

// filter method of the array
const fileterOfArr = myArrCollection.filter((elem, index) => {
     return elem > 10;
})
console.log("filter elem  =  ", fileterOfArr);

// find method
const elem_55 = myArrCollection.find((elem) => {
     return elem == 55;
})
console.log(elem_55)

// findding the index of the elem
const indexofElem = myArrCollection.findIndex((ele) => {
     return ele == 23;
})
console.log(indexofElem)

const flotedArr = [123, 23, [233, 234, [2342, 23, 4234]]];


const res = flotedArr.flat(3);
console.log("unfloated = ", res)

const JoinedArr = myArrCollection.join('.');
console.log(JoinedArr)

// there are more Methods of the Arr in Javascript
// ..........






