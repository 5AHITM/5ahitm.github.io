function getHouseProfit(quote1, quote2) {
  return Math.round(Math.abs(1 / quote1 + 1 / quote2 - 1) * 100000) / 1000;
}

function getData() {

    

    let data = {
        "quote1": document.getElementById('quote1').value,
        'quote2': document.getElementById('quote2').value,
        'winPercentage1': document.getElementById('winPercentage1').value,
        'winPercentage2': document.getElementById('winPercentage2').value,
        'houseProfit': document.getElementById('houseProfit').value
    }

    console.log(data);
    let newData = getAllValues(data);

    document.getElementById('quote1').value = newData.quote1;
    document.getElementById('quote2').value = newData.quote2;
    document.getElementById('winPercentage1').value = newData.winPercentage1;
    document.getElementById('winPercentage2').value = newData.winPercentage2;
    document.getElementById('houseProfit').value = newData.houseProfit;
}

function getAllValues(input) {
    let quote1 = input.quote1;
    let quote2 = input.quote2;
    let winPercentage1 = input.winPercentage1;
    let winPercentage2 = input.winPercentage2;
    let houseProfit = input.houseProfit;
    if (quote1 == null) {
        if (quote2 == null) {
            quote1 = getQuoteByProbAndRes(winPercentage1, houseProfit);
        }
        quote1 = getQuoteFromByPlayer(quote2, houseProfit);
    }

    if (quote2 == null) {
        if (quote1 == null) {
            quote2 = getQuoteByProbAndRes(winPercentage2, houseProfit);
        }
        quote2 = getQuoteFromByPlayer(quote1, houseProfit);
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

function getQuoteFromByPlayer(quote1, result) {
    return 1 / (result - (1 / quote1));
}

function getQuoteByProbAndRes(probability, result) {
    return -100 / ((probability - 100) * result);
}

function getProbabilityByQuoteAndRes(quote, result) {
    return 100 - (-100 / (quote * result) + 100 )
}

function getResByQuoteAndProb(quote, probability2) {
    return 1 / (1 / quote + (1 - probability2 / 100) / quote);
}




















/* let ratings = {
    "quote1":"",
    "quote2":"",
    "probability1":"",
    "probability2":"",
    "probabilityFrame1":"",
    "probabilityFrame2":"",
    "amount": 0,
    "result": 0
 };
 
 let quoteOptions = [
    {id: "quote1",
    name: "Quote 1",},
    {id: "quote2",
    name: "Quote 2",},
    {
        id: "probability1",
        name: "Probability 1",
    },
    {
        id: "probability2",
        name: "Probability 2",
    },
    {
        id: "probabilityFrame1",
        name: "Probability Frame 1",
    },
    {
        id: "probabilityFrame2",
        name: "Probability Frame 2",
    },
    {
        id: "amount",
        name: "Amount",
    },
    {
        id: "result",
        name: "Result",
    }
 ]

document.querySelectorAll(".select-options").forEach(function (el) {
    quoteOptions.forEach(function (option) {
        let div = document.createElement("option");
        div.innerHTML = option.name;
        div.value = option.id;
        el.parentNode.insertBefore(div, el.nextSibling);
    });
}); */