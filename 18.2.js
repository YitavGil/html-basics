// 1. Change the h1 color to blue.
const h1Elements = document.getElementsByTagName("h1");

for(let i = 0; i < h1Elements.length; i++) {
   h1Elements[i].style.color = "blue";
}

// change p to 30px

// const elements = document.getElementsByClassName("paragraph");
// for(el in elements) {
//     el.style.fontSize="1000px";
// }

const elements = document.getElementsByClassName("paragraph");
for(let i = 0; i < elements.length; i++) {
    elements[i].style.fontSize="30px";
}

//3. Change the description to an inline-block
const idBlock = document.getElementById("description");
for(let i = 0; i < idBlock.length; i++) {
    idBlock[i].style.display = "inline-block";
}

// 4. Change the body to a background color of green

const allGreen = document.getElementsByTagName("body");
for(let i = 0; i < allGreen.length; i++) {
    allGreen[i].style.background = "green";
 }

//5. Change the documents title from “Modifying Elements” to something else.

 document.title = "newTitle"
