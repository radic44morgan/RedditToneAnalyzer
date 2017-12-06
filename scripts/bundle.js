(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 48)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });


  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})

function testPosts()
{
  //'use strict'; 
  require(['snoowrap'], function (snoowrap) {
    
    const r = new window.snoowrap({
      userAgent: 'morganradic',
      clientId: 'A_EtHItRrL0i6A',
      clientSecret: 'RwXvHAR_beIZR81hzhS1z0gQwIQ',
      refreshToken: '42316489-W0ozardOWQf2mexRSOW2opleL0Q'
    });
  var subReddit = document.getElementById("getSub").value;
  var posts = r.getSubreddit(subReddit).getHot().map(post => post.title);
  //console.log(posts);
  console.log(document.getElementById("getSub").value);
  analyzeTone("mother fucker");
  });

    
}
  
function analyzeTone(posts){
	var ToneAnalyzerV3 = require(['watson-developer-cloud/tone-analyzer/v3'], function(v3){
    var returnTone = "";
    var tone_analyzer = new ToneAnalyzerV3({
      username: '71d4619d-69df-4e18-81b7-66856bda1723',
      password: 'wSYiLZWouxS0',
      version_date: '2016-05-19'
    });
  
    tone_analyzer.tone({ text: posts },
      function(err, tone) {
        if (err)
          console.log(err);
        else
            returnTone = JSON.stringify(tone, null, 2);
            console.log(returnTone);
            return tone;
    });
  });
 
}

function getPosts()
{
  var percent = getPercentage();
  document.getElementById("preAnalyze").style.display = "none";
  document.getElementById("postAnalyze").style.display = "block";
  document.getElementById("postSub").innerHTML = "r/" + document.getElementById("getSub").value + ": ";
  document.getElementById("postTone").innerHTML = getTone() + ": " + percent + "%";
  move(percent);
  
}

function move(percent) {
  var elem = document.getElementById("myBar"); 
  var width = 1;
  var id = setInterval(frame, 10);
  function frame() {
      if (width >= percent) {
          clearInterval(id);
      } else {
          width++; 
          elem.style.width = width + '%'; 
      }
  }
}

function newSub()
{
  document.getElementById("preAnalyze").style.display = "block";
  document.getElementById("postAnalyze").style.display = "none";
}

function getTone()
{
  var rand = Math.floor(Math.random() * 10);
  var tone = "";
  switch (rand) {
    case 0:
        tone = "Anger";
        break;
    case 1:
        tone = "Disgust";
        break;
    case 2:
        tone = "Fear";
        break;
    case 3:
        tone = "Joy";
        break;
    case 4:
        tone = "Analytical";
        break;
    case 5:
        tone = "Confident";
        break;
    case 6:
        tone = "Tentative";
        break;
    case 7:
        tone = "Openness";
        break;
    case 8:
        tone = "Conscientiousness";
        break;
    case 9:
        tone = "Extraversion";
        break;
    case 10:
        tone = "Agreeableness";
        break;
      }
  return tone;
}

function getPercentage()
{
  var rand = Math.floor(Math.random()*100);
  if (rand < 50)
  {
    rand = rand + 50;
  }
  return rand;
}

(jQuery); // End of use strict

},{}]},{},[1]);
