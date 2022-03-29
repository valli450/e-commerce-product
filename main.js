const openBtn = document.querySelector(".left-side__menu");
const overflow = document.querySelector(".overflow");
const cartBlock = document.querySelector(".right-side__basket__block");
const list = ['/images/image-product-1.jpg', '/images/image-product-2.jpg', '/images/image-product-3.jpg', '/images/image-product-4.jpg'];
const listId  =  ["picture-1", "picture-2", "picture-3", "picture-4"];
const listId2 = ["picture-5", "picture-6", "picture-7", "picture-8"]
const imagePlaceMobile = document.querySelector(".image__mobile__section-mob");
let inedex = 0;
let cartNumber = document.querySelector(".number-chosen").innerHTML;
let countItems = 0;
let indexDesktop = 0;
let basketText = document.querySelector(".right-side__basket__block__bottom");

/* Menu */
function showMenuMobile() {
    openBtn.classList.add("showMenu");
    document.body.style.overflow = "hidden";
    openBtn.style.zIndex="5";
    overflow.style.zIndex="3";
    console.log(inedex);
}

function hideMenu() {
    openBtn.classList.remove("showMenu");
    document.body.style.overflow = "auto";
    openBtn.style.zIndex="0"
    overflow.style.zIndex="-1";
}

/* Cart */
function openCart() {
    cartBlock.classList.add("showCart");
    document.body.style.overflow = "hidden";
    cartBlock.style.zIndex="20";
    overflow.style.zIndex="5";
    document.querySelector(".image__mobile__prev-next").style.zIndex ="-1";
}

function closeCart() {
    cartBlock.classList.remove("showCart");
    document.body.style.overflow = "auto";
    cartBlock.style.zIndex="1"
    overflow.style.zIndex="-1";
    document.querySelector(".image__mobile__prev-next").style.zIndex ="0";
}

/* Image swipe (Mobile) */
function swipeMobileImage(n) {
    if (Number(n) < 0){
        if(inedex - 1 < 0){
            inedex = 3;
        }else{
            inedex--;
        }
    } else{
        if(inedex + n>=4){
            inedex = 0;
        }else{
            inedex++;
        }
    }
    imagePlaceMobile.innerHTML = `<img src="${list[inedex]}">`;
}

/* Add to Cart */
function addToNumber() {
    cartNumber++;
    document.querySelector(".text__add-to-cart__number__add-or-minus").innerHTML = `<p class="number-to-add">${cartNumber}</p>`;
    countItems+= 1;
    console.log(countItems);
}

function minusFromNumber() {
    if(cartNumber-1 === -1) {
        document.querySelector(".text__add-to-cart__number__add-or-minus").innerHTML = `<p class="number-to-add">${cartNumber}</p>`;
        countItems = 0;
    }else{
        cartNumber--;
        document.querySelector(".text__add-to-cart__number__add-or-minus").innerHTML = `<p class="number-to-add">${cartNumber}</p>`;
        countItems -= 1;
    }
}

function emptyCart(){
    countItems = 0;
    console.log(countItems);
    basketText.innerHTML = `<p>Your cart is empty.</p>`;
    document.querySelector(".number-chosen").style.display="none";

}

function addToCart(){
    if(countItems > 0){
        basketText.innerHTML = `
            <div class="right-side__basket__block__bottom__items">
                <div class="imageandprice">
                    <img src="./images/image-product-1-thumbnail.jpg">
                    <div class="right-side__basket__block__bottom__items__amount">
                        <p class="mobile">Autumn Limited Edition...</p>
                        <p class="desktop">Fall Limited Edition Sneakers</p>
                        <p class="price">$125.00 x ${countItems} <span  class="total">$${125*countItems}.00</span></p>
                    </div>
                </div>
                <svg onclick="emptyCart()" width="14" height="16" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                    <defs>
                        <path d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z" id="a"/>
                    </defs>
                    <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a"/>
                </svg>
            </div>
            <button>Checkout</button>
        `
        document.querySelector(".right-side__basket__orange").innerHTML= `<p class="number-chosen">${countItems}</p>`
        document.querySelector(".number-chosen").style.display="flex";
    }

    cartNumber = 0;
    document.querySelector(".text__add-to-cart__number__add-or-minus").innerHTML = `<p class="number-to-add">${0}</p>`;
    console.log(cartNumber)
}

/* Desktop Image */
function doBigger(h){
    document.querySelector(".image__desktop__absolute").classList.add('openBigger');
    document.querySelector(".image__desktop__absolute").style.zIndex="6";
    overflow.style.zIndex="3";
    overflow.style.display="block";

}

function hideBiggerBlock(){
    document.querySelector(".image__desktop__absolute").classList.remove('openBigger');
    document.querySelector(".image__desktop__absolute").style.zIndex="0";
    overflow.style.zIndex="-1";
    overflow.style.display="none";
}

function select(n){
    document.getElementById(`${n}`).classList.add('selected');
    listId.forEach(x => document.getElementById(`${x}`).classList.remove('selected'));
}


function showPicture(f, d){
    document.querySelector(`.${f}`).innerHTML = `<img src="${list[Number(d)-1]}" alt="Image Product" onclick="doBigger()"/>`;
    document.querySelector('.image__mobile__section').innerHTML = `<img src="${list[Number(d)-1]}" alt="Image Product"/>`;
    indexDesktop = Number(d)-1;
    listId2.forEach(x => document.getElementById(`${x}`).classList.remove('selected'));
    document.getElementById(`${listId2[indexDesktop]}`).classList.add('selected');
    
}

function nextDesk(g) {
    if (Number(g) < 0){
        if(indexDesktop - 1 < 0){
            indexDesktop = 3;
        }else{
            indexDesktop--;
        }
    } else{
        if(indexDesktop + Number(g)>=4){
            indexDesktop = 0;
        }else{
            indexDesktop++;
        }
    }
    document.querySelector(".image__mobile__section").innerHTML = `<img src="${list[indexDesktop]}" alt="Image Product"/>`;
    listId2.forEach(x => document.getElementById(`${x}`).classList.remove('selected'));
    document.getElementById(`${listId2[indexDesktop]}`).classList.add('selected');
}