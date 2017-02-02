$(document).ready(function() {

      $('#rectListener').on('click', function() {
          console.log($(this));
          resetThumbnailsDisplay();
      });
      $('.this').not('.nb').on('click', function() {
          console.log($(this));
          resetThumbnailsDisplay();
      });


      // $('.categories p').on('click', function() {
      //   if ($(this).hasClass('activ')) {
      //     console.log($(this));
      //     resetThumbnailsDisplay();
      //   }
      // });
      // ^^^^^^^^^--------THIS WORKS BUT THE OTHER FUNCTIONS BELOW TRIGGER RIGHT AFTER,
      //  but it's NOT because of the fact resetThumbnailsDisplay() is removing .activ class (unwanted callbacks?)

    $('.categories .illus').on('click', function() {
        $(this).toggleClass('activ');
        $('.categories p').not(this).removeClass('activ');
        $('.thumbnail').not('.illus').toggleClass('hidden');
        $('.works .illus').removeClass('hidden');
    });
    $('.categories .photo').on('click', function() {
        $(this).addClass('activ');
        $('.categories p').not(this).removeClass('activ');
        $('.thumbnail').not('.photo').toggleClass('hidden');
        $('.works .photo').removeClass('hidden');
    });
    $('.categories .design').on('click', function() {
        $(this).toggleClass('activ');
        $('.categories p').not(this).removeClass('activ');
        $('.thumbnail').not('.design').toggleClass('hidden');
        $('.works .design').removeClass('hidden');
    });
    $('.categories .code').on('click', function() {
        $(this).toggleClass('activ');
        $('.categories p').not(this).removeClass('activ');
        $('.thumbnail').not('.code').toggleClass('hidden');
        $('.works .code').removeClass('hidden');
    });
    function resetThumbnailsDisplay() {
      $('.thumbnail').removeClass('hidden');
      $('.categories p').removeClass('activ');
      // alert('this runs');
    }


    /*GOLD COLOR
    rgb(198,150,20)
    rgb(235,209,90)
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
