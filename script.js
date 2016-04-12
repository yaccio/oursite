console.log("peace");

function expandCase(){
  console.log("clicked");

  var el = document.getElementById('expanded-case');
    if(el) {
      el.className == "black";
      el.className += el.className ? ' expanded-case' : 'expanded-case';
    }
    document.getElementById("case2").style.display = 'none';
    document.getElementById("case3").style.display = 'none';
}


$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
