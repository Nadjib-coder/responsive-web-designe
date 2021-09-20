/*jslint plusplus: true, evil: true*/
/*global console, alert, prompt*/

/*start function selected click*/
$(function () {
    'use-strict';
    $('.info-list li').click(function () {
         $(this).addClass('selected').siblings('li').removeClass('selected');
         $('.info-content section').hide();
         $('.' + $(this).data('class')).fadeIn();
    });
});
/*end function selected click*/