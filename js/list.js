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
		this._initFilterClick();
		this._initOpenFilter();
		this._initScrollTop();
	};

	b._initFilterClick = function (){
		$('.filter-list li.list-item .icon').on('click', function (){
			if(!$(this).hasClass('active')){
				$('.filter-list li.list-item').find('ul.filter-list').slideUp();
				$('.filter-list li.list-item').find('.icon').removeClass('active');
				$(this).addClass('active');
				$(this).parents('li.list-item').find('ul.filter-list').slideToggle();
			}else{
				$('.filter-list li.list-item').find('ul.filter-list').slideUp();
				$('.filter-list li.list-item').find('.icon').removeClass('active');
			}
		});
	};

	b._initOpenFilter = function (){
		$('.filter-btn').on('click', function (){
			$('.list-page .filter-section').addClass('active');
			$('body').append('<div class="filter-overlay"></div>');
		});

		$(document).on('click', '.close-filter, .filter-overlay',  function (){
			$('.list-page .filter-section').removeClass('active');
			$('.filter-overlay').remove();
		});
	};

	b._initScrollTop = function (){

		window.addEventListener('scroll', function(e) {
			var scrollTopElement = document.getElementById('scrollTopButton');
			if(window.scrollY > 800){
				scrollTopElement.className = 'scroll-top waves-effect active';
			}else{
				scrollTopElement.className = 'scroll-top waves-effect';
			}
		});

		$(document).on('click', '.scroll-top', function (){
			$('body,html').animate({
				scrollTop: 0
			}, 400);
		});
	};

	window.ecomrcAppList = window.ecomrcAppList || {};
	window.ecomrcAppList.ecomrc = new ecomrc();
})(jQuery);