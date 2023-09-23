document.getElementById("View").addEventListener("click", function(event){
  document.getElementById("outerSlideFunc").hidden=false;
  event.preventDefault();
});
const closeView = () =>{
  document.getElementById("outerSlideFunc").hidden=true;
}
document.getElementById("rajasthanView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/rajasthan UI.png";
  document.getElementById("outerSlideFunc").hidden=false;
  event.preventDefault();
});


document.getElementById("himachalView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/HP UI.png";
  document.getElementById("outerSlideFunc").hidden=false;
  event.preventDefault();
});

document.getElementById("JharkhandView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/JK UI.png";
  document.getElementById("outerSlideFunc").hidden=false;
  event.preventDefault();
});

document.getElementById("KarnatakaView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/Karnataka UI.png";
  document.getElementById("outerSlideFunc").hidden=false;
  event.preventDefault();
});

document.getElementById("tamilNaduView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/TN UI.png";
  document.getElementById("outerSlideFunc").hidden=false;
  event.preventDefault();
});

document.getElementById("MaharashtraView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/maharastra UI.png";
  document.getElementById("outerSlideFunc").hidden=false;
  event.preventDefault();
});

document.getElementById("TelanganaView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/telangana UI.png";
  document.getElementById("outerSlideFunc").hidden=false;
  event.preventDefault();
});

document.getElementById("HaryanaView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/haryana UI.png";
  document.getElementById("outerSlideFunc").hidden=false;
  event.preventDefault();
});

document.getElementById("AndhraPradeshView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/AP UI.png";
  document.getElementById("outerSlideFunc").hidden=false;
  event.preventDefault();
});

document.getElementById("PunjabView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/punjab UI.png";
  document.getElementById("outerSlideFunc").hidden=false;
  event.preventDefault();
});

document.getElementById("UttarakhandView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/uttarakhand UI.png";
  document.getElementById("outerSlideFunc").hidden=false;
  event.preventDefault();
});

document.getElementById("MadhyaPradeshView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/Madhya pradesh UI.png";
  document.getElementById("outerSlideFunc").hidden=false;
  event.preventDefault();
});

document.getElementById("templeViewOn").addEventListener("click", function(event){
  // var sourceView = document.getElementById("sourceMapImage");
  // sourceView.src="./images/Madhya pradesh UI.png";
  document.getElementById("templeView").hidden=false;
  event.preventDefault();
});
