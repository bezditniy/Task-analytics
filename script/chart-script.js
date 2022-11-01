
  const DATA_COUNT = 40;
  const ctx = document.getElementById('myChart').getContext('2d');
  
  const dataBar = [];
  const dataLine = [];

  for (let i = 1; i < DATA_COUNT; ++i) {
    const date = new Date()

    let res = new Date();

    res.setDate(date.getDate() + i)

    var theDate = new Date();
    var myNewDate = new Date();
    myNewDate.setDate(theDate.getDate() + i);

    let objLine = {x: myNewDate.toLocaleString('en-us',{day: 'numeric', month: 'short'}), y: Math.floor(20 + Math.random() * (28 - 20 + 1))}

    let objBar = {x: myNewDate.toLocaleString('en-us',{day: 'numeric', month: 'short'}), y: Math.floor(11 + Math.random() * (18 - 11 + 1))}

    dataLine.push(objLine)
    dataBar.push(objBar)
  
  }
  

  let gradient = ctx.createLinearGradient(0, 0, 0, 200);
    gradient.addColorStop(0, 'rgba(21, 227, 181, 0.1');
    gradient.addColorStop(0.5, 'rgba(21, 227, 181, 0)');
  
  const myChart = new Chart(ctx, {
      data: {
        datasets: [{
          type: 'line',
          data: dataLine,
          borderColor: '#15E3B5',
          backgroundColor: gradient,
          borderRadius: 4,
          tension: 0.4,
          pointRadius: 0,
          fill: true,
        }, {
          type: 'bar',
          data: dataBar,
          borderColor: '#323438',
          backgroundColor: "#323438",
          borderRadius: 1,
          
        }],
      },
      options: {
        stacked: false,
        beginAtZero: false,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false,
            }
        },
        interaction: {
          intersect: false,
        },
        scales: {
          x: { 
            display: true,
            ticks: {
              maxTicksLimit: 5
            },
            grid: {
                display:false
            },
          },
          y: {
              min: 10,
              max: 30,  
              display: true,
              position: "right",
              grid: {
                  display:false
              }, 
          }
        }
      }
  });

