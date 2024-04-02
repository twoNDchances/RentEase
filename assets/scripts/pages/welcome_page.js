import { modeSwitcher } from "../public_general_functions.js";
import { getMode } from "../public_general_functions.js";

modeSwitcher(function () {
    const currentMode = getMode();
    if (currentMode === 'light') {
        $('#navbar').removeClass('navbar-dark bg-dark').addClass('navbar-light bg-light');
        $('#sign-in-button').removeClass('btn-light').addClass('btn-dark');
        $('#sign-up-button').removeClass('btn-outline-light').addClass('btn-outline-dark');
        $('#modeSwitcher').html('<i class="fa fa-moon-o">Dark</i>');
        $('#logoHeader, #logoFooter').attr('src', './assets/images/logo/rentease-favicon-black.png');
        $('body').css('background-color', 'white');
        $('#content').css('color', 'black');
        $('hr').css('background-color', 'black');
    } else {
        $('#navbar').removeClass('navbar-light bg-light').addClass('navbar-dark bg-dark');
        $('#sign-in-button').removeClass('btn-dark').addClass('btn-light');
        $('#sign-up-button').removeClass('btn-outline-dark').addClass('btn-outline-light');
        $('#modeSwitcher').html('<i class="fa fa-sun-o">Light</i>');
        $('#logoHeader, #logoFooter').attr('src', './assets/images/logo/rentease-favicon-color.png');
        $('body').css('background-color', '#383c40');
        $('#content').css('color', 'white');
        $('hr').css('background-color', 'white');
    }
});

$(document).ready(() => {

    let previousHeight = window.innerHeight;
    let generalHeightElement = $('#caption-1').outerHeight();

    $('#custom-slide-image-1, #custom-slide-image-2, #custom-slide-image-3').css({ 'height': previousHeight + 'px', 'width': '100%', 'object-fit': 'cover' });
    $('#caption-1').css('top', (previousHeight - generalHeightElement) / 2 + 'px');
    $('#caption-2').css('top', (previousHeight - generalHeightElement) / 2 + 'px');
    $('#caption-3').css('top', (previousHeight - generalHeightElement) / 2 + 'px');

    $(window).on('resize', function () {
        let newHeight = window.innerHeight;
        let generaNewlHeightElement = 0;

        let newHeightElement1 = $('#caption-1').outerHeight();
        let newHeightElement2 = $('#caption-2').outerHeight();
        let newHeightElement3 = $('#caption-3').outerHeight();

        if (newHeightElement1 != 0) {
            generaNewlHeightElement = newHeightElement1;
        }
        if (newHeightElement2 != 0) {
            generaNewlHeightElement = newHeightElement2;
        }
        if (newHeightElement3 != 0) {
            generaNewlHeightElement = newHeightElement3;
        }

        // Debugging
        // console.log('---------------------------------------------');
        // console.log('Chiều cao cũ của màn hình: ' + previousHeight);
        // console.log('Chiều cao mới của màn hình: ' + newHeight);

        // console.log('Chiều cao cũ của element: ' + generalHeightElement);
        // console.log('Chiều cao mới của element: ' + newHeightElement1 + ', ' + newHeightElement2 + ', ' + newHeightElement3);

        // console.log('Chiều cao đã qua tính toán: ' + (newHeight - newHeightElement1) / 2 + 'px' + ', ' + (newHeight - newHeightElement2) / 2 + 'px' + ', ' + (newHeight - newHeightElement3) / 2 + 'px');
        // console.log('---------------------------------------------');
        if (newHeight !== previousHeight) {
            let calculateTop1 = (newHeight - generaNewlHeightElement) / 2;
            let calculateTop2 = (newHeight - generaNewlHeightElement) / 2;
            let calculateTop3 = (newHeight - generaNewlHeightElement) / 2;

            $('#caption-1').css('top', calculateTop1 + 'px');
            $('#caption-2').css('top', calculateTop2 + 'px');
            $('#caption-3').css('top', calculateTop3 + 'px');
            $('#custom-slide-image-1, #custom-slide-image-2, #custom-slide-image-3').css({ 'height': newHeight + 'px', 'width': '100%', 'object-fit': 'cover' });

            previousHeight = newHeight;
        }
    });
});
