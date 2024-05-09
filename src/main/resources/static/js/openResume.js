function openWindow(element) {
    // Получаем ID объекта dd из атрибута data-ddid
    var resumeId = element.getAttribute("resumeId");

    window.location.assign(resumeId);
}