import { getAbbreviatedMonthNames } from "../general_functions.js";

let startDate = new Date(2023, 1, 14);
let abbreviatedMonthNames = getAbbreviatedMonthNames(startDate);
let recentMonths = abbreviatedMonthNames.slice(-5);
const canvasElementForLineChart = document.getElementById('serviceTrendFromAllBranches');

let configLineChart = {
    type: 'line',
    data: {
        labels: recentMonths,
        datasets: [
            {
                label: 'Motel 1: Interior',
                data: [24, 11, 57, 81, 99],
                fill: false,
                borderColor: 'rgba(0, 178, 191)',
                tension: 0.5
            },
            {
                label: 'Homestay 2: Tourguide',
                data: [20, 31, 25, 59, 36],
                fill: false,
                borderColor: 'rgba(249, 204, 118)',
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
const lineChart = new Chart(canvasElementForLineChart, configLineChart);