// Para el menu Nav
const navToggle = document.querySelector(".check");
const navMenu = document.querySelector(".menu-ul");

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible");
    navMenu.classList.toggle("navmenu");
});

// Filtros
// ALL
document.getElementById('all').onclick = function() {
    var py = document.getElementById('python');
    var php = document.getElementById('Php');
    var jv = document.getElementById('Java');
    var ftt = document.getElementById('flutter');
    var cshare = document.getElementById('Seeshare');

    py.style.display = 'flex';
    jv.style.display = 'flex';
    php.style.display = 'flex';
    ftt.style.display = 'flex';
    cshare.style.display = 'flex';

}

// PYTHON
document.getElementById('py').onclick = function() {
    var py = document.getElementById('python');

    var php = document.getElementById('Php');
    var jv = document.getElementById('Java');
    var ftt = document.getElementById('flutter');
    var cshare = document.getElementById('Seeshare');

    py.style.display = 'flex';
    jv.style.display = 'none';
    php.style.display = 'none';
    ftt.style.display = 'none';
    cshare.style.display = 'none';

}

//JAVA
document.getElementById('java').onclick = function() {
    var py = document.getElementById('python');
    var php = document.getElementById('Php');
    var jv = document.getElementById('Java');
    var ftt = document.getElementById('flutter');
    var cshare = document.getElementById('Seeshare');

    py.style.display = 'none';
    jv.style.display = 'flex';
    php.style.display = 'none';
    ftt.style.display = 'none';
    cshare.style.display = 'none';

}


//PHP
document.getElementById('php').onclick = function() {
    var py = document.getElementById('python');
    var php = document.getElementById('Php');
    var jv = document.getElementById('Java');
    var ftt = document.getElementById('flutter');
    var cshare = document.getElementById('Seeshare');

    py.style.display = 'none';
    jv.style.display = 'none';
    php.style.display = 'flex';
    ftt.style.display = 'none';
    cshare.style.display = 'none';
}

//FLUTTER
document.getElementById('ftt').onclick = function() {
    var py = document.getElementById('python');
    var php = document.getElementById('Php');
    var jv = document.getElementById('Java');
    var ftt = document.getElementById('flutter');
    var cshare = document.getElementById('Seeshare');

    py.style.display = 'none';
    jv.style.display = 'none';
    php.style.display = 'none';
    ftt.style.display = 'flex';
    cshare.style.display = 'none';
}

//SeeShare
document.getElementById('see_share').onclick = function() {
    var py = document.getElementById('python');
    var php = document.getElementById('Php');
    var jv = document.getElementById('Java');
    var ftt = document.getElementById('flutter');
    var cshare = document.getElementById('Seeshare');

    py.style.display = 'none';
    jv.style.display = 'none';
    php.style.display = 'none';
    ftt.style.display = 'none';
    cshare.style.display = 'flex';
}