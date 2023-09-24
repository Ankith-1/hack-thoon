// All states map view code JS
var templeView;
var timg1,timg2,timg3,timg4;
const closeView = () =>{
  document.getElementById("slideContainer").style.display='none';
  document.getElementById("outerSlideFunc").style.display='none';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'none';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'none';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'none';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'none';
}
document.getElementById("View").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/gujSlide.PNG";
   templeView = "gujarat";
  document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("rajasthanView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/rajasthan UI.png";
  templeView='rajasthan'
  document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});


document.getElementById("himachalView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/HP UI.png";
  templeView='himachalPradesh'
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("JharkhandView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  templeView='jharkhand'
  sourceView.src="./images/JK UI.png";
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("MeghalayaView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/meghalaya UI.png";
  templeView='meghalya'
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("KarnatakaView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/Karnataka UI.png";
   templeView = "karnataka";
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});


document.getElementById("AssamView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/assam UI.png";
  templeView='assam';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("TripuraView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/tripura UI.png";
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("MizoramView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/mizoram UI.png";
  templeView = 'mizoram';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("NagalandView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/nagaland UI.png";
  templeView='nagaland';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("JammuKashmirView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/JK UI.png";
  templeView='JammuKashmir';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("WestBengalView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/west bengal UI.png";
  templeView='westBengal';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("keralaView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/Kerala UI.png";
  templeView='kerala';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("SikkimView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/sikkim UI.png";
  templeView='sikkim';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("ArunachalPradeshView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/arunachal pradesh UI.png";
  templeView='arunachalPradesh';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});




document.getElementById("ManipurView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/manipur UI.png";
  templeView='manipur';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});


document.getElementById("tamilNaduView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/TN UI.png";
  templeView='tamilNadu';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("MaharashtraView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/maharastra UI.png";
  templeView='maharashtra';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("TelanganaView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  templeView = 'telannga';
  sourceView.src="./images/telangana UI.png";
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("ChhattisgarhView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/chhatisgarh UI.png";
  templeView='chhattisgarh'
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("HaryanaView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/haryana UI.png";
  templeView='haryana';
  document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("OdishaView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/odisha UI.png";
  templeView='odisha';
  document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});


document.getElementById("AndhraPradeshView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/AP UI.png";
  templeView='andhraPradesh';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("PunjabView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/punjab UI.png";
  templeView = 'punjab';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("UttrakhanView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/uttarakhand UI.png";
  templeView = 'uttrakhand';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("GoaView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/goa UI.png";
  templeView='goa';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});
document.getElementById("MadhyaPradeshView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/Madhya pradesh UI.png";
  templeView='madhyaPradesh';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("UttarPradeshView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/uttarpradesh UI.png";
  templeView='uttarPradesh';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("LadakhView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/";
  templeView='ladakh';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});

document.getElementById("BiharView").addEventListener("click", function(event){
  var sourceView = document.getElementById("sourceMapImage");
  sourceView.src="./images/bihar UI.png";
  templeView='bihar';
   document.getElementById("slideContainer").style.display='block';
  document.getElementById('outerSlideFunc').style.display='block';
  document.getElementsByClassName("SlideImageIcons")[0].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[1].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[2].style.display = 'block';
  document.getElementsByClassName("SlideImageIcons")[3].style.display = 'block';
  event.preventDefault();
});


document.getElementById("templeViewOn").addEventListener("click", function(event){
  // var sourceView = document.getElementById("sourceMapImage");
  // sourceView.src="./images/Madhya pradesh UI.png";
  document.getElementById('AccessTempleView').style.display='block';
  if(templeView == 'gujarat'){
    var timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/somnath.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
    var timg2 = document.getElementById('TempleImage2');
    timg2.src = './images/akshardhamtemple.jpeg';
  } else if(templeView=='karnataka'){
     timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/udupitemple.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
     timg2 = document.getElementById('TempleImage2').hidden=true;
    timg2.src = './images/akshardhamtemple.jpeg';
  } else if(templeView =='punjab'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/goldenTemple.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
     timg2 = document.getElementById('TempleImage2').hidden=true;
    timg2.src = './images/akshardhamtemple.jpeg';
  } else if(templeView =='uttrakhand'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/badrinath.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
     timg2 = document.getElementById('TempleImage2');
    timg2.src = './images/kedarnath.jpeg';
  }else if(templeView=='kerala'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/Padmanabhaswamy.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
     timg2 = document.getElementById('TempleImage2');
    timg2.src = './images/sabariMala.jpeg';
  } else if(templeView=='odisha'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/jagannath.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
    timg2 = document.getElementById('TempleImage2').hidden=true;
    timg2.src = './images/sabariMala.jpeg';
  }else if(templeView=='tamilNadu'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/rameshwaram.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
    timg2 = document.getElementById('TempleImage2').hidden=true;
    timg2.src = './images/sabariMala.jpeg';
  }else if(templeView=='maharashtra'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/shirdi.jpeg';
    timg1.style.marginTop='100px';
    timg2 = document.getElementById('TempleImage2').hidden=true;
    timg2.src = './images/sabariMala.jpeg';
    timg3=document.getElementById('TempleImage3');
    timg3.src='./images/bhimashankartemple.jpeg'
  }else if(templeView=='madhyaPradesh'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/mahakaleshwar.jpeg';
    timg1.style.marginTop='100px';
    timg2 = document.getElementById('TempleImage2');
    timg2.src = './images/kalbhairav.jpeg';
    document.getElementById('TempleImage3').hidden=true;
  }else if(templeView=='westBengal'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/kalighattemple.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
    timg2 = document.getElementById('TempleImage2').hidden=true;
    timg2.src = './images/sabariMala.jpeg';
  }else if(templeView=='rajasthan'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/ranakpur.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
    timg2 = document.getElementById('TempleImage2').hidden=true;
    timg2.src = './images/sabariMala.jpeg';
  }else if(templeView=='uttarPradesh'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/kashivishwanath.jpeg';
    timg1.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
    timg2 = document.getElementById('TempleImage2').hidden=true;
    timg2.src = './images/sabariMala.jpeg';
  }else if(templeView=='JammuKashmir'){
    timg1 = document.getElementById('TempleImage1');
    timg1.src='./images/amarnath.jpeg';
    timg1.style.marginTop='100px';
    timg2 = document.getElementById('TempleImage2');
    timg2.src = './images/vaishnodevi.jpeg';
    timg2.style.marginTop='100px';
    document.getElementById('TempleImage3').hidden=true;
  }else if(templeView=='telannga'){
    document.getElementById('AccessTempleView').style.display='none';  
  }
  else if(templeView==''){
    document.getElementById('AccessTempleView').style.display='none';

  }else{
    document.getElementById('AccessTempleView').style.display='none';
  }
  event.preventDefault();
});

// function accessTemple(){
//   if(templeView == 'gujarat'){
//     var timg1 = document.getElementById('TempleImage1');
//     timg1.src='./images/somnath.jpeg';
//     var timg2 = document.getElementById('TempleImage2');
//     timg2.src = './images/akshardhamtemple.jpeg';
//   }
// }

document.getElementById("closeTempleView").addEventListener("click", function(event){
  // var sourceView = document.getElementById("sourceMapImage");
  // sourceView.src="./images/Madhya pradesh UI.png";
  document.getElementById('AccessTempleView').style.display='none';
  event.preventDefault();
});