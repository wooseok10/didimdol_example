// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = 'Nunito', '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#858796';

// Pie Chart Example
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ["1호기 진행율", ""],
    datasets: [{
      data: [80, 20],
      backgroundColor: ['#4e73df', 'white'],
      hoverBackgroundColor: ['#2e59d9', 'white'],
      hoverBorderColor: "white",
    }],
  },
  options: {
    elements: {
      center: {
        text: '80%',
        color: 'black', // Default is #000000
        fontStyle: 'Arial', // Default is Arial
        sidePadding: 20, // Default is 20 (as a percentage)
        minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
        lineHeight: 25 // Default is 25 (in px), used for when text wraps
      }
    },
    maintainAspectRatio: false,
    tooltips: {
      backgroundColor: "rgb(255,255,255)",
      bodyFontColor: "#858796",
      borderColor: '#dddfeb',
      borderWidth: 1,
      xPadding: 15,
      yPadding: 15,
      displayColors: false,
      caretPadding: 10,
    },
    legend: {
      display: false
    },
    cutoutPercentage: 60,
  },
});

// Pie Chart Example
var ctx2 = document.getElementById("myPieChart2");
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
var myPieChart2 = new Chart(ctx2, {
  defaults: {
    labelFontFamily: "Arial",
    labelFontStyle: "normal",
    labelFontSize: 24,
    labelFontColor: "#666",
  },
  type: 'doughnut',
  data: {
    labels: ["2호기 진행율", ""],
    datasets: [{
      data: [40, 60],
      backgroundColor: ['#1cc88a', 'white'],
      hoverBackgroundColor: ['#1cc88a', 'white'],
      hoverBorderColor: "white",
    }],
  },
  options: {
    elements: {
      center: {
        text: '40%',
        color: 'black', // Default is #000000
        fontStyle: 'Arial', // Default is Arial
        sidePadding: 20, // Default is 20 (as a percentage)
        minFontSize: 25, // Default is 20 (in px), set to false and text will not wrap.
        lineHeight: 25 // Default is 25 (in px), used for when text wraps
      }
    },
    maintainAspectRatio: false,
    tooltips: false,
    legend: {
      display: false
    },
    cutoutPercentage: 60,
  },
});
