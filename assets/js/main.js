jQuery(document).ready(function ($) {
  $('.level-bar-inner').css('width', '0')
  $(window).on('load', function () {
    $('.level-bar-inner').each(function () {
      var itemWidth = $(this).data('level')
      $('.level-bar-inner').css('width', itemWidth)
      /* $(this).animate(
        {
          width: itemWidth
        }
      ) */
    })
  })
})
