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