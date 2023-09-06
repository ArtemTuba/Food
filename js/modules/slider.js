export default function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter,wrapper, field}){
    const prev = document.querySelector(prevArrow);
    const slides = document.querySelectorAll(slide);
    const next = document.querySelector(nextArrow);
    const slider = document.querySelector(container);
    const total = document.querySelector(totalCounter);
    const current = document.querySelector(currentCounter);
    const slidesWrapper = document.querySelector(wrapper);
    const width = window.getComputedStyle(slidesWrapper).width;
    const slidesField = document.querySelector(field);
    
    let slideIndex = 1;
    let offset = 0;
    
    slides.forEach(slide => {
        slide.style.width = width;
    })
    
    slidesField.style.width = 100 * slides.length + '%';
    slidesField.style.display = 'flex';
    slidesField.style.transition = '0.5s all';
    slidesWrapper.style.overflow = 'hidden';
    
    function slidesCounter(){
        total.textContent = slides.length < 10 ? `0${slides.length}` : slides.length;
        current.textContent = slides.length < 10 ? `0${slideIndex}` : slideIndex;
    }
    
    slidesCounter()
    
    next.addEventListener('click', () => {
        if(offset == +width.replace(/[^\d.]/g, '') * (slides.length - 1)){
            offset = 0;
        } else {
            offset +=  +width.replace(/[^\d.]/g, '');
        }
    
        slidesField.style.transform = `translateX(-${offset}px)`;
        slideIndex == slides.length ? slideIndex = 1 : slideIndex++;
        slidesCounter()
        dotsActive()
    })
    
    prev.addEventListener('click', () => {
        if(offset == 0){
            offset = +width.replace(/[^\d.]/g, '') * (slides.length - 1);
        } else {
            offset -=  +width.replace(/[^\d.]/g, '');
        }
    
        slidesField.style.transform = `translateX(-${offset}px)`;
        slideIndex == 1 ? slideIndex = slides.length : slideIndex--;
        slidesCounter()
        dotsActive()
    })
    
    //Создаем навигацию для слайдера 
    
    slider.style.position = 'relative';
    
    const indicators = document.createElement('ol');
    const dots = [];
    indicators.classList.add('carousel-indicators');
    slider.append(indicators);
    
    for(let i = 0; i < slides.length; i++){
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.classList.add('dot');
        i === 0 ?  dot.style.opacity = 1 :  dot.style.opacity = .5
        indicators.append(dot);
        dots.push(dot)
    }
    
    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            offset = +width.replace(/[^\d.]/g, '') * (slideTo - 1);
            slidesField.style.transform = `translateX(-${offset}px)`;
            slidesCounter()
            dotsActive()
        })
    })
    
    function dotsActive(){
        dots.forEach(dot => dot.style.opacity = .5);
        dots[slideIndex - 1].style.opacity = 1
    }
}

