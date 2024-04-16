function addInput() {
    // ������� ������������ div, ���� ������� �������
    var existingDiv = document.querySelector(".new-div");

    // ���� ������������ div ����������
    if (existingDiv) {
        // ���������, �������� �� input � ������������ div ��������
        var inputs = existingDiv.querySelectorAll(".input");
        var isEmpty = true;
        inputs.forEach(function(input) {
            if (input.value.trim() !== "") {
                isEmpty = false;
            }
        });
        if (isEmpty) {
            // ���� ��� input �����, �� ������� ����� div
            return;
        }
    }

    // ������� ������
    var addButton = document.querySelector(".button-add");

    // ������� ����� div
    var newDiv = document.createElement("div");
    newDiv.className = "new-div"; // ��������� ����� ������ div

    // ������� ����� input
    var newInput = document.createElement("input");
    newInput.className = "input";
    newInput.type = "text";
    newInput.placeholder = "Skill";

    // ��������� ����� input � ����� div
    newDiv.appendChild(newInput);

    // ������� ��� �������� ������ .filter-panel
    var filterPanel = document.querySelector(".filter-panel");

    var addButtonStyle = window.getComputedStyle(addButton);
    var addButtonOrder = addButtonStyle.getPropertyValue("order");

    newDiv.style.order = parseFloat(addButtonOrder);

    // ��������� ����� div ����� ������
    filterPanel.insertBefore(newDiv, addButton.nextSibling);

    // ����������� ���������� ����� ������ �� 1
    addButton.style.order = parseFloat(addButtonOrder) + 1;
}