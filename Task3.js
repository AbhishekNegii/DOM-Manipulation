//Selecting list-group-item by using getElementByClassName && querySelectorAll

const items2= document.getElementsByClassName('list-group-item');
console.log(items2);
const items1= document.querySelectorAll('.list-group-item');
console.log(items1)
items1.style.color='red'

//Changing the color of nth-Child

const secondChild= document.querySelector('.list-group-item:nth-Child(2)');
console.log(secondChild)

//Selecting the single element by querySelector

const title= document.querySelector('#main-header');
console.log(title)
title.style.border='solid 10px black'
const addItem=document.querySelector('.title')
console.log(addItem)
addItem.style.color='green'
addItem.style.fontSize='40px';
addItem.style.fontWeight='bold';






