import { addingCart } from "./addingCart";
import { countAmount } from "./count";

// import { counting } from "./counting";

let productContainer = document.querySelector(`.productContainer`);
let productTemplate = document.querySelector(`#productTemplate`);

export const addingProduct = (product) =>{
    if (!product) {
        return false;
    }

    product.forEach(curElem => {
        const {id,name,image,price,stock,description,category,} = curElem;
        const cloneProduct = document.importNode(productTemplate.content, true);

        cloneProduct.querySelector(`#cardValue`).setAttribute("id",`card${id}`);
        cloneProduct.querySelector(`.eCom_heading`).textContent = name;
        cloneProduct.querySelector(`.category`).textContent = category;
        cloneProduct.querySelector(`.price`).textContent = `$${price}`;
        cloneProduct.querySelector(`.expectedPrice`).textContent = `$${Math.floor(price*3)}`;
        cloneProduct.querySelector(`.unit`).textContent = stock;
        cloneProduct.querySelector(`.eCom_para`).textContent = description;
        cloneProduct.querySelector(`.product_img`).src = image;


        cloneProduct.querySelector(`.countBox`).addEventListener(`click`, (e) =>{
            countAmount(e,id,stock);
        })
        cloneProduct.querySelector(`.cart_btn`).addEventListener(`click`, (e) =>{
            addingCart(e,id,stock);
        })
        productContainer.append(cloneProduct);
    });
}   