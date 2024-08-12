document.addEventListener('DOMContentLoaded', function () {
    const totalViewChart = document.getElementById('total-views-chart');
    const revenueChart = document.getElementById('revenue-chart');
    const subscriberCountChart = document.getElementById('subscriber-count-chart');
    const trafficSourcesChart = document.getElementById('traffic-sources-chart');
    const datatable = document.getElementById('datatable');

    fetch('api/total-views')
        .then(res => res.json())
        .then(data => {
            new Chart(totalViewChart, {
                type: 'line',
                data: {
                    labels: data.labels,
                    datasets: [{
                        label: '# of Sales',
                        data: data.data,
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

            new Chart(revenueChart, {
                type: 'line',
                data: {
                    labels: ['Aug', 'Sep', 'Oct', 'Nov', 'Dec', 'Jan'],
                    datasets: [{
                        label: 'Revenue',
                        data: [5000, 7500, 10000, 8500, 9200, 11000],
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

            new Chart(subscriberCountChart, {
                type: 'line',
                data: {
                    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
                    datasets: [{
                        label: '# of Profits',
                        data: [12, 19, 3, 5, 2, 3],
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

            new Chart(trafficSourcesChart, {
                type: 'radar',
                data: {
                    labels: ['Youtube', 'Facebook', 'Snapchat', 'Google', 'TikTok', 'Instagram'],
                    datasets: [{
                        label: '# of Shares',
                        data: [12, 19, 3, 5, 2, 3],
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
        });

    const dataTable = new simpleDatatables.DataTable('#datatable', {
        searchable: true,
        fixedHeight: true
    });
});
