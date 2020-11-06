// globals
let selectedGlaze; // selected glaze DIV element (not string-- a node)
let selectedQuantity; // selected quantity DIV element (not int-- a node)
let addToCart;
let currQty = 0; //curr qty selected (INT)
let totalQty;

// sets totalQty if nothing currently exists
if(!localStorage.getItem("qty")){
  totalQty = 0;
}

// turns totalQty into int if string (aka when page is reloaded)
else if (!Number.isInteger(localStorage.getItem("qty"))){
  totalQty = parseInt(localStorage.getItem("qty")); // total qty counter
}

// sets totalQty to qty if already int
else if (Number.isInteger(localStorage.getItem("qty"))){
  totalQty = localStorage.getItem("qty"); // total qty counter
}

let numItems;
let cartArr = localStorage.getItem("cartItemsArr"); // total qty counter

function selectGlaze(curr){
  // if a glaze is already selected, reset background color (deselect it visually)
  if(selectedGlaze){
    selectedGlaze.style.backgroundColor="#fff";
  }
  curr.style.backgroundColor="#eef8ff";
  selectedGlaze = curr;

  //change image
  updateImage(curr);

  if(selectedQuantity && !addToCart){
    triggerAddToCart();
  }
}

function getProdName(curr){
  let rawName = curr.parentElement.parentElement.getElementsByTagName("h1")[0].innerHTML.trim();
  
  if(rawName.includes("Original")){
    currName = "orig";
  }

  else if(rawName.includes("Gluten")){
    currName = "gf";
  }

  else if(rawName.includes("Pumpkin")){
    currName = "ps";
  }

  else if(rawName.includes("Caramel")){
    currName = "cp";
  }

  else if(rawName.includes("Walnut")){
    currName = "wt";
  }

  else if(rawName.includes("Blackberry")){
    currName = "bkb";
  }

  return currName;
}

function selectQuantity(curr){
  // if a glaze is already selected, reset background color (deselect it visually)
  if(selectedQuantity){
    selectedQuantity.style.backgroundColor="#ffffff";
  }
  curr.style.backgroundColor="#eef8ff";
  selectedQuantity = curr;

  currQty = parseInt(curr.innerHTML);

  if(selectedGlaze && !addToCart){
    triggerAddToCart();
  }
}

function triggerAddToCart(){
  if (selectedGlaze && selectedQuantity){
    document.getElementById('addToCart').style.backgroundColor="#FBF19A";
    document.getElementById('addToCart').style.cursor="pointer";
    document.getElementById('addToCart').disabled=false;

    addToCart = true;
  }
}

function addCart(){
  totalQty += currQty;
  localStorage.setItem("qty", totalQty);
  document.getElementById("numItems").innerHTML = localStorage.getItem("qty") + "<br>";

  pushToCartArr();
}

function pushToCartArr(){
  let currCart; //whats currently in cart before new item added
  let prodName = document.getElementById("container").getElementsByTagName("h1")[0].innerHTML.trim();
  let newItem = [prodName, currQty, selectedGlaze.innerHTML.trim()];

  // if a product already array exists in cart
  if(localStorage.getItem("cart")){
    currCart = JSON.parse(localStorage.getItem("cart"));
    currCart.push(newItem);
    localStorage.setItem("cart", JSON.stringify(currCart));
  }
  else{
    localStorage.setItem("cart", JSON.stringify([newItem]));
  }

  console.log("After Pushing to Cart: ", JSON.parse(localStorage.getItem("cart")));
}

// update image when glaze changes
function updateImage(curr){
  let glaze = curr.innerHTML.trim();
  let name = getProdName(curr);

  //original cinnamon
  if(name == "orig"){
    switch(glaze) {
      case "Vanilla-Milk":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf_vanillamilk.png"
        break;
      case "Sugar-Milk":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf_sugarmilk.png"
        break;
      case "Double-Chocolate":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf_doublechocolate.png"
        break;
      case "None":
        document.getElementById("bunbun-photo").src="assets/bun-buns/originalcinnamon.jpg"
        break;
    }
  }

  // gluten free
  if(name == "gf"){
    switch(glaze) {
      case "Vanilla-Milk":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf_vanillamilk.png"
        break;
      case "Sugar-Milk":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf_sugarmilk.png"
        break;
      case "Double-Chocolate":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf_doublechocolate.png"
        break;
      case "None":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf.jpg"
        break;
    }
  }

  // pumpkin spice
  else if(name == "ps"){
    switch(glaze) {
      case "Vanilla-Milk":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf_vanillamilk.png"
        break;
      case "Sugar-Milk":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf_sugarmilk.png"
        break;
      case "Double-Chocolate":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf_doublechocolate.png"
        break;
      case "None":
        document.getElementById("bunbun-photo").src="assets/bun-buns/pumpkinspice.jpg"
        break;
    }
  }

  // caramel pecan
  else if(name == "cp"){
    switch(glaze) {
      case "Vanilla-Milk":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf_vanillamilk.png"
        break;
      case "Sugar-Milk":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf_sugarmilk.png"
        break;
      case "Double-Chocolate":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf_doublechocolate.png"
        break;
      case "None":
        document.getElementById("bunbun-photo").src="assets/bun-buns/caramelpecan.jpg"
        break;
    }
  }

  // walnut
  else if(name == "wt"){
    switch(glaze) {
      case "Vanilla-Milk":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf_vanillamilk.png"
        break;
      case "Sugar-Milk":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf_sugarmilk.png"
        break;
      case "Double-Chocolate":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf_doublechocolate.png"
        break;
      case "None":
        document.getElementById("bunbun-photo").src="assets/bun-buns/walnut.jpg"
        break;
    }
  }

  // blackberry
  else if(name == "bkb"){
    switch(glaze) {
      case "Vanilla-Milk":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf_vanillamilk.png"
        break;
      case "Sugar-Milk":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf_sugarmilk.png"
        break;
      case "Double-Chocolate":
        document.getElementById("bunbun-photo").src="assets/bun-buns/gf_doublechocolate.png"
        break;
      case "None":
        document.getElementById("bunbun-photo").src="assets/bun-buns/blackberry.jpg"
        break;
    }
  }
}