import { addLS } from "./addLS";
import { calculatingTotal } from "./calculatingTotal";

export const increDecre = (id, e, price, stock) =>{
    let increDecreId = document.querySelector(`#card${id}`);
    let prodQuan = increDecreId.querySelector(`.counting`);
    let prodPrice = increDecreId.querySelector(`.price`);
    let quantity = 1;
    let LSprice = 0;

    let curProducts = addLS();
    let existing = curProducts.find((curProd) => curProd.id === id);
    console.log(existing);

    if (existing) {
        quantity = existing.quantity;
        LSprice = existing.price;
    } else{
        LSprice = price;
        price = price;
    }

    let increaseTrue = e.target.classList.contains(`increase`);
    let decreaseTrue = e.target.classList.contains(`decrease`);

    if (increaseTrue === true) {
        if (quantity < stock) {
            quantity += 1;
        } else if (quantity === stock) {
            quantity = stock
            LSprice = price*stock;
        }
    }

    if (decreaseTrue === true) {
        if (quantity > 1) {
            quantity -= 1;
        }
    }

    // updating price in localStorage..!
    LSprice = price * quantity;
    LSprice = Number(Math.floor(price * quantity))
    let updatedPrice = {id, quantity, price: LSprice};

    updatedPrice = curProducts.map((curProd) =>{
        if (curProd.id === id) {
            return updatedPrice;
        } else{
            return curProd;
        }
    });
    localStorage.setItem(`cartElem`, JSON.stringify(updatedPrice));

    prodQuan.innerHTML = quantity;
    prodPrice.innerHTML = LSprice;
    calculatingTotal()
}