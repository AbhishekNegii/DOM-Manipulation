//2nd Item bg green
const secItem=document.querySelector('.list-group-item:nth-Child(2)');
console.log(secItem)
secItem.style.backgroundColor='green';

//3rd Item invisible
const thirdItem=document.querySelector('.list-group-item:nth-Child(3)');
console.log(thirdItem)
thirdItem.style.visibility='hidden';

//Selecting Odd ele
const odd=document.querySelectorAll('.list-group-item:nth-Child(odd)')
console.log(odd)
for(let i=0;i<odd.length;i++)
{
    odd[i].style.color='yellow'
}

//Selecting 2nd Item using querySelectorAll
const secEle=document.querySelectorAll('.list-group-item')
console.log(secEle)
secEle[1].style.color ='orange'

