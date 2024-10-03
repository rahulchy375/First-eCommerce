import { addLS } from "./addLS"

export const cartPrice = (id,price) =>{
    let localData = addLS();
    let existing = localData.find((curProd) => curProd.id === id);
    let quantity = 1;

    if (existing) {
        quantity = existing.quantity;
        price = existing.price;
    }

    return {quantity, price};
}