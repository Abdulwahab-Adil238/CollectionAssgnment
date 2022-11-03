
// in Javascript by map constructor we Can 
// Add the Keys , in every types we want

const myMap = new Map();
// setting the value
myMap.set([{ programmer: "Adil", best: "web development" }], "user")
myMap.set({ programmer: "Adil" }, "user")
myMap.set("programmer", "best");
console.log(myMap)
// getting  value
console.log(myMap.get("programmer"))
myMap.delete("Programmer")
// gettting the keys of the object
console.log(myMap.keys())
for (const key of myMap.keys()) {
     console.log(myMap[key])
}
console.log('this is the keys of the map')
console.log(myMap.keys());
// Getting the values of the map
console.log(myMap.values())
// getting the size of the map
console.log(myMap.size)

// gettting the info about the value which is exist or not
console.log(myMap.has("programmer"))
console.log("Programmer Key deleted", myMap.delete("programmer"))
