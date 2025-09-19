// alert("hello world")
const addbtn = document.getElementById("addbtn")
const itemForm = document.getElementById("item-form")
const inputForm = document.getElementById("input-form")
const itemlist = document.getElementById("item-list")
const value = document.getElementById('value')
const clearAll = document.getElementById('clear-all')
// console.log(addbtn)
// console.log(`this is html before function ${inputForm.value}`)
function addItem(e) {
    e.preventDefault();
    // console.log(`function ${inputForm.value}`)
    const inputValue = inputForm.value;
    if (inputValue === '') {
        alert("Please add the item")
        return
    }
    // let div = document.createElement("div")
    // div.id = "value"
    // // console.log(div)

    // div.textContent = inputValue
    // console.log(div)
    // div.appendChild(div)
    // console.log("click")

    const li = document.createElement('li');
    // const button = document.createElement('button')
    // const icon = document.createElement('icon')
    // button.classList.add('btn-list')
    // icon.classList.add('fa-solid', 'fa-xmark')
    // button.appendChild(icon)

    const button = createButton("btn-list")

    // console.log(li)
    const text = document.createTextNode(inputValue)
    li.appendChild(text)
    li.appendChild(button)
    itemlist.appendChild(li);
    inputForm.value = '';

}

function createButton(classes) {

    const button = document.createElement('button')
    button.className = classes
    //  <button class="btn-list"></button>
    const icon = createIcon('fa-solid fa-xmark')
    button.appendChild(icon)
    //  <button class="btn-list">
    // < i class='fa-solid fa-xmark' ></ >
    // </button>
    return button

}

function createIcon(classes) {

    const icon = document.createElement('icon')
    icon.className = classes
    return icon

    // < i class='fa-solid fa-xmark' ></ >


}



function clearItems() {
    itemlist.innerHTML = ''

}

function removeItem(e) {

    const btn = e.target.parentElement
    // console.log(btn)
    //yedi class ma btn-list xa vaney maatra delete garney
    if (btn.classList.contains('btn-list'))
        btn.parentElement.remove()




}

itemlist.addEventListener("click", removeItem)
itemForm.addEventListener("submit", addItem)
clearAll.addEventListener("click", clearItems)