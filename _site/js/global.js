// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        event.preventDefault();
        var location = '/'
        switch ($(this).attr('href')) {
            case '#services':
                location = '/services.html'
                break;
            case '#process':
                location = '/process.html'
                break;
            case '#portfolio':
                location = '/portfolio.html'
                break;
            case '#our-pride':
                location = '/pride.html'
                break;
            case '#contact':
                location = '/contact.html'
                break;
            case '#web-development.html':
                location = '/web-development.html'
                break;
            case '#mobile-development.html':
                location = '/mobile-development.html'
                break;
            case '#cloud-computing.html':
                location = '/cloud-computing.html'
                break;
        }
        window.location = location
    });
});

// --- Added by Upender -------------------------
// to support individual pages SEO
var anchor = ''
switch (window.location.pathname) {
    case '/services.html/':
        anchor = $('a[href="#services"]')
        break;
    case '/process.html/':
        anchor = $('a[href="#process"]')
        break;
    case '/portfolio.html/':
        anchor = $('a[href="#portfolio"]')
        break;
    case '/pride.html/':
        anchor = $('a[href="#our-pride"]')
        break;
    case '/contact.html/':
        anchor = $('a[href="#contact"]')
        break;
    case '/web-development.html/':
        anchor = $('a[href="#web-development.html"]')
        break;
    case '/mobile-development.html/':
        anchor = $('a[href="#mobile-development.html"]')
        break;
    case '/cloud-computing.html/':
        anchor = $('a[href="#cloud-computing.html"]')
        break;
}
if(anchor !='') {
   anchor.parents('li:first').addClass('active')
}
//-------------------------------------------------

// scrolling client images
/*$(function() {
    $("#scroller").simplyScroll();
});*/


//$(".hide_div").show()
$(window).load (function () {
    $(".hide_div").show()
    $("#scroller").simplyScroll();

});


if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $(".mobile_view_hi5").show()
    $(".web_view_hi5").hide()
}
else{
    $(".mobile_view_hi5").hide()
    $(".web_view_hi5").show()
}


// modal box for portfolio images
$('div.modal').on('show.bs.modal', function() {
    var modal = this;
    var hash = modal.id;
    window.location.hash = hash;
    window.onhashchange = function() {
        if (!location.hash){
            $(modal).modal('hide');
        }
    }
});


$("#aboutVideo").on('hidden.bs.modal', function (e) {
    $("#aboutVideo iframe").attr("src", $("#aboutVideo iframe").attr("src"));
});

$(document).ready(function() {
    $(".fancybox").fancybox();

    $('.fancybox-media')
        .attr('rel', 'media-gallery')
        .fancybox({
            openEffect : 'none',
            closeEffect : 'none',
            prevEffect : 'none',
            nextEffect : 'none',

            arrows : false,
            helpers : {
                media : {},
                buttons : {}
            }
        });

});

$("#single_1").fancybox({
    helpers: {
        title : {
            type : 'float'
        }
    }
});
$("#single_2").fancybox({
    helpers: {
        title : {
            type : 'float'
        }
    }
});


$(document).ready(function() {
    $(".various").fancybox({
        maxWidth	: 800,
        maxHeight	: 600,
        fitToView	: false,
        width		: '70%',
        height		: '70%',
        autoSize	: false,
        closeClick	: false,
        openEffect	: 'none',
        closeEffect	: 'none'
    });
});