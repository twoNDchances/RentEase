// Get last five months for Chart
export function getAbbreviatedMonthNames(startDate) {
    let currentDate = new Date();
    let months = [];

    while (startDate <= currentDate) {
        let monthAbbreviated = startDate.toLocaleString('default', { month: 'short' });
        let year = startDate.getFullYear();
        months.push(`${monthAbbreviated}/${year}`);

        startDate.setMonth(startDate.getMonth() + 1);
    }

    return months;
}

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