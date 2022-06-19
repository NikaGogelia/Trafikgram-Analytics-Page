"use strict";
// Selectors
const refreshButton = document.querySelector(".refresh-btn");
const refreshIcon = document.querySelector(".refresh-icon");

// Refresh OnClick Of Refresh Button
refreshButton.addEventListener("click", () => {
  refreshIcon.classList.add("rotate-anim");
  setTimeout(() => {
    window.location.reload();
    refreshIcon.classList.remove("rotate-anim");
  }, 1000);
});

// Charts //

// Reach Chart
const dates = ["31/01", "1/02", "2/02", "3/02", "4/02", "5/02", "6/02"];
const reach = document.getElementById("reach-chart").getContext("2d");
const reachChart = new Chart(reach, {
  type: "line",
  data: {
    labels: dates,
    datasets: [
      {
        label: "Reach",
        data: [55000, 30000, 79050, 95620, 60156, 150321, 180564],
        fill: true,
        borderColor: "#9DA2CB",
        backgroundColor: "#d0cbf3af",
        tension: 0.4,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 250000,
        ticks: {
          stepSize: 50000,
        },
      },
    },
  },
});

const postAndStories = document
  .getElementById("post-stories-chart")
  .getContext("2d");
const postAndStoriesChart = new Chart(postAndStories, {
  type: "bar",
  data: {
    labels: dates,
    datasets: [
      {
        label: "Post And Stories",
        data: [5, 13, 17, 27, 46, 34, 20],
        borderColor: ["#9DA2CB"],
        backgroundColor: ["#d0cbf3af"],
        borderWidth: 2,
        borderRadius: 10,
        borderSkipped: false,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        min: 0,
        max: 50,
        ticks: {
          stepSize: 10,
        },
      },
    },
  },
});

const campaign = document.getElementById("campaign-pie-chart").getContext("2d");
const campaignPieChart = new Chart(campaign, {
  type: "doughnut",
  data: {
    labels: [
      "Kerala",
      "Karnataka",
      "Telangana & Andhra Pradesh",
      "Maharashtra",
      "Tamilnadu",
    ],
    datasets: [
      {
        label: "My First Dataset",
        data: [20, 40, 10, 20, 10],
        backgroundColor: [
          "#7227dcd0",
          "#fe0596c4",
          "#c82da4d5",
          "#e53b5ad5",
          "#fdc304d5",
        ],
        hoverOffset: 4,
      },
    ],
  },
  options: {
    plugins: {
      legend: {
        position: "bottom",
      },
    },
  },
});

const progress = document.getElementById("progress").getContext("2d");
const progressChart = new Chart(progress, {
  type: "doughnut",
  data: {
    labels: ["30k", "20k"],
    datasets: [
      {
        data: [30000, 20000],
        backgroundColor: ["#605BD1", "#D0CBF3"],
        hoverBackgroundColor: ["#7327DC", "#9DA2CB"],
      },
    ],
  },
  options: {
    rotation: -90,
    circumference: 180,
  },
});
