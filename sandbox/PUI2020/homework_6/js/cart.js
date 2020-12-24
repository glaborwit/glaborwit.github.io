// globals
let TAXRATE = 0.07;
let SHIPPINGFEE = 5.00;
let currCart = JSON.parse(localStorage.getItem("cart"));

function getCurrProductName(curr) {
    let par = curr.parentElement.parentElement;
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

function updateCartGlaze(curr){
    let newGlaze = curr.value;

    // update cart in local storage to match new qty
    // find index of current item in array
    let itemsList = document.getElementById('items-wrapper').getElementsByClassName('item')
    for(var i = 0; i < itemsList.length; i++){
        if(itemsList[i] == curr.parentElement.parentElement.parentElement){
            currI = i;
            break
        }
    }

    let newCart = currCart;
    newCart[currI][2] = newGlaze; // change qty in cart for local storage
    localStorage.setItem("cart", JSON.stringify(newCart));
}

function updateCartQty(curr) {
    let quantity = curr.value;
    
    // update cart in local storage to match new qty
    let itemsList = document.getElementById('items-wrapper').getElementsByClassName('item')
    for(var i = 0; i < itemsList.length; i++){
        if(itemsList[i] == curr.parentElement.parentElement.parentElement){
            currI = i;
            break
        }
    }
    let newCart = currCart;
    newCart[currI][1] = parseInt(quantity); // change qty in cart for local storage
    localStorage.setItem("cart", JSON.stringify(newCart));

    // update and set qty in cart icon
    let newTotalQty = 0;
    for (var i = 0; i < newCart.length; i++){
        newTotalQty += newCart[i][1];
    }
    // update qty in cart
    localStorage.setItem("qty", newTotalQty);
    // set cart qty in icon
    document.getElementById("numItems").innerHTML = localStorage.getItem("qty") + "<br>";

    populateOrdersTab();
}

// calculates totals for pricing in second box (subtotal, tax, shipping fee, totals)
    // note: independant of other functions, can use to populate/update totals box
function calculateTotals() {
    let subtotal = 0.00;
    let tax = 0.00;

    priceDivList = document.getElementsByClassName("item-price");
    for (var i = 0; i < priceDivList.length; i++) {
        subtotal += parseFloat(priceDivList[i].innerHTML.trim().slice(1, -1));
    }

    tax = subtotal * TAXRATE;

    let unroundedTotal = subtotal + tax + SHIPPINGFEE;

    updateTotalsText(subtotal, tax, unroundedTotal);
}

// helper function for calculateTotals()
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

function deleteItem(curr, cart, i) {
    let newCartQty = (localStorage.getItem("qty") - cart[i][1]);
    curr.remove();
    cart.splice(i, 1);

    // update qty in cart now that item removed
    localStorage.setItem("qty", newCartQty);
    // set cart qty in icon
    document.getElementById("numItems").innerHTML = localStorage.getItem("qty") + "<br>";

    // update cart in local storage
    localStorage.setItem("cart", JSON.stringify(cart));

    populateOrdersTab();
    
}

function selectedGlazeDropdownGenerator(glaze){
    if (glaze == "None"){
        return `Glaze: 
            <select name="glaze" id="glazing" onchange='updateCartGlaze(this)'>
                <option selected value="None">None</option>
                <option value="Vanilla-Milk">Vanilla-Milk</option>
                <option value="Sugar-Milk">Sugar-Milk</option>
                <option value="Double-Chocolate">Double-Chocolate</option>
            </select>`
    }
    else if (glaze == "Vanilla-Milk"){
        return `Glaze: 
            <select name="glaze" id="glazing" onchange='updateCartGlaze(this)'>
                <option value="None">None</option>
                <option selected value="Vanilla-Milk">Vanilla-Milk</option>
                <option value="Sugar-Milk">Sugar-Milk</option>
                <option value="Double-Chocolate">Double-Chocolate</option>
            </select>`
    }
    else if (glaze == "Sugar-Milk"){
        return `Glaze: 
            <select name="glaze" id="glazing" onchange='updateCartGlaze(this)'>
                <option value="None">None</option>
                <option value="Vanilla-Milk">Vanilla-Milk</option>
                <option selected value="Sugar-Milk">Sugar-Milk</option>
                <option value="Double-Chocolate">Double-Chocolate</option>
            </select>`
    }
    else {
        return `Glaze: 
            <select name="glaze" id="glazing" onchange='updateCartGlaze(this)'>
                <option value="None">None</option>
                <option value="Vanilla-Milk">Vanilla-Milk</option>
                <option value="Sugar-Milk">Sugar-Milk</option>
                <option selected value="Double-Chocolate">Double-Chocolate</option>
            </select>`
    }
}

function selectedQtyDropdownGenerator(q){
    if (q == 1){
        return `Qty: 
        <select name='quantity' id='quantity' onchange='updateCartQty(this)'>
          <option selected value='1'>1</option>
          <option value='3'>3</option>
          <option value='6'>6</option>
          <option value='12'>12</option>
        </select>
        `
    }
    else if (q == 3){
        return `Qty: 
        <select name='quantity' id='quantity' onchange='updateCartQty(this)'>
          <option value='1'>1</option>
          <option selected value='3'>3</option>
          <option value='6'>6</option>
          <option value='12'>12</option>
        </select>
        `
    }
    else if (q == 6){
        return `Qty: 
        <select name='quantity' id='quantity' onchange='updateCartQty(this)'>
          <option value='1'>1</option>
          <option value='3'>3</option>
          <option selected value='6'>6</option>
          <option value='12'>12</option>
        </select>
        `
    }
    else {
        return `Qty: 
        <select name='quantity' id='quantity' onchange='updateCartQty(this)'>
          <option value='1'>1</option>
          <option value='3'>3</option>
          <option value='6'>6</option>
          <option selected value='12'>12</option>
        </select>
        `
    }
}

function populateOrdersTab() {
    let container = document.getElementById("items-wrapper");

    // check if items already in orders tab
        // if so, clear it and recreate container div "items-wrapper"
    if (container) {
        container.innerHTML = "<h1>Your Order</h1>"; // clear it
    }

    for (var i = 0; i < currCart.length; i++) {
        // create eavch item's individual container
        let indivItemDiv = document.createElement('DIV');
        indivItemDiv.setAttribute('class', 'item');

        // BEGIN FIRST-LINE SPAN
        // Create "first-line" span container
        let spanFirstLine = document.createElement('SPAN');
        spanFirstLine.setAttribute('class', 'first-line');

        // Create spans inside first-line span for product name, qty, and price
        // Product name
        let spanProdName = document.createElement('SPAN');
        spanProdName.setAttribute('class', 'prod-name');
        spanProdName.innerHTML = currCart[i][0];
        // Quantity
        let spanQty = document.createElement('SPAN');
        spanQty.setAttribute('class', 'qty-ops');
        spanQty.innerHTML = selectedQtyDropdownGenerator(currCart[i][1]);
        // Price
        let spanPrice = document.createElement('SPAN');
        spanPrice.setAttribute('class', 'item-price');
        spanPrice.innerHTML = "$" + (Math.round(setBasePrice(currCart[i][0]) * currCart[i][1] * 100) / 100).toFixed(2);

        // Add inner spans to first line span
        spanFirstLine.appendChild(spanProdName);
        spanFirstLine.appendChild(spanQty);
        spanFirstLine.appendChild(spanPrice);
        // END FIRST-LINE SPAN


        // BEGIN SECOND-LINE SPAN
        // Create "second-line" span container
        let spanSecondLine = document.createElement('SPAN');
        spanSecondLine.setAttribute('class', 'second-line');

        // Create spans inside second-line span for glaze options and remove button
        // Glaze options
        let spanGlaze = document.createElement('SPAN');
        spanGlaze.setAttribute('class', 'glaze-ops');
        spanGlaze.innerHTML = selectedGlazeDropdownGenerator(currCart[i][2]);
        // "Remove" button
        let spanRemove = document.createElement('SPAN');
        spanRemove.setAttribute('class', 'remove');
        spanRemove.innerHTML = "Remove";
        spanRemove.onclick = ()=> {deleteItem(indivItemDiv, currCart, i-1)};

        // Add inner spans to first line span
        spanSecondLine.appendChild(spanGlaze);
        spanSecondLine.appendChild(spanRemove);
        // END SECOND-LINE SPAN


        // Add both spans to individual item container
        indivItemDiv.appendChild(spanFirstLine);
        indivItemDiv.appendChild(spanSecondLine);
        // Add inividual item to items wrapper div
        container.appendChild(indivItemDiv);
    }
    calculateTotals();
}