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
    document.body.style.overflow = 'hidden';
})

closeBtn.addEventListener('click',()=>{
    SideBar.style.transform = 'translateX(-100%)';
    document.body.style.overflow = 'scroll';
})

document.onclick = function(e){
    if(!menuBar.contains(e.target) && !SideBar.contains(e.target) && !closeBtn.contains(e.target)){
        SideBar.style.transform = 'translateX(-100%)';
        document.body.style.overflow = 'scroll';
    }
}