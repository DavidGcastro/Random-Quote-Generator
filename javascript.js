$(document).ready(function() {
  $("#quote_Button").on("click", function(){
     $.getJSON("https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en", function(json) {
  $("quoteText").html(JSON.stringify(json));
});
      
});
});


