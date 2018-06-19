$(document).ready(function() {

  $('#rectListener').on('click', function() {
    resetCategorizedDisplay();
  });
  $('.this').not('.nb').on('click', function() {
    resetCategorizedDisplay();
  });

  let categoriesArray = ['.illus', '.design', '.code'];

  let categorizeDisplay = (_class) => {
    return function(){

      if (!$(this).hasClass('activ')) {  // if this has NOT the activ class
        $('.thumbnail' + _class).removeClass('hidden'); // div with the .thumbnail AND activated classes
        $('.thumbnail' + _class).addClass('activ');

        $('.thumbnail').not(_class).not('.nb').addClass('hidden');
        $('.thumbnail').not(_class).not('.nb').removeClass('activ');

        $(_class + ' .nb').removeClass('hidden');
        $(_class + ' .nb').addClass('activ');
        $('.thumbnail').not(_class).children().addClass('hidden');
        $('.thumbnail').not(_class).children().removeClass('activ');

        console.log('this is '+_class);

        $(this).addClass('activ');
        $('.categories p').not(this).removeClass('activ');

      }else{
        resetCategorizedDisplay();

      }
    };
  };

  for (let category of categoriesArray) {
    $('.categories ' + category).click( categorizeDisplay(category) );
  }


  function resetCategorizedDisplay() {
    $('.categories p').removeClass('activ');
    $('.thumbnail').removeClass('hidden');
    $('.thumbnail').removeClass('activ');
  }

  /*GOLD COLOR
  rgb(120,150,20)
  rgb(235,210,90)
  rgb(255,255,255)
  */

  $('.thumbnail').not('.this').magnificPopup({
    type: 'ajax',
    // Delay in milliseconds before popup is removed
    removalDelay: 500,
    // Class that is added to popup wrapper and background
    // make it unique to apply your CSS animations just to this exact popup
    mainClass: 'mfp-fade',
    // other options
    fixedContentPos: true
  });

});
