const UnUniqueArr = [1, 1, 1, 2, 3, 4, 232, 44, 5, 2, 2, 2, 2, 4, 3, 4, 4, 43, 3];
// set is used for getting the unique element
const uniqueArr = new Set(UnUniqueArr);
uniqueArr.add = "prR"
uniqueArr.forEach((elem => {
     console.log('forEach loop', elem)
}))
console.log(" checking is 2 exist or not", uniqueArr.has(2));
console.log("keys", uniqueArr.keys())
console.log(uniqueArr.size)
console.log(uniqueArr.values())
console.log("element deleted", uniqueArr.delete(1));

console.log(uniqueArr)