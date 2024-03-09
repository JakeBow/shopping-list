const addText = document.getElementById("add-text");
const addBtn = document.getElementById("add-btn");
const clearAllBtn = document.getElementById("clear-all-btn");
const clearCheckedBtn = document.getElementById("clear-checked-btn");
const itemList = document.getElementById("item-list");
const checkedList = document.getElementById("checked-list");

function addItem() {
    const newItemText = addText.value.trim();
    if (newItemText !== "") {
        const newItem = `
        <div>
            <input name="list-item" type="checkbox" class="checkbox" onchange="toggleChecked(this)">
            <span>${newItemText}</span><br>
        </div>`;
        
        itemList.innerHTML += newItem;
        addText.value = "";
    }
}

document.addEventListener("keydown", (event)=> {
    let keyCode = event.keyCode ? event.keyCode : event.which;
    if (keyCode === 13) {
        event.preventDefault();
        addBtn.click();
    }
} )

function toggleChecked(checkbox) {
    const item = checkbox.parentNode;
    if (checkbox.checked) {
        checkedList.appendChild(item);
    } else {
        itemList.appendChild(item);
    }
}

function clearAll() {
    itemList.innerHTML = "";
    checkedList.innerHTML ="";
}

function clearChecked(itemList) {
    checkedList.innerHTML ="";
}