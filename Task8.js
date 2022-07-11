const form=document.getElementById('addForm');
const itemsList=document.getElementById('items');

//add eventListener to submit btn and del btn
form.addEventListener('submit', addItem);
itemsList.addEventListener('click', removeItem);


//function to add element
function addItem(e){
    e.preventDefault();

const newVar = document.getElementById('ip').value;
const li=document.createElement('li');
li.className='list-group-item';
li.appendChild(document.createTextNode(newVar));

//add del btn to newly added element
const delbtn=document.createElement('button');
delbtn.className='btn btn-danger btn-sm float-right delete';
delbtn.appendChild(document.createTextNode('X'));
li.appendChild(delbtn);
itemsList.appendChild(li);

//add edit btn to newly added element
const editbtn=document.createElement('button');
editbtn.className='btn btn-sm float-right edit';
editbtn.appendChild(document.createTextNode('edit'));
li.appendChild(editbtn);
itemsList.appendChild(li);
}


// funstion to delete element
function removeItem(e){
    if(e.target.classList.contains('delete')){
        console.log(1);
    if(confirm('Are you sure')){
       var li =e.target.parentElement;
       itemsList.removeChild(li)
    }
    }
}
