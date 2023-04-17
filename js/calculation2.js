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

  let results = {
    quote1: 3,
    quote2: 1,
    winPercentage1: 1000,
    winPercentage2: 9,
    houseProfit: 29,
  };

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
      results[key];
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
  div.innerHTML = "Select";
  div.value = "";
  el.appendChild(div);
  quoteOptions.forEach(function (option) {
    let div = document.createElement("option");
    div.innerHTML = option.name;
    div.value = option.id;
    el.appendChild(div);
  });
});
