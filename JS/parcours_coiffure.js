// Navigation bar color change
let nav = document.getElementById('navigation');
let liens = document.getElementsByClassName('liensNav');
let icon = document.getElementById('icon');

// onload pour commencer et onresize pour dynamique
window.onresize = colorHeader;
window.onload = colorHeader;

function colorHeader() {
    let myWidth = window.innerWidth;

    // myWidth dynamique
    window.onscroll = function () {
        if (myWidth > 768) {
            if (document.documentElement.scrollTop > 980) {
                nav.style.background = "#333333";
                liens[0].style.color = "#f1f1f1";
                liens[1].style.color = "#f1f1f1";
                liens[2].style.color = "#f1f1f1";
                liens[3].style.color = "#f1f1f1";
                liens[4].style.color = "#f1f1f1";
            } else {
                nav.style.background = "#333333";
                liens[0].style.color = "#f1f1f1";
                liens[1].style.color = "#f1f1f1";
                liens[2].style.color = "#f1f1f1";
                liens[3].style.color = "#f1f1f1";
                liens[4].style.color = "#f1f1f1";
            }
            // second else pour mettre la nav en clair et bloqué l'anim du dessus
        } else {
            nav.style.background = "#333333";
            liens[0].style.color = "#f1f1f1";
            liens[1].style.color = "#f1f1f1";
            liens[2].style.color = "#f1f1f1";
            liens[3].style.color = "#f1f1f1";
            liens[4].style.color = "#f1f1f1";
        }
    }
};

// Responsiv nav
function toggleNav() {
    if (nav.className === "") {
        nav.className += "responsive";
    } else {
        nav.className = "";
    }
}

$('html').click(function () {
    if (nav.className += "responsive") {
        nav.className = "";
    }
});
$('#icon').click(function (event) {
    event.stopPropagation(); // stop la propagation, donc l'animation audessus
});

// Navigation Jquery, nav et arrow
$("#arrow").click(function () {
    $('html,body').animate({
        scrollTop: $("#section-about").offset().top - 50 // moins 50 pour que la pointe de clip path ne rentre pas dans les titres 
    },
        'slow');
});

$(".liensNav:nth-child(0)").click(function () {
    $('html,body').animate({
        scrollTop: $("#index.html").offset().top + 50
    },
        'slow');
});

$(".liensNav:nth-child(1)").click(function () {
    $('html,body').animate({
        scrollTop: $("#valeurs").offset().top - 50
    },
        'slow');
});

$(".liensNav:nth-child(2)").click(function () {
    $('html,body').animate({
        scrollTop: $("#atouts").offset().top - 50
    },
        'slow');
});

$(".liensNav:nth-child(3)").click(function () {
    $('html,body').animate({
        scrollTop: $("#tarifs").offset().top - 50

    },
        'slow');
});

$(".liensNav:nth-child(4)").click(function () {
    $('html,body').animate({
        scrollTop: $("#contact").offset().top - 50
        // offset prends les coordonnés de contact et les retournent en top et left et ensuite on y va en cliquant
    },
        'slow');
});