$(document).ready(function () {
    function setMode(mode) {
        localStorage.setItem('mode', mode);
    }

    function getMode() {
        return localStorage.getItem('mode');
    }

    function toggleMode() {
        let currentMode = getMode();
        if (currentMode === 'light') {
            setMode('dark');
        } else {
            setMode('light');
        }
        applyMode();
    }

    function applyMode() {
        let currentMode = getMode();
        if (currentMode === 'light') {
            $('#navbar').removeClass('navbar-dark bg-dark');
            $('#sign-in-button').removeClass('btn-light');
            $('#sign-up-button').removeClass('btn-outline-light');
            $('#navbar').addClass('navbar-light bg-light');
            $('#sign-in-button').addClass('btn-dark');
            $('#sign-up-button').addClass('btn-outline-dark');
            $('#modeSwitcher').html('<i class="fa fa-moon-o">Dark</i>');
            $('#logo').attr('src', './assets/images/logo/rentease-favicon-black.png');
            $('body').css('background-color', 'white');
            $('#content').css('color', 'black');
            $('hr').css('background-color', 'black')
        } else {
            $('#navbar').removeClass('navbar-light bg-light');
            $('#sign-in-button').removeClass('btn-dark');
            $('#sign-up-button').removeClass('btn-outline-dark');
            $('#navbar').addClass('navbar-dark bg-dark');
            $('#sign-in-button').addClass('btn-light');
            $('#sign-up-button').addClass('btn-outline-light');
            $('#modeSwitcher').html('<i class="fa fa-sun-o">Light</i>');
            $('#logo').attr('src', './assets/images/logo/rentease-favicon-color.png');
            $('body').css('background-color', '#383c40');
            $('#content').css('color', 'white');
            $('hr').css('background-color', 'white')
        }
    }

    if (!getMode()) {
        setMode('light');
    }
    applyMode();

    $('#modeSwitcher').click(toggleMode);
});
