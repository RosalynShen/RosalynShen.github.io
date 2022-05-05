

let hairSlider = document.querySelectorAll(".hair"),
  hairLeft = document.querySelector("#arrow-left"),
  hairRight = document.querySelector("#arrow-right"),
  current = 0;

// Clear all images
function reset() {
  for (let i = 0; i < hairSlider.length; i++) {
    hairSlider[i].style.display = "none";
  }
}

// Initial slide
function startSlide() {
  reset();
  hairSlider[0].style.display = "block";
}

// Show previous
function slideLeft() {
  reset();
  hairSlider[current - 1].style.display = "block";
  current--;
}

// Show next
function slideRight() {
  reset();
  hairSlider[current + 1].style.display = "block";
  current++;
}

// Left arrow click
hairLeft.addEventListener("click", function () {
  if (current === 0) {
    current = hairSlider.length;
  }
  slideLeft();
});

// Right arrow click
hairRight.addEventListener("click", function () {
  if (current === hairSlider.length - 1) {
    current = -1;
  }
  slideRight();
});

startSlide();

let capeSlider = document.querySelectorAll(".cape"),
  capeLeft = document.querySelector("#arrow1-left"),
  capeRight = document.querySelector("#arrow1-right"),
  currentC = 0;

function reset1() {
  for (let i = 0; i < capeSlider.length; i++) {
    capeSlider[i].style.display = "none";
  }
}

function startSlide1() {
  reset1();
  capeSlider[0].style.display = "block";
}

function slideLeft1() {
  reset1();
  capeSlider[currentC - 1].style.display = "block";
  currentC--;
}

function slideRight1() {
  reset1();
  capeSlider[currentC + 1].style.display = "block";
  currentC++;
}

capeLeft.addEventListener("click", function () {
  if (currentC === 0) {
    currentC = hairSlider.length;
  }
  slideLeft1();
});

capeRight.addEventListener("click", function () {
  if (currentC === capeSlider.length - 1) {
    currentC = -1;
  }
  slideRight1();
});

startSlide1();

$(".hair1").click(function () {
  $(".1").show();
  $(".2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20").hide();
});
$(".hair2").click(function () {
  $(".2").show();
  $(".1, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20").hide();
});
$(".hair3").click(function () {
  $(".3").show();
  $(".1, .2, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20").hide();
});
$(".hair4").click(function () {
  $(".4").show();
  $(".1, .2, .3, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20").hide();
});
$(".hair5").click(function () {
  $(".5").show();
  $(".1, .2, .3, .4, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20").hide();
});
$(".hair6").click(function () {
  $(".6").show();
  $(".1, .2, .3, .4, .5, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20").hide();
});
$(".hair7").click(function () {
  $(".7").show();
  $(".1, .2, .3, .4, .5, .6, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20").hide();
});
$(".hair8").click(function () {
  $(".8").show();
  $(".1, .2, .3, .4, .5, .6, .7, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20").hide();
});
$(".hair9").click(function () {
  $(".9").show();
  $(".1, .2, .3, .4, .5, .6, .7, .8, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20").hide();
});
$(".hair10").click(function () {
  $(".10").show();
  $(".1, .2, .3, .4, .5, .6, .7, .8, .9, .11, .12, .13, .14, .15, .16, .17, .18, .19, .20").hide();
});
$(".hair11").click(function () {
  $(".11").show();
  $(".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .12, .13, .14, .15, .16, .17, .18, .19, .20").hide();
});
$(".hair12").click(function () {
  $(".12").show();
  $(".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .13, .14, .15, .16, .17, .18, .19, .20").hide();
});
$(".hair13").click(function () {
  $(".13").show();
  $(".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .14, .15, .16, .17, .18, .19, .20").hide();
});
$(".hair14").click(function () {
  $(".14").show();
  $(".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .15, .16, .17, .18, .19, .20").hide();
});
$(".hair15").click(function () {
  $(".15").show();
  $(".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .16, .17, .18, .19, .20").hide();
});
$(".hair16").click(function () {
  $(".16").show();
  $(".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .17, .18, .19, .20").hide();
});
$(".hair17").click(function () {
  $(".17").show();
  $(".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .18, .19, .20").hide();
});
$(".hair18").click(function () {
  $(".18").show();
  $(".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .19, .20").hide();
});
$(".hair19").click(function () {
  $(".19").show();
  $(".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .20").hide();
});
$(".hair20").click(function () {
  $(".20").show();
  $(".1, .2, .3, .4, .5, .6, .7, .8, .9, .10, .11, .12, .13, .14, .15, .16, .17, .18, .19").hide();
});

$(".Cape1").click(function () {
  $(".c1").show();
  $(".c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14, .c15, .c16, .c17, .c18, .c19, .c20").hide();
});
$(".Cape2").click(function () {
  $(".c2").show();
  $(".c1, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14, .c15, .c16, .c17, .c18, .c19, .c20").hide();
});
$(".Cape3").click(function () {
  $(".c3").show();
  $(".c1, .c2, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14, .c15, .c16, .c17, .c18, .c19, .c20").hide();
});
$(".Cape4").click(function () {
  $(".c4").show();
  $(".c1, .c2, .c3, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14, .c15, .c16, .c17, .c18, .c19, .c20").hide();
});
$(".Cape5").click(function () {
  $(".c5").show();
  $(".c1, .c2, .c3, .c4, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14, .c15, .c16, .c17, .c18, .c19, .c20").hide();
});
$(".Cape6").click(function () {
  $(".c6").show();
  $(".c1, .c2, .c3, .c4, .c5, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14, .c15, .c16, .c17, .c18, .c19, .c20").hide();
});
$(".Cape7").click(function () {
  $(".c7").show();
  $(".c1, .c2, .c3, .c4, .c5, .c6, .c8, .c9, .c10, .c11, .c12, .c13, .c14, .c15, .c16, .c17, .c18, .c19, .c20").hide();
});
$(".Cape8").click(function () {
  $(".c8").show();
  $(".c1, .c2, .c3, .c4, .c5, .c6, .c7, .c9, .c10, .c11, .c12, .c13, .c14, .c15, .c16, .c17, .c18, .c19, .c20").hide();
});
$(".Cape9").click(function () {
  $(".c9").show();
  $(".c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c10, .c11, .c12, .c13, .c14, .c15, .c16, .c17, .c18, .c19, .c20").hide();
});
$(".Cape10").click(function () {
  $(".c10").show();
  $(".c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c11, .c12, .c13, .c14, .c15, .c16, .c17, .c18, .c19, .c20").hide();
});
$(".Cape11").click(function () {
  $(".c11").show();
  $(".c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c12, .c13, .c14, .c15, .c16, .c17, .c18, .c19, .c20").hide();
});
$(".Cape12").click(function () {
  $(".c12").show();
  $(".c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c13, .c14, .c15, .c16, .c17, .c18, .c19, .c20").hide();
});
$(".Cape13").click(function () {
  $(".c13").show();
  $(".c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c14, .c15, .c16, .c17, .c18, .c19, .c20").hide();
});
$(".Cape14").click(function () {
  $(".c14").show();
  $(".c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c15, .c16, .c17, .c18, .c19, .c20").hide();
});
$(".Cape15").click(function () {
  $(".c15").show();
  $(".c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14, .c16, .c17, .c18, .c19, .c20").hide();
});
$(".Cape16").click(function () {
  $(".c16").show();
  $(".c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14, .c15, .c17, .c18, .c19, .c20").hide();
});
$(".Cape17").click(function () {
  $(".c17").show();
  $(".c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14, .c15, .c16, .c18, .c19, .c20").hide();
});
$(".Cape18").click(function () {
  $(".c18").show();
  $(".c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14, .c15, .c16, .c17, .c19, .c20").hide();
});
$(".Cape19").click(function () {
  $(".c19").show();
  $(".c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14, .c15, .c16, .c17, .c18, .c20").hide();
});
$(".Cape20").click(function () {
  $(".c20").show();
  $(".c1, .c2, .c3, .c4, .c5, .c6, .c7, .c8, .c9, .c10, .c11, .c12, .c13, .c14, .c15, .c16, .c17, .c18, .c19").hide();
});

$(".d1, .d2, .d3, .d4, .d5").hide();
$(".dec1").click(function () {
  $(".d1").show();
  $(".d2, .d3, .d4, .d5").hide();
});
$(".dec2").click(function () {
  $(".d2").show();
  $(".d1, .d3, .d4, .d5").hide();
});
$(".dec3").click(function () {
  $(".d3").show();
  $(".d1, .d2, .d4, .d5").hide();
});
$(".dec4").click(function () {
  $(".d4").show();
  $(".d1, .d2, .d3, .d5").hide();
});
$(".dec5").click(function () {
  $(".d5").show();
  $(".d1, .d2, .d3, .d4").hide();
});

$(".i1, .i2, .i3, .i4, .i5").hide();
$(".item1").click(function () {
  $(".i1").show();
  $(".i2, .i3, .i4, .i5").hide();
});
$(".item2").click(function () {
  $(".i2").show();
  $(".i1, .i3, .i4, .i5").hide();
});
$(".item3").click(function () {
  $(".i3").show();
  $(".i1, .i2, .i4, .i5").hide();
});
$(".item4").click(function () {
  $(".i4").show();
  $(".i1, .i2, .i3, .i5").hide();
});
$(".item5").click(function () {
  $(".i5").show();
  $(".i1, .i2, .i3, .i4").hide();
});

$(".clearDec").click(function () {
  $(".dec").hide();
});
$(".clearItem").click(function () {
  $(".item").hide();
});

$(".clear").click(function () {
  $(".hair, .cape, .dec, .item").hide();
});

$(".clear").click(function () {
  $(".hair, .cape, .dec, .item").hide();
});

$(".block").hide();
$("#profile").hide();
document.querySelector(".save").addEventListener("click", function () {
  $(".formContainer").show();
  $(".figure").appendTo(".popup-container");
  $(".arrow").hide();
  $(".block").show();
  document.querySelector(".popup").classList.add("active");
  document.querySelector(".figure").style.position = "absolute";
  document.querySelector(".figure").style.left = "-105px";
  document.querySelector(".figure").style.top = "0px";
  document.querySelector(".Hairstyle").style.height == "500px";
});

document.querySelector(".popup .popup-container .popup-close").addEventListener("click", function () {
  document.querySelector(".popup").classList.remove("active");
});


document.querySelector(".popup .popup-container .popup-close").addEventListener("click", function () {
  document.querySelector(".popup").classList.remove("active");
  $(".arrow").show();
  $(".block").hide();
  $(".formContainer").hide();
  $(".figure").appendTo(".container");
  document.querySelector(".figure").style.left = "375px";
  document.querySelector("#arrow-left").style.left = "109px";
  document.querySelector("#arrow1-left").style.left = "109px";
  document.querySelector("#arrow-right").style.right = "-660px";
  document.querySelector("#arrow1-right").style.right = "-660px";

});

$('#submit').click(function () {
  $("#profile").show();
  getInputValue();
  $(".figure").appendTo(".profileContainer");
  document.querySelector(".figure").style.position = "absolute";
  document.querySelector(".figure").style.left = "-20px";
  document.querySelector(".figure").style.zoom= "0.37";
  document.querySelector(".figure").style.transform= 'rotate('+-10+'deg)';
  document.querySelector(".figure").style.top = "320px";
  document.querySelector(".figure").style.zIndex = "-98";
  document.querySelector(".Hairstyle").style.height == "500px";

});

function getInputValue(){
  // Selecting the input element and get its value 
  var inputVal = document.getElementById("fname").value;
  document.getElementById("fnameDisplay").innerHTML = document.getElementById("fname").value;
  document.getElementById("lnameDisplay").innerHTML = document.getElementById("lname").value;
  document.getElementById("genderDisplay").innerHTML = document.getElementById("gender").value;
  document.getElementById("birth").innerHTML = document.getElementById("myDate").value;
  document.getElementById("storyDisplay").innerHTML = document.getElementById("subject").value;
}
