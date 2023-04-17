function houseProfit(quote1, quote2) {
  return Math.round(Math.abs(1 / quote1 + 1 / quote2 - 1) * 100000) / 1000;
}

function getValues() {
    quote1 = document.getElementById('firstQuote').value;
    quote2 = document.getElementById('secondQuote').value;
    document.getElementById('result').value = houseProfit(quote1, quote2);
}