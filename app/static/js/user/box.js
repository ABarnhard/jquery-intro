/* global $, document */

(function(){
  'use strict';

  $(document).ready(function(){
    $('#add-boxes').click(addBoxes);
  });

  function addBoxes(){
    var num = $('#box-num').val() * 1,
        $box,
        i;
    $('#boxes').empty();
    for(i = 0; i < num; i++){
      $box = $('<div>');
      $box.addClass('box');
      if(i % 2){
        $box.text(Math.pow(i, 3));
        $box.addClass('odd');
      }else {
        $box.text(Math.pow(i, 2));
        $box.addClass('even');
      }
      $('#boxes').append($box);
    }
  }
})();
