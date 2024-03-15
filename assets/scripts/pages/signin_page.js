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
    }
    else {
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

$(document).ready(() => {
    // Show password
    $('#showPassword').click(() => {
        const getShowPasswordButton = $('#showPassword').children().first();
        if (getShowPasswordButton.hasClass('fa-eye')) {
            getShowPasswordButton.removeClass('fa-eye').addClass('fa-eye-slash');
            $('#password').attr('type', 'text');
        }
        else {
            getShowPasswordButton.removeClass('fa-eye-slash').addClass('fa-eye');
            $('#password').attr('type', 'password');
        }
    });

    // Check input before sign in
    $('#user, #password').on('input', () => {
        if ($('#message-alerting').text()) {
            $('#message-alerting').text('');
        }
        if (($('#user').val().length != 0) && ($('#password').val().length != 0)) {
            $('#input-button').removeAttr('disabled');
            $('#password').on('keypress', (e) => {
                if (e.which == 13) {
                    $('#input-button').trigger('click');
                }
            });
        }
        else {
            $('#input-button').attr('disabled', true);
        }
    });

    $('#input-button').click(() => {
        if (!($(this).attr('disabled'))) {
            // console.log('unlock'); // debuging
            const user = $('#user').val();
            if (user == 'manager') {
                document.location.href = 'main_statistics_page.html';
            }
            else if (user == 'staff') {

            }
            else {
                $('#message-alerting').text('Your Account or Password is incorrect!').css('color', 'red');
            }
        }
    });
});