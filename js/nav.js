document.addEventListener('DOMContentLoaded', function() {
    fetch('/includes/nav.html')
        .then(response => response.text())
        .then(data => { 
            document.getElementById('nav-placeholder').innerHTML = data;
            // const pageValue = document.getElementById('page').value;
            const pageValue = document.querySelector('#page').value;
            const idString = `${pageValue}-item`;
            const element = document.getElementById(idString);
            element.classList.add("active");
        });
    });