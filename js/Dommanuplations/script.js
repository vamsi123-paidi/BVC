// console.log(window)


// const header = document.getElementById("header")
// console.log(header)
// header.style.color = "blue"
// header.style.background = "red"

// const classSelector = document.getElementsByClassName("classSelector");
// const arr = Array.from(classSelector)
// console.log(classSelector)

// arr.forEach((ele)=>{
//     ele.style.color="blue"
// })

// const h3 = document.getElementsByTagName("h3")
// console.log(h3)
// // h3[0].style.color="blue"
// const arrr = Array.from(h3)
// arrr.forEach((ele)=>{
//     ele.style.color="blue"
//     ele.style.background="red"
// }) 

// const classSelector = document.querySelector(".classSelector")
// console.log(classSelector)
// classSelector.style.color= "blue"

// const h3 = document.querySelector("h3")
// console.log(h3)
// h3.style.color= "blue"

// const classSelector = document.querySelectorAll(".classSelector")
// console.log(classSelector)

// classSelector.forEach((ele)=>{
//     ele.style.color="blue"
// })

// const h3 = document.querySelectorAll('h3')
// h3.forEach((ele)=>{
//     ele.style.color= "blue"
// })

const header = document.querySelector("#header")
const main = document.getElementById("main")
header.textContent = "hello adam!,how are U ?"
main.innerHTML = "<p>this is the innerHTML text</p>"

const outer = document.getElementById("outer")
const inner = document.createElement("div")
inner.setAttribute("class","inner")

inner.innerHTML ="<P>heelo</P>"

outer.appendChild(inner)

