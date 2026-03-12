const backgroundChanger = document.getElementById("backgroundChanger");
const lighter = document.getElementById("lighter")
const changeText = document.getElementById("changeText")
const click = document.getElementById("click")
const outer = document.getElementById("outer")

//today code 
const submitBtn = document.getElementById("submitBtn");
const output = document.getElementById("output");
console.log(userName)

//input event
submitBtn.addEventListener("click",(e)=>{
const userName = document.getElementById("userName").value;
    e.preventDefault();
    output.innerHTML=userName
})


click.addEventListener("click",()=>{
    const inner = document.createElement("div");
    inner.setAttribute("id","inner")
    inner.innerHTML="this is added after event"
    outer.appendChild(inner)
})



backgroundChanger.addEventListener("click",()=>{
    window.document.body.style.background="black"
    changeText.textContent="hello wolrd"
})
lighter.addEventListener("click",()=>{
    window.document.body.style.background="white"
    changeText.textContent="hello wolrd"
})