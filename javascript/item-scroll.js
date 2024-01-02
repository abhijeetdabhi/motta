// first scroller

const wrapper = document.querySelector(".wrapper");
const carousel = document.querySelector(".carousel");
const firstCardWidth = carousel.querySelector(".card").offsetWidth;
const arrowBtns = document.querySelectorAll(".wrapper i");
const carouselChildrens = [...carousel.children];

let isDragging = false, isAutoPlay = true, startX, startScrollLeft, timeoutId;

// Get the number of cards that can fit in the carousel at once
let cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);

// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(card => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(card => {
    carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
    });
});

const dragStart = (e) => {
    isDragging = true;
    carousel.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel
    startX = e.pageX;
    startScrollLeft = carousel.scrollLeft;
}

const dragging = (e) => {
    if(!isDragging) return; // if isDragging is false return from here
    // Updates the scroll position of the carousel based on the cursor movement
    carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
}

const dragStop = () => {
    isDragging = false;
    carousel.classList.remove("dragging");
}

const infiniteScroll = () => {
    // If the carousel is at the beginning, scroll to the end
    if(carousel.scrollLeft === 0) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.scrollWidth - (2 * carousel.offsetWidth);
        carousel.classList.remove("no-transition");
    }
    // If the carousel is at the end, scroll to the beginning
    else if(Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
        carousel.classList.add("no-transition");
        carousel.scrollLeft = carousel.offsetWidth;
        carousel.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel
    clearTimeout(timeoutId);
    if(!wrapper.matches(":hover")) autoPlay();
}

const autoPlay = () => {
    if(window.innerWidth < 800 || !isAutoPlay) return; // Return if window is smaller than 800 or isAutoPlay is false
    // Autoplay the carousel after every 2500 ms
    timeoutId = setTimeout(() => carousel.scrollLeft += firstCardWidth, 2500);
}
autoPlay();

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", () => clearTimeout(timeoutId));
wrapper.addEventListener("mouseleave", autoPlay);






// second scroller
const wrapper2 = document.querySelector(".wrapper2");
const carousel2 = document.querySelector(".carousel2");
const firstCardWidth2 = carousel2.querySelector(".card2").offsetWidth;
const arrowBtns2 = document.querySelectorAll(".wrapper2 i");
const carouselChildrens2 = [...carousel2.children];

let isDragging2 = false, isAutoPlay2 = true, startX2, startScrollLeft2, timeoutId2;

// Get the number of cards that can fit in the carousel 2at once
let cardPerView2 = Math.round(carousel2.offsetWidth / firstCardWidth2);

// Insert copies of the last few cards to beginning of carousel2 for infinite scrolling
carouselChildrens2.slice(-cardPerView2).reverse().forEach(card => {
    carousel2.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel2 for infinite scrolling
carouselChildrens2.slice(0, cardPerView2).forEach(card => {
    carousel2.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel2 at appropriate postition to hide first few duplicate cards on Firefox
carousel2.classList.add("no-transition");
carousel2.scrollLeft = carousel2.offsetWidth;
carousel2.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel2 left and right
arrowBtns2.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel2.scrollLeft += btn.id == "left" ? -firstCardWidth2 : firstCardWidth2;
    });
});

const dragStart2 = (e) => {
    isDragging2 = true;
    carousel2.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel2
    startX2 = e.pageX;
    startScrollLeft2 = carousel2.scrollLeft;
}

const dragging2 = (e) => {
    if(!isDragging2) return; // if isDragging2 is false return from here
    // Updates the scroll position of the carousel2 based on the cursor movement
    carousel2.scrollLeft = startScrollLeft2 - (e.pageX - startX2);
}

const dragStop2 = () => {
    isDragging2 = false;
    carousel2.classList.remove("dragging2");
}

const infiniteScroll2 = () => {
    // If the carousel2 is at the beginning, scroll to the end
    if(carousel2.scrollLeft === 0) {
        carousel2.classList.add("no-transition");
        carousel2.scrollLeft = carousel2.scrollWidth - (2 * carousel2.offsetWidth);
        carousel2.classList.remove("no-transition");
    }
    // If the carousel2 is at the end, scroll to the beginning
    else if(Math.ceil(carousel2.scrollLeft) === carousel2.scrollWidth - carousel2.offsetWidth) {
        carousel2.classList.add("no-transition");
        carousel2.scrollLeft = carousel2.offsetWidth;
        carousel2.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel2
    clearTimeout(timeoutId2);
    if(!wrapper2.matches(":hover")) autoPlay2();
}

const autoPlay2 = () => {
    if(window.innerWidth < 800 || !isAutoPlay2) return; // Return if window is smaller than 800 or isAutoPlay2 is false
    // Autoplay2 the carousel2 after every 2500 ms
    timeoutId2 = setTimeout(() => carousel2.scrollLeft += firstCardWidth2, 2500);
}
autoPlay2();

carousel2.addEventListener("mousedown", dragStart2);
carousel2.addEventListener("mousemove", dragging2);
document.addEventListener("mouseup", dragStop2);
carousel2.addEventListener("scroll", infiniteScroll2);
wrapper2.addEventListener("mouseenter", () => clearTimeout(timeoutId2));
wrapper2.addEventListener("mouseleave", autoPlay2);



// third scroller
const wrapper3 = document.querySelector(".wrapper3");
const carousel3 = document.querySelector(".carousel3");
const firstCardWidth3 = carousel3.querySelector(".card3").offsetWidth;
const arrowBtns3 = document.querySelectorAll(".wrapper3 i");
const carouselChildrens3 = [...carousel3.children];

let isDragging3 = false, isAutoPlay3 = true, startX3, startScrollLeft3, timeoutId3;

// Get the number of cards that can fit in the carousel 2at once
let cardPerView3 = Math.round(carousel3.offsetWidth / firstCardWidth3);

// Insert copies of the last few cards to beginning of carousel3 for infinite scrolling
carouselChildrens3.slice(-cardPerView3).reverse().forEach(card => {
    carousel3.insertAdjacentHTML("afterbegin", card.outerHTML);
});

// Insert copies of the first few cards to end of carousel3 for infinite scrolling
carouselChildrens3.slice(0, cardPerView3).forEach(card => {
    carousel3.insertAdjacentHTML("beforeend", card.outerHTML);
});

// Scroll the carousel3 at appropriate postition to hide first few duplicate cards on Firefox
carousel3.classList.add("no-transition");
carousel3.scrollLeft = carousel3.offsetWidth;
carousel3.classList.remove("no-transition");

// Add event listeners for the arrow buttons to scroll the carousel3 left and right
arrowBtns3.forEach(btn => {
    btn.addEventListener("click", () => {
        carousel3.scrollLeft += btn.id == "left" ? -firstCardWidth3 : firstCardWidth3;
    });
});

const dragStart3 = (e) => {
    isDragging3 = true;
    carousel3.classList.add("dragging");
    // Records the initial cursor and scroll position of the carousel3
    startX3 = e.pageX;
    startScrollLeft3 = carousel3.scrollLeft;
}

const dragging3 = (e) => {
    if(!isDragging3) return; // if isDragging3 is false return from here
    // Updates the scroll position of the carousel3 based on the cursor movement
    carousel3.scrollLeft = startScrollLeft3 - (e.pageX - startX3);
}

const dragStop3 = () => {
    isDragging3 = false;
    carousel3.classList.remove("dragging3");
}

const infiniteScroll3 = () => {
    // If the carousel3 is at the beginning, scroll to the end
    if(carousel3.scrollLeft === 0) {
        carousel3.classList.add("no-transition");
        carousel3.scrollLeft = carousel3.scrollWidth - (2 * carousel3.offsetWidth);
        carousel3.classList.remove("no-transition");
    }
    // If the carousel3 is at the end, scroll to the beginning
    else if(Math.ceil(carousel3.scrollLeft) === carousel3.scrollWidth - carousel3.offsetWidth) {
        carousel3.classList.add("no-transition");
        carousel3.scrollLeft = carousel3.offsetWidth;
        carousel3.classList.remove("no-transition");
    }

    // Clear existing timeout & start autoplay if mouse is not hovering over carousel3
    clearTimeout(timeoutId3);
    if(!wrapper3.matches(":hover")) autoPlay3();
}

const autoPlay3 = () => {
    if(window.innerWidth < 800 || !isAutoPlay3) return; // Return if window is smaller than 800 or isAutoPlay3 is false
    // Autoplay3 the carousel3 after every 2500 ms
    timeoutId3 = setTimeout(() => carousel3.scrollLeft += firstCardWidth3, 2500);
}
autoPlay3();

carousel3.addEventListener("mousedown", dragStart3);
carousel3.addEventListener("mousemove", dragging3);
document.addEventListener("mouseup", dragStop3);
carousel3.addEventListener("scroll", infiniteScroll3);
wrapper3.addEventListener("mouseenter", () => clearTimeout(timeoutId3));
wrapper3.addEventListener("mouseleave", autoPlay3);