//Client-side JS logic goes here.  jQuery is already loaded
//Reminder: Use (and do all your DOM work in) jQuery's document ready function
const data=[
  {
    "user": {
      "name": "Newton",
      "avatars": "https://avatars.dicebear.com/api/adventurer/:seed.svg",
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1651095124613
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://avatars.dicebear.com/api/adventurer/:seed.svg",
      "handle": "@rd"
    },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1651181524613
  },
  {
    "user": {
      "name": "April Ludgate",
      "avatars": "https://avatars.dicebear.com/api/adventurer/:seed.svg"
      ,
      "handle": "@childishMoschino"
    },
    "content": {
      "text": "Dogs should be rewarded for not being people"
    },
    "created_at": 1461116232247
  },
  {
    "user": {
      "name": "Donald Glover",
      "avatars": "https://avatars.dicebear.com/api/adventurer/:seed.svg"
      ,
      "handle": "@childishMoschino"
    },
    "content": {
      "text": "I'm on here cause I heard Elon Musk just bought up twitter :("
    },
    "created_at": 1461116232247
  }
]

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


const loadTweets = function() {
  $.ajax({
    method: 'GET',
    url: 'http://localhost:8080/tweets',
  })
  .then(function (tweet) {
    renderTweets(tweet);
});
}

//loadTweets()
// renderTweets(data)
// console.log(createTweetElement(data));

$(document).ready(() => {
  renderTweets(data);

}); 
c