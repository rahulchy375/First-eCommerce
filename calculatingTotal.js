import { addLS } from "./addLS";

 export const calculatingTotal = () =>{

    let SubTotal = document.querySelector(`.SubTotal`);
    let finalTotal = document.querySelector(`.finalTotal`);
    let curProducts = addLS();

    let LSproductPrice = curProducts.reduce((accm, curElem) =>{
        let LSPrice = curElem.price || 0;
        return accm + LSPrice;
    },0);

    console.log(LSproductPrice);

    SubTotal.textContent = `$${LSproductPrice}`;
    finalTotal.textContent = `$${LSproductPrice + (LSproductPrice / 100*5)}`;
 }