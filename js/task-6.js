function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")}`;
}

function createBoxes(amount) {
    const fragment = document.createDocumentFragment();

    for (let i = 0; i < amount; i++) {
        const size = 30 + i * 10;
        const box = document.createElement("div");
        box.style.backgroundColor = getRandomHexColor();
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        fragment.appendChild(box);
    }

    document.querySelector("#boxes").appendChild(fragment);
    clearInput();
}

function clearBoxes() {
    document.querySelector("#boxes").innerHTML = "";
}

function clearInput() {
    document.querySelector("#controls input[type='number']").value = "";
}

document
.querySelector("#controls button[data-create]")
.addEventListener("click", function () {
    const number = document.querySelector("#controls input[type='number']");
    if (parseInt(number.value) >= 1 && parseInt(number.value) <= 100) {
        clearBoxes();
        createBoxes(parseInt(number.value));
    }
});

document
.querySelector("#controls button[data-destroy]")
.addEventListener("click", function () {
    clearBoxes();
});
