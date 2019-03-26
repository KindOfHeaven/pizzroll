"use strict";
var breakpoints = {
	  xs: 320,
  	sm: 480,
  	md: 768,
  	lg: 1170
}

function init() {
  sliders();
  dropdowns();
  modals();
  if (jQuery('.h-page__numbers').length) {
    var i;
    jQuery('.h-page__numbers > li').each(function() {
      i = jQuery(this).index() + 1;
      jQuery(this).attr('data-number', i)
    })
  }
}

function dropdowns() {

  var drop;
  jQuery(".js-dropdown__arrow").click(function() {
    drop = jQuery(this).parent().find(".h-submenu");
    jQuery(drop).toggle(400, "swing");
    if (jQuery(this).attr('data-state') === 'is-active') {
    	jQuery(this).attr('data-state', '')
    } else {
    	jQuery(this).attr('data-state', 'is-active')
    }
  });

  var hamburger;
  jQuery(".js-hamburger, .h-scroll > .h-container.-mobile-only > img").click(function() {
  	hamburger = jQuery('.js-nav');
  	jQuery(hamburger).toggle(400, 'swing')
  });

  var filter;
  jQuery('.js-filter-drop').click(function() {
  	if (!jQuery(this).hasClass('-is-active')) {
  		jQuery('.h-catalog__filter-select__block').hide(400)
  		jQuery('.js-filter-drop.-is-active').removeClass('-is-active');
  	}
  	jQuery(this).toggleClass('-is-active');
  	filter = jQuery(this).parent().find('.h-catalog__filter-select__block');
  	jQuery(filter).toggle(400);
  });

  var selectedItem;
  jQuery('.js-filter-select__item').click(function() {
  	selectedItem = jQuery(this).parent().parent().find('.h-catalog__filter-selected');
  	jQuery(selectedItem).text(jQuery(this).text());
  	jQuery(this).parent().find('.js-filter-select__item').attr('data-state', '');
  	jQuery(this).attr('data-state', 'is-selected');
  	jQuery(this).parent().toggle(400);
  });
}

function sliders() {

  if (jQuery(".js-slider").length) {
    jQuery(".js-slider").slick({
    	slidesToShow: 1,
    	slidesToScroll: 1,
    	arrows: true,
    	responsive: [
    		{
    		  breakpoint: breakpoints['lg'],
    		  settings: {
    		    slidesToShow: 1,
    		    slidesToScroll: 1,
    		    arrows: false
    		  }
    		}
    	]
    });
  }

  if (jQuery(".js__product-slider").length) {
  	jQuery(".js__product-slider").each(function() {
  		jQuery(this).slick({
  			slidesToShow: 4,
  			slidesToScroll: 4,
  			responsive: [
    			{
    			  breakpoint: breakpoints['lg'],
    			  settings: {
    			    slidesToShow: 2,
    			    slidesToScroll: 2,
    			    arrows: true
    			  }
    			},
    			{
    				breakpoint: breakpoints['md'],
    				settings: {
    					slidesToShow: 2,
    			    	slidesToScroll: 2,
    			    	arrows: false
    				}
    			},
    			{
    				breakpoint: breakpoints['sm'],
    				settings: {
    					slidesToShow: 1,
    			    	slidesToScroll: 1,
    			    	arrows: true
    				}
    			}
    		]
  		})
  	})
  }

  if (jQuery(".js-rest__slider").length) {
    jQuery(".js-rest__slider").slick({
      slidesToShow: 4,
      slidesToScroll: 4,
      arrows: true,
      responsive: [
          {
            breakpoint: breakpoints['lg'],
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              arrows: true
            }
          },
          {
            breakpoint: breakpoints['md'],
            settings: {
              slidesToShow: 2,
                slidesToScroll: 2,
                arrows: true
            }
          },
          {
            breakpoint: breakpoints['sm'],
            settings: {
              slidesToShow: 1,
                slidesToScroll: 1,
                arrows: true
            }
          }
        ]
    })
  }

}

function modals() {
  jQuery('.h-opacity, .h-product__modal-overall').hide()
  jQuery('.h-present__icon').click(function() {
      jQuery('body > .h-present__bar').animate({'right': '-100%'}, 700)
      setTimeout(function() {
        jQuery('.h-present__bar-block').show('slide', {direction: 'right'}, 500);
      }, 501)
  })

  jQuery('.h-present__bar-block .h-cross').click(function() {
      jQuery('.h-present__bar-block').animate({'right': '-100%'}, 700);
      setTimeout(function() {
        jQuery('.h-present__bar-block').hide()
        jQuery('body > .h-present__bar').animate({'right': '15px'}, 700)
      },300)
  })

  jQuery('.h-auth__button').click(function() {
    jQuery(this).parent().find('.h-auth__modal').toggle(300).find('[data-action="signin"]').show()
  })

  jQuery('.h-modal__grey-cross').click(function() {
    jQuery(this).parent().toggle(300)
  })
  jQuery('.h-auth-modal__link').click(function() {
    $(this).parent().find('.h-auth-modal__link').attr('data-state', '')
    $(this).attr('data-state','is-active')
    $(this).parent().parent().find('.h-auth__modal-type').hide(300)
    $(this).parent().parent().find('.h-auth__modal-type[data-action="' + $(this).attr('data-action') + '"]').show(300)
  })

  jQuery('.h-cart__modal').hide()
  jQuery('.h-cart__button').click(function() {
    jQuery(this).parent().find('.h-cart__modal').toggle(300)
  })

  jQuery('.h-cart__modal-present').click(function() {
    jQuery(this).parent().parent().find('.h-cart__modal-choose').toggle(300)
  })

  var top;

  jQuery('.h-product__price-block .h-button').click(function() {
    top = jQuery(window).scrollTop();
    jQuery('.h-added').css('top', top + jQuery(window).outerHeight()/5)
    jQuery('body').addClass('h-modal__is-opened');
    jQuery('.h-added,.h-opacity').fadeIn(300)
    setTimeout(function() {
      jQuery('.h-added,.h-opacity').fadeOut(300)
      jQuery('body').removeClass('h-modal__is-opened')
    }, 3000)
  })
  var content;
  jQuery('.h-product__attachment').click(function() {
    content = jQuery(this).parent().find('.h-product__modal').html()
    if (content === undefined) {
      return 0
    }
    jQuery('body').addClass('h-modal__is-opened');
    jQuery('.h-opacity').fadeIn(300)
    jQuery('.h-product__modal-overall').html(content).css('top', jQuery(window).outerHeight()/5).fadeIn(300)
    jQuery('.h-modal__grey-cross').click(function() {
      jQuery(this).parent().toggle(300);
      jQuery('body').removeClass('h-modal__is-opened');
      if (jQuery('.h-opacity').is(':visible')) {
        jQuery('.h-opacity').fadeOut(300)
      }
       jQuery('.h-product__modal-overall').html('')
    })
  })
}

jQuery(document).ready(function() {

  if (jQuery(".h-submenu").length) {
    jQuery(".h-submenu").hide();
  }
  if (jQuery('.h-catalog__filter-select__block').length) {
  	jQuery('.h-catalog__filter-select__block').hide()
  }

  init();

  jQuery(window).on('resize', function() {
  	if (jQuery(window).outerWidth() < breakpoints['lg']) {
  		jQuery('.js-nav').hide()
  	} else {
  		jQuery('.js-nav').show()
  	}
  })

  jQuery(window).on('scroll', function() {
  	if (jQuery(window).scrollTop() > 177) {
  		jQuery('.h-scroll').slideDown()
      jQuery('.h-header__navigation').addClass('js-scrolling')
  	} else {
  		jQuery('.h-scroll').slideUp()
      jQuery('.h-header__navigation').removeClass('js-scrolling')
  	}
  })

  if (jQuery('.h-cart__table').length) {
    jQuery('.js-to-next-step').click(function() {
      jQuery('.js-first-step').fadeOut(300)
      setTimeout(function() {
        jQuery('.js-next-step').fadeIn(300)
      }, 300)
    })
  }
});