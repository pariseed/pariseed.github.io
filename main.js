
window.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const status = document.createElement("p");
    status.style.marginTop = "1rem";
    status.style.padding = "1rem";
    status.style.borderRadius = "5px";
    status.style.textAlign = "center";
    
    function success() {
        form.reset();
        status.textContent = "Grazie per averci contattato! Ti risponderemo il prima possibile.";
        status.style.backgroundColor = "var(--primary-color)";
        status.style.color = "var(--white)";
        form.appendChild(status);
    }

    function error() {
        status.textContent = "Oops! C'è stato un errore nell'invio del modulo.";
        status.style.backgroundColor = "#d35400"; // Darker red for error
        status.style.color = "var(--white)";
        form.appendChild(status);
    }

    form.addEventListener("submit", function(ev) {
        ev.preventDefault();
        const data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

function ajax(method, url, data, success, error) {
    const xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}
