function applyFilter() {
    var filterUrl = generateFilterUrl(); // Ваша функция генерации URL
    window.location.href = filterUrl; // Перенаправление на сгенерированный URL
}

// Функция для сброса фильтра и очистки localStorage
function resetFilter() {
    // Очистка localStorage
    localStorage.clear();
    // Восстановление первоначального URL (например, перенаправление на главную страницу)
    window.location.href = "/fpmi/resume/list";
}

var resetFilterButton = document.getElementById('clearFilterAndUrl');

resetFilterButton.addEventListener('click', resetFilter);