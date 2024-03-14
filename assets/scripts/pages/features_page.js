import { modeSwitcher } from "../general_functions.js";
import { getMode } from "../general_functions.js";

modeSwitcher(function () {
    const currentMode = getMode();
    if (currentMode === 'light') {
        $('#navbar').removeClass('navbar-dark bg-dark border-bottom border-light').addClass('navbar-light bg-light  border-bottom border-dark');
        $('#sign-in-button').removeClass('btn-light').addClass('btn-dark');
        $('#sign-up-button').removeClass('btn-outline-light').addClass('btn-outline-dark');
        $('#modeSwitcher').html('<i class="fa fa-moon-o">Dark</i>');
        $('#logoHeader, #logoFooter').attr('src', './assets/images/logo/rentease-favicon-black.png');
        $('body').css('background-color', 'white');
        $('#content').css('color', 'black');
        $('#details-motel-button-style, #details-hotel-button-style, #details-apartment-button-style').removeClass('btn-light').addClass('btn-secondary');
        $('hr').css('background-color', 'black');
    } else {
        $('#navbar').removeClass('navbar-light bg-light border-bottom border-dark').addClass('navbar-dark bg-dark border-bottom border-light');
        $('#sign-in-button').removeClass('btn-dark').addClass('btn-light');
        $('#sign-up-button').removeClass('btn-outline-dark').addClass('btn-outline-light');
        $('#modeSwitcher').html('<i class="fa fa-sun-o">Light</i>');
        $('#logoHeader, #logoFooter').attr('src', './assets/images/logo/rentease-favicon-color.png');
        $('body').css('background-color', '#383c40');
        $('#content').css('color', 'white');
        $('#details-motel-button-style, #details-hotel-button-style, #details-apartment-button-style').removeClass('btn-secondary').addClass('btn-light');
        $('hr').css('background-color', 'white');
    }
});