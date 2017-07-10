$(document).ready(function() {
	var quote;
	var author;

	function getNewQuote() {
		$.ajax({
			url: 'https://api.forismatic.com/api/1.0/',
			jsonp: 'jsonp',
			dataType: 'jsonp',
			data: {
				method: 'getQuote',
				lang: 'en',
				format: 'jsonp'
			},
			success: function(response) {
				quote = response.quoteText;
				author = response.quoteAuthor;
	
				$('#quoteText').text(quote).hide().fadeIn(700);
				$('#quoteText').text(" \"" + quote +"\"");
				
				//if has an an author
				if (author) {
					$("#quoteAuthor").text('- ' + author);
				} else {
					$("#quoteAuthor").text('- ' + 'Unknown');
				}
			}
		});
	}
	getNewQuote();
	$('#quote_Button').on("click", function(event) {

		getNewQuote();
		
	})
});