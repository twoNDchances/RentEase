const ctx = document.getElementById('servicesTrendForHotel');

new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Cuisine - Room Service', 'Restaurant', 'Swimming Pool', 'Laundry', 'More Beds'],
        datasets: [{
            label: '# of Votes',
            data: [19, 12, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(249, 204, 118)',
                'rgba(0, 178, 191)',
                'rgba(34, 68, 51, 0.8)',
                'rgba(232, 78, 46, 0.5)',
                'rgba(239, 50, 98, 0.9)',
                'rgba(208, 227, 30, 0.6)',
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});