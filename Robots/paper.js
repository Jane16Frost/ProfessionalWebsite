$(".refrences").click(function(){

  $(".refrences").removeClass("hidden");
  $(this).addClass("hidden");
})


$(".smallTaskbar").click(function(){
  $("body").css({'margin-right':'300px'});
  $(".smallTaskbar").addClass("hidden");
  $(".bigTaskBar").removeClass("hidden");
})

$(".bigTaskBar").click(function(){
  $("body").css({'margin-right':'0'});
  $(".smallTaskbar").removeClass("hidden");
  $(".bigTaskBar").addClass("hidden");
})
