$('.header .menu-icon').click(function(event) {
	$(this).toggleClass('on');
	$("#ej-sear-box").hide();
	if($(this).hasClass('on')){
		$('.header .hd-rg').addClass('on');
		$('.ej-gray').fadeIn('fast');
	}else{
		$('.header .hd-rg').removeClass('on');
		$('.ej-gray').fadeOut('fast');
	}
});