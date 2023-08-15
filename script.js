const chart = document.getElementById("chart");

async function getData() {
  let response = await fetch("./data.json");
  let data = await response.json();
  createChart(data);
}

getData();

const date = new Date();

function createChart(data) {
  chart.innerHTML = "";

  data.forEach((data, idx) => {
    const { day, amount } = data;

    const chartCol = document.createElement("div");

    chartCol.className = "flex flex-col items-center justify-center";

    chartCol.innerHTML = `<div style="height:${Math.ceil(
      amount * 2.865
    )}px" class="chart-col w-[33px] bg-${
      idx === date.getDay() - 1 ? "cyan" : "softred"
    } rounded-sm hover:transition-colors lg:w-[50px] lg:rounded-md lg:relative hover:opacity-75" data-price="${amount}"></div>
    <div class="text-mediumbrown text-xs mt-2 lg:text-base lg:tracking-tight">${day}</div>`;

    chart.appendChild(chartCol);
  });
}

chart.addEventListener("click", addPriceTag);

function addPriceTag(e) {
  if (e.target.classList.contains("chart-col") && window.innerWidth > 1023) {
    let price = document.createElement("div");
    price.id = "price";
    price.className =
      "flex items-center justify-center p-[10px] bg-darkbrown absolute -top-12 -left-[14px] text-verypaleorange rounded-md font-bold";
    price.innerText = `$${e.target.dataset.price}`;
    e.target.appendChild(price);
    setTimeout(() => {
      price.remove();
    }, 2000);
  } else {
    return;
  }
}
