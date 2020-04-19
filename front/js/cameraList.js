$( function() {
	var playButton = $('.cams__item-play-icon');
	var recPlayButton = $('.cams__rec-play-icon');
	playButton.on('click', onPlayClick);
	recPlayButton.on('click', onPlayClick);
	
	function onPlayClick(e) {
		e.stopPropagation();
		var streetInfo = $.trim($(e.target).parent().text())
		localStorage.setItem('streetInfo', streetInfo)
	}
})