export const showingPopup = (operation, id) =>{
    let toast = document.createElement(`div`);
    toast.classList.add(`toasting`);

    if (operation === `add`) {
        toast.textContent = `Product ${id} added to the cart`;
    } else{
        toast.textContent = `Product ${id} removed from the cart`;
    }

    document.body.appendChild(toast);

    // this popup will be removed in 2 second;
    setTimeout(() =>{
        toast.remove()
    },2000);
}