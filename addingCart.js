import { addLS } from "./addLS";
import { updatingCart } from "./updatingCart";

addLS();

export const addingCart = (event, id, stock) =>{
    let LSarr = addLS();

    const prodElem = document.querySelector(`#card${id}`);
    // console.log(prodElem);

    let quantity = prodElem.querySelector(`.counting`).innerText;
    let price = prodElem.querySelector(`.price`).innerText;
    price = price.replace(`$`, "");

    let existing =  LSarr.find((curElem) => curElem.id === id);

    if (existing && quantity > 1) {
        quantity = Number(existing.quantity) + Number(quantity);
        price = Number(Math.floor(price * quantity)) ;
        let updatedCart = {id,quantity,price};
        updatedCart = LSarr.map((curProd) =>{
            // return (curProd.id === id) ? updatedCart : curProd;
            if (curProd.id === id) {
                return updatedCart;
            } else{
                return curProd;
            }
        })
        console.log(updatedCart);
        localStorage.setItem(`cartElem`, JSON.stringify(updatedCart));
        
    }
    if (existing) {
        return false;
    }
    price = Number(Math.floor(price * quantity));
    quantity = Number(quantity);
    console.log(price, quantity);

    LSarr.push({id,quantity,price});

    localStorage.setItem(`cartElem`, JSON.stringify(LSarr));

    updatingCart(LSarr)
}