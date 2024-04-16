function addInput() {
    // Находим существующий div, если таковой имеется
    var existingDiv = document.querySelector(".new-div");

    // Если существующий div существует
    if (existingDiv) {
        // Проверяем, содержит ли input в существующем div значение
        var inputs = existingDiv.querySelectorAll(".input");
        var isEmpty = true;
        inputs.forEach(function(input) {
            if (input.value.trim() !== "") {
                isEmpty = false;
            }
        });
        if (isEmpty) {
            // Если все input пусты, не создаем новый div
            return;
        }
    }

    // Находим кнопку
    var addButton = document.querySelector(".button-add");

    // Создаем новый div
    var newDiv = document.createElement("div");
    newDiv.className = "new-div"; // Добавляем класс новому div

    // Создаем новый input
    var newInput = document.createElement("input");
    newInput.className = "input";
    newInput.type = "text";
    newInput.placeholder = "Skill";

    // Добавляем новый input в новый div
    newDiv.appendChild(newInput);

    // Находим все элементы внутри .filter-panel
    var filterPanel = document.querySelector(".filter-panel");

    var addButtonStyle = window.getComputedStyle(addButton);
    var addButtonOrder = addButtonStyle.getPropertyValue("order");

    newDiv.style.order = parseFloat(addButtonOrder);

    // Добавляем новый div после кнопки
    filterPanel.insertBefore(newDiv, addButton.nextSibling);

    // Увеличиваем порядковый номер кнопки на 1
    addButton.style.order = parseFloat(addButtonOrder) + 1;
}