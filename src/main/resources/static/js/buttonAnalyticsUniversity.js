document.addEventListener('DOMContentLoaded', function() {
    // Находим форму по ее селектору
    var filterForm = document.querySelector('.filter-wrapper'); // Замените 'yourFormSelector' на реальный селектор вашей формы
    // Добавляем обработчик события submit на форму
    filterForm.addEventListener('submit', preventFormSubmit);

    // Находим кнопку по id
    var applyFilterButton = document.getElementById('buttonAnalyticsUniversity');

    // Добавляем обработчик события клика на кнопку
    applyFilterButton.addEventListener('click', function() {
        // Генерируем URL с помощью функции generateFilterUrl()
        generateFilterUrl();
    });
});

function preventFormSubmit(event) {
    // Предотвращаем стандартное действие браузера (отправку формы)
    event.preventDefault();
}

function generateFilterUrl() {
    var baseUrl = "/fpmi/resume/excel-download/excel-skills-university?";

    // Получение значений полей

    var educationalInstitution = document.getElementById('educational').value;
    //var specialization = document.getElementById('specialization').value;
    //var graduationYear = document.getElementById('graduation_year').value;

    // Функция для добавления параметра к URL
    function addParameter(parameterName, parameterValue) {
        if (parameterValue !== "") {
            baseUrl += parameterName + "=" + parameterValue + "&";
        }
    }

    // Добавление параметров к URL
   // addParameter("educationalInstitution", educationalInstitution);
    //addParameter("specialization", specialization);
    //addParameter("graduationYear", graduationYear);

    var skills = [];

    // Находим все элементы с классом "input"
    var inputs = document.querySelectorAll(".input");

    // Проходим по каждому найденному элементу и добавляем его значение в массив навыков
    inputs.forEach(function(input) {
        // Получаем значение input и убираем лишние пробелы в начале и конце строки
        var skill = input.value.trim();

        // Проверяем, что значение навыка не пустое, перед добавлением его в массив
        if (skill !== "") {
            skills.push(skill);
        }
    });

    // Если один из параметров пуст, делаем кнопку красной на 2 секунды
    if (educationalInstitution === "" || skills.length === 0) {
        button.classList.add('red-button'); // Добавляем CSS класс для красной кнопки

        setTimeout(function() {
            button.classList.remove('red-button'); // Удаляем класс через 2 секунды
        }, 2000);
    }else{

        addParameter("university", educationalInstitution);
        addParameter("skills", skills);

        // Удаление последнего '&' в URL, если он есть
        if (baseUrl.endsWith("&")) {
            baseUrl = baseUrl.slice(0, -1);
        }

        var xhr = new XMLHttpRequest();

        xhr.open("GET", baseUrl, true);
        xhr.responseType = "blob"; // Указываем, что ожидаем файл в ответе

        xhr.onload = function() {
            if (xhr.status === 200) {
                var blob = xhr.response;
                var link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = "Analytics-university.xlsx"; // Указываем имя файла для скачивания
                link.click();
            }
        };

        xhr.send();
    }
}
