const dados = {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'jul'],
    datasets: [{
      label: 'Vendas',
      backgroundColor: 'rgba(66, 133, 244, 0.1)',
      borderColor: 'rgba(66, 133, 244, 1)',
      borderWidth: 5,
      pointBackgroundColor: 'rgba(66, 133, 244, 1)',
      pointBorderColor: 'rgba(255, 255, 255, 1)',
      pointBorderWidth: 1,
      pointRadius: 3,
      pointHoverRadius: 4,
      data: [30, 90, 60, 120, 100, 150, 130]
    }]
  };
  
  const config = {
    type: 'line',
    data: dados,
    options: {
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            stepSize: 3
          }
        }
      },
      plugins: {
        legend: {
          display: true,
          labels: {
            color: 'black',
            font: {
              size: 14,
              weight: 'bold'
            }
          }
        },
        tooltip: {
          mode: 'index',
          intersect: false
        }
      }
    }
  };
  
  window.onload = function() {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, config);
  };
  