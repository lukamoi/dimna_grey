document.addEventListener('DOMContentLoaded', function() {
    // Burger Button
    const burgerButton = document.getElementById("burger");
      const nav = document.querySelector("nav");
      const brand = document.getElementById("brand");
      burgerButton.addEventListener(
         'click', 
         function () {
            this.classList.toggle("change");
            brand.classList.toggle("inactive");
            nav.classList.toggle("dropdown");
            [...nav.children].forEach(e => e.style.padding = "1em")
         });
    // Toggle Theme
    
});