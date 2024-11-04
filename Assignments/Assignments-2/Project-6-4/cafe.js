const order = document.querySelector("#order");
const menuList = document.querySelector("#menu-list");
const pictures = menuList.children;
const placeOrderButton = document.querySelector("#place_order");
const clearOrderButton = document.querySelector("#clear_order");
const totalPara = document.querySelector("#total");
let totalValue = 0;

document.addEventListener("DOMContentLoaded", () => {


    const espresso = pictures[0].lastChild.lastChild;
    const latte = pictures[1].lastChild.lastChild;
    const cappuccino = pictures[2].lastChild.lastChild;
    const coffee = pictures[3].lastChild.lastChild;
    const biscotti = pictures[4].lastChild.lastChild;
    const scone = pictures[5].lastChild.lastChild;

    addMouseOver(espresso, "./images/espresso_info.jpg");
    addMouseOver(latte, "./images/latte_info.jpg");
    addMouseOver(cappuccino, "./images/cappuccino_info.jpg");
    addMouseOver(coffee, "./images/coffee_info.jpg");
    addMouseOver(biscotti, "./images/biscotti_info.jpg");
    addMouseOver(scone, "./images/scone_info.jpg")
;
    addMouseOut(espresso, "./images/espresso.jpg");
    addMouseOut(latte, "./images/latte.jpg");
    addMouseOut(cappuccino, "./images/cappuccino.jpg");
    addMouseOut(coffee, "./images/coffee.jpg");
    addMouseOut(biscotti, "./images/biscotti.jpg");
    addMouseOut(scone, "./images/scone.jpg");
    
    addOrder(espresso, "Espresso" , 3.25);
    addOrder(latte, "Latte", 4.00);
    addOrder(cappuccino, "Cappuccino", 3.45);
    addOrder(coffee, "Coffee", 2.00);
    addOrder(biscotti, "Biscotti", 2.50);
    addOrder(scone, "Scone", 2.95);

    placeOrder();
    clearOrder()

    
}); 

function addMouseOver(element, picture){
    element.addEventListener("mouseover", () => {
        element.src = picture;
    });
}
function addMouseOut(element, picture){
    element.addEventListener("mouseout", () => {
        element.src = picture;
    });
}

function addOrder(element, itemName, price){
    element.addEventListener("click", () => {
        const newOrder = document.createElement("option");
        newOrder.textContent = `$${price.toFixed(2)} - ${itemName}`;
        order.appendChild(newOrder);
        
        totalValue += price
        displaTotal();
    });
}

function displaTotal(){
    totalPara.textContent = `Total: $${totalValue.toFixed(2)}`
}

function placeOrder(){
    placeOrderButton.addEventListener("click", () => {
        window.location.href = "./checkout.html";
    })
}

function clearOrder(){
    clearOrderButton.addEventListener("click", () => {
        totalValue = 0;
        order.replaceChildren();
        totalPara.textContent = "";
    })
}