let sliderImg = document.querySelectorAll('.slider__img')
const leftBtn = document.querySelector('.slider__button-1')
const rightBtn = document.querySelector('.slider__button-2')

const slidesCount = sliderImg.length

let activeSlideIndex1 = slidesCount - 1
let activeSlideIndex2 = slidesCount - 2

leftBtn.addEventListener('click', () => {
   changeSlide('left')
  })

rightBtn.addEventListener('click', () => {
   changeSlide('right')
  });

function changeSlide(direction) {
   if (direction === 'left') {
      [].forEach.call(sliderImg, function(el) {
         el.classList.add('slider__img-right'); 
      });
   } else if(direction === 'right') {
      [].forEach.call(sliderImg, function(el) {
         el.classList.remove('slider__img-right'); 
      });
   };
   sliderImg[activeSlideIndex2].classList.remove('slider__img_active-2')
   sliderImg[activeSlideIndex1].classList.remove('slider__img_active-1')
   if (direction === 'left') {
      activeSlideIndex1++
      activeSlideIndex2++
      if (activeSlideIndex1 === slidesCount)
      {
         activeSlideIndex1 = 0
      }
      if (activeSlideIndex1 === 1)
      {
         activeSlideIndex2 = 0
      }

      sliderImg[activeSlideIndex1].classList.remove('slider__img_z-index')
      sliderImg[activeSlideIndex2].classList.add('slider__img_z-index')
      
   } else if(direction === 'right') {
      activeSlideIndex1--
      activeSlideIndex2--
      if (activeSlideIndex1 === 0)
      {
         activeSlideIndex2 = slidesCount - 1
      }
      if (activeSlideIndex1 === -1)
      {
         activeSlideIndex1 = slidesCount - 1
      }
      sliderImg[activeSlideIndex2].classList.remove('slider__img_z-index')
      sliderImg[activeSlideIndex1].classList.add('slider__img_z-index')
   }
   sliderImg[activeSlideIndex2].classList.add('slider__img_active-2')
   sliderImg[activeSlideIndex1].classList.add('slider__img_active-1')
}

