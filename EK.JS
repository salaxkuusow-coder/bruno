//click and double Event

const clickbt = document.getElementById("clickBtn")
const clickoutput = document.getElementById("clickOutput")
const dlcclick = document.getElementById("dblClickBtn")

//click

clickbt.addEventListener("click",function(){
    clickoutput.textContent = "Button clicked"
})
//double click

dlcclick.addEventListener("dblclick",()=>{
    clickoutput.textContent = "Button Double Clicked"
})
//mouseover,mouseout,mouseenter,mouseleave

let mouseoverbox = document.getElementById("hoverBox")
let houveroutput =  document.getElementById("hoverOutput")

//mouseover
mouseoverbox.addEventListener("mouseover",()=>{
    mouseoverbox.style.background = "blue"
})
//mouseout

mouseoverbox.addEventListener("mouseout",()=>{
    mouseoverbox.style.background= "green"
})

//mouseenter

mouseoverbox.addEventListener("mouseenter",()=>{
    houveroutput.textContent = "mouse entered the box"

})

//mouseleave

mouseoverbox.addEventListener("mouseleave",function(){
    houveroutput.textContent = "Mouse leaves the box"
})

//Focus and blur
let focusInput = document.getElementById("focusInput")
let focusoutput = document.getElementById("focusOutput")
//focus event
focusInput.addEventListener("focus",()=>{
    focusoutput.textContent = "Input field is Active"
})

//blur Evenet

focusInput.addEventListener("blur",()=>{
    focusoutput.textContent = "Input fiels is inActive or loss focus"
})

//Input and change Event

let inputL = document.getElementById("liveInput")
let select = document.getElementById("selectInput")
let inputout = document.getElementById("inputOutput")
//input

inputL.addEventListener("input",(event)=>{
    inputout.textContent = `${event.target.value}`
})

//change event

select.addEventListener("change",(e)=>{
    inputout.textContent = `${e.target.value}`
})
//keyboard event

let keyinput = document.getElementById("keyInput")
let keyoutput = document.getElementById("keyOutput")
keyinput.addEventListener("keydown",(event)=>{
    keyoutput.textContent = `${event.key}`
})
//scroll event

let scrolcontent = document.getElementById("scrollContent").parentElement;
let scroloutput = document.getElementById("scrollOutput")
scrolcontent.addEventListener("scroll",()=>{
    scroloutput.innerHTML = "scrolling........"
    scroloutput.style.background = "yellow"
})

//Customized Right-Click

let contextmenue = document.getElementById("contextBox")
let contxtoutput = document.getElementById("contextOutput")
contextmenue.addEventListener("contextmenu",(event)=>{
    event.preventDefault();
    contxtoutput.textContent = "Customized right Click"
})



//      Event delaction

 let delegationList = document.getElementById("delegationList")
let  delegationOutput = document.getElementById("delegationOutput")
 
 delegationList. addEventListener("click", (e)=>{
    if (e.target.tagName === "LI"){
       delegationOutput.textContent = `${e.target.textContent}`
    }
 })