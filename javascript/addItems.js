showCart();

function addTocart(index) {
    let storedProducts = localStorage.getItem('products');
    if (storedProducts === null) {
        productsObj = [];
    } else {
        productsObj = JSON.parse(storedProducts);
    }

    let cartProducts = localStorage.getItem('cartItem');
    if (cartProducts === null) {
        cartsObj = [];
    } else {
        cartsObj = JSON.parse(cartProducts);
    }

    let selectNode = product[index];
    cartsObj.push(selectNode);
    localStorage.setItem("cartItem", JSON.stringify(cartsObj));

    showCart();
}

function showCart() {
    let cartProducts = localStorage.getItem('cartItem');
    if (cartProducts === null) {
        cartsObj = [];
    } else {
        cartsObj = JSON.parse(cartProducts);
    }

    let total = 0;

    let myCartItem = "";
    cartsObj.forEach(function(value, index){
        let priceWithoutCommas = value.Fprice.replace(/,/g, '');
        // let tprice = (value.Fprice);
        total += parseInt(priceWithoutCommas); 
        myCartItem += `<div class="grid grid-cols-1 items-center px-5 mt-5 w-[100%] pb-7 md:pb-0 md:grid-cols-2 xl:w-[50%]">
            <div class="cursor-pointer relative mt-6">
                <a href="" class="relative m-auto">
                    <img class="w-40" src="${value.image}" alt="">
                </a>
            </div>
            <div class="flex flex-col gap-y-3">
                <a href="" class="text-sm font-normal line-clamp-2 cursor-pointer">${value.name}</a>
                <span class="text-lg font-medium">₹${value.Fprice}</span>
                <div class="flex items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path fill="#ffc107" d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z" opacity="1" data-original="#ffc107" class=""></path></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path fill="#ffc107" d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z" opacity="1" data-original="#ffc107" class=""></path></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path fill="#ffc107" d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z" opacity="1" data-original="#ffc107" class=""></path></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path fill="#ffc107" d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z" opacity="1" data-original="#ffc107" class=""></path></g></svg>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" width="12" height="12" x="0" y="0" viewBox="0 0 24 24" style="enable-background:new 0 0 512 512" xml:space="preserve" class=""><g><path fill="#ffc107" d="m23.363 8.584-7.378-1.127L12.678.413c-.247-.526-1.11-.526-1.357 0L8.015 7.457.637 8.584a.75.75 0 0 0-.423 1.265l5.36 5.494-1.267 7.767a.75.75 0 0 0 1.103.777L12 20.245l6.59 3.643a.75.75 0 0 0 1.103-.777l-1.267-7.767 5.36-5.494a.75.75 0 0 0-.423-1.266z" opacity="1" data-original="#ffc107" class=""></path></g></svg>
                    <!-- Add more rating icons if needed -->
                    <span class="text-xs font-medium text-[#7c818b]">(0)</span>
                </div>
                <div class="mt-3">
                    <button class="text-sm font-medium text-white bg-[#1d2128] border border-black px-6 py-2 rounded-md">Buy Now</button>
                    <button id="removeItem_${index}" onclick="removeCartItem(${index})" class="text-sm font-medium text-[#1d2128] border border-[#1d2128] px-6 py-2 rounded-md">remove</button>
                </div>
            </div>
        </div>
        <hr class="mt-12 border-black">`;
    });

    let listCard = document.getElementById('listCard');
    if (cartsObj.length !== 0) {
        listCard.innerHTML = myCartItem;
    } else {
        listCard.innerHTML = "<h1 class='font-medium text-center py-24'>No items in the cart<h1>";
    }

    document.getElementById("totalPrice").innerHTML = "₹" + total;
}

function removeCartItem(index){
    let cartProducts = localStorage.getItem('cartItem');
    if (cartProducts === null) {
        cartsObj = [];
    } else {
        cartsObj = JSON.parse(cartProducts);
    }

    cartsObj.splice(index, 1);
    localStorage.setItem("cartItem", JSON.stringify(cartsObj));
    showCart();
}