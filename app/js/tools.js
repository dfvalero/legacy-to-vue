var globalCounter = 0;

function boom() {
    var $body = $('body');

    $body.empty();
    $body.addClass('has-boom');
    $('<div>').addClass('boom').html('You started a<br>WAR!').appendTo($body);
}

function clear() {
    $('[id^=total]').html(0);
    $('.item img').removeClass();
}

function updateGlobalCounter() {
    globalCounter = 0;

    $('[id^=total]').each(function() {
         globalCounter += Number($(this).text());
    });

    if(globalCounter >= 40) {
        boom();
    }
}