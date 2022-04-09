function GetJSON() {
  var xmlhttp = new XMLHttpRequest();
  var url = "https://peapix.com/bing/feed?country=US";

  xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      var ans = JSON.parse(this.responseText);
      // console.log(ans[2]['fullUrl']);
      var pointer = ans[2]["fullUrl"].toString();
      document.getElementById("InputB").src = pointer;
      //  console.log(pointer);
    }
  };
  xmlhttp.open("GET", url, true);
  xmlhttp.send();
}

function toggleNav() {
  var updateElement = document.getElementById("menu");
  updateElement.classList.toggle("active");
}

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


      document.getElementById("fav1").text = outputn1;
     // document.getElementById("icon1").src = output1 + "favicon.ico";
      document.getElementById("fav1").href = output1;

      document.getElementById("fav2").text = outputn2;
     // document.getElementById("icon2").src = output2 + "favicon.ico";
      document.getElementById("fav2").href = output2;

      document.getElementById("fav3").text = outputn3;
      // document.getElementById("icon2").src = output2 + "favicon.ico";
       document.getElementById("fav3").href = output3;

       document.getElementById("fav4").text = outputn4;
       // document.getElementById("icon2").src = output2 + "favicon.ico";
        document.getElementById("fav4").href = output4;



    });
}
