//Mes fonctions JS
const cors = require("cors")
app.use(
 cors({
   origin: "*",
 })
   )


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
  var btcstorage = localStorage.getItem("bitcoin");
  if (btcstorage == null) {
    // console.log("variant null");
    localStorage.setItem("bitcoin", "0");
  } else if (btcstorage == 1) {
    btcprice.classList.toggle("active");
    document.getElementById("btc-check").checked = true;
  }
}

function btccheck() {
  var checkBox = document.getElementById("btc-check");
  var btcprice = document.getElementById("btcprice");

  if (checkBox.checked == true) {
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

// function Favoris() {
//   fetch("./test/favoris.json")
//     .then((res) => res.json())
//     .then((out) => {
//       // console.table(out);
//       const text = JSON.stringify(out);
//       const obj = JSON.parse(text);

//       //fav1
//       var outputn1 = obj.name1;
//       var output1 = obj.fav1;
//       //fav2
//       var outputn2 = obj.name2;
//       var output2 = obj.fav2;
//       //fav3
//       var outputn3 = obj.name3;
//       var output3 = obj.fav3;
//       //fav4
//       var outputn4 = obj.name4;
//       var output4 = obj.fav4;
//       //fav5
//       var outputn5 = obj.name5;
//       var output5 = obj.fav5;
//       //fav7
//       var outputn7 = obj.name7;
//       var output7 = obj.fav7;

//       document.getElementById("fav1").text = outputn1;
//       // document.getElementById("icon1").src = output1 + "favicon.ico";  //grab favicon
//       document.getElementById("fav1").href = output1;

//       document.getElementById("fav2").text = outputn2;
//       document.getElementById("fav2").href = output2;

//       document.getElementById("fav3").text = outputn3;
//       document.getElementById("fav3").href = output3;

//       document.getElementById("fav4").text = outputn4;
//       document.getElementById("fav4").href = output4;

//       document.getElementById("fav5").text = outputn5;
//       document.getElementById("fav5").href = output5;

//       // document.getElementById("fav6").text = outputn7;
//       // document.getElementById("fav6").href = output7;
//       // localStorage.setItem("fav6", output6); // save to local storage

//       document.getElementById("fav7").text = outputn7;
//       document.getElementById("fav7").href = output7;

//     });
// }

//---------------------------------fonction favoris save local storage----------------------------------------

function favorite() {
  var storedValue = localStorage.getItem("fav1");

  if (storedValue == null) {
    localStorage.setItem("fav1", "http://youtube.com"); // save to local storage
    localStorage.setItem("fav2", "http://twitter.com"); // save to local storage
    localStorage.setItem("fav3", "http://google.com"); // save to local storage
    localStorage.setItem("fav4", "http://facebook.com"); // save to local storage
    localStorage.setItem("fav5", "http://reddit.com"); // save to local storage
    localStorage.setItem("fav6", "http://youtube.com"); // save to local storage
    localStorage.setItem("fav7", "http://youtube.com"); // save to local 
    location.reload();
  } else {
    output1 = localStorage.getItem("fav1");
    output2 = localStorage.getItem("fav2");
    output3 = localStorage.getItem("fav3");
    output4 = localStorage.getItem("fav4");
    output5 = localStorage.getItem("fav5");
    output6 = localStorage.getItem("fav6");
    output7 = localStorage.getItem("fav7");

    document.getElementById("icon1").src = output1 + "/favicon.ico"; //grab favicon

    fav1u = removeHttp(output1);
    document.getElementById("fav1").text = fav1u;
    document.getElementById("fav1").href = output1;
    document.getElementById("bk1").value = output1;

    //-------------------------------------------------------
    document.getElementById("icon2").src = output2 + "/favicon.ico";
    fav2u = removeHttp(output2);
    document.getElementById("fav2").text = fav2u;
    document.getElementById("fav2").href = output2;
    document.getElementById("bk2").value = output2;

    document.getElementById("icon3").src = output3 + "/favicon.ico";
    fav3u = removeHttp(output3);
    document.getElementById("fav3").text = fav3u;
    document.getElementById("fav3").href = output3;
    document.getElementById("bk3").value = output3;

    document.getElementById("icon4").src = output4 + "/favicon.ico";
    fav4u = removeHttp(output4);
    document.getElementById("fav4").text = fav4u;
    document.getElementById("fav4").href = output4;
    document.getElementById("bk4").value = output4;

    document.getElementById("icon5").src = output5 + "/favicon.ico";
    fav5u = removeHttp(output5);
    document.getElementById("fav5").text = fav5u;
    document.getElementById("fav5").href = output5;
    document.getElementById("bk5").value = output5;

    document.getElementById("icon6").src = output6 + "/favicon.ico";
    fav6u = removeHttp(output6);
    document.getElementById("fav6").text = fav6u;
    document.getElementById("fav6").href = output6;
    document.getElementById("bk6").value = output6;

    document.getElementById("icon7").src = output7 + "/favicon.ico";
    fav7u = removeHttp(output7);
    document.getElementById("fav7").text = fav7u;
    document.getElementById("fav7").href = output7;
    document.getElementById("bk7").value = output7;
  }
}

function favoriteSave() {
  var favs1 = document.getElementById("bk1").value;
  var favs2 = document.getElementById("bk2").value;
  var favs3 = document.getElementById("bk3").value;
  var favs4 = document.getElementById("bk4").value;
  var favs5 = document.getElementById("bk5").value;
  var favs6 = document.getElementById("bk6").value;
  var favs7 = document.getElementById("bk7").value;

  localStorage.setItem("fav1", favs1);
  localStorage.setItem("fav2", favs2);
  localStorage.setItem("fav3", favs3);
  localStorage.setItem("fav4", favs4);
  localStorage.setItem("fav5", favs5);
  localStorage.setItem("fav6", favs6);
  localStorage.setItem("fav7", favs7);
  location.reload();
}

function removeHttp(url) {
  if (url.startsWith("https://")) {
    const https = "https://";
    return url.slice(https.length);
  }

  if (url.startsWith("http://")) {
    const http = "http://";
    return url.slice(http.length);
  }
  return url;
}
