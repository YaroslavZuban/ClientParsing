function openWindow(element) {
    // �������� ID ������� dd �� �������� data-ddid
    var resumeId = element.getAttribute("resumeId");

    window.location.assign(resumeId);
}