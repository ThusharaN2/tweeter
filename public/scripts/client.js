//Client-side JS logic goes here.  jQuery is already loaded
//Reminder: Use (and do all your DOM work in) jQuery's document ready function

const renderTweets = function(tweets) { //loops through tweets & calls createTweetElement for every tweet 
for (const tweet of tweets) {
  $('.tweet-box').prepend(createTweetElement(tweet));
 }
}

const createTweetElement = function(tweet) { //creating new tweet 
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
            <p>${tweet.created_at}</p>
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
};


const loadTweets = function() { //makes GET requests to tweet db in /tweets
  $.ajax({
    method: 'GET',
    url: 'http://localhost:8080/tweets',
  })
  .then(function (tweet) {
    renderTweets(tweet);
});
}



//post right away w/o refreshing 
$(document).ready(() => {
  $( '.new-tweet form' ).submit(function(event) {
    event.preventDefault();
    const tweetData = $( this ).serialize();
    $.post('/tweets/', tweetData);
  loadTweets();
  renderTweets(data)
  });
