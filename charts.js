// ===============================
// SaaS Dashboard - Charts Module
// ===============================

// Sales / Revenue Line Chart
const revenueCtx = document
  .getElementById("revenueChart")
  .getContext("2d");

new Chart(revenueCtx, {
  type: "line",
  data: {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Revenue",
        data: [1200, 1900, 3000, 2500, 4000, 5200],
        borderWidth: 2,
        tension: 0.4,
        fill: true
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    },
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});

// User Growth Bar Chart
const userCtx = document
  .getElementById("userChart")
  .getContext("2d");

new Chart(userCtx, {
  type: "bar",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Active Users",
        data: [120, 190, 300, 250, 400, 320, 500],
        borderWidth: 1
      }
    ]
  },
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: true
      }
    }
  }
});

// Device Usage Pie Chart
const deviceCtx = document
  .getElementById("deviceChart")
  .getContext("2d");

new Chart(deviceCtx, {
  type: "pie",
  data: {
    labels: ["Mobile", "Desktop", "Tablet"],
    datasets: [
      {
        data: [55, 35, 10]
      }
    ]
  },
  options: {
    responsive: true
  }
});