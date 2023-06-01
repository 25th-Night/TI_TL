
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

var storageTodoData = new Array();

var section = document.querySelector('.card-list');

function addOnTodo() {
    var input = document.querySelector(".form-control");
    var inputData = input.value;
    console.log(inputData)
    var card = document.createElement("div");
    card.classList.add("card");
    card.innerHTML = `<div class="card-body d-flex justify-content-between align-items-center">
                        <div class="todo" data-bs-toggle="tooltip" data-bs-placement="top">${inputData}</div>
                        <button class="btn btn-danger">Remove</button>
                    </div>`
    section.insertBefore(card, section.firstChild);
    storageTodoData.push(inputData);
    localStorage.setItem("ToDo", storageTodoData)
    input.value = "";
}

const addOnBtn = document.getElementById("button-addon");
addOnBtn.addEventListener("click", addOnTodo);