
(function($){
  if(!$) return;
  $(window).on('scroll.sgSticky', function(){
    $('.mainmenu').toggleClass('fixed', $(this).scrollTop()>200);
    $('#GoToTop').toggleClass('show', $(this).scrollTop()>500);
  });
  $(document).on('click', '.links a', function(e){
    var href = $(this).attr('href');
    if(href && href.charAt(0)==='#'){
      var $t=$(href);
      if($t.length){
        e.preventDefault();
        $('html, body').animate({ scrollTop: $t.offset().top }, 300);
      }
    }
  });
})(window.jQuery||window.$);
