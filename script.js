// Получаем ссылки на элементы страницы
let dc = document;
let bd = dc.body;
let blockInput = dc.querySelector(".block-input");
let blocksContainer = dc.querySelector(".blocks-container");
let deletBtn = dc.querySelectorAll(".block-close-btn");
let addBlock = dc.querySelector(".add-block-btn");
let blocks = dc.querySelectorAll(".block");
let InputTextLabel = dc.querySelector(".block-input-label");

deletBtn.forEach((button) => {
  button.addEventListener("click", () => {
    const block = button.parentElement;
    block.remove();
  });
});

//?______________________New Block________________
addBlock.addEventListener("click", function () {
  let blockName = blockInput.value;
  if (blockName !== "") {
    // Создаем новый элемент блока
    let newBlock = dc.createElement("div");
    newBlock.className = "block";
    // Создаем h2 элементы
    let h2Block = dc.createElement("div");
    h2Block.className = "block-h2"; //Ставим название блока
    h2Block.innerHTML =
      blockInput.value.charAt(0).toUpperCase() + blockInput.value.slice(1);
    newBlock.appendChild(h2Block); // Добавляем h2 в блок
    // Создаем p элементы
    let pBlock = dc.createElement("div");
    pBlock.className = "block-p"; //Ставим название блока
    pBlock.innerHTML = "18:44"; //Стваим слова в блоке p
    newBlock.appendChild(pBlock); // Добавляем p в блок
    // Создаем кнопку удаления блока и добавляем ее к блоку
    let deleteButton = dc.createElement("button");
    deleteButton.className = "block-close-btn";
    deleteButton.addEventListener("click", function () {
      newBlock.remove(); // Удаляем блок при нажатии на кнопку
    });
    newBlock.appendChild(deleteButton); // Добавляем кнопку в блок
    blockInput.value = ""; // Очищаем поле ввода
    blocksContainer.appendChild(newBlock); // Добавляем блок в контейнер
    blockInput.style.borderColor = "#007fff"; //Возврашем цвет наместо
    blockInput.placeholder = "New block name ?";
  } else {
    InputTextLabel.style.display = "flex";
    blockInput.style.borderColor = "red";
    addBlock.style.opacity = "0.5";
    addBlock.style.pointerEvents = "none";
    blockInput.addEventListener("click", function () {
      InputTextLabel.style.display = "none";
      blockInput.style.borderColor = "black";
      addBlock.style.cursor = "pointer";
      addBlock.style.pointerEvents = "auto";
      addBlock.style.opacity = "1";
    });
  }
});

//!________Dragula_________________________________
dragula([dc.querySelector(".blocks-container")]);
