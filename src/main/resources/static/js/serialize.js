document.addEventListener('DOMContentLoaded', function() {
    // �������� ������ div, ��������, �� ��� ������
    var specificDiv = document.querySelector('.filter-wrapper');

    // ������� ��� ���� ����� ������ ����� div, ������� ����� ���������
    var fieldsToSave = specificDiv.querySelectorAll('input[type="text"], input[type="checkbox"], input[type="radio"], select');

    // ���������� �� ������� ���� � ��������� ��� �������� � localStorage
    fieldsToSave.forEach(function(field) {
        // ������� ���� ��� ���������� �������� ���� � localStorage (��������, ��������� id ����)
        var key = field.id;

        // �������� �������� ���� �� localStorage (���� ��� ��� ���������)
        var savedValue = localStorage.getItem(key);

        // ���� �������� ������� � localStorage, ������������� ��� ��� ���� �����
        if (savedValue !== null) {
            if (field.type === 'checkbox' || field.type === 'radio') {
                // ���� ��� ������� ��� �����������, ��������� ���������� �������� � ������������� ���������
                field.checked = field.value === savedValue;
            } else {
                // � ��������� ������� ������������� ��������� �������� ����
                field.value = savedValue;
            }
        }

        // ��������� ���������� ������� input ��� ���������� ��� �������� � localStorage ��� ������ ���������
        field.addEventListener('input', function() {
            if (field.type === 'checkbox' || field.type === 'radio') {
                // ���� ��� ������� ��� �����������, ��������� �� ��������, ���� ��� ��������
                if (field.checked) {
                    localStorage.setItem(key, field.value);
                } else {
                    // ���� ��� �� ��������, ������� �������� �� localStorage
                    localStorage.removeItem(key);
                }
            } else {
                // ��� ������ ����� ��������� �� ������� ��������
                localStorage.setItem(key, field.value);
            }
        });
    });
});
