// Toggle side menu
function toggleMenu() {
  const menu = document.getElementById('side-menu');
  menu.style.left = menu.style.left === '0px' ? '-250px' : '0px';
}

function closeMenu() {
  document.getElementById('side-menu').style.left = '-250px';
}

// Cart logic
let cartCount = 0;

function addToCart(item) {
  cartCount++;
  document.getElementById('cart-count').innerText = cartCount;
  alert(`${item} added to cart!`);
}

function viewCart() {
  alert(`You have ${cartCount} item(s) in your cart.`);
}
