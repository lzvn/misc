let input;
let addBtn;
let delBtn;
let resetBtn;
let todoList;
let selectedItemDisplay;
let selectedItem = null;
let index = -1;
const selectedMarker = "disc";
const unselectedMarker = "circle";

document.addEventListener("DOMContentLoaded", () => {

    input = document.getElementsByName("todoInput")[0];
    addBtn = document.querySelector(".addBtn");
    delBtn = document.querySelector(".delBtn");
    resetBtn = document.querySelector(".resetBtn");
    todoList = document.querySelector(".todoList");
    selectedItemDisplay = document.querySelector(".selectedItemDisplay");

    input.focus();

    addBtn.addEventListener("click", () => {

        if(input.value === "") {
            return;
        }

        let newItem = document.createElement("li");
        newItem.style.listStyleType = unselectedMarker;
        
        //adiciona o método que marca a linha selecionada
        newItem.addEventListener("click", (event) => {
            if(selectedItem !== null && event.target.style.listStyleType === selectedMarker) {
                return;
            }
            if(selectedItem !== null) {
                selectedItem.style.listStyleType = unselectedMarker;
            }

            selectedItem = event.target;
            selectedItem.style.listStyleType = selectedMarker;
            
            index = Array.prototype.indexOf.call(todoList.children, selectedItem);
            selectedItemDisplay.innerText = index+1;
        });

        newItem.innerText = input.value;
        if(index < 0) {
            todoList.appendChild(newItem);
        } else {
            todoList.insertBefore(newItem, todoList.children[index]);
        }
        input.value = "";
    });

    input.addEventListener("keydown", (event) => {
        if(event.key==="Enter") {
            addBtn.click();
        }
    });

    delBtn.addEventListener("click", () => {
        if(selectedItem===null) {
            return;
        }
        todoList.removeChild(selectedItem);
        resetBtn.click();
    });

    resetBtn.addEventListener("click", () => {
        if(selectedItem !== null) {
            selectedItem.style.listStyleType = unselectedMarker;
        }
        selectedItemDisplay.innerText = "None";
        selectedItem = null;
        index = -1;
    });
});