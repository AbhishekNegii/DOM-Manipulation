//Add HEllo world before itemLister
const div=document.createElement('div');
 div.append(document.createTextNode('HEllo World'));
const title=document.querySelector('#header-title')
console.log(title)
const header=document.querySelector('.container');
console.log(header)
header.insertBefore(div,title)

//Add HEllo World before item list
const groupItem=document.querySelector('#items')
groupItem.innerHTML='<li>HEllo World</li>' + groupItem.innerHTML
