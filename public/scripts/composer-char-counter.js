$(document).ready(function() {
  $("textarea").on("keyup", function() {
    const tweetCount =  $(this).parent().find(".counter");
    tweetCount.text((140 - $(this).val().length));
    if (tweetCount.val() < 0) tweetCount.css({"color":"#e40a2e"})
    else {
      tweetCount.css({"color":"#2b2a25"});
    }
  });
});

