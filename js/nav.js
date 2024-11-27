document.addEventListener('DOMContentLoaded', function() {
    fetch('/includes/nav.html')
        .then(response => response.text())
        .then(data => { 
            document.getElementById('nav-placeholder').innerHTML = data; 
            // Highlight active page
            const pageValue = document.querySelector('#page').value;
            const idString = `${pageValue}-item`;
            const element = document.getElementById(idString);
            element.classList.add("active");
        });
});




function stickyNav() {
    console.log('stickyNav function called');
    var navbar = document.querySelector("nav");
    console.log('navbar:', navbar);
    if (navbar) {
        var headerHeight = document.querySelector("header").offsetHeight;
        console.log('headerHeight:', headerHeight);
        const scrollValue = document.body.scrollTop;
        console.log('scrollValue:', scrollValue);
        if (scrollValue + 35 > headerHeight) {
            navbar.classList.add('li-sticky');
            console.log("Sticky");
        } else {
            navbar.classList.remove('li-sticky');
            console.log("Else");
        }
    } else {
        console.error("Navigation element not found!");
    }
}

document.body.addEventListener('scroll', stickyNav);






