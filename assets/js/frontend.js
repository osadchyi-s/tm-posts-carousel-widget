jQuery( document ).ready( function() {
	console.log(window.TMWidgetParam.slidesPerView);
	// Slider init
	window.swiper_carousel = new window.Swiper( '.tm-post-carousel-widget', {
		pagination: '.tm-post-carousel-widget .swiper-pagination',
		slidesPerView: window.TMWidgetParam.slidesPerView,
		paginationClickable: true,
		spaceBetween: 30
	} );
});