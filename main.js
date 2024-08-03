let currencyRatio = {
  USD: { KRW: 1358.16, USD: 1, VND: 25217.5, unit: "달러" },
  KRW: { KRW: 1, USD: 0.00074, VND: 18.57, unit: "원" },
  VND: { KRW: 0.054, USD: 0.00004, VND: 1, unit: "동" },
};

// console.log(currencyRatio.KRW.unit);
// console.log(currencyRatio["KRW"]["unit"]);

document.querySelectorAll("#from-currency-list a").forEach((menu) =>
  menu.addEventListener("click", function () {
    document.getElementById("from-button").textContent = this.textContent;
  })
);
