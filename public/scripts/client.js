//Client-side JS logic goes here.  jQuery is already loaded
//Reminder: Use (and do all your DOM work in) jQuery's document ready function

$(document).ready(function () {
  const escape = function (str) {
    let div = document.createElement("div");
    div.appendChild(document.createTextNode(str));
    return div.innerHTML;
  };

  //creating new tweet 
  const createTweetElement = function (tweetBody) {
    let $tweet = (`
  <article class="tweet">
            <header>
              <div class = "user">
               <img src="${tweetBody.user.avatars}">
              <h3>${tweetBody.user.name}</h3>
              </div>
              <span class="username">${tweetBody.user.handle}</span>
            </header>
            <main>
              <p class="tweet-text">
              ${escape(tweetBody.content.text)}
              </p>
            </main>
            <footer id='tweet-foot'>
              <div class='foot-content'>
              <p>${timeago.format(tweetBody.created_at)}</p>
              </div>
              <div class='icons'>
                <i class="fa-solid fa-flag"></i>
                <i class="fa-solid fa-repeat"></i>
                <i class="fa-solid fa-heart"></i>
              </div>
            </div>
            </footer>
          </article>
          `);
    return $tweet;
  }

  //loops through tweets & calls createTweetElement for every tweet 
  const renderTweets = function (tweetsArray) {
    for (const tweet of tweetsArray) {
      $('.tweet-box').prepend(createTweetElement(tweet));
    }
  }

  //sends message if over character limit or if no characters present when posting 
  //if anything, default shouldn't happen
  const $tweetForm = $(".tweetform");
  $tweetForm.submit(function (event) {
    const tweettext = $("#tweet-text").val();
    console.log(tweettext)
    event.preventDefault()
    if (tweettext.length === 0) {
      $("🤡 OOPS, looks like you didn't tweet anything 🤡...").slideDown();
    } else if (tweettext.length > 140) {
      $("🥴 WOAH, hold up, please respect the max character count🥴!!!").slideUp();
    }
    $.ajax("/tweets/", {
      method: "POST",
      data: $(this).serialize(),
    }).then(() => { $(this).serialize() });
    loadtweets();
  });

  //load Tweets from db 
  const loadtweets = function () {
    $.ajax("/tweets", { method: "GET" }).then((arr) => {
      $(".tweet-box").empty();
      renderTweets(arr);
    });
  };
  loadtweets();
});
