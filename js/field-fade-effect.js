window.onload = (event) => {
    let field = document.getElementById('field');

    // fadeOverflowText(field);

    field.addEventListener('click', () => {
        console.log('WTF!');
    });

    ['keyup','keydown'].forEach(event => {
        field.addEventListener(event, () => fadeOverflowText(field));
        // field.addEventListener(event, () => console.log('WTF?'));
        
    });

    // field.addEventListener('keyup, keydown', () => {
    //     console.log('WTF!');
    //     fadeOverflowText(this);
    // });

    // field.addEventListener('focusout', function() {
    //     setTimeout(function () {
    //         //short timeout to let text shift before calculating overflow
    //         fadeOverflowText(this);
    //     },
    //     10);
    // })
};



function checkTextOverflow() {
  var inputEntry = $('input[type="text"]:not(.mask), input[type="password"]');
  
//   //bind document selectionchange to custom selectionEnd function to apply fade overlay on iPhone/iPad selection change
//   document.onselectionchange = userSelectionChanged;
//   var selectionEndTimeout;
   
//   $(window).bind('selectionEnd', function () {
  
//       // reset selection timeout
//       selectionEndTimeout = null;
  
//       // TODO: Do your cool stuff here........
//       inputEntry.each(function() {
//           fadeOverflowText(this);
//       })
//   });
  
//   function userSelectionChanged() {
  
//       // wait 500 ms after the last selection change event
//       if (selectionEndTimeout) {
//           clearTimeout(selectionEndTimeout);
//       }
  
//       selectionEndTimeout = setTimeout(function () {
//           $(window).trigger('selectionEnd');
//       }, 50);
//   }
  
  //first page load
  inputEntry.each(function (event, element) {
      fadeOverflowText(this);
  });
  
  //on keyup/keydown
  inputEntry.on('keyup keydown touchend', function (event, element) {
      fadeOverflowText(this);
  });
  
  //on focusout
  inputEntry.on('focusout change', function (event, element) {
      setTimeout(function () {
          //short timeout to let text shift before calculating overflow
          fadeOverflowText(this);
      },
      10);
  });
}

function fadeOverflowText(elm) {
    // var $elm = $(elm);
    var parent = elm.parentElement;
    var overflowLeft = elm.scrollLeft > 0;
    // var overflowRight = elm.scrollWidth - ($elm.innerWidth() + elm.scrollLeft) > 2;//2px margin of error
    var overflowRight = elm.scrollWidth - (elm.clientWidth + elm.scrollLeft) > 2;//2px margin of error
    overflowLeft ? parent.classList.add('overflow-fade-left') : parent.classList.remove('overflow-fade-left');
    overflowRight ? parent.classList.add('overflow-fade-right') : parent.classList.remove('overflow-fade-right');
    // if ($elm.attr('data-toggle') === 'password') {
    //     overflowRight ? $parent.addClass('overflow-fade-pwd-right') : $parent.removeClass('overflow-fade-pwd-right');
    // }
  }