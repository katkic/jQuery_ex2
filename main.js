$(function() {
  $('#accordion dd').hide();
  $('#accordion dt').click(function() {
    $(this).next('dd').slideToggle();
    // $(this).next('dd').slideToggle('fast');
    // $(this).next('dd').slideToggle('slow');
  })
});