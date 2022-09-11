$(document).ready(function () {
    $(".carousel__inner").slick({
        arrows: false,
        dots: true,
        slidesToShow: 5,
        slidesToScroll: 1,
        infinite: true,
        responsive: [
            {
                breakpoint: 1535,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
            {
                breakpoint: 1289,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                },
            },
        ],
    });
}); 


function openNav() {
  document.getElementById("myNav").style.display = "block";
}


function closeNav() {
  document.getElementById("myNav").style.display = "none";
}