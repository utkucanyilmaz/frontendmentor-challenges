const chart = document.getElementById("chart");

async function getData() {
  let response = await fetch("./data.json");
  let data = await response.json();
  createChart(data);
}

const date = new Date();

function createChart(data) {
  chart.innerHTML = "";

  data.forEach((data, idx) => {
    const { day, amount } = data;

    const chartCol = document.createElement("div");

    chartCol.className = "flex flex-col items-center justify-center";

    chartCol.innerHTML = `<div style="height:${Math.ceil(
      amount * 2.865
    )}px" class="chart w-[33px] bg-${
      idx === date.getDay() - 1 ? "cyan" : "softred"
    } rounded-sm hover:transition-colors lg:w-[50px] lg:rounded-md lg:relative hover:opacity-75"></div>
    <div class="text-mediumbrown text-xs mt-2 lg:text-base lg:tracking-tight ">${day}</div>`;

    chart.appendChild(chartCol);
  });
}

// chart.addEventListener("click", showPrice);

// function showPrice(e) {
//   if (e.target.classList.contains("chart")) {
//     let price = document.createElement("div");
//     price.innerText = `${dataset.price}`;
//     console.log(price);
//   } else {
//     return;
//   }
// }

getData();
