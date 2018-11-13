$(document).ready(function () {
  $('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    items: 3,
    nav: true,
    dots: false,
    autoHeight: true,
    // center:true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  })
  console.log(($('#scrool-1').offset().top - ($(this).scrollTop() + $(this).height()) < 200))
  var t = $(window).scrollTop();
  $(window).scroll(function () {
    var o = $(this).scrollTop();
    if (screen.width >= 992) {
      if ($('#scrool-1').offset().top - ($(this).scrollTop() + $(this).height()) < 200) {
        var o = $(this).scrollTop(),
          s = $('#scrool-1').offset().top - o + 450;
        $('#scrool-1').css('transform', 'translateY(' + s / 9 + 'px)')
      } else {
        var s = $('#scrool-1').offset().top + o + 450;
        $('#scrool-1').css('transform', 'translateY(' + s / 9 + 'px)')
      }
      t = o
    }
  })
});
var t = $(window).scrollTop();
$(window).scroll(function () {
  var o = $(this).scrollTop();
  if (screen.width >= 992) {
    if ($('#scrool-2').offset().top - ($(this).scrollTop() + $(this).height()) < 200) {
      var o = $(this).scrollTop(),
        s = $('#scrool-2').offset().top - o - 450;
      $('#scrool-2').css('transform', ' translateY(' + s / 9 + 'px)')
    } else {
      var s = $('#scrool-2').offset().top + o - 450;
      $('#scrool-2').css('transform', ' translateY(' + s / 9 + 'px)')
    }
    t = o
  }
});

var t = $(window).scrollTop();
$(window).scroll(function () {
  var o = $(this).scrollTop();
  if (screen.width >= 992) {
    if ($('#scrool-3').offset().top - ($(this).scrollTop() + $(this).height()) < 200) {
      var o = $(this).scrollTop(),
        s = $('#scrool-3').offset().top - o - 450;
      $('#scrool-2').css('transform', ' translateY(' + s / 9 + 'px)')
    } else {
      var s = $('#scrool-3').offset().top + o - 450;
      $('#scrool-3').css('transform', ' translateY(' + s / 9 + 'px)')
    }
    t = o
  }
});

$(document).ready(function () {
  var button = document.querySelector('.icon')
  var button_icon = document.querySelectorAll('.icon span');
  var menu = document.querySelector('.navs-menu');
  // var navbar = document.querySelector('.navbar');
  button.addEventListener('click', function animation() {
    console.log(this.className)
    if ((this.className == 'navbar icon i-block')) {
      // bunuda yoxlamiwam
      console.log('var')
      button.classList.add('active');
      console.log('add olundu');
      menu.classList.add('active');
      // menu.style.transition = '0.6s ease';
      // navbar.style.height='280px';
      // menu.style.transitions = '0.4s ease';
      button_icon[0].style.transform = 'translateY(5px) rotateZ(40deg)';
      button_icon[0].style.opacity = '1';
      button_icon[0].style.transitions = '0.4s ease';


      button_icon[1].style.opacity = '0';
      button_icon[1].style.transform = 'translateX(0)';
      button_icon[1].style.transitions = '0.4s ease';

      button_icon[2].style.transform = 'translateY(-10px) rotateZ(-40deg)';
      button_icon[2].style.opacity = '1';
      button_icon[2].style.transitions = '0.4s ease';




      // $(this).find(".dropdown-menus ").slideToggle("slow");
    } else {
      console.log('yoxdu')
      button.className = 'navbar icon i-block';
      menu.className = 'navs-menu'
      // menu.style.width = '0';
      // menu.style.transition = '0.6s ease';
      // navbar.style.height='0px';
      // menu.style.transitions = '0.4s ease';
      button_icon[0].style.transform = 'translateY(0px) rotateZ(0deg)';
      button_icon[0].style.opacity = '1';
      button_icon[0].style.transitions = '0.4s ease';


      button_icon[1].style.opacity = '1';
      button_icon[1].style.transform = 'translate(0px)';
      button_icon[1].style.transitions = '0.4s ease';

      button_icon[2].style.transform = 'translateY(0px) rotateZ(0deg)';
      button_icon[2].style.opacity = '1';
      button_icon[2].style.transitions = '0.4s ease';
    }
  })
});

