console.log("peace out fellow developers. Welcome to Yacc.io's webpage :)");

function changeLanguage(lang){
  if(lang == "en"){
    localStorage.clear();
    localStorage.lang='en';
    document.body.className='en';
  }
  if(lang == "dk"){
    localStorage.clear();
    localStorage.lang='dk';
    document.body.className='dk';
  }
}

function expandCase(i){
  console.log("clicked new func");

  // Set Class that will expand the case section
  var el = document.getElementById('expanded-case');
  if(el) {
    el.className += el.className ? ' expanded-case' : 'expanded-case';
  }

  // Hide all case texts
  var cases = document.querySelectorAll('.case-hide');
  Array.prototype.forEach.call(cases, function(elements, index) {
    elements.style.display = 'none';
  });

  // Show the correct case (number i)
  document.getElementById("case" + i).style.display = 'block';

  // Set opacity on all side cases
  var sideCases = document.querySelectorAll('.side-case');
  Array.prototype.forEach.call(sideCases, function(elements, index) {
    elements.style.opacity = '0.5';
  });

  // Set the correct opacity on the correct case
  document.getElementById("side-case" + i).style.opacity = '1.0';
};

function closeCase(){
  console.log("clicked");

  var el = document.getElementById('expanded-case');
    if(el) {
      el.className = el.className.replace( /(?:^|\s)expanded-case(?!\S)/g , '' );
    }
}

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 500);
        return false;
      }
    }
  });
});
