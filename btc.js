//BITCOIN PRICE
var url = "https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDC";

function bitcoinP() {
  fetch(url)
    .then((res) => res.json())
    .then((out) => {
      //console.table(out);
      const text = JSON.stringify(out);
      const obj = JSON.parse(text);
      obj.price = eval("{" + obj.price + "}");
      var output = Math.trunc(obj.price);
      document.getElementById("textInputB").value = output + " $";
 
    });
  }