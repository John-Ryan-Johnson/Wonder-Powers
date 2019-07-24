 
 const flightHandlerFunction = (event) => {
   document.querySelector("#flight").classList.toggle("disabled")
   document.querySelector("#flight").classList.toggle("enabled")
 }

 document.querySelector("#activate-flight").addEventListener("click", flightHandlerFunction)

 
 const mindReadingHandlerFunction = (event) => {
   document.querySelector("#mindreading").classList.toggle("disabled")
   document.querySelector("#mindreading").classList.toggle("enabled")
 }

 document.querySelector("#activate-mindreading").addEventListener("click", mindReadingHandlerFunction)

 
 const xrayHandlerFunction = (event) => {
   document.querySelector("#xray").classList.toggle("disabled")
   document.querySelector("#xray").classList.toggle("enabled")
 }

 document.querySelector("#activate-xray").addEventListener("click", xrayHandlerFunction)

 
const collectionOfSections = document.querySelectorAll(".power")
const activateAllHandlerFunction = (event) => {
  collectionOfSections.forEach(section => {
    section.classList.remove("disabled")
    section.classList.add("enabled")
  })
}

document.querySelector("#activate-all").addEventListener("click", activateAllHandlerFunction)

const deactivateAllHandlerFunction = (event) => {
  collectionOfSections.forEach(section => {
    section.classList.add("disabled")
    section.classList.remove("enabled")
  })
}
document.querySelector("#deactivate-all").addEventListener("click", deactivateAllHandlerFunction) 


