function convertCurrency(){
    var amount= document.getElementById("amount").value;
    var  fromCurrency= document.getElementById("fromCurrency").value;
    var toCurrency= document.getElementById("toCurrency").value;
    var result=0

    if (fromCurrency==="VND" && toCurrency==="JPY"){
        result=amount / 170

    } else if (fromCurrency==="JPY" && toCurrency==="VND"){
        result=amount * 170

    } else {
        result= amount
    }
    document.getElementById("result").innerText = "Result: " + result;
}