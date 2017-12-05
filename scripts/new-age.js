(function($) {
  "use strict"; // Start of use strict

  //use this stuff l8r 
  // var snoowrap = require('snoowrap');
  // const r = new snoowrap({
  //     userAgent: 'morganradic',
  //     clientId: 'A_EtHItRrL0i6A',
  //     clientSecret: 'RwXvHAR_beIZR81hzhS1z0gQwIQ',
  //     refreshToken: '42316489-W0ozardOWQf2mexRSOW2opleL0Q'
  //   });
  // r.getSubreddit('Showerthoughts').getHot().map(post => post.title).then(console.log)
  
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

function getPosts()
{
  document.getElementById("preAnalyze").style.display = "none";
  document.getElementById("postAnalyze").style.display = "block";
  document.getElementById("postSub").innerHTML = "r/" + document.getElementById("getSub").value + ": ";
  document.getElementById("postTone").innerHTML = getTone() + ": " + getPercentage() + "%";
  
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
  return Math.floor(Math.random()*100);
}

(jQuery); // End of use strict
