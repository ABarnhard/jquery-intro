/* global $, document */

// alert('hey I am annoying!');

(function(){
  'use strict';
  var a = 3,
      b = 2;
  $(document).ready(initialized);

  function initialized(){
    console.log('the dom is now ready!');
    $('div').css('color', 'red');
    $('h2').text('Adam').css('font-size', '50px');
    $('#a, #b, #c').addClass('happy');
    $('div+ul li').addClass('sad');
    $('h2').fadeOut(1000);
    $('#red').click(makeRed);
    $('#yellow').click(makeYellow);
    $('#color').click(changeBg);
    $('#fadein').click(fade);
    $('#fadeOut').click(fade);
  }

  function makeRed(){
    console.log('red button');
    $('body').css('background-color', 'red');
  }
  function makeYellow(){
    console.log('yellow button');
    $('body').css('background-color', 'yellow');
  }
  function changeBg(){
    console.log('change bg');
    var color = $('#color-value').val();
    $('body').css('background-color', color);
  }
  function fade(){
    console.log('fade');
    var time = $('#time').val() * 1;
    $('footer').fadeToggle(time);
  }

  console.log(a, b);
})();


console.log('the dom is not ready');




