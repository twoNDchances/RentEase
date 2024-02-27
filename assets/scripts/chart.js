function getAbbreviatedMonthNames(startDate) {
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

let startDate = new Date(2023, 1, 14);
let abbreviatedMonthNames = getAbbreviatedMonthNames(startDate);
let recentMonths = abbreviatedMonthNames.slice(-5);
const canvasElementForBarChart = document.getElementById('incomeFromAllBranches');

let configBarChart = {
    type: "bar",
    data: {
        labels: recentMonths,
        datasets: [
            {
                label: 'Hotel 1',
                data: [754, 493, 242, 996, 856,],
                backgroundColor: [
                    "rgba(249, 204, 118)",
                    "rgba(249, 204, 118)",
                    "rgba(249, 204, 118)",
                    "rgba(249, 204, 118)",
                    "rgba(249, 204, 118)",
                ],
                borderWidth: 2,
            },
            {
                label: 'Homestay 2',
                data: [872, 991, 1345, 1532, 1286,],
                backgroundColor: [
                    "rgba(0, 178, 191)",
                    "rgba(0, 178, 191)",
                    "rgba(0, 178, 191)",
                    "rgba(0, 178, 191)",
                    "rgba(0, 178, 191)",
                ],
                borderWidth: 2,
            },
            {
                label: 'Apartment 3',
                data: [1534, 2102, 1899, 2319, 1931,],
                backgroundColor: [
                    "rgba(131, 199, 93)",
                    "rgba(131, 199, 93)",
                    "rgba(131, 199, 93)",
                    "rgba(131, 199, 93)",
                    "rgba(131, 199, 93)",
                ],
                borderWidth: 2,
            },
            {
                label: 'Expenses',
                data: [-433, -630, -498, -647, -568,],
                backgroundColor: [
                    "rgba(229, 70, 70)",
                    "rgba(229, 70, 70)",
                    "rgba(229, 70, 70)",
                    "rgba(229, 70, 70)",
                    "rgba(229, 70, 70)",
                ],
                borderWidth: 2,
            },
        ],
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    },
};

const barChart = new Chart(canvasElementForBarChart, configBarChart);

const canvasElementForLineChart = document.getElementById('serviceTrendFromAllBranches');
let configLineChart = {
    type: 'line',
    data: {
        labels: recentMonths,
        datasets: [
            {
                label: 'Hotel 1: Cuisine - Room Service',
                data: [20, 31, 25, 59, 36],
                fill: false,
                borderColor: 'rgba(249, 204, 118)',
                tension: 0.5
            },
            {
                label: 'Homestay 2: Tourguide',
                data: [24, 11, 57, 81, 99],
                fill: false,
                borderColor: 'rgba(0, 178, 191)',
                tension: 0.5
            },
            {
                label: 'Apartment 3: Laundry',
                data: [55, 59, 79, 134, 125],
                fill: false,
                borderColor: 'rgba(131, 199, 93)',
                tension: 0.5
            },
        ],
    },
    options: {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true,
                    },
                },
            ],
        },
    },
};
const lineChart = new Chart(canvasElementForLineChart, configLineChart)