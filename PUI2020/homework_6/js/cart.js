// globals
let TAXRATE = 0.07;
let SHIPPINGFEE = 5.00;

function getCurrProductName(curr) {
    let par = curr.parentElement.parentElement
    for (var i = 0; i < par.childNodes.length; i++) {
        if (par.childNodes[i].className == "prod-name") {
            return par.childNodes[i].innerHTML.trim();
        }
    }
    // If none found (should never occur)
    return null;
}

function setBasePrice(prod) {
    if (prod == "Original Cinnamon Bun Bun" || prod == "Caramel Pecan Bun Bun" || prod == "Walnut Bun Bun" || prod == "Blackberry Bun Bun") {
        return price = 2.5
    }
    else if (prod == "Gluten-Free Cinnamon Bun Bun") {
        return price = 3.5
    }
    // if pumpkin spice bun bun
    else {
        return price = 3.0
    }
}

function updateItemPrice(curr) {
    let prodName = getCurrProductName(curr);
    let basePrice = setBasePrice(prodName);
    let quantity = curr.value;

    //find span tag for price
    let spn = null;
    let par = curr.parentElement.parentElement;
    for (var i = 0; i < par.childNodes.length; i++) {
        if (par.childNodes[i].className == "item-price") {
            spn = par.childNodes[i];
        }
    }

    spn.innerHTML = "$" + (Math.round(basePrice * quantity * 100) / 100).toFixed(2);

    calculateTotals();
}

function calculateTotals() {
    let subtotal = 0.00;
    let tax = 0.00;
    let total = 0.00;

    priceDivList = document.getElementsByClassName("item-price");
    for (var i = 0; i < priceDivList.length; i++) {
        subtotal += parseFloat(priceDivList[i].innerHTML.trim().slice(1, -1));
    }

    tax = subtotal * TAXRATE;

    let unroundedTotal = subtotal + tax + SHIPPINGFEE;

    updateTotalsText(subtotal, tax, unroundedTotal);
}

function updateTotalsText(subtotal, tax, total) {
    // Set subtotal
    let subtotalText = document.getElementsByClassName("subtotal")[0].childNodes[3];
    subtotalText.innerHTML = "$" + (Math.round(subtotal * 100) / 100).toFixed(2);

    // Set tax
    let taxText = document.getElementsByClassName("tax")[0].childNodes[3];
    taxText.innerHTML = "$" + (Math.round(tax * 100) / 100).toFixed(2);

    // Set total
    let totalText = document.getElementsByClassName("total")[0].childNodes[3];
    totalText.innerHTML = "$" + (Math.round(total * 100) / 100).toFixed(2);
}

function deleteItem(curr) {
    let itemContainer = curr.parentElement.parentElement;
    itemContainer.remove();
}

function populateOrdersTab() {
    let container = document.getElementById("items-wrapper");
    // for item in localStorage cart
    // create item div
}

/*
<div class="item orig-cinna">
    <span class="first-line">
        <span class="prod-name"></span>
        <span class="qty-ops">SELECT ELEMENT</span>
        <span class="item-price"></span>
    </span>

    <span class="second-line">
        <span class="glaze-ops">SELECT ELEMENT</span>
        <span class="remove" onclick="deleteItem(this)">Remove</span>
    </span>
</div>
*/