document.addEventListener("DOMContentLoaded", function () {
    readTodo();
});

var headerTitle = document.querySelector(".header-title");
headerTitle.addEventListener("click", () => {
    window.location.href = "/"
})

var section = document.querySelector('section');

function renderTodo(content) {
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
    var input = document.querySelector("input");
    var inputData = input.value;

    if (inputData.trim() == "") {
        alert("빈 값은 입력할 수 없습니다. 다시 확인해주세요.")
        return;
    }

    var card = renderTodo(inputData);

    section.insertBefore(card, section.firstChild);

    var existingData = localStorage.getItem("card");
    if (existingData) {
        inputData = existingData + "," + inputData;
    }
    localStorage.setItem("card", inputData);

    input.value = "";
}

var createBtn = document.getElementById("button-addon");
createBtn.addEventListener("click", createTodo);


function readTodo() {
    var existingData = localStorage.getItem("card");
    if (existingData) {
        var inputList = existingData.split(",");
        inputList.forEach((inputData) => {
            renderTodo(inputData)
        })
    }
}


function deleteTodo(event) {
    var deleteBtn = event.target;
    var card = deleteBtn.closest('.card');

    var cardIndex = [...section.children].indexOf(card);

    var existingData = localStorage.getItem("card");
    if (existingData) {
        var inputList = existingData.split(",");
        inputList.splice(-cardIndex-1, 1);
        existingData = inputList.join(",");
        localStorage.setItem("card", existingData);
    }
    
    card.remove();
}

section.addEventListener("click", function(event) {
    if (event.target.classList.contains("btn-danger")) {
        deleteTodo(event);
    }
});