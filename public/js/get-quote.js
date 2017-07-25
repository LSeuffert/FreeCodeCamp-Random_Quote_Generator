$(document).ready(function() {
    var twitterLink = "https://twitter.com/intent/tweet?text=";
    $.ajaxSetup({ cache: false });
    var getQuote = function() {
        $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1", function(data) {
            $(".test").html(JSON.stringify(data));
            var quote = data[0].content.replace(/(<p>|<\/p>|\n)/g, "").trim();
            var title = data[0].title;
            $(".quote-content").html(quote);
            $(".quote-title").html(title);
            $(".twitter-share-button").attr("href", twitterLink + encodeURIComponent(quote));
        });
    };
    
    getQuote();
    
    $(".quote-btn").on("click", function() {
        getQuote();
    });
});