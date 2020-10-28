// globals
let selectedDot;

function dotNav(curr){
    // reset background color of already selected dot (aka deselect it visually)
    if (!selectedDot){
        selectedDot=document.getElementsByClassName("dot active")[0];
    }

    selectedDot.classList.remove("active");
    // makes selected button active
    selectedDot = curr;
    selectedDot.classList.add('active');

    changeSlide(selectedDot);
}

function changeSlide(dot){
    let pic = dot.classList[0];

    // change to image 1
    if (pic==="img1"){
        document.getElementById("slideshow-pic").src = "assets/bun-buns/originalcinnamon.jpg";
        document.getElementById("bun-bun-name").innerHTML="<a alt='photo of original cinnamon bun bun' href='original-cinnamon.html'>Original Cinnamon Bun Bun</a>";
        document.getElementById("tagline").innerHTML="Go back to the basics with our best-selling bun bun!";

    }
    // change to image 2
    if (pic==="img2"){
        document.getElementById("slideshow-pic").src = "assets/bun-buns/walnut.jpg";
        document.getElementById("bun-bun-name").innerHTML="<a alt='photo of walnut bun bun' href='walnut.html'>Walnut Bun Bun</a>";
        document.getElementById("tagline").innerHTML="Another popular flavor, walnut, gives you a crunch in every bite.";

    }
    // change to image 3
    if (pic==="img3"){
        document.getElementById("slideshow-pic").src = "assets/bun-buns/gf.jpg";
        document.getElementById("bun-bun-name").innerHTML="<a alt='photo of gluten-free cinnamon bun bun' href='glutenfree-cinnamon.html'>Gluten-Free Cinnamon Bun Bun</a>";
        document.getElementById("tagline").innerHTML="Now everyone can enjoy our buns with our gluten-free rolls!";
    }
    // change to image 4
    if (pic==="img4"){
        document.getElementById("slideshow-pic").src = "assets/bun-buns/caramelpecan.jpg";
        document.getElementById("bun-bun-name").innerHTML="<a alt='photo of caramel pecan bun bun' href='caramelpecan.html'>Caramel Pecan Bun Bun</a>";
        document.getElementById("tagline").innerHTML="Both sweet and nutty, you'll be craving this caramel treat.";
    }
}
