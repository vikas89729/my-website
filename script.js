document.addEventListener("DOMContentLoaded", () => {


  //   const hamburger = document.querySelector(".hamburger");
  //   const nav = document.querySelector("header .nav");

  //   if (hamburger && nav) {
  //     hamburger.addEventListener("click", () => {
  //       nav.classList.toggle("active");
  //     });
  //   }


  //   let allBtns = document.querySelectorAll(".btn, .btn1, .shop now");
  //   allBtns.forEach(btn => {
  //     btn.addEventListener("click", () => {
  //       alert("Welcome to our shop 💖");
  //     });
  //   });


  //   let seeBtn = document.querySelector(".see-btn");
  //   if (seeBtn) {
  //     seeBtn.addEventListener("click", () => {
  //       alert("Redirecting to all collection page...");
  //     });
  //   }


  //   const form = document.querySelector(".contact-form");
  //   if (form) {
  //     form.addEventListener("submit", function(event) {
  //       event.preventDefault();
  //       const name = form.querySelector("input[type='text']").value.trim();
  //       const email = form.querySelector("input[type='email']").value.trim();
  //       const message = form.querySelector("textarea").value.trim();

  //       if (name && email && message) {
  //         alert("Your form is filled successfully!");
  //         form.reset();
  //       } else {
  //         alert("Please fill all fields before submitting.");
  //       }
  //     });
  //   }


  //   const cartItems = document.getElementById("cart-items");
  //   const cartTotal = document.getElementById("cart-total");
  //   let total = 0;

  //   const addCartBtns = document.querySelectorAll(".add-cart ");
  //   addCartBtns.forEach(btn => {
  //     btn.addEventListener("click", () => {
  //       const name = btn.dataset.name;
  //       const price = parseInt(btn.dataset.price);

  //       const li = document.createElement("li");
  //       li.textContent = `${name} - ₹${price}`;
  //       cartItems.appendChild(li);

  //       total += price;
  //       cartTotal.textContent = total;
  //     });
  //   });

});
// document.addEventListener("DOMContentLoaded", () => {
//   const productDetail = document.getElementById("product-detail");
//   const detailImg = document.getElementById("detail-img");
//   const detailName = document.getElementById("detail-name");
//   const detailPrice = document.getElementById("detail-price");
//   const detailDescription = document.getElementById("detail-description");
//   const closeBtn = document.querySelector(".close-btn");

//   // For demo, add simple descriptions
//   const productDescriptions = {
//     "Men's T-Shirt": "Comfortable cotton t-shirt, perfect for casual wear.",
//     "Women’s Kurti": "Elegant kurti made from soft fabrics, stylish and comfortable.",
//     "Hoodie": "Warm hoodie, ideal for winter and casual outings.",

//   };

//   // All product cards
//   const productCards = document.querySelectorAll(".cl-card");

//   productCards.forEach(card => {
//     card.addEventListener("click", () => {
//       const name = card.querySelector("h3").innerText;
//       const img = card.querySelector("img").src;
//       const price = card.querySelector(".price").innerText;

//       // Fill overlay content
//       detailName.innerText = name;
//       detailImg.src = img;
//       detailPrice.innerText = price;
//       detailDescription.innerText = productDescriptions[name] || "No description yet.";

//       // Show overlay
//       productDetail.style.display = "flex";
//     });
//   });

//   // Close button
//   closeBtn.addEventListener("click", () => {
//     productDetail.style.display = "none";
//   });

//   // Optional: click outside to close
//   productDetail.addEventListener("click", e => {
//     if (e.target === productDetail) {
//       productDetail.style.display = "none";
//     }
//   });
// });
// document.querySelector("product-detail-content")
// let btn=document.querySelector(".buy-now")
// btn.addEventListener("click",()=>{
//   alert("This is only for demo")
// })
let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector("header .nav");
if (hamburger && nav) {
  hamburger.addEventListener("click", () => {
    nav.classList.toggle("active")
  });

} document.addEventListener("DOMContentLoaded", () => {
  let allbtn = document.querySelectorAll(".btn1");

  allbtn.forEach(element => {
    element.addEventListener("click", () => {
      alert("you are in buy now section");
    });
  });
});
document.addEventListener("DOMContentLoaded", ()=>{
let cartitem=document.getElementById("cart-items");
let cartTotal=document.getElementById("cart-total")
let total=0

let addcartbtns=document.querySelectorAll(".add-cart");
addcartbtns.forEach(btn=>{
  btn.addEventListener("click",()=>{
   let name=btn.dataset.name;
   let price=parseInt(btn.dataset.price);
   let li=document.createElement("li");
   li.textContent=`${name} - ₹${price}`
cartitem.appendChild(li)
total +=price;
cartTotal.textContent=total;
  });
});
});


document.addEventListener("DOMContentLoaded", () => {
  const items = document.querySelectorAll(".cloth-item");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  items.forEach(item => {
    observer.observe(item);
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".cl-card");

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      }
    });
  }, { threshold: 0.2 });

  cards.forEach(card => observer.observe(card));
});
