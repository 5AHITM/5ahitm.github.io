/**
 *
 * @param {*} quote1 Quote 1
 * @param {*} quote2 Quote 2
 * @returns houseprofit (1.05335)
 */
function getHouseProfit(quote1, quote2) {
  return Math.abs(1 / quote1 + 1 / quote2);
}
/**
 *
 * @param {*} quote1 Quote 1
 * @param {*} quote2 Quote 2
 * @returns probability of first quote(54.83028720626633)
 */
function getProbability(quote1, quote2) {
  return (1 / quote1 / (1 / quote1 + 1 / quote2)) * 100;
}

/**
 *
 * @param {*} quote1 given quote (1.73)
 * @param {*} result houseprofit  (1.05335)
 * @returns second quote (2.1)
 */
function getQuoteFromByPlayer(quote1, result) {
  return 1 / (result - 1 / quote1);
}

// P & Res -> Q
function getQuoteByProbAndRes(probability, result) {
  return -100 / ((probability - 100) * result);
}

// Q & Res -> P

function getProbabilityByQuoteAndRes(quote, result) {
  return 100 - (-100 / (quote * result) + 100);
}

// Q & P -> Res

function getResByQuoteAndProb(quote, probability2) {
  return 1 / (1 / quote + (1 - probability2 / 100) / quote);
}

function getValues() {
  let firstOption = document.getElementById("first").value;
  let secondOption = document.getElementById("second").value;
  let thirdOption = document.getElementById("third").value;

  let firstValue = document.getElementById("firstValue").value;
  let secondValue = document.getElementById("secondValue").value;
  let thirdValue = document.getElementById("thirdValue").value;

  let values = {
    quote1: null,
    quote2: null,
    winPercentage1: null,
    winPercentage2: null,
    houseProfit: null,
  };

  values[firstOption] = Number(firstValue);
  values[secondOption] = Number(secondValue);
  values[thirdOption] = Number(thirdValue);

  delete values["none"];

  console.log(values);

  let results = getAllValues(values);

  delete results[firstOption];
  delete results[secondOption];
  delete results[thirdOption];

  console.log(results);

  document.querySelector(".results").innerHTML = "";
  // loop over results;
  for (let key in results) {
    let div = document.createElement("div");
    div.innerHTML =
      quoteOptions.find((element) => element.id === key).name +
      ": " +
      Math.round(results[key] * 10000) / 10000;
    document.querySelector(".results").appendChild(div);
  }
}

let ratings = {
  quote1: "",
  quote2: "",
  probability1: "",
  probability2: "",
  probabilityFrame1: "",
  probabilityFrame2: "",
  amount: 0,
  result: 0,
};

let quoteOptions = [
  { id: "quote1", name: "Quote 1" },
  { id: "quote2", name: "Quote 2" },
  {
    id: "winPercentage1",
    name: "Win Percentage 1",
  },
  {
    id: "winPercentage2",
    name: "Win Percentage 2",
  },
  {
    id: "houseProfit",
    name: "House Profit",
  },
];

document.querySelectorAll(".select-options").forEach(function (el) {
  let div = document.createElement("option");
  div.innerHTML = "None";
  div.value = "none";
  el.appendChild(div);
  quoteOptions.forEach(function (option) {
    let div = document.createElement("option");
    div.innerHTML = option.name;
    div.value = option.id;
    el.appendChild(div);
  });
});

function getAllValues(input) {
  let quote1 = input.quote1;
  let quote2 = input.quote2;
  let winPercentage1 = input.winPercentage1;
  let winPercentage2 = input.winPercentage2;
  let houseProfit = input.houseProfit;

  if (quote1 == null) {
      if (quote2 == null) {
          quote1 = getQuoteByProbAndRes(winPercentage1, houseProfit);
      }else{
          quote1 = getQuoteFromByPlayer(quote2, houseProfit);
      }
  }

  if (quote2 == null) {
      if (quote1 == null) {
          quote2 = getQuoteByProbAndRes(winPercentage2, houseProfit);
      }else{
          quote2 = getQuoteFromByPlayer(quote1, houseProfit);
      }
  }

  if (winPercentage1 == null) {
      winPercentage1 = getProbability(quote1, quote2);
  }
  if (winPercentage2 == null) {
      winPercentage2 = getProbability(quote2, quote1);
  }

  if (houseProfit == null) {
      houseProfit = getHouseProfit(quote1, quote2);
  }

  return {
      quote1,
      quote2,
      winPercentage1,
      winPercentage2,
      houseProfit
  }
}
