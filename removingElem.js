import { addLS } from "./addLS";
import { showingPopup } from "./showingPopup";
import { updatingCart } from "./updatingCart";

export const removingElem = (id) =>{
    let LSProduct = addLS();
    LSProduct = LSProduct.filter((curProd) => curProd.id !== id);
    updatingCart(LSProduct);
    
    localStorage.setItem(`cartElem`, JSON.stringify(LSProduct));

    let removeDiv = document.querySelector(`#card${id}`);
    if (removeDiv) {
        removeDiv.remove();
        showingPopup(`delete`, id);
    }

    console.log(showingPopup(`delete`, id));
}