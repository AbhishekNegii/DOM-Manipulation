//Selecting 3rd Element & change bg to Green

const thirdEle= document.querySelector('.list-group-item:nth-Child(3)')
console.log(thirdEle);
thirdEle.style.backgroundColor='green';


// Selecting all elements and using for loop change font style

const items=document.querySelectorAll('.list-group-item');
console.log(items);
for(let i=0;i<items.length;i++)
{
items[i].style.fontWeight='bold';
}
