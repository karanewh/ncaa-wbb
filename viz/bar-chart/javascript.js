var ctx = document.getElementById('myChart').getContext('2d');

var myChart = new Chart(ctx, {
   type: 'bar',
   data: {
       labels: ['Connecticut', 'Tennessee', 'Baylor', 'Stanford', 'Louisiana Tech', 'Notre Dame', 'South Carolina', 'Southern California', 'Maryland', 'North Carolina', 'Old Dominion', 'Purdue', 'Texas', 'Texas A&M', 'Texas Tech'],
       datasets: [{
           label: 'Number of NCAA Championships',
           data: [11, 8, 3, 3, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
           backgroundColor: [
               '#A57CC2'
           ]
       },
   ]
   },
   options: {
          responsive: true,
          plugins: {
              title: {
                  display: true,
                  text: 'NCAA Championships by Program',
                  font: {
                    size: 18
               }
           },
           subtitle: {
               display: true,
               text: '15 schools have won NCAA titles since the first women's basketball championship in 1982. Four programs have added to their title count in the last five championships, but UConn and Tennessee still lead the pack.'
           }
       },
       scales: {
           y: {
               beginAtZero: true
           }
       },
   },
});
