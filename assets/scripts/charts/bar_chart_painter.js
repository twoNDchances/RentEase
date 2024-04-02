import { getAbbreviatedMonthNames } from "../private_general_functions.js";

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
                label: 'Motel  1',
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
                label: 'Homestay 2',
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