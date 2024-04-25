document.addEventListener('DOMContentLoaded', function() {
    // Находим форму по ее селектору
    var filterForm = document.querySelector('.filter-wrapper'); // Замените 'yourFormSelector' на реальный селектор вашей формы
    // Добавляем обработчик события submit на форму
    filterForm.addEventListener('submit', preventFormSubmit);

    // Находим кнопку по id
    var applyFilterButton = document.getElementById('applyFilterButton');

    // Добавляем обработчик события клика на кнопку
    applyFilterButton.addEventListener('click', function() {
        // Генерируем URL с помощью функции generateFilterUrl()
        var filterUrl = generateFilterUrl();

        // Перенаправляем пользователя по полученному URL
        window.location.href = filterUrl;
    });
});

function preventFormSubmit(event) {
    // Предотвращаем стандартное действие браузера (отправку формы)
    event.preventDefault();
}

function generateFilterUrl() {
    var baseUrl = "/fpmi/resume/list?";
    var pageNumber = 1; // Assuming default page number is 1

    // Получение значений полей
    var cityResidence = document.getElementById('city').value;
    var wages = document.getElementById('salary').value;
    var foreignLanguage = document.getElementById('foreign-language').value;
    var foreignLanguageLevel = document.getElementById('language-level').value;
    var educationalInstitution = document.getElementById('educational').value;
    var specialization = document.getElementById('specialization').value;
    var graduationYear = document.getElementById('graduation_year').value;
    var educationLevel = document.getElementById('language-level').value;

    // Функция для добавления параметра к URL
    function addParameter(parameterName, parameterValue) {
        if (parameterValue !== "") {
            baseUrl += parameterName + "=" + parameterValue + "&";
        }
    }

    // Добавление параметров к URL
    addParameter("cityResidence", cityResidence);
    addParameter("wages", wages);
    addParameter("foreignLanguage", foreignLanguage);
    addParameter("foreignLanguageLevel", foreignLanguageLevel);
    addParameter("educationalInstitution", educationalInstitution);
    addParameter("specialization", specialization);
    addParameter("graduationYear", graduationYear);
    addParameter("educationLevel", educationLevel);


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


// Получение выбранных значений списков и удаление квадратных скобок
    var educations = Array.from(document.querySelectorAll('input[name="education"]:checked')).map(input => input.value).join(',');
    var workSchedules = Array.from(document.querySelectorAll('input[name="schedule_work"]:checked')).map(input => input.value).join(',');
    var rightsCategory = Array.from(document.querySelectorAll('input[name="rights_category"]:checked')).map(input => input.value).join(',');
   // var skills = Array.from(document.querySelectorAll('.input')).map(input => input.value).join(','); // нужно понять почему не считывается
    var citizenship = Array.from(document.querySelectorAll('input[name="citizenship"]:checked')).map(input => input.value).join(',');
    var gender = document.querySelectorAll('input[name="schedule_work"]:checked').value;

    if(gender !== undefined) {
        addParameter("gender", gender);
    }
    // Добавление параметров списков к URL
    addParameter("educations", educations);
    addParameter("workSchedules", workSchedules);
    addParameter("rightsCategory", rightsCategory);
    addParameter("skills", skills);
    addParameter("citizenship", citizenship);

    // Добавление параметра номера страницы к URL
    baseUrl += "pageNumber=" + pageNumber;

    // Удаление последнего '&' в URL, если он есть
    if (baseUrl.endsWith("&")) {
        baseUrl = baseUrl.slice(0, -1);
    }

    return baseUrl;
}
