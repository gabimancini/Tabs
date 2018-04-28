$(function(){
  $(".tab-link").on("click", function(){
    //Tab styles
    $(".tab-link").removeClass("active");
    $(this).addClass("active");
     //Div show and hide
   var activeTab = $(this).find("a").attr("href"); 
    $(".tab-content").removeClass("active");
    $(activeTab).addClass("active"); 
  })   
});