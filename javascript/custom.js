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
    if (document.getElementById("python")) {
        document.getElementById('python').style.display = 'flex';
    }
    if (document.getElementById("Php")) {
        document.getElementById('Php').style.display = 'flex';
    }
    if (document.getElementById("Java")) {
        document.getElementById('Java').style.display = 'flex';
    }
    if (document.getElementById("flutter")) {
        document.getElementById('flutter').style.display = 'flex';
    }
    if (document.getElementById("Seeshare")) {
        document.getElementById('Seeshare').style.display = 'flex';
    }

}

// PYTHON
document.getElementById('py').onclick = function() {
    if (document.getElementById("python")) {
        document.getElementById('python').style.display = 'flex';
    }
    if (document.getElementById("Php")) {
        document.getElementById('Php').style.display = 'none';
    }
    if (document.getElementById("Java")) {
        document.getElementById('Java').style.display = 'none';
    }
    if (document.getElementById("flutter")) {
        document.getElementById('flutter').style.display = 'none';
    }
    if (document.getElementById("Seeshare")) {
        document.getElementById('Seeshare').style.display = 'none';
    }

}

//JAVA
document.getElementById('java').onclick = function() {
    if (document.getElementById("python")) {
        document.getElementById('python').style.display = 'none';
    }
    if (document.getElementById("Php")) {
        document.getElementById('Php').style.display = 'none';
    }
    if (document.getElementById("Java")) {
        document.getElementById('Java').style.display = 'flex';
    }
    if (document.getElementById("flutter")) {
        document.getElementById('flutter').style.display = 'none';
    }
    if (document.getElementById("Seeshare")) {
        document.getElementById('Seeshare').style.display = 'none';
    }
}


//PHP
document.getElementById('php').onclick = function() {
    if (document.getElementById("python")) {
        document.getElementById('python').style.display = 'none';
    }
    if (document.getElementById("Php")) {
        document.getElementById('Php').style.display = 'flex';
    }
    if (document.getElementById("Java")) {
        document.getElementById('Java').style.display = 'none';
    }
    if (document.getElementById("flutter")) {
        document.getElementById('flutter').style.display = 'none';
    }
    if (document.getElementById("Seeshare")) {
        document.getElementById('Seeshare').style.display = 'none';
    }
}

//FLUTTER
document.getElementById('ftt').onclick = function() {
    if (document.getElementById("python")) {
        document.getElementById('python').style.display = 'none';
    }
    if (document.getElementById("Php")) {
        document.getElementById('Php').style.display = 'none';
    }
    if (document.getElementById("Java")) {
        document.getElementById('Java').style.display = 'none';
    }
    if (document.getElementById("flutter")) {
        document.getElementById('flutter').style.display = 'flex';
    }
    if (document.getElementById("Seeshare")) {
        document.getElementById('Seeshare').style.display = 'none';
    }
}

//SeeShare
document.getElementById('see_share').onclick = function() {
    if (document.getElementById("python")) {
        document.getElementById('python').style.display = 'none';
    }
    if (document.getElementById("Php")) {
        document.getElementById('Php').style.display = 'none';
    }
    if (document.getElementById("Java")) {
        document.getElementById('Java').style.display = 'none';
    }
    if (document.getElementById("flutter")) {
        document.getElementById('flutter').style.display = 'none';
    }
    if (document.getElementById("Seeshare")) {
        document.getElementById('Seeshare').style.display = 'flex';
    }
}