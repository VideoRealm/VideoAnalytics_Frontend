$( function() {
	var topbarH = $('.topbar').height();
	var viewport = $('.viewport');
	var sidebar = $('.sidebar');
	var videoCont = $('.video-container');
	var addressPanel = $('.address-panel');
	
	function resizeViewport(){
		viewport.height(window.innerHeight-topbarH)
	}
	
	resizeViewport();
	
	$(window).resize(resizeViewport);
	
	var isSidebarOpened = true;
	var videoContStartFlexBasis = videoCont.css('flex-basis')
	$('.topbar .sidebar-button').click(function(){
		if(isSidebarOpened){
			sidebar.css({'display':'none'});
			videoCont.css({'flex-basis':'100%'})
		}	else {
			sidebar.css({'display':'block'});
			videoCont.css({'flex-basis': videoContStartFlexBasis})
		}
		
		isSidebarOpened = !isSidebarOpened;
	})
	
	var streetInfo = localStorage.getItem('streetInfo')
	console.log(streetInfo);
	if(streetInfo) {
		addressPanel.text(streetInfo);
		localStorage.removeItem('streetInfo');
	}
	
	var playButton = $('.cams__item-play-icon');
	var recPlayButton = $('.cams__rec-play-icon');
	playButton.on('click', onPlayClick);
	recPlayButton.on('click', onPlayClick);
	
	function onPlayClick(e) {
		e.stopPropagation();
		var streetInfo = $.trim($(e.target).parent().text())
		addressPanel.text(streetInfo);
	}
});