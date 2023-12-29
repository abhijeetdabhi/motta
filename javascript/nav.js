let Navbar = document.getElementById('Navbar');
let SearchInput = document.getElementById('SearchInput');


// categories
let categories = document.getElementById('categories');
let categoriesSubMenu = document.getElementById('categoriesSubmenu');
let itshow = true;

function showData(){
    if(itshow){
        categoriesSubMenu.style.transform = 'translateY(-12px)';
        categoriesSubMenu.style.visibility = 'visible';
        categoriesSubMenu.style.opacity = '1';
        itshow = false;
    }
    else{
        categoriesSubMenu.style.visibility = 'invisible';
        categoriesSubMenu.style.opacity = '0';
        itshow = true;
    }
}



// sidebar

let menuBar = document.getElementById('menuBar');
let SideBar = document.getElementById('SideBar');
let closeBtn = document.getElementById('close');

menuBar.addEventListener('click',()=>{
    SideBar.style.transform = 'translateX(0%)';
    Navbar.style.filter = 'brightness(50%)';
    document.body.style.overflow = 'hidden';
})

closeBtn.addEventListener('click',()=>{
    SideBar.style.transform = 'translateX(-100%)';
    Navbar.style.filter = 'brightness(100%)';
    document.body.style.overflow = 'scroll';
})

document.onclick = function(e){
    if(!menuBar.contains(e.target) && !SideBar.contains(e.target) && !closeBtn.contains(e.target)){
        SideBar.style.transform = 'translateX(-100%)';
    }
}




// shopping cart
let shoppingCart = document.getElementById('shoppingCart');
let cart = document.querySelector('.cart');
let CartClose = document.getElementById('CartClose');


cart.addEventListener('click',()=>{
    shoppingCart.style.transform = 'translateX(0%)';
    Navbar.style.filter = 'brightness(50%)';
    document.body.style.overflow = 'hidden';
    SearchInput.disabled = true;
})

CartClose.addEventListener('click',()=>{
    shoppingCart.style.transform = 'translateX(100%)';
    Navbar.style.filter = 'brightness(100%)';
    document.body.style.overflow = 'scroll';
})

document.onclick = function(e){
    if(!shoppingCart.contains(e.target) && !cart.contains(e.target) && !CartClose.contains(e.target)){
        shoppingCart.style.transform = 'translateX(100%)';
        Navbar.style.filter = 'brightness(100%)';
        document.body.style.overflow = 'scroll';
    }
}