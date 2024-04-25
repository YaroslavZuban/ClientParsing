document.addEventListener('DOMContentLoaded', function() {
    // ������� ����� �� �� ���������
    var filterForm = document.querySelector('.filter-wrapper'); // �������� 'yourFormSelector' �� �������� �������� ����� �����
    // ��������� ���������� ������� submit �� �����
    filterForm.addEventListener('submit', preventFormSubmit);

    // ������� ������ �� id
    var applyFilterButton = document.getElementById('applyFilterButton');

    // ��������� ���������� ������� ����� �� ������
    applyFilterButton.addEventListener('click', function() {
        // ���������� URL � ������� ������� generateFilterUrl()
        var filterUrl = generateFilterUrl();

        // �������������� ������������ �� ����������� URL
        window.location.href = filterUrl;
    });
});

function preventFormSubmit(event) {
    // ������������� ����������� �������� �������� (�������� �����)
    event.preventDefault();
}

function generateFilterUrl() {
    var baseUrl = "/fpmi/resume/list?";
    var pageNumber = 1; // Assuming default page number is 1

    // ��������� �������� �����
    var cityResidence = document.getElementById('city').value;
    var wages = document.getElementById('salary').value;
    var foreignLanguage = document.getElementById('foreign-language').value;
    var foreignLanguageLevel = document.getElementById('language-level').value;
    var educationalInstitution = document.getElementById('educational').value;
    var specialization = document.getElementById('specialization').value;
    var graduationYear = document.getElementById('graduation_year').value;
    var educationLevel = document.getElementById('language-level').value;

    // ������� ��� ���������� ��������� � URL
    function addParameter(parameterName, parameterValue) {
        if (parameterValue !== "") {
            baseUrl += parameterName + "=" + parameterValue + "&";
        }
    }

    // ���������� ���������� � URL
    addParameter("cityResidence", cityResidence);
    addParameter("wages", wages);
    addParameter("foreignLanguage", foreignLanguage);
    addParameter("foreignLanguageLevel", foreignLanguageLevel);
    addParameter("educationalInstitution", educationalInstitution);
    addParameter("specialization", specialization);
    addParameter("graduationYear", graduationYear);
    addParameter("educationLevel", educationLevel);


    var skills = [];

    // ������� ��� �������� � ������� "input"
    var inputs = document.querySelectorAll(".input");

    // �������� �� ������� ���������� �������� � ��������� ��� �������� � ������ �������
    inputs.forEach(function(input) {
        // �������� �������� input � ������� ������ ������� � ������ � ����� ������
        var skill = input.value.trim();

        // ���������, ��� �������� ������ �� ������, ����� ����������� ��� � ������
        if (skill !== "") {
            skills.push(skill);
        }
    });


// ��������� ��������� �������� ������� � �������� ���������� ������
    var educations = Array.from(document.querySelectorAll('input[name="education"]:checked')).map(input => input.value).join(',');
    var workSchedules = Array.from(document.querySelectorAll('input[name="schedule_work"]:checked')).map(input => input.value).join(',');
    var rightsCategory = Array.from(document.querySelectorAll('input[name="rights_category"]:checked')).map(input => input.value).join(',');
   // var skills = Array.from(document.querySelectorAll('.input')).map(input => input.value).join(','); // ����� ������ ������ �� �����������
    var citizenship = Array.from(document.querySelectorAll('input[name="citizenship"]:checked')).map(input => input.value).join(',');
    var gender = document.querySelectorAll('input[name="schedule_work"]:checked').value;

    if(gender !== undefined) {
        addParameter("gender", gender);
    }
    // ���������� ���������� ������� � URL
    addParameter("educations", educations);
    addParameter("workSchedules", workSchedules);
    addParameter("rightsCategory", rightsCategory);
    addParameter("skills", skills);
    addParameter("citizenship", citizenship);

    // ���������� ��������� ������ �������� � URL
    baseUrl += "pageNumber=" + pageNumber;

    // �������� ���������� '&' � URL, ���� �� ����
    if (baseUrl.endsWith("&")) {
        baseUrl = baseUrl.slice(0, -1);
    }

    return baseUrl;
}
