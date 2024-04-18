document.getElementById("nextPageLink").addEventListener("click", function(event) {
    event.preventDefault();

    var resumesLength = document.querySelectorAll('.person-data');
    var numberOfDivs = resumesLength.length;

    if (numberOfDivs === 15) {
        var actualURI = window.location.href;
        var parsingURI = new URL(actualURI);
        var pageNumber = parsingURI.searchParams.get("pageNumber");

        if (pageNumber !== null) {
            pageNumber = parseInt(pageNumber) + 1;
        } else {
            pageNumber = 2; // Если параметр "pageNumber" отсутствует, устанавливаем значение по умолчанию 2
        }

        parsingURI.searchParams.set("pageNumber", pageNumber.toString());

        var anotherURI = parsingURI.toString();
        window.location.href = anotherURI;
    }
});