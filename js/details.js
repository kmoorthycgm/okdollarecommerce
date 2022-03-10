(function() {
	'user strict';

	var ecomrc = function() {
		var b = this;
		$(document).ready(function() {
			b._initialize();
		});
	};

	var b = ecomrc.prototype;

	b._initialize = function() {

		if (window.matchMedia("(min-width: 767px)").matches) {
			$('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
		}else{
			this._initMobileSlider();
		}
		this._initSlider();
		this._initTabClick();
	};

	b._initSlider = function (){

		$(document).on('mouseenter', '.gallery-navigation .extra-image', function() {
			var zoom = $(this).attr('data-large');

			$('.gallery-zoom-view .pd').attr({
				'src': zoom
			});

			var $setUrl = $('.gallery-zoom-view .cloud-zoom').attr({
				'data-zoom-url': zoom
			});

			if (window.matchMedia("(min-width: 767px)").matches) {
				if($setUrl){
					$('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
				}
			}

		});

		$('.nav.next-nav').click(function (){
			if($('.gallery-navigation li.extra-image.active').next()){
				var $zoom = $('.gallery-navigation li.extra-image.active').next().attr('data-large');
				$('.gallery-navigation li.extra-image.active').next().addClass('active');
				$('.gallery-navigation li.extra-image.active').prev().removeClass('active');

				$('.gallery-zoom-view .pd').attr({
					'src': $zoom
				});

				var $setUrl = $('.gallery-zoom-view .cloud-zoom').attr({
					'data-zoom-url': $zoom
				});
				if (window.matchMedia("(min-width: 767px)").matches) {
					if($setUrl){
						$('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
					}
				}
			}
		});

		$('.nav.pre-nav').click(function (){
			if($('.gallery-navigation li.extra-image.active').prev()){
				var $zoom = $('.gallery-navigation li.extra-image.active').prev().attr('data-large');
				$('.gallery-navigation li.extra-image.active').prev().addClass('active');
				$('.gallery-navigation li.extra-image.active').next().removeClass('active');

				$('.gallery-zoom-view .pd').attr({
					'src': $zoom
				});

				var $setUrl = $('.gallery-zoom-view .cloud-zoom').attr({
					'data-zoom-url': $zoom
				});

				if (window.matchMedia("(min-width: 767px)").matches) {
					if($setUrl){
						$('.cloud-zoom, .cloud-zoom-gallery').CloudZoom();
					}
				}
			}
		});
	};

	b._initMobileSlider = function (){
		$(document).on('click', '.cloud-zoom', function (){
			var img = $(this).attr('data-zoom-url');

			var html = '<div class="mProductZooming">';
				html += '<a href="javascript:;" class="closeZooming"><i class="fas fa-times"></i></a>';
				html += '<img class="mProduct" src="'+img+'">';
			html += '</div>';
			$('body').append(html);
		});

		$(document).on('click', '.closeZooming', function (){
			$('.mProductZooming').remove();
		});
	};

	b._initTabClick = function (){
		$('.nav-tabs a').click(function () {
			$('.nav-tabs a').parents('li').removeClass('active');
			$(this).parents('li').addClass('active');
		});
	};

	window.ecomrcAppDetails = window.ecomrcAppDetails || {};
	window.ecomrcAppDetails.ecomrc = new ecomrc();
})(jQuery);