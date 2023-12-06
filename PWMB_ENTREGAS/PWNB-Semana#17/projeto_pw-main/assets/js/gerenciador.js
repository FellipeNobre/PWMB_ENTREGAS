document.addEventListener('DOMContentLoaded', function() {
  // Dados para o gráfico de barras
  const data = {
    labels: [],
    datasets: [{
      label: 'Vendas Mensais',
      data: [],
      backgroundColor: 'rgba(54, 162, 235, 0.5)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderWidth: 1
    }]
  };

  // Preencher os rótulos dos meses e os valores de vendas mensais usando um loop
  const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho'];
  const vendas = [500, 750, 900, 600, 1200, 850];

  for (let i = 0; i < meses.length; i++) {
    data.labels.push(meses[i]);
    data.datasets[0].data.push(vendas[i]);
  }

  // Opções do gráfico de barras
  const options = {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  };

  // Criar o gráfico de barras
  const ctx = document.getElementById('myChart').getContext('2d');
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: data,
    options: options
  });

  // Dados para o gráfico circular (doughnut)
  const dataCircular = {
    labels: ['Vendas Diretas', 'Vendas Online', 'Vendas em Parceiros'],
    datasets: [{
      data: [1680, 2400, 720],
      backgroundColor: ['#ffcd56', '#ff6384', '#36a2eb'],
      borderWidth: 1
    }]
  };

  // Opções do gráfico circular
  const optionsCircular = {
    plugins: {
      legend: {
        position: 'right'
      }
    }
  };

  // Criar o gráfico circular
  const ctxCircular = document.getElementById('myCircularChart').getContext('2d');
  const myCircularChart = new Chart(ctxCircular, {
    type: 'doughnut',
    data: dataCircular,
    options: optionsCircular
  });
});
