// Object is collection in JavaScript
console.log("Object collection started here");
const MyObj = Object.create({
     name: "Adiljan",
     age: 22,
     phone: "0745180238"
})
console.log(MyObj.name)
console.log(MyObj.age)
console.log(+MyObj.phone)


// Another Way to create the obj;
const secondWay = Object.assign({}, {
     name: "AnotherName",
     age: 100,
     phone: "92323434434"
});
console.log(secondWay.name)
console.log(secondWay.age)
console.log(+secondWay.phone)


// obj  methods 

function about(relation, job) {
     console.log(this.name, this.age, relation, job)
}
const user1 = {
     name: "Adiljan",
     age: 22,
     job: "Programmer",
}
// obj  methods 
const user2 = {
     name: "Adiljan2",
     age: 32,
}
// call Method
about.call(user2, "Brother", "programmer");
// apply Method
about.apply(user2, ["brother", "bprogrammer"])
// bind Method
const AllDetails = about.bind(user1, "neighber", "jobless");
AllDetails()

// loop the array of object
// for in looop
for (let myUser in user1) {
     console.log(user1[myUser]);
}

const firstObj = {
     "user name": "brother",
     age: 20
}
console.log("this is keys");

// finding the Keys  of  an Object
// key method return the array
console.log(Object.values(firstObj))
console.log(Object.keys(firstObj));
const ArrOfObject = Object.keys(firstObj);
// checking  is the  object.keys return the Array or not
console.log(Array.isArray(ArrOfObject))  //true

for (const user of Object.keys(firstObj)) {
     console.log(firstObj[user])
}

// there are More object Properities and Methods
// but we Coverd the top of them which are Mostly Used
// In real world Applications



