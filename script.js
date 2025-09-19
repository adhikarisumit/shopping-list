const itemForm=document.getElementById('item-form');
const inputitem = document.getElementById('item-input');
const addBtn = document.getElementById('item_add_btn');
const filter = document.getElementById('filter');
const itemList = document.getElementById('itemlist');
const clear = document.getElementById('clear');

function addbtn(e) {
    e.preventDefault();
    const inputValue = inputitem.ariaValueMax.trim();//input value liyo
    if (inputitem === "") {
        alert("please Enter atleast one item")
        return;
    }
    const li = document.createElement('li')//li create garyo
    const text = document.createTextNode(inputValue);//li vitra ko lagi text 
    const btn = createButton('btn-list');//li vitra ko button(function)

    li.appendChild(text);//text lai li vitra halne
    li.appendChild(btn);//button lai li vitra halne
    itemList.appendChild(li);//li lai ul vitra halne
    inputitem.value='';
}
// button create garam
function createButton(classes) {
    const button = document.createElement('button');
    button.className = classes;
    const icon=createIcon('fa-solid fa-xmark');
    button.appendChild(icon);//icon lai button vitra haleko
    return button;
}

// Icon create garam
function createIcon(classes){
    const icon=document.createElement('icon');
    icon.className=classes;
    return icon;
}

itemForm.addEventListener('submit',addbtn());
