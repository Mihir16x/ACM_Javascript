//As we saw in DOM , document is 
//const uniqueID = document.getElementById('uniqueID') //returns one element
// console.log(uniqueID)

// const classGroup = document.getElementsByClassName('diffrent') //returns array
// for(let i = 0; i < classGroup.length; i++){
//     console.log(classGroup[i])
// }

// const buttons = document.getElementsByTagName('button') //returns array 
// for(let i = 0; i < buttons.length; i++){
//     console.log(buttons[i])
// }



//Modification .style

// uniqueID.style.textAlign = 'center' 
// uniqueID.style.color = 'green' 


// for(let i = 0; i < classGroup.length; i++){ //remove code to last lines
//     classGroup[i].style.backgroundColor = 'red'
   
// }




//Modifications nonStyle
// for(let i = 0; i < buttons.length; i++){ //iterating over an array to set properties for each object
//     buttons[i].innerText = 'yellow'

// }



// // value + onclick
// const buttons = document.getElementsByTagName('button')
// buttons[0].onclick = ()=>{
//     const text = document.getElementById('ourText')
//     console.log(text.value)
// }








// //showing parents and children
// const buttons = document.getElementsByTagName('button')
// console.log(buttons[0].parentElement)
// console.log(document.body.children)


// //creation new list element

// const newLi = document.createElement('li')
// newLi.innerText = "BLALA"

// // appending + parent (Not forget to uncom element crearion)
// const list = document.getElementById('list') //ask them to help me with it 
// list.appendChild(newLi)
