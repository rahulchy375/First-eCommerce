import { addLS } from "./addLS";
import product from "./api/product.json";
import { calculatingTotal } from "./calculatingTotal";
import { cartPrice } from "./cartPrice";
import { increDecre } from "./increDecre";
import { removingElem } from "./removingElem";

let curProducts = addLS();

let filterProduct = product.filter((curProd) =>{
    return curProducts.some((curElem) => curElem.id === curProd.id);
})

console.log(filterProduct);

let cartProductContainer = document.querySelector(`.cartProductContainer`);
let cartProductTemplate = document.querySelector(`#cartProductTemplate`);

const showingProduct = () =>{
    filterProduct.forEach((curProd) =>{
        const {category, id, image, name, price,stock} = curProd;
        let cartCloning = document.importNode(cartProductTemplate.content, true);

        let LSData =  cartPrice(id, price);

        cartCloning.querySelector(`#cardValue`).setAttribute("id",`card${id}`);
        cartCloning.querySelector(`.category`).textContent = category;
        cartCloning.querySelector(`.cartImg`).src =  image;
        cartCloning.querySelector(`.eCom_heading`).textContent = name;
        cartCloning.querySelector(`.price`).textContent = LSData.price;
        cartCloning.querySelector(`.counting`).textContent = LSData.quantity;

        cartCloning.querySelector(`.removeBtn`).addEventListener(`click`, () => removingElem(id));

        cartCloning.querySelector(`.countBox`).addEventListener(`click`, (e) =>{
            increDecre(id, e, price, stock);
        });

        cartProductContainer.append(cartCloning);
    })
}

showingProduct();

// calculating total:

calculatingTotal();