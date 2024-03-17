const slides = document.querySelectorAll('.slide');
const prev = document.querySelector('.left');
const next = document.querySelector('.right');

let currentIndex = 0;

slides.forEach((slide,index)=>{
    slide.style.transform = `translateX(${index * 100}%)`;
});

function updateSlide(){
    slides.forEach((slide,index)=>{
        const offset = (index - currentIndex) * 100;
        slide.style.transform = `translateX(${offset}%)`;
    });
}

next.addEventListener('click',()=>{
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlide();
})

prev.addEventListener('click',()=>{
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlide();
})
