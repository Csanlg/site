const cont = document.querySelector(".container"); // Контейнер элементов item
const item = document.querySelector(".item");
const itemId = document.querySelector("#item");
const addButton = document.querySelector(".add_button"); // Кнопка добавления карточек
const modalBtn = document.querySelector(".modal_btn");// Кнопка 
const modal_name = document.querySelector(".modal_input.name"); // Кнопка 

const arrayName = [];


// Вызов формы заполнения
function createCard() {
    idHt = "#openModal"
    location.href = idHt // Вызываем окно
}

// Кнопка добавления карты
addButton.addEventListener("click", () => {
    createCard();
});

// Создание карточек 
modalBtn.addEventListener("click", () => {
    const name = modal_name.value
    const itemQuantity = document.querySelectorAll('.item').length; // Получаем количество классов item для нумерации новых карточек

    // Создание первой карточки
    if (itemQuantity === 0 && name !== '') {
        const card = document.createElement("div");
        card.className = `item ${itemQuantity}`;
        card.textContent = name;
        card.id = `item ${itemQuantity}`;
        cont.appendChild(card);
        arrayName.push(name);
        window.open("http://127.0.0.1:5500/Authorization/SecondPage/profile.html#close", "_self")

    }
    
    // Создание карточки с проверкой повторения
    for(i = 0; i !== itemQuantity; i++) {
        const array = arrayName.includes(name); // Проверка наличия элемента в item(array)

        if (!array && name !== '') {
            const card = document.createElement("div");
            card.className = `item ${itemQuantity}`;
            card.textContent = name;
            card.id = `item ${itemQuantity}`;
            cont.appendChild(card);
            arrayName.push(name);
            window.open("http://127.0.0.1:5500/Authorization/SecondPage/profile.html#close", "_self")
        }
    }
});


itemQunt2 = document.querySelectorAll('#item')
itemQunt = document.querySelectorAll('.item')

document.querySelectorAll('.item').forEach(el => {
    el.addEventListener('click', () => {
        const nameItem = el.classList;
        const nameId = el.id

        if (nameItem.value.indexOf('active') < 0) {
            el.className = nameItem.value + ' active_item';
        } else {el.className = nameId}

    });
})

