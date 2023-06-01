document.addEventListener("DOMContentLoaded", function () {
    showTodo();
});


var cardList = document.querySelectorAll('.card');
cardList = [].slice.call(cardList)

if (cardList) {
    cardList.forEach((card) => {
        var todo = card.querySelector('.todo');
        var tooltip = new bootstrap.Tooltip(todo, {
            title: todo.innerText
        });
    });
} else {};

var section = document.querySelector('.card-list');

function gridTodo(content) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.classList.add("card");
    card.innerHTML = `<div class="card-body d-flex justify-content-between align-items-center">
                        <div class="todo" data-bs-toggle="tooltip" data-bs-placement="top">${content}</div>
                        <button class="btn btn-danger">Remove</button>
                    </div>`
    section.insertBefore(card, section.firstChild);
}

function addOnTodo() {
    var input = document.querySelector(".form-control");
    var inputData = input.value;

    gridTodo(inputData)

    section.insertBefore(card, section.firstChild);

    var existingData = localStorage.getItem("card");
    if (existingData) {
        inputData = inputData + "," + existingData;
    }
    localStorage.setItem("card", inputData);

    input.value = "";
}


function showTodo() {
    var existingData = localStorage.getItem("card");
    var inputList = existingData.split(",");
    inputList.forEach((inputData) => {
        gridTodo(inputData)
    })
}

const addOnBtn = document.getElementById("button-addon");
addOnBtn.addEventListener("click", addOnTodo);