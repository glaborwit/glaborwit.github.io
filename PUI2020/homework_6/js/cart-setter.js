function setCart(){
    if(localStorage.getItem("qty") > 0){
      document.getElementById("numItems").innerHTML = localStorage.getItem("qty") + "<br>";
    }
  }