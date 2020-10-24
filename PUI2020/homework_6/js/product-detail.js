// globals
let selectedGlaze;
let selectedQuantity;
let addToCart;
let currQty = 0; //curr qty selected
let totalQty = 0; // total qty counter
let numItems;

function selectGlaze(curr){
  // if a glaze is already selected, reset background color (deselect it visually)
  if(selectedGlaze){
    selectedGlaze.style.backgroundColor="#fff";
  }
  curr.style.backgroundColor="#eef8ff";
  selectedGlaze = curr;

  if(selectedQuantity && !addToCart){
    triggerAddToCart();
  }
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
  document.getElementById("numItems").innerHTML = totalQty + "<br>";
}
