const canvasElementForPieChart = document.getElementById('servicesTrendForHotel');

let configPieChart = {
    type: 'pie',
    data: {
        labels: ['Cuisine - Room Service', 'Restaurant', 'Swimming Pool', 'Laundry', 'More Beds'],
        datasets: [{
            label: '# of Votes',
            data: [19, 12, 3, 5, 2],
            backgroundColor: [
                'rgba(249, 204, 118)',
                'rgba(0, 178, 191)',
                'rgba(34, 68, 51, 0.8)',
                'rgba(232, 78, 46, 0.5)',
                'rgba(239, 50, 98, 0.9)',
                'rgba(208, 227, 30, 0.6)',
            ],
            borderWidth: 1,
        }],
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    },
};
const pieChart = new Chart(canvasElementForPieChart, configPieChart);