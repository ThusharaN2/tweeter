//Client-side JS logic goes here.  jQuery is already loaded
//Reminder: Use (and do all your DOM work in) jQuery's document ready function

const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  },
  {
    "user": {
      "name": "Donald Glover",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@childishMoschino"
    },
    "content": {
      "text": "I'm on here cause I heard Elon Musk just bought up twitter :("
    },
    "created_at": 1461116232247
  },
]

const renderTweets = function(tweets) { //loops through tweets & calls createTweetElement for every tweet 
for (const tweet of tweets) {
  $('.tweet-box').prepend(createTweetElement(tweet));
 }
}


const createTweetElement = function(tweet) { //creating tweet element
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
        `
        return $tweet
}

renderTweets(data)