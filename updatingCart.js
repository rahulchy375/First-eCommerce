let navCart = document.querySelector(`.navCart`);

export const updatingCart = (gettingElem) =>{
    return (navCart.innerHTML = `<i class="fa-solid fa-cart-shopping"> ${gettingElem.length}</i>`);
}