document.addEventListener("DOMContentLoaded", function () {
    readTodo();
});

var section = document.querySelector('.card-list');

function gridTodo(content) {
    var card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card-body d-flex justify-content-between align-items-center">
                        <div class="todo" data-bs-toggle="tooltip" data-bs-placement="top">${content}</div>
                        <button class="btn btn-danger">Remove</button>
                    </div>`

    var todo = card.querySelector('.todo');
    var tooltip = new bootstrap.Tooltip(todo, {
        title: todo.innerText
    });

    section.insertBefore(card, section.firstChild);

    return card;
}

function createTodo() {
    var input = document.querySelector(".form-control");
    var inputData = input.value;

    var card = gridTodo(inputData);

    section.insertBefore(card, section.firstChild);

    var existingData = localStorage.getItem("card");
    if (existingData) {
        inputData = existingData + "," + inputData;
    }
    localStorage.setItem("card", inputData);

    input.value = "";
}


function readTodo() {
    var existingData = localStorage.getItem("card");
    var inputList = existingData.split(",");
    console.log(inputList);
    inputList.forEach((inputData) => {
        gridTodo(inputData)
    })
}


var createBtn = document.getElementById("button-addon");
createBtn.addEventListener("click", createTodo);