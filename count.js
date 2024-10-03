export const countAmount = (e,id,stock) =>{

    const countFun = document.querySelector(`#card${id}`);
    let counting = countFun.querySelector(`.counting`);
    let quantity = parseInt(counting.getAttribute(`data-quantity`)) || 1;
    let increaseTrue = e.target.classList.contains(`increase`);
    let decreaseTrue = e.target.classList.contains(`decrease`);

    if (increaseTrue === true) {
        if (quantity < stock) {
            quantity += 1;
        } else if (quantity === stock) {
            quantity = stock
        }
    }

    if (decreaseTrue === true) {
        if (quantity > 1) {
            quantity -= 1;
        }
    }

    
    counting.innerText = quantity;
    counting.setAttribute(`data-quantity`, quantity);
    return quantity;
}