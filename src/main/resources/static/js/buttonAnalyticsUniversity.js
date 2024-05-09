document.addEventListener('DOMContentLoaded', function() {
    // ������� ����� �� �� ���������
    var filterForm = document.querySelector('.filter-wrapper'); // �������� 'yourFormSelector' �� �������� �������� ����� �����
    // ��������� ���������� ������� submit �� �����
    filterForm.addEventListener('submit', preventFormSubmit);

    // ������� ������ �� id
    var applyFilterButton = document.getElementById('buttonAnalyticsUniversity');

    // ��������� ���������� ������� ����� �� ������
    applyFilterButton.addEventListener('click', function() {
        // ���������� URL � ������� ������� generateFilterUrl()
        generateFilterUrl();
    });
});

function preventFormSubmit(event) {
    // ������������� ����������� �������� �������� (�������� �����)
    event.preventDefault();
}

function generateFilterUrl() {
    var baseUrl = "/fpmi/resume/excel-download/excel-skills-university?";

    // ��������� �������� �����

    var educationalInstitution = document.getElementById('educational').value;
    //var specialization = document.getElementById('specialization').value;
    //var graduationYear = document.getElementById('graduation_year').value;

    // ������� ��� ���������� ��������� � URL
    function addParameter(parameterName, parameterValue) {
        if (parameterValue !== "") {
            baseUrl += parameterName + "=" + parameterValue + "&";
        }
    }

    // ���������� ���������� � URL
   // addParameter("educationalInstitution", educationalInstitution);
    //addParameter("specialization", specialization);
    //addParameter("graduationYear", graduationYear);

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

    // ���� ���� �� ���������� ����, ������ ������ ������� �� 2 �������
    if (educationalInstitution === "" || skills.length === 0) {
        button.classList.add('red-button'); // ��������� CSS ����� ��� ������� ������

        setTimeout(function() {
            button.classList.remove('red-button'); // ������� ����� ����� 2 �������
        }, 2000);
    }else{

        addParameter("university", educationalInstitution);
        addParameter("skills", skills);

        // �������� ���������� '&' � URL, ���� �� ����
        if (baseUrl.endsWith("&")) {
            baseUrl = baseUrl.slice(0, -1);
        }

        var xhr = new XMLHttpRequest();

        xhr.open("GET", baseUrl, true);
        xhr.responseType = "blob"; // ���������, ��� ������� ���� � ������

        xhr.onload = function() {
            if (xhr.status === 200) {
                var blob = xhr.response;
                var link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                link.download = "Analytics-university.xlsx"; // ��������� ��� ����� ��� ����������
                link.click();
            }
        };

        xhr.send();
    }
}
