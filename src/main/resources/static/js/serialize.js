document.addEventListener('DOMContentLoaded', function() {
    // Получаем нужный div, например, по его классу
    var specificDiv = document.querySelector('.filter-wrapper');

    // Находим все поля формы внутри этого div, которые нужно сохранить
    var fieldsToSave = specificDiv.querySelectorAll('input[type="text"], input[type="checkbox"], input[type="radio"], select');

    // Проходимся по каждому полю и сохраняем его значение в localStorage
    fieldsToSave.forEach(function(field) {
        // Создаем ключ для сохранения значения поля в localStorage (например, используя id поля)
        var key = field.id;

        // Получаем значение поля из localStorage (если оно уже сохранено)
        var savedValue = localStorage.getItem(key);

        // Если значение найдено в localStorage, устанавливаем его для поля формы
        if (savedValue !== null) {
            if (field.type === 'checkbox' || field.type === 'radio') {
                // Если это чекбокс или радиокнопка, проверяем совпадение значений и устанавливаем состояние
                field.checked = field.value === savedValue;
            } else {
                // В остальных случаях устанавливаем текстовое значение поля
                field.value = savedValue;
            }
        }

        // Добавляем обработчик события input для сохранения его значения в localStorage при каждом изменении
        field.addEventListener('input', function() {
            if (field.type === 'checkbox' || field.type === 'radio') {
                // Если это чекбокс или радиокнопка, сохраняем их значение, если они отмечены
                if (field.checked) {
                    localStorage.setItem(key, field.value);
                } else {
                    // Если они не отмечены, удаляем значение из localStorage
                    localStorage.removeItem(key);
                }
            } else {
                // Для других полей сохраняем их текущее значение
                localStorage.setItem(key, field.value);
            }
        });
    });
});
