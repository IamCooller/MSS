$(document).ready(function() {

    $("#menuToggle svg").click(function() {
        $("#menu").show('slow');
    });
    $("#menu svg").click(function() {
        $("#menu").hide('slow');
    });
    $('.dropbtn').click(function() {
        $(this).parent().find('#myDropdown').toggle();

    });

    $('.singleProduct__other-list').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        arrows: false,
        responsive: [{
                breakpoint: 800,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    dots: true
                }
            }, {
                breakpoint: 400,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    dots: true
                }
            }

        ]
    });








});