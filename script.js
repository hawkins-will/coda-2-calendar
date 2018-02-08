var scrollToWeek = function(){
  $("html, body").animate({
    scrollTop: $("#week1").offset().top - 60},
    'slow');
};

console.log("Hello Sripts!");

scrollToWeek();
