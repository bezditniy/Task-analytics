
  const ctx2 = document.getElementById('myBar');

  
  const myBar = new Chart(ctx2, {
    
      data: {
        labels:['Jul 20', 'Aug 20', "Sep 20", "Oct 20", "Nov 20", "Dec 20"],
        datasets: [
          {
            type: 'bar',
            data: [0, 0, 0, 10, 6],
            backgroundColor: "#F6544C",
            borderRadius: 4,
            barThickness: 27,
            borderSkipped: false,
          },
          {
            type: 'bar',
            data: [15, 15, 15, 9, 9],
            backgroundColor: "rgba(246, 84, 76, 0.5)",
            barThickness: 27,
            borderRadius: 4,
          },
          {
            type: 'bar',
            data: [32, 32, 32, 28, 32, 19],
            backgroundColor: "#323438",
            barThickness: 27,
            borderRadius: 4,
          },
          {
            type: 'bar',
            data: [32, 32, 32, 41, 32, 52],
            backgroundColor: "rgba(21, 227, 181, 0.5)",
            barThickness: 27,
            borderRadius: 4,
          },
          {
            type: 'bar',
            data: [51, 51, 51, 15, 23, 27],
            backgroundColor: "#15E3B5",
            borderRadius: 4,
            barThickness: 27,
          },
        ]
      },
      options: {
        type: "bar",
        maintainAspectRatio: false,
        responsive: true,
        plugins: {
            legend: {
                display: false,
            }
        },
        scales: {
          x: { 
            stacked: true,
            display: true,
            grid: {
                display:false
            },
          },
          y: {
              stacked: true,
              display: false,
              grid: {
                  display:false
              }, 
          }
        }
      }
  });

