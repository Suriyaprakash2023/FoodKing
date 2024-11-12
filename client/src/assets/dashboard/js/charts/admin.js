(function(jQuery) {
  "use strict";
  let lastDate = 0
  let TICKINTERVAL = 864e5;
  let XAXISRANGE = 7776e5;
  const chartFunction = {
      chartDummySearies: (e, t, refData) => {
          let data = refData
          const a = e + TICKINTERVAL;
          lastDate = a;
          for (let n = 0; n < data.length - 50; n++) data[n].x = a - XAXISRANGE - TICKINTERVAL, data[n].y = 0;
          data.push({
              x: a,
              y: Math.floor(Math.random() * (t.max - t.min + 1)) + t.min
          })
          return data
      },
      generateDayWiseTimeSeries(baseval, count, yrange) {
          let i = 0;
          let series = [];
          while (i < count) {
              let x = baseval;
              let y =
                  Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;

              series.push([x, y]);
              baseval += 86400000;
              i++;
          }
          return series;
      }
  }
  if (jQuery('#admin-chart-1').length) {
      const options = {
          series: [{
              type: 'column',
              data: [440, 505, 414, 671, 227, 413, 201, 352, 752, 320, 257, 160],
          }, {
              type: 'line',
              curve: 'smooth',
              data: [33, 42, 60, 120, 140, 170, 180, 140, 130, 110, 70, 80]
          }],
          chart: {
              height: 350,
              type: 'line',
              animations: {
                  enabled: true,
                  easing: 'easeinout',
                  speed: 800,
                  animateGradually: {
                      enabled: false,
                      delay: 150
                  },
                  dynamicAnimation: {
                      enabled: true,
                      speed: 350
                  }
              },
              zoom: {
                  enabled: false,
              },
              toolbar: {
                  show: false
              }
          },
          tooltip: {
            enabled: true,
          },
          stroke: {
              width: [0, 2]
          },
          dataLabels: {
              enabled: true,
              enabledOnSeries: [1],
              offsetX: 3.0,
              offsetY: -1.6,
              style: {
                  fontSize: '1px',
                  fontFamily: 'Helvetica, Arial, sans-serif',
                  fontWeight: 'bold',
                },
                background: {
                    enabled: true,
                    foreColor: '#fff',
                    color: '#fff',
                    padding: 10,
                    borderRadius: 10,
                    borderWidth: 0,
                    borderColor: '#fff',
                    opacity: 1,
                  }

          },
          colors: ["#EA6A12", "#EA6A12"],
          plotOptions: {
              bar: {
                  horizontal: false,
                  columnWidth: '16%',
                  endingShape: 'rounded',
                  borderRadius: 5,
              },
          },
          legend: {
              show: false,
              offsetY: -25,
              offsetX: -5
          },
          xaxis: {
              categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
              labels: {
                  minHeight: 20,
                  maxHeight: 20,
              }
          },
          yaxis: {
            labels: {
                minWidth: 20,
                maxWidth: 20,
            }
        },
      };

      const chart = new ApexCharts(document.querySelector("#admin-chart-1"), options);
      chart.render();
  }
  if (jQuery("#admin-chart-2").length) {
      let data = []
      const options = {
          series: [{
              name: 'Food',
              data: data.slice()
          }],
          colors: ["#3BB77E"],
          stroke: {
              width: 2
          },
          chart: {
              height: 60,
              type: 'area',
              animations: {
                  enabled: true,
                  easing: 'linear',
                  dynamicAnimation: {
                      speed: 1e3
                  }
              },
              sparkline: {
                  enabled: true,
              }
          },
          dataLabels: {
              enabled: false
          },

          xaxis: {
              type: 'datetime',
              range: XAXISRANGE,
          },
          yaxis: {
              max: 100
          },
          fill: {
              type: 'gradient',
              gradient: {
                  opacityFrom: 0.91,
                  opacityTo: 0.2,
              }
          },
      };

      const chart = new ApexCharts(document.querySelector("#admin-chart-2"), options);
      chart.render();

      setInterval(() => {
          data = chartFunction.chartDummySearies(lastDate, {
              min: 10,
              max: 90
          }, data)
          chart.updateSeries([{
              'data': data
          }])
      }, 1e3)

  }
  if (jQuery("#admin-chart-3").length) {
      let data = []
      const options = {
          series: [{
              name: 'Food',
              data: data.slice()
          }],
          colors: ["#EA6A12"],
          stroke: {
              width: 2
          },
          chart: {
              height: 50,
              type: 'area',
              animations: {
                  enabled: true,
                  easing: 'linear',
                  dynamicAnimation: {
                      speed: 1e3
                  }
              },
              sparkline: {
                  enabled: true,
              }
          },
          dataLabels: {
              enabled: false
          },

          xaxis: {
              type: 'datetime',
              range: XAXISRANGE,
          },
          yaxis: {
              max: 100
          },
          fill: {
              type: 'gradient',
              gradient: {
                  opacityFrom: 0.91,
                  opacityTo: 0.2,
              }
          },
      };

      const chart = new ApexCharts(document.querySelector("#admin-chart-3"), options);
      chart.render();

      setInterval(() => {
          data = chartFunction.chartDummySearies(lastDate, {
              min: 10,
              max: 90
          }, data)
          chart.updateSeries([{
              'data': data
          }])
      }, 1e3)

  }
  if (jQuery('#admin-chart-4').length) {
      const options = {
          series: [{
              name: "Total sales",
              data: [10, 10, 35, 10]
          }],
          colors: ["#EA6A12"],
          chart: {
              height: 50,
              width: 100,
              type: 'line',
              sparkline: {
                  enabled: true,
              },
              zoom: {
                  enabled: false
              }
          },
          dataLabels: {
              enabled: false
          },
          stroke: {
              curve: 'smooth'
          },
          title: {
              text: '',
              align: 'left'
          },

          xaxis: {
              categories: ['Jan', 'Feb', 'Mar'],
          }
      };

      const chart = new ApexCharts(document.querySelector("#admin-chart-4"), options);
      chart.render();
  }
  if (jQuery('#admin-chart-5').length) {
      const options = {
          series: [{
              name: "Total Profit",
              data: [10, 10, 35, 10]
          }],
          colors: ["#3BB77E"],
          chart: {
              height: 50,
              width: 90,
              type: 'line',
              sparkline: {
                  enabled: true,
              },
              zoom: {
                  enabled: false
              }
          },
          dataLabels: {
              enabled: false
          },
          stroke: {
              curve: 'smooth'
          },
          title: {
              text: '',
              align: 'left'
          },

          xaxis: {
              categories: ['Jan', 'Feb', 'Mar'],
          }
      };

      const chart = new ApexCharts(document.querySelector("#admin-chart-5"), options);
      chart.render();
  }
  if (jQuery('#admin-chart-6').length) {
      const options = {
          series: [{
                  name: 'Food',
                  data: chartFunction.generateDayWiseTimeSeries(new Date('11 Feb 2021 GMT').getTime(), 20, {
                      min: 10,
                      max: 20
                  })
              },
              {
                  name: 'Cold Drinks',
                  data: chartFunction.generateDayWiseTimeSeries(new Date('11 Feb 2021 GMT').getTime(), 20, {
                      min: 10,
                      max: 35
                  })
              },
              {
                  name: 'Deserts',
                  data: chartFunction.generateDayWiseTimeSeries(new Date('11 Feb 2021 GMT').getTime(), 20, {
                      min: 10,
                      max: 60
                  })
              }
          ],
          chart: {
              toolbar: {
                  show: false,

              },
              type: 'area',
              height: 300,
              stacked: true,
              zoom: {
                  enabled: false
              },
              events: {
                  selection: function(chart, e) {
                      console.log(new Date(e.xaxis.min))
                  }
              },
          },
          colors: ['#959895', '#3BB77E', '#EA6A12'],
          stroke: {
              curve: 'smooth',
              width: 2
          },
          dataLabels: {
              enabled: false
          },
          legend: {
              show: false
          },
          fill: {
              type: 'gradient',
              gradient: {
                  opacityFrom: 0.91,
                  opacityTo: 0.2,
              }
          },
          xaxis: {
              type: 'datetime',
              labels: {
                  show: false
              }
          },
          yaxis: {
              labels: {
                  minWidth: 20,
                  maxWidth: 20,
                  formatter: function(val) {
                      return val + "%";
                  }
              }
          }
      };

      const chart = new ApexCharts(document.querySelector("#admin-chart-6"), options);
      chart.render();
  }

  if (jQuery("#admin-chart-7").length) {
      const options = {
          series: [{
              name: 'Product',
              data: [3.3, 2.9, 3.8, 9.1, 6.0, 2.8, 4.5]
          }],
          chart: {
              height: 160,
              type: 'bar',
              animations: {
                  enabled: true,
                  easing: 'easeinout',
                  speed: 800,
                  dynamicAnimation: {
                      enabled: true,
                      speed: 400
                  }
              },

              toolbar: {
                  show: false
              },
          },
          plotOptions: {
              bar: {

                  columnWidth: '71%',
              }
          },
          colors: [
              function({
                  value,
              }) {
                  if (value < 8) {
                      return '#FBE1D0'
                  } else {
                      return '#EA6A12'
                  }
              }
          ],
          states: {
            normal: {
                filter: {
                    type: 'none',
                    value: 0,
                }
            },
            hover: {
                filter: {
                    type: 'none',
                    value: 0.5,
                }
            },
            active: {
                allowMultipleDataPointsSelection: false,
                filter: {
                    type: 'none',
                    value: 0.1,
                }
            },
        },
          legend: {
              show: false
          },
          dataLabels: {
              enabled: false,
              offsetY: -20
          },
          grid: {
              show: false,
          },
          tooltip: {
              enabled: true,
          },
          xaxis: {
              categories: ["Sun", "Mon", "The", "Wed", "Thu", "Fri", "Sat"],
              labels: {
                  minHeight: 20,
                  maxHeight: 20
              },
              axisTicks: {
                  show: false
              },
              axisBorder: {
                  show: false
              },
          },

          yaxis: {
              axisBorder: {
                  show: false
              },
              axisTicks: {
                  show: false,
              },
              labels: {
                  show: false,
                  minWidth: 20,
                  maxWidth: 20,
                  formatter: function(val) {
                      return val + "%";
                  }
              }

          },
          responsive: [{
            breakpoint: 1366,
            options: {
              chart: {
                height:155
              }
            }
          }]
      };

      const chart = new ApexCharts(document.querySelector("#admin-chart-7"), options);
      chart.render();

      $('[data-chart="update"]').on('click', function() {
          const type = $(this).attr('data-type')
          let searies = []
          switch (type) {
              case 'member':
                  searies = [{
                      name: 'Product',
                      data: [9.3, 3.9, 8.8, 4.1, 6.0, 2.8, 4.5]
                  }]
                  break;
              case 'customer':
                  searies = [{
                      name: 'Product',
                      data: [3.2, 2.8, 4.5, 4.7, 9.1, 8.6, 5.2]
                  }]
                  break;
              default:
                  searies = [{
                      name: 'member',
                      data: [3.3, 2.9, 3.8, 9.1, 6.0, 2.8, 4.5]
                  }]
                  break;
          }
          chart.updateSeries(searies)
      })
  }
  if (jQuery("#admin-chart-8").length) {
      const options = {
        series: [{
            name: "Total sales",
            data: [10, 10, 25, 10]
        }],
        colors: ["#3BB77E"],
        chart: {
            height: 70,
            width: 130,
            type: 'line',
            sparkline: {
                enabled: true,
            },
            zoom: {
                enabled: false
            }
        },
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        tooltip: {
            enabled: false,
        },
        title: {
            text: '',
            align: 'left'
        },

        xaxis: {
            categories: ['Jan', 'Feb', 'Mar'],
        }
    };

      var chart = new ApexCharts(document.querySelector("#admin-chart-8"), options);
      chart.render();
    }
})(jQuery)