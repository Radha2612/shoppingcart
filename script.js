let cartItems = [];

function addToCart(name, price) {
  if (cartItems.length < 5) {
    cartItems.push({ name, price });
    updateCart();
  } else {
    alert("You can only add up to 5 products to the cart.");
  }
}

function updateCart() {
  const cartList = document.getElementById("cart-list");
  cartList.innerHTML = "";
  cartItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
    cartList.appendChild(li);
  });
}

function toggleCart() {
  const cartContainer = document.getElementById("cart-container");
  if (cartContainer.style.display === "block") {
    cartContainer.style.display = "none";
  } else {
    cartContainer.style.display = "block";
  }
}
