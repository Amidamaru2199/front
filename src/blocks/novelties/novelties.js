o2.specialistsDetal = {
	init() {
		$('._specialists-detail__slider').slick({
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 1,
			dotsClass: '',
			variableWidth: true,
			appendArrows: '._g-specialists-detail-arrow',
			appendDots: '._g-specialists-detail-arrow',
			prevArrow: '<div class="novelties__left-button"></div>',
			nextArrow: '<div class="novelties__right-button"></div>',
			arrows: true,
			responsive: [
				{
					breakpoint: 1260,
					settings:
					{
						slidesToShow: 3,
						slidesToScroll: 1,
					},
				},
				{
					breakpoint: 768,
					settings:
					{
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
			]
		})
	}
}
