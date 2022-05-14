//Client-side JS logic goes here.  jQuery is already loaded
//Reminder: Use (and do all your DOM work in) jQuery's document ready function
 
//sends message if over character limit or if no characters present when posting 
  //if anything, default shouldn't happen
  $(document).ready(() => {
    $("new-tweet").on ("submit", function(event) {
      event.preventDefault(); 
      const tweetPost = $(this).serialize();
      const charCount = Number($('output.counter').val());
      if (charCount === 0) {
        alert("🤡 OOPS, looks like you didn't tweet anything 🤡...");
        return;
      } else if (charCount > 140) {
        alert("🥴 WOAH, hold up, please respect the max character count🥴!!!");
        return;
      }
      $.post('/tweets/', tweetPost).then(() => {
        loadTweet(); //starts the process to post and load onto the page
      });
    });
  })


//loops through tweets & calls createTweetElement for every tweet 
const renderTweets = function(tweets) { 
  $(".tweet-box").empty()
  for (const tweet of tweets) {
  $('.tweet-box').prepend(createTweetElement(tweet));
 }
}

//creating new tweet 
const createTweetElement = function(tweet) { 
let $tweet = `
<article class="tweet">
          <header>
            <div class = "user">
             <img src="${tweet.user.avatars}">
            <h3>${tweet.user.name}</h3>
            </div>
            <span class="username">${tweet.user.handle}</span>
          </header>
          <main>
            <p class="actual-tweet">
            ${tweet.content.text}
            </p>
          </main>
          <footer id='tweet-foot'>
            <div class='foot-content'>
            <p>${timeago.format(tweet.created_at)}</p>
            <div class='icons'>
              <i class="fa-solid fa-flag"></i>
              <i class="fa-solid fa-repeat"></i>
              <i class="fa-solid fa-heart"></i>
            </div>
          </div>
          </footer>
        </article>
        `;
        return $tweet;
}


//makes GET requests to tweet db in /tweets & fetches them to load onto page
const loadTweets = function() { 
  $.ajax({
    method: 'GET',
    url: '/tweets',
    data: "data"
  }).then((tweet) => {
    renderTweets(tweet);
});
};
loadTweets(); //calls function or else won't load


//arrow fcn 
$('.arrow').click(function() { 
    $(".new-tweet").slideDown()
  })
