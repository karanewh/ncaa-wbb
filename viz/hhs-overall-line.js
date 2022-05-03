var ctx = document.getElementById('hhsRatings').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',

    data: {
        labels: ["2009-10", "2010-11", "2011-12", "2012-13", "2013-14", "2014-15", "2015-16", "2016-17", "2017-18", "2018-19", "2019-20",
"2020-21", "2021-22"],
        datasets: [{
            label: 'Connecticut',
            data: [64.7, 55.6, 57.7, 63.1, 58.9, 67.5, 66.7, 60.3, 62.2, 48.0, 46.7, 45.8, 36.6],
            fill: false,
            borderColor: '#5F3F75',
            backgroundColor: '#5F3F75',
            tension: 0.1},
          {
            label: 'Baylor',
            data: [35.0, 52.8, 54.0, 52.9, 39.6, 39.0, 43.9, 54.5, 51.4, 51.4, 48.1, 40.5, 28.6],
            fill: false,
            borderColor: '#9D43D9',
            backgroundColor: '#9D43D9',
            tension: 0.1},
        {
            label: 'Notre Dame',
            data: [34.0, 45.9, 52.6, 46.9, 49.2, 47.8, 40.8, 43.8, 44.5, 50.0, 8.3, 6.5, 24.7],
            fill: false,
            borderColor: '#E3BDFF',
            backgroundColor: '#E3BDFF',
            tension: 0.1},
        {
            label: 'South Carolina',
            data: [14.0, 11.4, 26.3, 27.6, 35.4, 44.1, 38.2, 44.4, 33.4, 29.4, 49.1, 40.2, 45.0],
            fill: false,
            borderColor: '#E6753C',
            backgroundColor: '#E6753C',
            tension: 0.1},
        {
            label: 'Stanford',
            data: [47.0, 49.2, 45.3, 40.9, 37.1, 28.2, 32.6, 36.6, 27.3, 36.4, 33.4, 41.3, 39.3],
            fill: false,
            borderColor: '#E6C73C',
            backgroundColor: '#E6C73C',
            tension: 0.1},
        {
            label: 'Texas A&M',
            data: [5.7, 47.4, 28.6, 33.4, 28.5, 21.6, 25.4, 23.9, 29.7, 27.3, 27.4, 26.6, 15.8],
            fill: false,
            borderColor: '#D99F43',
            backgroundColor: '#D99F43',
            tension: 0.1},
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        interaction: {
            intersect: false,
            mode: 'index',
          },
        plugins: {
            title: {
                display: true,
                text: 'The disappearing gap between UConn and other NCAA champions',
                font: {
                    size: 18
                }
            },
            subtitle: {
                display: true,
                text: ["For most of the last 13 years, University of Connecticut was the strongest among any of the six teams that", "won an NCAA championship, according to Her Hoop Stats Ratings. But starting in 2018-19, the gap narrowed,", "and some teams - Baylor, Notre Dame, South Carolina and Stanford - were rated higher than UConn in certain years. The", "HHS Rating is a 'predictive metric of team strength based on machine learning.' It represents the number of points by", "which team would be expected to outscore an average opponent on a neutral court."],
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
