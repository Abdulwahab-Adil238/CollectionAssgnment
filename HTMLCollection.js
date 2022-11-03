// this is used when we working with Dom in js 
// we can get the HtmlCollection using the below two selectors
// 1-document.getElementsByClassName
// 2-document.getElementsByTagName

// this htmlCollection is aRRaY Of object it mean we can just print index ,&lenght
// and we can loop them 
const myParagrams = document.querySelectorAll('.myparagram')
// console tell as this variable is the htmlcollection

for (let i = 0; i < myParagrams.length; i++) {
     console.log(i, "=", myParagrams[i]);
}
for (const paragraph of myParagrams) {
     console.log(paragraph)
}
const MyPara = document.getElementsByTagName("p")
for (const paragraph of MyPara) {
     paragraph.style.backgroundColor = "deeppink"
     paragraph.style.color = 'green'
     paragraph.style.fontSize = '1rem'
     paragraph.style.textAlign = 'center'
     paragraph.style.fontFamily = "sans-serif"
     paragraph.style.borderRadius = '1rem'
     paragraph.style.border = "none"
     paragraph.style.outline = "none"
     paragraph.style.padding = "1rem 3rem"
     paragraph.style.margin = "1rem 4rem"
}
for (let i = 0; i < MyPara.length; i++) {
     console.log(MyPara[i]);
}
console.log(myParagrams.length)
myParagrams.forEach((elem, index) => {
     console.log(index, "=", elem)
})