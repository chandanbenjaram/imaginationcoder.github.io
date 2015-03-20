// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('a.page-scroll').bind('click', function(event) {
        event.preventDefault();
        var location = '/'
        switch ($(this).attr('href')) {
            case '#services':
                location = '/services'
                break;
            case '#process':
                location = '/process'
                break;
            case '#portfolio':
                location = '/portfolio'
                break;
            case '#our-pride':
                location = '/pride'
                break;
            case '#contact':
                location = '/contact'
                break;
        }
        window.location = location
    });
});

// --- Added by Upender -------------------------
// to support individual pages SEO
var anchor = ''
switch (window.location.pathname) {
    case '/services/':
        anchor = $('a[href="#services"]')
        break;
    case '/process/':
        anchor = $('a[href="#process"]')
        break;
    case '/portfolio/':
        anchor = $('a[href="#portfolio"]')
        break;
    case '/pride/':
        anchor = $('a[href="#our-pride"]')
        break;
    case '/contact/':
        anchor = $('a[href="#contact"]')
        break;
}
if(anchor !='') {
   anchor.parents('li:first').addClass('active')
}
//-------------------------------------------------

// scrolling client images
$(function() {
    $("#scroller").simplyScroll();
});
