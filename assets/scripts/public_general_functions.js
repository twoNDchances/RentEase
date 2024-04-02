// Mode switcher
export function getMode() {
    return localStorage.getItem('mode');
}

export function modeSwitcher(applyMode) {
    $(document).ready(function () {
        function setMode(mode) {
            localStorage.setItem('mode', mode);
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
        if (!getMode()) {
            setMode('light');
        }
        applyMode();
        $('#modeSwitcher').click(toggleMode);
    });
}
