var last = ".none";

jQuery(document).ready(function(){
  jQuery("a").click(function(event){
    event.preventDefault();
  });

  jQuery("#none").click(function () {
    jQuery(".none").toggleClass("hidden");
    jQuery(last).toggleClass("hidden");
    last = ".none";
  });

  jQuery("#turtle").click(function () {
    jQuery(".turtle").toggleClass("hidden");
    jQuery(last).toggleClass("hidden");
    last = ".turtle";
  });

  jQuery("#snake").click(function () {
    jQuery(".snake").toggleClass("hidden");
    jQuery(last).toggleClass("hidden");
    last = ".snake";
  });

  jQuery("#frog").click(function () {
    jQuery(".frog").toggleClass("hidden");
    jQuery(last).toggleClass("hidden");
    last = ".frog";
  });
});