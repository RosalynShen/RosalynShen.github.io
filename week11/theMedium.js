// let drink = document.getElementsByClassName("drink");

// document.querySelector("div").style.background("blue");


/*$(document).ready(function(){
    $("#matcha").click(function(){
        $("#c").hide();
      });
    $("#coffee").click(function(){
      $("#c").show();
    });
  });
*/
var randomColor = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
$(document).ready(function(){
    $("#I30").hide();
    $("#I50").hide();
    $("#I").hide();
    $("#cream").hide();
    $("#bubble").hide();
    $("#jelly").hide();
    $("#p1").hide();
    $("#p2").hide();
    $("#p3").hide();
    $("#p4").hide();

    $("#coffee").click(function(){
      $("#drink").css("background-color", "#180f0c");
    });
    $("#matcha").click(function(){
        $("#drink").css("background-color", "#a7c08e");
    });
    $("#milktea").click(function(){
        $("#drink").css("background-color", "#cdac8a");
    });
    $("#randDrink").click(function(){
        $("#drink").css("background-color", randomColor);
    });

    $("#none").click(function(){
        $("#I30, #I50, #I").hide();
    });
   
    $("#less").click(function(){
        $("#I30").show();
        $("#I50, #I").hide();
    });
    $("#half").click(function(){
        $("#I50").show();
        $("#I30, #I").hide();
    });
    
    $("#normal").click(function(){
        $("#I").show();
        $("#I30, #I50").hide();
    });
    $("#whippedcream").click(function(){
        $("#cream").show();
    });
    $("#boba").click(function(){
        $("#bubble").show();
    });
    $("#aloe").click(function(){
        $("#jelly").show();
    });
    $("#opt1").click(function(){
        $("#p1").show();
        $("#p2, #p3, #p4").hide();
    });
    $("#opt2").click(function(){
        $("#p2").show();
        $("#p1, #p3, #p4").hide();
    });
    $("#opt3").click(function(){
        $("#p3").show();
        $("#p2, #p1, #p4").hide();
    });
    $("#opt4").click(function(){
        $("#p4").show();
        $("#p2, #p3, #p1").hide();
    });


});
