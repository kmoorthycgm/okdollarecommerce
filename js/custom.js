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
		this._initMaterialLabel();
		this._initSlider();
		this._initSearchClick();
		this._initQuantityAddRemove();
	};

	b._initMaterialLabel = function(){
		$(".form-group .input-control, .form-group .textarea-control").val("");
		$(".form-group .input-control, .form-group .textarea-control").focusout(function () {
			if ($(this).val() != "") {
				$(this).addClass("has-content");
			} else {
				$(this).removeClass("has-content");
			}
		});
	};

	b._initSlider = function (){
		if($(".slick-slider-section").length > 0){
			$(".slick-slider-section").slick({
				autoplay: false,
				dots: true,
				speed: 300,
				arrows: true,
				nextArrow: '<button type="button" class="nav-icon next waves-effect"><i class="fa fa-long-arrow-alt-right"></i></button>',
				prevArrow: '<button type="button" class="nav-icon prev waves-effect"><i class="fa fa-long-arrow-alt-left"></i></button>',
			});
		}

		if($(".product-slider").length > 0){
			$(".product-slider").slick({
				autoplay: false,
				dots: false,
				speed: 300,
				arrows: true,
				slidesToShow: 4,
				slidesToScroll: 4,
				nextArrow: '<button type="button" class="nav-icon next waves-effect"><i class="fa fa-long-arrow-alt-right"></i></button>',
				prevArrow: '<button type="button" class="nav-icon prev waves-effect"><i class="fa fa-long-arrow-alt-left"></i></button>',
				responsive: [{
					breakpoint: 769,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					}
				},{
					breakpoint: 640,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}]
			});
		}
	};

	b._initSearchClick = function (){
		$(document).on('click', '.search-section .search-icon, .searchModalBtn', function (){
			$(this).toggleClass('active');
			$(this).next('.search-options').slideToggle();
		});

		$(document).on('click', '.cart .icon', function (){
			$(this).toggleClass('active');
			$('.cart').find('div.cart-summary-section').slideToggle();
		});
	};

	b._initQuantityAddRemove = function (){
		$('.qty-group .qty-btn').on('click', function (){
			var existQty = $(this).parents('.qty-group').find('input.qty-control').val();
			if($(this).attr('data-type') == 'add'){
				existQty = +existQty + 1;
			}else{
				if(existQty > 1){
					existQty = +existQty - 1;
				}
			}
			$(this).parents('.qty-group').find('input.qty-control').val(existQty);
		});
	};

	window.ecomrcApp = window.ecomrcApp || {};
	window.ecomrcApp.ecomrc = new ecomrc();
})(jQuery);