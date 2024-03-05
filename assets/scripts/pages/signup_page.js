import { modeSwitcher } from "../general_functions.js";
import { getMode } from "../general_functions.js";

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
        $('#custom-main').removeClass('custom-background-dark-image').addClass('custom-background-light-image');
        $('#input-form').css({ "background-color": "rgba(255,255,255,0.9)", "color": "black" });
        $('#input-button').removeClass('btn-secondary').addClass('btn-primary');
    } else {
        $('#navbar').removeClass('navbar-light bg-light').addClass('navbar-dark bg-dark');
        $('#sign-in-button').removeClass('btn-dark').addClass('btn-light');
        $('#sign-up-button').removeClass('btn-outline-dark').addClass('btn-outline-light');
        $('#modeSwitcher').html('<i class="fa fa-sun-o">Light</i>');
        $('#logoHeader, #logoFooter').attr('src', './assets/images/logo/rentease-favicon-color.png');
        $('body').css('background-color', '#383c40');
        $('#content').css('color', 'white');
        $('hr').css('background-color', 'white');
        $('#custom-main').removeClass('custom-background-light-image').addClass('custom-background-dark-image');
        $('#input-form').css({ "background-color": "rgba(56,60,64,0.9)", "color": "white" });
        $('#input-button').removeClass('btn-primary').addClass('btn-secondary');
    }
});