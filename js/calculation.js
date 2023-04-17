function houseProfit(quote1, quote2) {
  return Math.round(Math.abs(1 / quote1 + 1 / quote2 - 1) * 100000) / 1000;
}

function getValues() {
    quote1 = document.getElementById('firstQuote').value;
    quote2 = document.getElementById('secondQuote').value;
    houseProfitValue = document.getElementById('result').value + 1;
    console.log(quote1);
    console.log(quote2);
    console.log(houseProfitValue);

    if ((!Number.isNaN(quote1) || !Number.isNaN(quote2 == '') && houseProfitValue != '')) {
        if (quote1 == '') {
            document.getElementById('firstQuote').value = getQuoteFromByPlayer(quote2, houseProfitValue);
        }

        else {
            document.getElementById('secondQuote').value = getQuoteFromByPlayer(quote1, houseProfitValue);
        }
    }

    else if (quote1 != '' && quote2 != '' && houseProfitValue != '') {
        console.log('Unsupported input.')
    }

    else {
        houseProfitValue = houseProfit(quote1, quote2);
        document.getElementById('result').value = houseProfitValue;
    }
}

function checkIfNumber() {
    if (Number.isInteger(val)) {
        
    }
}

function getQuoteFromByPlayer(quote1, result) {
    return 1 / (result - (1 / quote1));
}

let ratings = {
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
});