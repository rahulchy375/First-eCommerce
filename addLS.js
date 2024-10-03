import { updatingCart } from "./updatingCart";

export const addLS = () =>{
    let gettingElem = localStorage.getItem(`cartElem`);
    if (!gettingElem) {
        return [];
    }
    gettingElem = JSON.parse(gettingElem);
    // console.log(gettingElem);
    updatingCart(gettingElem);
    return gettingElem;
}