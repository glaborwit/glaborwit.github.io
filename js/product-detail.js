// globals
let selectedGlaze;
let selectedQuantity;

function selectGlaze(curr){
  // if a glaze is already selected, reset background color (deselect it visually)
  if(selectedGlaze){
    selectedGlaze.style.backgroundColor="#ffffff";
  }
  curr.style.backgroundColor="#FBF19A";
  selectedGlaze = curr;
}

function selectQuantity(curr){
  // if a glaze is already selected, reset background color (deselect it visually)
  if(selectedQuantity){
    selectedQuantity.style.backgroundColor="#ffffff";
  }
  curr.style.backgroundColor="#FBF19A";
  selectedQuantity = curr;
}
