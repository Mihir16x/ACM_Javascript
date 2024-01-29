const uniqueID = document.getElementById('uniqueID') //returns one element
const classGroup = document.getElementsByClassName('diffrent') //returns array
const buttons = document.getElementsByTagName('button') //returns array 

uniqueID.style.textAlign = 'center' 
for(let i = 0; i < classGroup.length; i++){ //remove code to last lines
    classGroup[i].style.color = 'red'
    classGroup[i].textContent = "Wow Applied"
}

for(let i = 0; i < buttons.length; i++){ //iterating over an array to set properties for each object
    buttons[i].style.backgroundColor = 'yellow'
    buttons[i].style.fontSize = '10px'

}

//showing parents and children
console.log(buttons[0].parentElement)
console.log(document.body.children)

//creation new list element
const list = document.getElementById('list') //ask them to help me with it 
const newLi = document.createElement('li')
newLi.innerText = "BLALA"
list.appendChild(newLi)
newLi.classList.add('diffrent') //style did not applt :(