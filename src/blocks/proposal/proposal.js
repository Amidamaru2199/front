o2.slider = {
	sliderLine: document.querySelector('.slider-line'),
	prev: document.querySelector('.button-prev'),
	nextrrr: document.querySelector('.button-next'),
	dots: document.querySelectorAll('.dot'),
	
	sliderWrapper: document.querySelector('.slider-wrapper').offsetWidth,
	
	position: 0,
	dotIndex: 0,


	nextSlide()
	{
		if (this.position < (this.dots.length -1) * this.sliderWrapper) {
			this.position += this.sliderWrapper;
			this.dotIndex ++;
		} 
		else {
			this.position = 0;
			this.dotIndex = 0;
		}
		
		this.sliderLine.style.left = -this.position + 'px'
		this.thisSlide(this.dotIndex)
	},

	prevSlide()
	{
		if (this.position > 0) {
			this.position -= this.sliderWrapper;
			this.dotIndex --;
		} 
		else {
			this.position = (this.dots.length -1) * this.sliderWrapper;
			this.dotIndex = (this.dots.length -1);
		}
		
		this.sliderLine.style.left = -this.position + 'px';
		this.thisSlide(this.dotIndex);
	},
	
	thisSlide(index)
	{
		for (let dot of this.dots) {
			dot.classList.remove('active');
		}
		this.dots[index].classList.add('active');
	},
	
	dotsFunc()
	{
		this.dots.forEach((dot, index) => {
		dot.addEventListener('click', () => {
			this.position = this.sliderWrapper * index;
			this.sliderLine.style.left = -this.position + 'px';
			this.dotIndex = index;
			this.thisSlide(this.dotIndex);
		})
	})
}


}
// const sliderLine = document.querySelector('.slider-line');
// const prev = document.querySelector('.button-prev');
// const nextrrr = document.querySelector('.button-next');
// const dots = document.querySelectorAll('.dot');

// const sliderWrapper = document.querySelector('.slider-wrapper').offsetWidth;

// let position = 0;
// let dotIndex = 0;


// const nextSlide = () => {
// 	if (position < (dots.length -1) * sliderWrapper) {
// 		position += sliderWrapper
// 		dotIndex ++
// 	} 
// 	else {
// 		position = 0
// 		dotIndex = 0
// 	}
	
// 	sliderLine.style.left = -position + 'px'
// 	thisSlide(dotIndex)
// };


// const prevSlide = () => {
// 	if (position > 0) {
// 		position -= sliderWrapper
// 		dotIndex --
// 	} 
// 	else {
// 		position = (dots.length -1) * sliderWrapper
// 		dotIndex = (dots.length -1)
// 	}
	
// 	sliderLine.style.left = -position + 'px'
// 	thisSlide(dotIndex)
// };

// const thisSlide = (index) => {
// 	for (let dot of dots) {
// 		dot.classList.remove('active')
// 	}
// 	dots[index].classList.add('active')
// };

// dots.forEach((dot, index) => {
// 	dot.addEventListener('click', () => {
// 		position = sliderWrapper * index
// 	    sliderLine.style.left = -position + 'px'
// 		dotIndex = index
// 		thisSlide(dotIndex)
// 	})
// });

// nextrrr.addEventListener('click', nextSlide);
// prev.addEventListener('click', prevSlide);

// const init = function(){
// 	let items = document.querySelectorAll('.section');
// 	cssScrollSnapPolyfill()
//   }
//   init();