const ulList = document.getElementById('list')
const btn = document.getElementById('creating')
const div = document.getElementsByTagName('div')
const input =  document.getElementById('ourText')


div[0].style.position = 'fixed';
div[0].style.top = '50%';
div[0].style.left = '50%';
div[0].style.transform = 'translate(-50%, -50%)';

        function randomColor() {
            if (input.value !== '') {
                const r = Math.floor(Math.random() * 255);
                const g = Math.floor(Math.random() * 255);
                const b = Math.floor(Math.random() * 255);
                const newLi = document.createElement('li');
                const newSpan = document.createElement('span');
                const deleteBtn = document.createElement('button');

                newLi.style.backgroundColor = `rgb(${r},${g},${b})`;
                newSpan.innerText = input.value;
                newSpan.style.color = 'white'
                newLi.style.margin = '3px';
                newLi.style.listStyle = 'none';

                deleteBtn.innerText = 'Delete';

                newLi.appendChild(newSpan);
                newLi.appendChild(deleteBtn);
                ulList.appendChild(newLi);

                newLi.style.position = 'relative';
                newLi.style.display = 'flex';
                newSpan.style.flex = '1'; // Make the span take remaining space
                deleteBtn.style.marginLeft = '5px';

                deleteBtn.onclick = () => {
                    newLi.remove();
                };

                // Clear the input field
                input.value = '';
            } else {
                alert('Empty input');
            }
        }