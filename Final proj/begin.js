const btn = document.getElementById('creating')
btn.onclick = function randomColor(){
    
    const input = document.getElementById('ourText')
    const list =  document.getElementById('list')
    if(input.value !== ""){
        const span = document.createElement('span')
        const deleteBtn = document.createElement('button')
        const newLi = document.createElement('li')
        const completeBtn = document.createElement('button')
        const back = random()
        newLi.style.backgroundColor = back
        newLi.style.listStyle = 'none';
        deleteBtn.innerText = "delete"
        completeBtn.innerText = 'complete'
        span.innerText=input.value
        span.style.color = 'white'
        newLi.appendChild(span)
        newLi.appendChild(completeBtn)
        newLi.appendChild(deleteBtn)
        list.appendChild(newLi)
        deleteBtn.onclick = function(){
            newLi.remove()
        }

        completeBtn.onclick = function(){
            if (span.style.textDecoration === 'line-through') {
                span.style.textDecoration = 'none';
            } else {
                span.style.textDecoration = 'line-through';
            }   
        }
        input.value = '';

    } else {
        alert("Your task is empty")
    }
}
function random() {
    const r = Math.floor(Math.random()*255)
    const g = Math.floor(Math.random()*255)
    const b = Math.floor(Math.random()*255)
    const color = `rgb(${r}, ${g}, ${b})`
    return color
}

