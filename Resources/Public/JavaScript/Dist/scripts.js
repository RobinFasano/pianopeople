/*!
 * pianopeople v1.0.0 (https://www.pianopeople.ch)
 * Copyright 2017-2019 Robin Fasano
 * Licensed under the GPL-2.0-or-later license
 */
console.log("WE LOVE TYPO3");


$(document).ready(function() {
    M.updateTextFields();
  });

$(document).ready(function(){
  $('.parallax').parallax();
});

$('.aniview').AniView();

$(document).ready(function() {
   $('input#input_text, textarea#textarea2').characterCounter();
 });

 $(document).ready(function(){
     $('.sidenav').sidenav();
   });

   $(document).ready(function(){
     $('.tabs').tabs();
   });
