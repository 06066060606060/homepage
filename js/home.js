//Mes fonctions JS

// ---------------------------------------------fonction background bing avec selecteur + sauvegarde web storage.--------------------------------
function GetJSON() {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://peapix.com/bing/feed?country=FR";

  var storedValue = localStorage.getItem("variant");

  if (storedValue == null) {
    // console.log("variant null");
    document.getElementById("quantity").value = "1";
    localStorage.setItem("variant", "1");
    var imgvariant = "1";
  } else {
    //console.log("variant not null");
    var imgvariant = localStorage.getItem("variant");
    document.getElementById("quantity").value = imgvariant;
  }

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var ans = JSON.parse(this.responseText);
      // console.log(ans[2]['fullUrl']);
      var pointer = ans[imgvariant]["fullUrl"].toString();
      document.getElementById("InputB").src = pointer;
      //  console.log(pointer);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}
// ----------------------------------------selecteur background---------------------------------------
function changeBg() {
  imgvariant = document.getElementById("quantity").value;
  localStorage.setItem("variant", imgvariant);
}

//---------------------------- active menu favoris-------------------------------------------
function toggleNav() {
  var updateElement = document.getElementById("menu");
  updateElement.classList.toggle("active");
}

// active menu option
function optionMenu() {
  //console.log("optionMenu");
  var optionmenu = document.getElementById("option-menu");
  optionmenu.classList.toggle("active");
}

// --------------------------------active bitcoin price---------------------------------
function bitcoinprice() {
  var btcstorage =  localStorage.getItem("bitcoin");
  if (btcstorage == null) {
    // console.log("variant null");
    localStorage.setItem("bitcoin", "0");
  } else if (btcstorage == 1) {
    btcprice.classList.toggle("active");
    document.getElementById("btc-check").checked = true;
  }

}

function btccheck(){
  var checkBox = document.getElementById("btc-check");
  var btcprice = document.getElementById("btcprice");

  if (checkBox.checked == true){
    btcprice.classList.toggle("active");
    localStorage.setItem("bitcoin", "1");
  // console.log("checked");
  } else {
  //  console.log("unchecked");
    btcprice.classList.toggle("active");
    localStorage.setItem("bitcoin", "0");
  }
}





//---------------------------------fonction favoris en json----------------------------------------

function Favoris() {
  fetch("./favoris.json")
    .then((res) => res.json())
    .then((out) => {
      // console.table(out);
      const text = JSON.stringify(out);
      const obj = JSON.parse(text);

      //fav1
      var outputn1 = obj.name1;
      var output1 = obj.fav1;
      //fav2
      var outputn2 = obj.name2;
      var output2 = obj.fav2;
      //fav3
      var outputn3 = obj.name3;
      var output3 = obj.fav3;
      //fav4
      var outputn4 = obj.name4;
      var output4 = obj.fav4;
      //fav5
      var outputn5 = obj.name5;
      var output5 = obj.fav5;
      //fav7
      var outputn7 = obj.name7;
      var output7 = obj.fav7;

      document.getElementById("fav1").text = outputn1;
      // document.getElementById("icon1").src = output1 + "favicon.ico";  //grab favicon
      document.getElementById("fav1").href = output1;
      //  localStorage.setItem("fav1", output1); // save to local storage

      document.getElementById("fav2").text = outputn2;
      document.getElementById("fav2").href = output2;

      document.getElementById("fav3").text = outputn3;
      document.getElementById("fav3").href = output3;

      document.getElementById("fav4").text = outputn4;
      document.getElementById("fav4").href = output4;

      document.getElementById("fav5").text = outputn5;
      document.getElementById("fav5").href = output5;

      document.getElementById("fav7").text = outputn7;
      document.getElementById("fav7").href = output7;
    });
}
