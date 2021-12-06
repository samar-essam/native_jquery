
$(document).ready(function(){
    let linkWidth= $(".links").outerWidth();
    $("#head").animate({marginLeft : `-${linkWidth}`} , 0)
    $("#main").animate({marginLeft : `-${linkWidth}`} , 0)


    // $("#acc h3").click(function(){
        
    //     $(this).next().slideToggle(500);
    //      $("#acc div").not($(this).next()).slideUp(500);
        
    // });

})

$("#btnOPen").click(function(){
    let linkWidth = $(".links").outerWidth();
    console.log(linkWidth);
    $("#head").animate({marginLeft : `0`} , 1000)
    $("#main").animate({marginLeft : `0`} , 0)
    // if($("#head").css("marginLeft") == "0px"){
    //     $("#head").animate({marginLeft : `-${linkWidth}`} , 1000)
    // }
    // else{
    //     $("#head").animate({marginLeft : `0`} , 1000)
    // }
})

$(".closeBtn").click(function(){
    let linkWidth = $(".links").outerWidth();
    console.log(linkWidth);
    $("#head").animate({marginLeft : `-${linkWidth}`} , 1000)
})


$("a[href^='#']").click(function(e){
    let aHref = e.target.getAttribute('href');
    let sectionOffset = $(aHref).offset().top;
    $("html,body").animate({scrollTop:sectionOffset},1000)
})

$("#acc h3").click(function(){
        
    $(this).next().slideToggle(500);
    $("#acc div").not($(this).next()).slideUp(500);
    
});


function countdown(){
    var now = new Date();
    var eventDate = new Date(2021, 12, 17);

    var currentTiime = now.getTime();
    var eventTime = eventDate.getTime();

    var remTime = eventTime - currentTiime;

    var s = Math.floor(remTime / 1000);
    var m = Math.floor(s / 60);
    var h = Math.floor(m / 60);
    var d = Math.floor(h / 24)-30;

    h %= 24;
    m %= 60;
    s %= 60;

    // h = (h < 10) ? "0" + h : h;
    // m = (m < 10) ? "0" + m : m;
    // s = (s < 10) ? "0" + s : s;

    document.getElementById("days").innerHTML = "<h3>"+  d + " D"+"</h3>";
    document.getElementById("days").innerHTML = "<h3>"+  d + " D"+"</h3>";

    document.getElementById("hours").innerHTML ="<h3>"+  h + " h"+"</h3>";
    document.getElementById("minutes").innerHTML = "<h3>"+  m + " m"+"</h3>";
    document.getElementById("seconds").innerHTML = "<h3>"+  s + " s"+"</h3>";

    setTimeout(countdown, 1000);
}

countdown();



$(function(){
    let max =100;
    
    $("textarea").keyup(function(){
        
      let length=$(this).val().length;
      let character = max - length;
        
        console.log(character)
        if(character<=0)
        {
             $("#char").text("your available character finished");
            
        }
        else{
        
            $("#char").text(character);
        }
    
    });

    
});



