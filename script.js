console.log("peace");

function expandCase1(){
  console.log("clicked");

  var el = document.getElementById('expanded-case');
    if(el) {
      el.className += el.className ? ' expanded-case' : 'expanded-case';
    }
    document.getElementById("case1").style.display = 'block';
    document.getElementById("case2").style.display = 'none';
    document.getElementById("case3").style.display = 'none';
    document.getElementById("side-case1").style.opacity = '1.0';
    document.getElementById("side-case2").style.opacity = '0.5';
    document.getElementById("side-case3").style.opacity = '0.5';
}

function expandCase2(){
  console.log("clicked");

  var el = document.getElementById('expanded-case');
    if(el) {
      el.className += el.className ? ' expanded-case' : 'expanded-case';
    }
    document.getElementById("case1").style.display = 'none';
    document.getElementById("case2").style.display = 'block';
    document.getElementById("case3").style.display = 'none';
    document.getElementById("side-case2").style.opacity = '1.0';
    document.getElementById("side-case1").style.opacity = '0.5';
    document.getElementById("side-case3").style.opacity = '0.5';
}

function expandCase3(){
  console.log("clicked");

  var el = document.getElementById('expanded-case');
    if(el) {
      el.className += el.className ? ' expanded-case' : 'expanded-case';
    }
    document.getElementById("case2").style.display = 'none';
    document.getElementById("case1").style.display = 'none';
    document.getElementById("case3").style.display = 'block';
    document.getElementById("side-case3").style.opacity = '1.0';
    document.getElementById("side-case1").style.opacity = '0.5';
    document.getElementById("side-case2").style.opacity = '0.5';
}

function closeCase(){
  console.log("clicked");

  var el = document.getElementById('expanded-case');
    if(el) {
      el.className = el.className.replace( /(?:^|\s)expanded-case(?!\S)/g , '' );
    }
}

document.getElementById("caseLink1").addEventListener("click", expandCase1);


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
