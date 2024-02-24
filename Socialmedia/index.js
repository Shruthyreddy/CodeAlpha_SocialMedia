function login(event) {
    event.preventDefault();
    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
    if (username && password) {
      
      document.getElementById("login").style.display = "none";
      document.getElementById("feeds").style.display = "flex";
      
      fetchFacebookFeed();
      fetchTwitterFeed();
      fetchInstagramFeed();
    } else {
      alert("Please enter a valid username and password.");
    }
  }
  
  function fetchFacebookFeed() {
    var facebookPosts = document.getElementById("facebook-posts");
    
    facebookPosts.innerHTML = "";
    
    var posts = [
      {
        author: "Mark Zuckerberg",
        content: "I'm excited to announce that we have reached 3 billion monthly active users on Facebook. Thank you for being part of our community.",
        likes: 1000000,
        comments: 50000,
        shares: 10000
      },
      {
        author: "Bill Gates",
        content: "I had a great conversation with Mark Zuckerberg about how we can work together to fight climate change and improve global health.",
        likes: 500000,
        comments: 20000,
        shares: 5000
      },
      {
        author: "Elon Musk",
        content: "Just launched another Starlink mission. Internet for everyone!",
        likes: 300000,
        comments: 10000,
        shares: 3000
      }
    ];
    
    for (var i = 0; i < posts.length; i++) {
      var post = posts[i];
      
      var li = document.createElement("li");
    
      var pAuthor = document.createElement("p");
      pAuthor.textContent = post.author;
      
      var pContent = document.createElement("p");
      pContent.textContent = post.content;
      
      var pReactions = document.createElement("p");
      pReactions.textContent = post.likes + " likes, " + post.comments + " comments, " + post.shares + " shares";
      
      li.appendChild(pAuthor);
      li.appendChild(pContent);
      li.appendChild(pReactions);
      
      facebookPosts.appendChild(li);
    }
  }
  
  function fetchTwitterFeed() {
    var twitterTweets = document.getElementById("twitter-tweets");
    
    twitterTweets.innerHTML = "";
    
    var tweets = [
      {
        author: "@narendramodi",
        content: "Had a fruitful discussion with President Joe Biden on the India-US strategic partnership and our shared priorities.",
        likes: 200000,
        retweets: 50000,
        replies: 10000
      },
      {
        author: "@BarackObama",
        content: "Michelle and I are thrilled to be one step closer to bringing the Obama Presidential Center to life in Chicago. We hope it will inspire the next generation of leaders—and we hope to see you there.",
        likes: 1000000,
        retweets: 200000,
        replies: 50000
      },
      {
        author: "@KimKardashian",
        content: "So excited to announce my new SKIMS collection. Shop now at skims.com",
        likes: 500000,
        retweets: 100000,
        replies: 20000
      }
    ];
    
    for (var i = 0; i < tweets.length; i++) {
      var tweet = tweets[i];
      var li = document.createElement("li");
      var pAuthor = document.createElement("p");
      pAuthor.textContent = tweet.author;
      var pContent = document.createElement("p");
      pContent.textContent = tweet.content;
      var pReactions = document.createElement("p");
      pReactions.textContent = tweet.likes + " likes, " + tweet.retweets + " retweets, " + tweet.replies + " replies";
      li.appendChild(pAuthor);
      li.appendChild(pContent);
      li.appendChild(pReactions);
      twitterTweets.appendChild(li);
    }
  }