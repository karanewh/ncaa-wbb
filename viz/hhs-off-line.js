var ctx = document.getElementById('offensive').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ["2009-10", "2010-11", "2011-12", "2012-13", "2013-14", "2014-15", "2015-16", "2016-17", "2017-18", "2018-19", "2019-20",
"2020-21", "2021-22"],
        datasets: [{
            label: 'Connecticut',
            data: [114.6, 111.5, 111.0, 116.6, 117.8, 126.4, 123.9, 122.7, 122.1, 116.3, 111.2, 113.0, 105.9],
            fill: false,
            borderColor: '#5F3F75',
            backgroundColor: '#5F3F75',
            tension: 0.1},
          {
            label: 'Baylor',
            data: [97.9, 111.8, 112.7, 112.5, 110.9, 109.2, 107.2, 119.0, 117.3, 113.0, 111.1, 109.0, 106.9],
            fill: false,
            borderColor: '#9D43D9',
            backgroundColor: '#9D43D9',
            tension: 0.1},
        {
            label: 'Notre Dame',
            data: [101.8, 105.5, 108.4, 110.1, 115.6, 110.7, 109.4, 112.6, 114.2, 117.2, 86.4, 96.2, 100.9],
            fill: false,
            borderColor: '#E3BDFF',
            backgroundColor: '#E3BDFF',
            tension: 0.1},
        {
            label: 'South Carolina',
            data: [92.9, 88.4, 94.8, 94.4, 106.6, 110.1, 104.7, 110.3, 106.3, 104.0, 112.0, 104.1, 103.5],
            fill: false,
            borderColor: '#E6753C',
            backgroundColor: '#E6753C',
            tension: 0.1},
        {
            label: 'Stanford',
            data: [110.5, 113.9, 110.1, 107.0, 109.7, 104.7, 102.3, 104.2, 97.8, 105.7, 105.1, 111.3, 105.9],
            fill: false,
            borderColor: '#E6C73C',
            backgroundColor: '#E6C73C',
            tension: 0.1},
        {
            label: 'Texas A&M',
            data: [102.4, 108.0, 97.1, 99.7,  98.6, 95.9, 98.2, 102.4, 109.4, 99.5, 101.0, 103.0, 95.5],
            fill: false,
            borderColor: '#D99F43',
            backgroundColor: '#D99F43',
            tension: 0.1},
        ]
    },
    options: {
        responsive: true,
        aspectRatio: 1.5,
        interaction: {
            intersect: false,
            mode: 'index',
          },
        plugins: {
            title: {
                display: true,
                text: 'HHS Offensive Ratings',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: ["ABCDEF"],
            }
        },
        scales: {
            x: {
              title:{
                display: true,
                text: 'Season',
              }
            },
            y: {
                beginAtZero: true,
                title:{
                  display: true,
                  text: 'Her Hoop Stats Rating',
              }
            }
        },
    },
});
