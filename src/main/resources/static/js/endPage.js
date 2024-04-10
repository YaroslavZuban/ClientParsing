document.getElementById("endPageLink").addEventListener("click", function(event) {
    var actualURI = window.location.href;
    var parsingURI = new URL(actualURI);
    var pageNumber = parsingURI.searchParams.get("pageNumber");

    // ���� pageNumber ����� 1 ��� �����������, ������������� �������� �� ���������
    if (pageNumber === null || parseInt(pageNumber) === 1) {
        event.preventDefault();
    } else {
        // � ��������� ������ ���������� ��������� ������� ������
        event.preventDefault();

        // ��������� �������� pageNumber �� 1
        pageNumber = parseInt(pageNumber) - 1;

        // ������������� ����� �������� ��� pageNumber
        parsingURI.searchParams.set("pageNumber", pageNumber.toString());

        // ��������� URL � �������������� ������������
        var anotherURI = parsingURI.toString();
        window.location.href = anotherURI;
    }
});