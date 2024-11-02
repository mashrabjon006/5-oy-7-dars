const button = document.querySelector("#btn");
const block = document.querySelector("#block");
const username = document.querySelector("#username"); 
const surname = document.querySelector("#surname");

function createCard(data) {
    return `
    <div class="card">
        <h3>${data.name}</h3>
        <h4>${data.surname}</h4>
    </div>
    `;
}

button && button.addEventListener("click", function (event) {
    event.preventDefault();
    let data = {
        name: username.value,
        surname: surname.value,
    };
    let card = createCard(data);
    block.innerHTML += card;

    username.value = '';
    surname.value = '';
});
