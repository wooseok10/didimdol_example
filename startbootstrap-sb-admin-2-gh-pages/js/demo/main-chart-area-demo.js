// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

function number_format(number, decimals, dec_point, thousands_sep) {
  // *     example: number_format(1234.56, 2, ',', ' ');
  // *     return: '1 234,56'
  number = (number + '').replace(',', '').replace(' ', '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}

// Area Chart Example
var ctx = document.getElementById("myAreaChart");
var myLineChart = new Chart(ctx, {
  type: 'bar',
  data: {
    labels: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"],
    datasets: [{
      label: "수주",
      lineTension: 0.3,
      backgroundColor: "#8FAADC",
      borderColor: "#8FAADC",
      pointRadius: 3,
      pointBackgroundColor: "#8FAADC",
      pointBorderColor: "#8FAADC",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "#8FAADC",
      pointHoverBorderColor: "#8FAADC",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [2190, 3200, 4150, 4800, 5450, 4850, 4250, 4000, 4200, 4400, 0, 0],
    },
    {
      label: "납기",
      lineTension: 0.3,
      backgroundColor: "orange",
      borderColor: "orange",
      pointRadius: 3,
      pointBackgroundColor: "orange",
      pointBorderColor: "orange",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "orange",
      pointHoverBorderColor: "orange",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [2090, 3000, 3750, 4450, 5210, 4400, 3800, 3500, 3600, 4400, 0, 0],
    },
    {
      label: "출하",
      lineTension: 0.3,
      backgroundColor: "lightslategray",
      borderColor: "lightslategray",
      pointRadius: 3,
      pointBackgroundColor: "lightslategray",
      pointBorderColor: "lightslategray",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "lightslategray",
      pointHoverBorderColor: "lightslategray",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: [2090, 3000, 3750, 4450, 5210, 4400, 3800, 3500, 3600, 4400, 0, 0],
    }],
  },
  options: {
    maintainAspectRatio: false,
    layout: {
      padding: {
        left: 10,
        right: 25,
        top: 25,
        bottom: 0
      }
    },
    scales: {
      xAxes: [{
        time: {
          unit: 'date'
        },
        gridLines: {
          display: false,
          drawBorder: false
        },
        ticks: {
          maxTicksLimit: 7
        }
      }],
      yAxes: [{
        ticks: {
          // maxTicksLimit: 5,
          padding: 10,
          min: 0,
          max: 6000
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2],
          zeroLineBorderDash: [2]
        }
      }],
    },
    legend: {
      display: true
    },
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      titleMarginBottom: 10,
      titleFontColor: '#6e707e',
      titleFontSize: 14,
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      intersect: false,
      mode: 'index',
      caretPadding: 10,
      callbacks: {
        label: function (tooltipItem, chart) {
          var datasetLabel = chart.datasets[tooltipItem.datasetIndex].label || '';
          return datasetLabel + ': ' + number_format(tooltipItem.yLabel);
        }
      }
    }
  }
});
