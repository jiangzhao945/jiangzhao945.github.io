            /* BackButton */
		var backButton = $('.back_to_top');
		function backToTop(){
			$('html,body').animate({
				scrollTop:0
			},800);
		}
		backButton.on('click',backToTop);

		$(window).on('scroll',function(){/*当滚动条的垂直位置大鱼浏览器所能看到的页面高度时，回到顶部*/
			if($(window).scrollTop()>$(window).height())
				backButton.fadeIn();
			else
			backButton.fadeOut();
		});
		$(window).trigger('scroll');/*触发滚动时间,避免刷新的时候显示回到顶部按钮*/