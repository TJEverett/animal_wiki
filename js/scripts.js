var lastClass = ".none";
var lastId = "#none";

var switchShown = function(location){
  location = "." + location;
  if(location !== lastClass){
    jQuery(location).toggleClass("hidden");
    jQuery(lastClass).toggleClass("hidden");
    lastClass = location;
  } else{
    alert("You're already looking at that one.");
  };
};

var switchSelected = function(location){
  location = "#" + location;
  if(location !== lastId){
    jQuery(location).toggleClass("active");
    jQuery(lastId).toggleClass("active");
    lastId = location;
  };
};

jQuery(document).ready(function(){
  jQuery("a").click(function(event){
    event.preventDefault();
  });

  jQuery("#none").click(function () {
    switchShown(this.id);
    switchSelected(this.id);
  });

  jQuery("#turtle").click(function () {
    switchShown(this.id);
    switchSelected(this.id);
  });

  jQuery("#snake").click(function () {
    switchShown(this.id);
    switchSelected(this.id);
  });

  jQuery("#frog").click(function () {
    switchShown(this.id);
    switchSelected(this.id);
  });
});