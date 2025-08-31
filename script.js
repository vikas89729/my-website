document.addEventListener("DOMContentLoaded", function () {
    let allbtns = document.querySelectorAll('.btn,.btn1');
      console.log("Total buttons found:", allbtns.length);
    allbtns.forEach((button) => {
        button.addEventListener('click', () => {
            alert("your order is sussecfully conform:");
        });
    });

});

    let seeBtn = document.querySelector('.see-btn');
    console.log("See All button found:", seeBtn);
    seeBtn.addEventListener('click', () => {
        alert("Redirecting to all collection page...");
    });
    document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");  
    form.addEventListener("submit", function(event) {
      event.preventDefault(); 

    
      const name = document.querySelector("input[type='text']").value.trim();
      const email = document.querySelector("input[type='email']").value.trim();
      const message = document.querySelector("textarea").value.trim();

      
      if (name && email && message) {
        alert("Your form is filled successfully!");
        form.reset(); 
      } else {
        alert("Please fill all fields before submitting.");
      }
    });
  });
  
document.addEventListener("DOMContentLoaded", () => {
  const hamburger = document.querySelector(".hamburger");
  const nav = document.querySelector("header nav");

  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active");
  });
});





