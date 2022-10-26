$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        loop: true,
        margin: 10,
        nav: true, 
        
        responsive: {
            1600: {
                items: 5,
            },
            1223: {
                items: 4,
            },
            950: {
                items: 3,
            },
            528: {
                items: 2,
            },
            0: {
                items: 1,
            },
        },
    });
});

function openNav() {
    document.getElementById("myNav").style.display = "block";
}

function closeNav() {
    document.getElementById("myNav").style.display = "none";
}
