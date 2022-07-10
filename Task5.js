// Creating a new li element
const li=document.createElement('li')
li.appendChild(document.createTextNode('item5'))
const ul=document.querySelector('#items')
console.log(ul.appendChild(li))

// Changing the name of  newly added element and add className && ID
const lastEle=ul.lastElementChild;
lastEle.className='group-item';
lastEle.id='cars';
console.log(lastEle);

//Get last element by ID 
const ele=document.getElementById('cars');
console.log(ele)
ele.textContent='cars';

//Get newly added element by TagName
const eletag=document.getElementsByTagName('li')
console.log(eletag[4])
eletag[4].style.color='green'
