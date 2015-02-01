/* Author:Steelsen Smith */

$( "header" ).load( "shared/header.html" );
/*If I don't bind the click events in the next step then they don't work*/
$("nav").load("shared/menu.html", function () {
    $(".menu-hide").click(function () {
        $(".menu-link").slideToggle();
    });
    $(".menu-link").click(function () {
        var navTarget = ($(this).attr("id"));
        switch (navTarget) {
            case "menu-home":
                var pageTarget = "pages/intro.html"
                $("#content-block").load(pageTarget);
                break;
            case "menu-invite":
                var pageTarget = "pages/invitation.html"
                $("#content-block").load(pageTarget);
                break;
            case "menu-attractions":
                var pageTarget = "pages/attractions.html"
                $("#content-block").load(pageTarget,
                    function () {                        
                        $('.attractionSlider').slick({
                          dots: true,
                          infinite: false,
                          speed: 300,
                          slidesToShow: 4,
                          slidesToScroll: 4,
                          responsive: [
                            {
                              breakpoint: 1024,
                              settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3,
                                infinite: true,
                                dots: true
                              }
                            },
                            {
                              breakpoint: 600,
                              settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                              }
                            },
                            {
                              breakpoint: 480,
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                              }
                            }
                          ]
                        });
                    }
                );
                break;
            case "menu-gifting":
                var pageTarget = "pages/gifts.html"
                $("#content-block").load(pageTarget);
                break;
            case "menu-ceremony":
                var pageTarget = "pages/ceremony.html"
                $("#content-block").load(pageTarget);
                break;
            case "menu-accomodations":
                var pageTarget = "pages/accomodations"
                $("#content-block").load(pageTarget);
                break;
            case "menu-reception":
                var pageTarget = "pages/reception.html"
                $("#content-block").load(pageTarget);
                break;
            case "menu-volunteer":
                var pageTarget = "pages/volunteer.html"
                $("#content-block").load(pageTarget);
                break;
            case "menu-words":
                var pageTarget = "pages/words.html"
                $("#content-block").load(pageTarget);
                break;
            case "menu-comments":
                var pageTarget = "pages/comments.html"
                $("#content-block").load(pageTarget);
                break;
            case "menu-ideas":
	        var pageTarget = "pages/ideas.html"
		$("#content-block").load(pageTarget);
	        break;	
	}
    });
});
$( "footer" ).load( "shared/footer.html" );
$( "#content-block" ).load( "pages/intro.html" );
