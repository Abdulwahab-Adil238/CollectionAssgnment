// NodeList
const PrintElm = (pri, sec) => {
     for (const elem of NodeList) {
          console.log('element =', elem);
     }
     console.log(pri, sec)

}
const NodeList = document.querySelectorAll('p');
PrintElm.call(NodeList, "Primary", "Secondary")
PrintElm.apply(NodeList, ["Primary ,  secondry"])
console.log(NodeList.length);

const styleParagraphs = () => {
     for (const paragraph of NodeList) {
          paragraph.style.backgroundColor = "deeppink"
          paragraph.style.color = 'white'
          paragraph.style.fontSize = '1.4rem'
          paragraph.style.textAlign = 'center'
          paragraph.style.fontFamily = "sans-serif"
          paragraph.style.borderRadius = '1rem'
          paragraph.style.border = "none"
          paragraph.style.outline = "none"
          paragraph.style.padding = "1rem 3rem"
          paragraph.style.margin = "1rem 4rem"
     }
}
styleParagraphs.call(NodeList);
