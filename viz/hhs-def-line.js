var ctx = document.getElementById('defensive').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ["2009-10", "2010-11", "2011-12", "2012-13", "2013-14", "2014-15", "2015-16", "2016-17", "2017-18", "2018-19", "2019-20",
"2020-21", "2021-22"],
        datasets: [{
            label: 'Connecticut',
            data: [65.3, 73.1, 68.3, 70.3, 69.2, 68.9, 68.2, 77.5, 73.7, 80.4, 74.7, 72.9, 79.6],
            fill: false,
            borderColor: '#5F3F75',
            backgroundColor: '#5F3F75',
            tension: 0.1},
          {
            label: 'Baylor',
            data: [79.0, 76.8, 75.2, 75.9, 83.7, 81.9, 74.9, 75.6, 77.1, 77.8, 70.0, 74.6, 84.1],
            fill: false,
            borderColor: '#9D43D9',
            backgroundColor: '#9D43D9',
            tension: 0.1},
        {
            label: 'Notre Dame',
            data: [82.1, 76.8, 73.3, 80.2, 82.8, 82.8, 83.9, 87.8, 91.7, 87.2, 91.1, 97.3, 85.9],
            fill: false,
            borderColor: '#E3BDFF',
            backgroundColor: '#E3BDFF',
            tension: 0.1},
        {
            label: 'South Carolina',
            data: [93.3, 90.8, 79.5, 77.2, 82.0, 79.0, 79.8, 82.3, 87.1, 92.2, 77.2, 80.1, 74.1],
            fill: false,
            borderColor: '#E6753C',
            backgroundColor: '#E6753C',
            tension: 0.1},
        {
            label: 'Stanford',
            data: [78.4, 79.7, 80.5, 78.9, 85.8, 90.2, 83.4, 82.7, 89.7, 86.6, 86.8, 77.6, 81.6],
            fill: false,
            borderColor: '#E6C73C',
            backgroundColor: '#E6C73C',
            tension: 0.1},
        {
            label: 'Texas A&M',
            data: [82.5, 80.3, 86.5, 82.4, 83.7, 83.1, 85.9, 93.7, 96.1, 86.3, 84.7, 86.2, 92.7],
            fill: false,
            borderColor: '#D99F43',
            backgroundColor: '#D99F43',
            tension: 0.1},
        ]
    },
    options: {
        responsive: true,
        aspectRatio: 2,
        interaction: {
            intersect: false,
            mode: 'index',
          },
        plugins: {
            title: {
                display: true,
                text: 'HHS Defensive Ratings',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: false,
                text: ["ABCDEF"],
            }
        },
        scales: {
            x: {
              title:{
                display: false,
                text: 'Season',
              }
            },
            y: {
                beginatZero: false,
                min: 50,
                max: 130,
                title:{
                  display: false,
                  text: 'Her Hoop Stats Rating',
              }
            }
        },
    },
});
