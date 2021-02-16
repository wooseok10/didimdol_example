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
  type: 'line',
  data: {
    labels: ["1시", "2시", "3시", "4시", "5시", "6시", "7시", "8시", "9시", "10시", "11시", "12시", "13시", "14시", "15시", "16시", "17시", "18시", "19시", "20시", "21시", "22시", "23시", "24시"],
    datasets: [{
      fill: false,
      label: "냉장창고 #1",
      lineTension: 0,
      backgroundColor: "#8FAADC",
      borderColor: "#8FAADC",
      pointRadius: 3,
      pointBackgroundColor: "rgba(78, 115, 223, 1)",
      pointBorderColor: "rgba(78, 115, 223, 1)",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "rgba(78, 115, 223, 1)",
      pointHoverBorderColor: "rgba(78, 115, 223, 1)",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: ["-2", "-1", "-3", "-2", "-3", "-2", "-1", "0", "-1", "-3", "-2", "-5", "-6", "-3", "-1", "-2", "-1", "-3", "0", "-5", "-4", "-2", "-3", "-7"],
    },
    {
      fill: false,
      label: "냉장창고 #2",
      lineTension: 0.3,
      backgroundColor: "red",
      borderColor: "red",
      pointRadius: 3,
      pointBackgroundColor: "red",
      pointBorderColor: "red",
      pointHoverRadius: 3,
      pointHoverBackgroundColor: "red",
      pointHoverBorderColor: "red",
      pointHitRadius: 10,
      pointBorderWidth: 2,
      data: ["1", "0", "-1", "1", "0", "2", "4", "2", "3", "5", "2", "1", "-1", "2", "1", "5", "8", "10", "7", "8", "6", "4", "2", "3"],
    },
    {
      fill: false,
      label: "냉장창고 #3",
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
      data: ["8", "6", "7", "8", "8", "9", "7", "5", "8", "6", "10", "12", "14", "20", "17", "18", "15", "10", "11", "9", "7", "3", "3", "2"],
    },
    {
      fill: false,
      label: "냉장창고 #4",
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
      data: ["0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0"],
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
        }
      }],
      yAxes: [{
        ticks: {
          padding: 10,
          min: -15,
          max: 25
        },
        gridLines: {
          color: "rgb(234, 236, 244)",
          zeroLineColor: "rgb(234, 236, 244)",
          drawBorder: false,
          borderDash: [2, 5],
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
      displayColors: true,
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
