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

$(document).ready(() => {
    // THIS PART FOR USERNAME
    $('#username').on('input', function () {
        validateUsername();
    });

    // Validate username
    function validateUsername() {
        var username = $('#username').val();

        var valid = /^[a-zA-Z0-9_\.]{5,}$/.test(username);
        var hasLetter = /[a-zA-Z]/.test(username);
        var hasNumber = /\d/.test(username);
        var alwaysStartWithLetter = /^[a-zA-Z][\w\.]*[a-zA-Z0-9]$/.test(username);
        var fullStructure = /^[a-zA-Z0-9_\.]+$/.test(username);
        var noTwoDot = /\.{2}/.test(username);
        var noTwoUnderscore = /^([^_]*_){0,2}[^_]*$/.test(username);

        let checkUsername = $('#validate-username');
        if (!valid || !hasLetter || !hasNumber || !alwaysStartWithLetter || !fullStructure || noTwoDot || !noTwoUnderscore) {
            checkUsername.text("❌Must have letters, numbers and length greater than 5, may contain '_' and '.' characters.");
            checkUsername.css('color', 'red');
        } else {
            checkUsername.text("✅Must have letters, numbers and length greater than 5, may contain '_' and '.' characters.");
            checkUsername.css('color', 'green');
        }
    }

    // Auto fill Username based Gmail and Check
    $('#email').on('input', function () {
        const userInput = $(this).val();
        const atIndex = userInput.indexOf('@');
        if (atIndex !== -1) {
            $('#username').val(userInput.substring(0, atIndex));
        } else {
            $('#username').val(userInput);
        }
        validateUsername();
    });

    // THIS PART FOR PASSWORD
    // Check same password with 4 letters
    function hasRepeatingSubstring(str1, str2, length) {
        for (var i = 0; i <= str1.length - length; i++) {
            var substring = str1.substring(i, i + length);
            if (str2.includes(substring)) {
                return true;
            }
        }
        return false;
    }

    // Check password
    $('#password').on('input', () => {
        let length = false;
        let capital = false;
        let special = false;
        let digit = false;
        let same = false;

        const password = $('#password').val();
        const username = $('#username').val();
        const email = $('#email').val();

        var hasUppercase = /[A-Z]/.test(password);
        var hasNumber = /\d/.test(password);
        var hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        const checkLength = $('#8-characters');
        const checkCapital = $('#capital-letter');
        const checkSpecial = $('#special-character');
        const checkDigit = $('#digit');
        const checkSame = $('#same-username-email');

        // Check 8 characters
        if (password.length < 8) {
            checkLength.text('❌Be 8 characters or more.');
            checkLength.css('color', 'red');
            length = false;
            // return;
        }
        else {
            checkLength.text('✅Be 8 characters or more.');
            checkLength.css('color', 'green');
            length = true;
        }

        // Check capital letter
        if (!hasUppercase) {
            checkCapital.text('❌Have at least one capital letter.');
            checkCapital.css('color', 'red');
            capital = false;
            // return;
        }
        else {
            checkCapital.text('✅Have at least one capital letter.');
            checkCapital.css('color', 'green');
            capital = true;
        }

        // Check special character
        if (!hasSpecialChar) {
            checkSpecial.text('❌Contain at least one special character.');
            checkSpecial.css('color', 'red');
            special = false;
            // return;
        }
        else {
            checkSpecial.text('✅Contain at least one special character.');
            checkSpecial.css('color', 'green');
            special = true;
        }

        // Check digit
        if (!hasNumber) {
            checkDigit.text('❌Have at least one digit.');
            checkDigit.css('color', 'red');
            digit = false;
            // return;
        }
        else {
            checkDigit.text('✅Have at least one digit.');
            checkDigit.css('color', 'green');
            digit = true;
        }

        // Check same
        if (hasRepeatingSubstring(password, username, 4) || hasRepeatingSubstring(password, email, 4) || password.length === 0) {
            checkSame.text('❌Not be the same as Username and Gmail.');
            checkSame.css('color', 'red');
            same = false
            // return;
        }
        else {
            checkSame.text('✅Not be the same as Username and Gmail.');
            checkSame.css('color', 'green');
            same = true;
        }

        if (length && capital && special && digit && same) {
            console.log('Mật khẩu hợp lệ');
        }
    });

    // Check password match
    $('#passwordConfirmation').on('input', () => {
        const passwordConfirmation = $('#passwordConfirmation');
        const password = $('#password');

        const checkPasswordConfirmation = $('#confirm');
        if ((passwordConfirmation.val() == password.val()) && !(password.val().length == 0)) {
            checkPasswordConfirmation.text('✅Matches the password');
            checkPasswordConfirmation.css('color', 'green');
            console.log('Mật khẩu khớp');
            $('#input-button').removeAttr('disabled');
        }
        else {
            checkPasswordConfirmation.text('❌Matches the password');
            checkPasswordConfirmation.css('color', 'red');
            $('#input-button').attr('disabled', true);
        }
    });

    // Show both of password
    $('#showPassword, #showPasswordConfirmation').click(() => {
        const getChildOfPassword = $('#showPassword').children();
        const getChildOfPasswordConfirmation = $('#showPasswordConfirmation').children();
        if (getChildOfPassword.first().hasClass('fa-eye') && getChildOfPasswordConfirmation.first().hasClass('fa-eye')) {
            $('#password').attr('type', 'text');
            $('#passwordConfirmation').attr('type', 'text');
            getChildOfPassword.removeClass('fa-eye').addClass('fa-eye-slash');
            getChildOfPasswordConfirmation.removeClass('fa-eye').addClass('fa-eye-slash');
        }
        else {
            $('#password').attr('type', 'password');
            $('#passwordConfirmation').attr('type', 'password');
            getChildOfPassword.removeClass('fa-eye-slash').addClass('fa-eye');
            getChildOfPasswordConfirmation.removeClass('fa-eye-slash').addClass('fa-eye');
        }
    });
});