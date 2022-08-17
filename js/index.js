import createChart1 from "./chart1.js";
import createChart2 from "./chart2.js";

//
fetch("../data/online_rend_all.csv")
  .then((res) => res.text())
  .then((csvText) => {
    const series = [
      { name: "Peccala", color: "#2B1E70" },
      { name: "BTC", color: "#F7931A" },
      { name: "ETH", color: "#3c3c3d" },
      { name: "XRP", color: "#00aae4" },
    ];

    createChart1("chart1-high-risk", csvText, series);
  })
  .catch((e) => {
    console.error("e", e);
  });

//
fetch("../data/online_rend_all_medium.csv")
  .then((res) => res.text())
  .then((csvText) => {
    const series = [
      { name: "Peccala", color: "#2B1E70" },
      { name: "BTC/USDT", color: "#F7931A" },
      { name: "ETH/USDT", color: "#3c3c3d" },
      { name: "XRP/USDT", color: "#00aae4" },
    ];

    createChart1("chart1-medium-risk", csvText, series);
  })
  .catch((e) => {
    console.error("e", e);
  });

//
fetch("../data/Peccala tokens historic prices - DO NOT MOVE - PECH.csv")
  .then((res) => res.text())
  .then((csvText) => {
    createChart2("chart2-high-risk", csvText);
  })
  .catch((e) => {
    console.error("e", e);
  });

//
fetch("../data/Peccala tokens historic prices - DO NOT MOVE - PECM.csv")
  .then((res) => res.text())
  .then((csvText) => {
    createChart2("chart2-medium-risk", csvText);
  })
  .catch((e) => {
    console.error("e", e);
  });
