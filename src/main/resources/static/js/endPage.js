document.getElementById("endPageLink").addEventListener("click", function(event) {
    var actualURI = window.location.href;
    var parsingURI = new URL(actualURI);
    var pageNumber = parsingURI.searchParams.get("pageNumber");

    // ≈сли pageNumber равен 1 или отсутствует, предотвращаем действие по умолчанию
    if (pageNumber === null || parseInt(pageNumber) === 1) {
        event.preventDefault();
    } else {
        // ¬ противном случае продолжаем обработку нажати€ кнопки
        event.preventDefault();

        // ”меньшаем значение pageNumber на 1
        pageNumber = parseInt(pageNumber) - 1;

        // ”станавливаем новое значение дл€ pageNumber
        parsingURI.searchParams.set("pageNumber", pageNumber.toString());

        // ќбновл€ем URL и перенаправл€ем пользовател€
        var anotherURI = parsingURI.toString();
        window.location.href = anotherURI;
    }
});