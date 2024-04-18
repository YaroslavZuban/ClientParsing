function applyFilter() {
    var filterUrl = generateFilterUrl(); // ���� ������� ��������� URL
    window.location.href = filterUrl; // ��������������� �� ��������������� URL
}

// ������� ��� ������ ������� � ������� localStorage
function resetFilter() {
    // ������� localStorage
    localStorage.clear();
    // �������������� ��������������� URL (��������, ��������������� �� ������� ��������)
    window.location.href = "/fpmi/resume/list";
}

var resetFilterButton = document.getElementById('clearFilterAndUrl');

resetFilterButton.addEventListener('click', resetFilter);