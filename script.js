// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Toggle the mobile menu
    const menuIcon = document.querySelector('.menu');
    const navLinks = document.querySelector('nav ul');
  
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
  
    // Handle search functionality
    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-btn');
  
    searchButton.addEventListener('click', () => {
        const query = searchBar.value;
        if (query) {
            // Perform the search (this is just a placeholder, you'd need to implement the search logic)
            alert(`Searching for: ${query}`);
        } else {
            alert('Please enter a search term.');
        }
    });
  
    // Handle contact form submission
    const contactForm = document.querySelector('#contact form');
  
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.message.value;
  
        if (name && email && message) {
            // Handle form submission (e.g., send data to server)
            alert('Thank you for your message!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
  });
  
  
  //adding items to cart//
  
  // script.js
  
  document.addEventListener('DOMContentLoaded', () => {
      const addToCartButtons = document.querySelectorAll('.btn');
  
      addToCartButtons.forEach(button => {
          button.addEventListener('click', addToCart);
      });
  
      function addToCart(event) {
          event.preventDefault();
          const productCard = event.target.closest('.img');
          const productName = productCard.querySelector('h3').textContent;
          const productPrice = productCard.querySelector('p').textContent;
  
          const cartItem = {
              name: productName,
              price: productPrice
          };
  
          // Save cart item to localStorage
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
  
          // Redirect to cart page
          window.location.href = 'cart.html';
      }
  
      // Display cart items on cart page
      const cartItemsContainer = document.getElementById('cart-items');
  
      function displayCartItems() {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
          if (cart.length === 0) {
              cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
              return;
          }
  
          let cartHTML = '';
          cart.forEach(item => {
              cartHTML += `
                  <div class="cart-item">
                      <h3>${item.name}</h3>
                      <p>${item.price}</p>
                  </div>
              `;
          });
  
          cartItemsContainer.innerHTML = cartHTML;
      }
  
      displayCartItems();
  });
  
  
  //adding to cart + img//
  
  // script.js
  
  document.addEventListener('DOMContentLoaded', () => {
      const addToCartButtons = document.querySelectorAll('.btn');
  
      addToCartButtons.forEach(button => {
          button.addEventListener('click', addToCart);
      });
  
      function addToCart(event) {
          event.preventDefault();
          const productCard = event.target.closest('.img');
          const productName = productCard.querySelector('h3').textContent;
          const productPrice = productCard.querySelector('p').textContent;
          const productImage = productCard.querySelector('img').src; // New line to get the image URL
  
          const cartItem = {
              name: productName,
              price: productPrice,
              image: productImage // Include the image URL in the cart item
          };
  
          // Save cart item to localStorage
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
  
          // Redirect to cart page
          window.location.href = 'cart.html';
      }
  
      // Display cart items on cart page
      const cartItemsContainer = document.getElementById('cart-items');
  
      function displayCartItems() {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
          if (cart.length === 0) {
              cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
              return;
          }
  
          let cartHTML = '';
          cart.forEach(item => {
              cartHTML += `
                  <div class="cart-item">
                      <img src="${item.image}" alt="${item.name}"> <!-- Display the product image -->
                      <div>
                          <h3>${item.name}</h3>
                          <p>${item.price}</p>
                      </div>
                  </div>
              `;
          });
  
          cartItemsContainer.innerHTML = cartHTML;
      }
  
      displayCartItems();
  });
  
  
  //25 may 2024

  // script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(), // unique id for each item
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.href = 'cart.html';
    }

    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart-btn');

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
    }

    displayCartItems();
});


//update the cart count whenever items are needed


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(), // unique id for each item
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount(); // Update the cart count
        window.location.href = 'cart.html';
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart-btn');

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            updateCartCount(); // Update the cart count when cart is empty
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartCount(); // Update the cart count after deletion
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
        updateCartCount(); // Update the cart count after clearing
    }

    // Call updateCartCount on page load to initialize the cart count
    updateCartCount();

    if (window.location.pathname.endsWith('cart.html')) {
        displayCartItems();
    }
});


//search functionality//

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'Birkenstock Arizona',
            price: 67.69,
            image: 'birkenstock/Arizona Suede Soft Footbed - Taupe - EU 43 _ Taupe.jpg',
            category: 'birkenstock'
        },
        {
            name: 'Birkenstock Boston',
            price: 36.79,
            image: 'birkenstock/Boston Birkenstock Clog.jpg',
            category: 'birkenstock'
        },
        {
            name: 'Birkenstock',
            price: 14.99,
            image: 'birkenstock/birkenstock 6.jpg',
            category: 'birkenstock'
        },
        // Add more products here
        {
            name: 'Clarks Wallabee',
            price: 19.99,
            image: 'clarks/Women’s Clark’s “Wallabee” leather shoes size 8, never worn_.jpg',
            category: 'clarks'
        },
        {
            name: 'Clarks Wallabee',
            price: 169.99,
            image: 'clarks/nclgallery on Instagram_ _Franck Pellegrino x….jpg',
            category: 'clarks'
        },
        // Add more products here
    ];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        displayProducts(filteredProducts);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(),
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount();
        window.location.href = 'cart.html';
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    function displayProducts(products) {
        productsContainer.innerHTML = ''; // Clear existing products

        if (products.length === 0) {
            productsContainer.innerHTML = '<p>No products found.</p>';
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <div class="img">
                    <img class="img-1" src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                    <a href="#" class="btn">Add to Cart</a>
                </div>
            `;

            productCard.querySelector('.btn').addEventListener('click', addToCart);
            productsContainer.appendChild(productCard);
        });
    }

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            updateCartCount();
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartCount();
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
        updateCartCount();
    }

    updateCartCount();

    if (window.location.pathname.endsWith('cart.html')) {
        displayCartItems();
    }
});


//sign in functionality

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const signInLink = document.getElementById('sign-in');
// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Toggle the mobile menu
    const menuIcon = document.querySelector('.menu');
    const navLinks = document.querySelector('nav ul');
  
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
  
    // Handle search functionality
    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-btn');
  
    searchButton.addEventListener('click', () => {
        const query = searchBar.value;
        if (query) {
            // Perform the search (this is just a placeholder, you'd need to implement the search logic)
            alert(`Searching for: ${query}`);
        } else {
            alert('Please enter a search term.');
        }
    });
  
    // Handle contact form submission
    const contactForm = document.querySelector('#contact form');
  
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.message.value;
  
        if (name && email && message) {
            // Handle form submission (e.g., send data to server)
            alert('Thank you for your message!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
  });
  
  
  //adding items to cart//
  
  // script.js
  
  document.addEventListener('DOMContentLoaded', () => {
      const addToCartButtons = document.querySelectorAll('.btn');
  
      addToCartButtons.forEach(button => {
          button.addEventListener('click', addToCart);
      });
  
      function addToCart(event) {
          event.preventDefault();
          const productCard = event.target.closest('.img');
          const productName = productCard.querySelector('h3').textContent;
          const productPrice = productCard.querySelector('p').textContent;
  
          const cartItem = {
              name: productName,
              price: productPrice
          };
  
          // Save cart item to localStorage
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
  
          // Redirect to cart page
          window.location.href = 'cart.html';
      }
  
      // Display cart items on cart page
      const cartItemsContainer = document.getElementById('cart-items');
  
      function displayCartItems() {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
          if (cart.length === 0) {
              cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
              return;
          }
  
          let cartHTML = '';
          cart.forEach(item => {
              cartHTML += `
                  <div class="cart-item">
                      <h3>${item.name}</h3>
                      <p>${item.price}</p>
                  </div>
              `;
          });
  
          cartItemsContainer.innerHTML = cartHTML;
      }
  
      displayCartItems();
  });
  
  
  //adding to cart + img//
  
  // script.js
  
  document.addEventListener('DOMContentLoaded', () => {
      const addToCartButtons = document.querySelectorAll('.btn');
  
      addToCartButtons.forEach(button => {
          button.addEventListener('click', addToCart);
      });
  
      function addToCart(event) {
          event.preventDefault();
          const productCard = event.target.closest('.img');
          const productName = productCard.querySelector('h3').textContent;
          const productPrice = productCard.querySelector('p').textContent;
          const productImage = productCard.querySelector('img').src; // New line to get the image URL
  
          const cartItem = {
              name: productName,
              price: productPrice,
              image: productImage // Include the image URL in the cart item
          };
  
          // Save cart item to localStorage
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
  
          // Redirect to cart page
          window.location.href = 'cart.html';
      }
  
      // Display cart items on cart page
      const cartItemsContainer = document.getElementById('cart-items');
  
      function displayCartItems() {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
          if (cart.length === 0) {
              cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
              return;
          }
  
          let cartHTML = '';
          cart.forEach(item => {
              cartHTML += `
                  <div class="cart-item">
                      <img src="${item.image}" alt="${item.name}"> <!-- Display the product image -->
                      <div>
                          <h3>${item.name}</h3>
                          <p>${item.price}</p>
                      </div>
                  </div>
              `;
          });
  
          cartItemsContainer.innerHTML = cartHTML;
      }
  
      displayCartItems();
  });
  
  
  //25 may 2024

  // script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(), // unique id for each item
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.href = 'cart.html';
    }

    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart-btn');

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
    }

    displayCartItems();
});


//update the cart count whenever items are needed


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(), // unique id for each item
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount(); // Update the cart count
        window.location.href = 'cart.html';
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart-btn');

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            updateCartCount(); // Update the cart count when cart is empty
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartCount(); // Update the cart count after deletion
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
        updateCartCount(); // Update the cart count after clearing
    }

    // Call updateCartCount on page load to initialize the cart count
    updateCartCount();

    if (window.location.pathname.endsWith('cart.html')) {
        displayCartItems();
    }
});


//search functionality//

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'Birkenstock Arizona',
            price: 67.69,
            image: 'birkenstock/Arizona Suede Soft Footbed - Taupe - EU 43 _ Taupe.jpg',
            category: 'birkenstock'
        },
        {
            name: 'Birkenstock Boston',
            price: 36.79,
            image: 'birkenstock/Boston Birkenstock Clog.jpg',
            category: 'birkenstock'
        },
        {
            name: 'Birkenstock',
            price: 14.99,
            image: 'birkenstock/birkenstock 6.jpg',
            category: 'birkenstock'
        },
        // Add more products here
        {
            name: 'Clarks Wallabee',
            price: 19.99,
            image: 'clarks/Women’s Clark’s “Wallabee” leather shoes size 8, never worn_.jpg',
            category: 'clarks'
        },
        {
            name: 'Clarks Wallabee',
            price: 169.99,
            image: 'clarks/nclgallery on Instagram_ _Franck Pellegrino x….jpg',
            category: 'clarks'
        },
        // Add more products here
    ];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        displayProducts(filteredProducts);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(),
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount();
        window.location.href = 'cart.html';
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    function displayProducts(products) {
        productsContainer.innerHTML = ''; // Clear existing products

        if (products.length === 0) {
            productsContainer.innerHTML = '<p>No products found.</p>';
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <div class="img">
                    <img class="img-1" src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                    <a href="#" class="btn">Add to Cart</a>
                </div>
            `;

            productCard.querySelector('.btn').addEventListener('click', addToCart);
            productsContainer.appendChild(productCard);
        });
    }

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            updateCartCount();
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartCount();
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
        updateCartCount();
    }

    updateCartCount();

    if (window.location.pathname.endsWith('cart.html')) {
        displayCartItems();
    }
});


//sign in functionality

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const signInLink = document.getElementById('sign-in');
    const accountInfo = document.getElementById('account-info');
    const userNameDisplay = document.getElementById('user-name');
    const signOutButton = document.getElementById('sign-out');
    const signInFormContainer = document.getElementById('sign-in-form');
    const createAccountFormContainer = document.getElementById('create-account-form');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const createAccountLink = document.getElementById('create-account-link');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    function displayUser() {
        if (currentUser) {
            signInLink.style.display = 'none';
            accountInfo.style.display = 'block';
            userNameDisplay.textContent = `Hello, ${currentUser.username}`;
        } else {
            signInLink.style.display = 'block';
            accountInfo.style.display = 'none';
        }
    }

    signInLink.addEventListener('click', () => {
        signInFormContainer.style.display = 'block';
        createAccountFormContainer.style.display = 'none';
    });

    createAccountLink.addEventListener('click', () => {
        signInFormContainer.style.display = 'none';
        createAccountFormContainer.style.display = 'block';
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            signInFormContainer.style.display = 'none';
            displayUser();
        } else {
            alert('Invalid email or password');
        }
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        const userExists = users.some(user => user.email === email);
        if (userExists) {
            alert('Email already exists');
            return;
        }

        const newUser = {
            id: Date.now(),
            username: username,
            email: email,
            password: password
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Account created successfully! Please sign in.');
        createAccountFormContainer.style.display = 'none';
        signInFormContainer.style.display = 'block';
    });

    signOutButton.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        currentUser = null;
        displayUser();
    });

    displayUser();
});// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Toggle the mobile menu
    const menuIcon = document.querySelector('.menu');
    const navLinks = document.querySelector('nav ul');
  
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
  
    // Handle search functionality
    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-btn');
  
    searchButton.addEventListener('click', () => {
        const query = searchBar.value;
        if (query) {
            // Perform the search (this is just a placeholder, you'd need to implement the search logic)
            alert(`Searching for: ${query}`);
        } else {
            alert('Please enter a search term.');
        }
    });
  
    // Handle contact form submission
    const contactForm = document.querySelector('#contact form');
  
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.message.value;
  
        if (name && email && message) {
            // Handle form submission (e.g., send data to server)
            alert('Thank you for your message!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
  });
  
  
  //adding items to cart//
  
  // script.js
  
  document.addEventListener('DOMContentLoaded', () => {
      const addToCartButtons = document.querySelectorAll('.btn');
  
      addToCartButtons.forEach(button => {
          button.addEventListener('click', addToCart);
      });
  
      function addToCart(event) {
          event.preventDefault();
          const productCard = event.target.closest('.img');
          const productName = productCard.querySelector('h3').textContent;
          const productPrice = productCard.querySelector('p').textContent;
  
          const cartItem = {
              name: productName,
              price: productPrice
          };
  
          // Save cart item to localStorage
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
  
          // Redirect to cart page
          window.location.href = 'cart.html';
      }
  
      // Display cart items on cart page
      const cartItemsContainer = document.getElementById('cart-items');
  
      function displayCartItems() {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
          if (cart.length === 0) {
              cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
              return;
          }
  
          let cartHTML = '';
          cart.forEach(item => {
              cartHTML += `
                  <div class="cart-item">
                      <h3>${item.name}</h3>
                      <p>${item.price}</p>
                  </div>
              `;
          });
  
          cartItemsContainer.innerHTML = cartHTML;
      }
  
      displayCartItems();
  });
  
  
  //adding to cart + img//
  
  // script.js
  
  document.addEventListener('DOMContentLoaded', () => {
      const addToCartButtons = document.querySelectorAll('.btn');
  
      addToCartButtons.forEach(button => {
          button.addEventListener('click', addToCart);
      });
  
      function addToCart(event) {
          event.preventDefault();
          const productCard = event.target.closest('.img');
          const productName = productCard.querySelector('h3').textContent;
          const productPrice = productCard.querySelector('p').textContent;
          const productImage = productCard.querySelector('img').src; // New line to get the image URL
  
          const cartItem = {
              name: productName,
              price: productPrice,
              image: productImage // Include the image URL in the cart item
          };
  
          // Save cart item to localStorage
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
  
          // Redirect to cart page
          window.location.href = 'cart.html';
      }
  
      // Display cart items on cart page
      const cartItemsContainer = document.getElementById('cart-items');
  
      function displayCartItems() {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
          if (cart.length === 0) {
              cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
              return;
          }
  
          let cartHTML = '';
          cart.forEach(item => {
              cartHTML += `
                  <div class="cart-item">
                      <img src="${item.image}" alt="${item.name}"> <!-- Display the product image -->
                      <div>
                          <h3>${item.name}</h3>
                          <p>${item.price}</p>
                      </div>
                  </div>
              `;
          });
  
          cartItemsContainer.innerHTML = cartHTML;
      }
  
      displayCartItems();
  });
  
  
  //25 may 2024

  // script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(), // unique id for each item
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.href = 'cart.html';
    }

    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart-btn');

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
    }

    displayCartItems();
});


//update the cart count whenever items are needed


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(), // unique id for each item
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount(); // Update the cart count
        window.location.href = 'cart.html';
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart-btn');

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            updateCartCount(); // Update the cart count when cart is empty
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartCount(); // Update the cart count after deletion
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
        updateCartCount(); // Update the cart count after clearing
    }

    // Call updateCartCount on page load to initialize the cart count
    updateCartCount();

    if (window.location.pathname.endsWith('cart.html')) {
        displayCartItems();
    }
});


//search functionality//

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'Birkenstock Arizona',
            price: 67.69,
            image: 'birkenstock/Arizona Suede Soft Footbed - Taupe - EU 43 _ Taupe.jpg',
            category: 'birkenstock'
        },
        {
            name: 'Birkenstock Boston',
            price: 36.79,
            image: 'birkenstock/Boston Birkenstock Clog.jpg',
            category: 'birkenstock'
        },
        {
            name: 'Birkenstock',
            price: 14.99,
            image: 'birkenstock/birkenstock 6.jpg',
            category: 'birkenstock'
        },
        // Add more products here
        {
            name: 'Clarks Wallabee',
            price: 19.99,
            image: 'clarks/Women’s Clark’s “Wallabee” leather shoes size 8, never worn_.jpg',
            category: 'clarks'
        },
        {
            name: 'Clarks Wallabee',
            price: 169.99,
            image: 'clarks/nclgallery on Instagram_ _Franck Pellegrino x….jpg',
            category: 'clarks'
        },
        // Add more products here
    ];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        displayProducts(filteredProducts);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(),
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount();
        window.location.href = 'cart.html';
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    function displayProducts(products) {
        productsContainer.innerHTML = ''; // Clear existing products

        if (products.length === 0) {
            productsContainer.innerHTML = '<p>No products found.</p>';
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <div class="img">
                    <img class="img-1" src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                    <a href="#" class="btn">Add to Cart</a>
                </div>
            `;

            productCard.querySelector('.btn').addEventListener('click', addToCart);
            productsContainer.appendChild(productCard);
        });
    }

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            updateCartCount();
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartCount();
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
        updateCartCount();
    }

    updateCartCount();

    if (window.location.pathname.endsWith('cart.html')) {
        displayCartItems();
    }
});


//sign in functionality

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const signInLink = document.getElementById('sign-in');
    const accountInfo = document.getElementById('account-info');
    const userNameDisplay = document.getElementById('user-name');
    const signOutButton = document.getElementById('sign-out');
    const signInFormContainer = document.getElementById('sign-in-form');
    const createAccountFormContainer = document.getElementById('create-account-form');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const createAccountLink = document.getElementById('create-account-link');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    function displayUser() {
        if (currentUser) {
            signInLink.style.display = 'none';
            accountInfo.style.display = 'block';
            userNameDisplay.textContent = `Hello, ${currentUser.username}`;
        } else {
            signInLink.style.display = 'block';
            accountInfo.style.display = 'none';
        }
    }

    signInLink.addEventListener('click', () => {
        signInFormContainer.style.display = 'block';
        createAccountFormContainer.style.display = 'none';
    });

    createAccountLink.addEventListener('click', () => {
        signInFormContainer.style.display = 'none';
        createAccountFormContainer.style.display = 'block';
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            signInFormContainer.style.display = 'none';
            displayUser();
        } else {
            alert('Invalid email or password');
        }
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        const userExists = users.some(user => user.email === email);
        if (userExists) {
            alert('Email already exists');
            return;
        }

        const newUser = {
            id: Date.now(),
            username: username,
            email: email,
            password: password
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Account created successfully! Please sign in.');
        createAccountFormContainer.style.display = 'none';
        signInFormContainer.style.display = 'block';
    });

    signOutButton.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        currentUser = null;
        displayUser();
    });

    displayUser();
});// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Toggle the mobile menu
    const menuIcon = document.querySelector('.menu');
    const navLinks = document.querySelector('nav ul');
  
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
  
    // Handle search functionality
    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-btn');
  
    searchButton.addEventListener('click', () => {
        const query = searchBar.value;
        if (query) {
            // Perform the search (this is just a placeholder, you'd need to implement the search logic)
            alert(`Searching for: ${query}`);
        } else {
            alert('Please enter a search term.');
        }
    });
  
    // Handle contact form submission
    const contactForm = document.querySelector('#contact form');
  
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.message.value;
  
        if (name && email && message) {
            // Handle form submission (e.g., send data to server)
            alert('Thank you for your message!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
  });
  
  
  //adding items to cart//
  
  // script.js
  
  document.addEventListener('DOMContentLoaded', () => {
      const addToCartButtons = document.querySelectorAll('.btn');
  
      addToCartButtons.forEach(button => {
          button.addEventListener('click', addToCart);
      });
  
      function addToCart(event) {
          event.preventDefault();
          const productCard = event.target.closest('.img');
          const productName = productCard.querySelector('h3').textContent;
          const productPrice = productCard.querySelector('p').textContent;
  
          const cartItem = {
              name: productName,
              price: productPrice
          };
  
          // Save cart item to localStorage
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
  
          // Redirect to cart page
          window.location.href = 'cart.html';
      }
  
      // Display cart items on cart page
      const cartItemsContainer = document.getElementById('cart-items');
  
      function displayCartItems() {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
          if (cart.length === 0) {
              cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
              return;
          }
  
          let cartHTML = '';
          cart.forEach(item => {
              cartHTML += `
                  <div class="cart-item">
                      <h3>${item.name}</h3>
                      <p>${item.price}</p>
                  </div>
              `;
          });
  
          cartItemsContainer.innerHTML = cartHTML;
      }
  
      displayCartItems();
  });
  
  
  //adding to cart + img//
  
  // script.js
  
  document.addEventListener('DOMContentLoaded', () => {
      const addToCartButtons = document.querySelectorAll('.btn');
  
      addToCartButtons.forEach(button => {
          button.addEventListener('click', addToCart);
      });
  
      function addToCart(event) {
          event.preventDefault();
          const productCard = event.target.closest('.img');
          const productName = productCard.querySelector('h3').textContent;
          const productPrice = productCard.querySelector('p').textContent;
          const productImage = productCard.querySelector('img').src; // New line to get the image URL
  
          const cartItem = {
              name: productName,
              price: productPrice,
              image: productImage // Include the image URL in the cart item
          };
  
          // Save cart item to localStorage
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
  
          // Redirect to cart page
          window.location.href = 'cart.html';
      }
  
      // Display cart items on cart page
      const cartItemsContainer = document.getElementById('cart-items');
  
      function displayCartItems() {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
          if (cart.length === 0) {
              cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
              return;
          }
  
          let cartHTML = '';
          cart.forEach(item => {
              cartHTML += `
                  <div class="cart-item">
                      <img src="${item.image}" alt="${item.name}"> <!-- Display the product image -->
                      <div>
                          <h3>${item.name}</h3>
                          <p>${item.price}</p>
                      </div>
                  </div>
              `;
          });
  
          cartItemsContainer.innerHTML = cartHTML;
      }
  
      displayCartItems();
  });
  
  
  //25 may 2024

  // script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(), // unique id for each item
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.href = 'cart.html';
    }

    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart-btn');

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
    }

    displayCartItems();
});


//update the cart count whenever items are needed


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(), // unique id for each item
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount(); // Update the cart count
        window.location.href = 'cart.html';
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart-btn');

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            updateCartCount(); // Update the cart count when cart is empty
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartCount(); // Update the cart count after deletion
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
        updateCartCount(); // Update the cart count after clearing
    }

    // Call updateCartCount on page load to initialize the cart count
    updateCartCount();

    if (window.location.pathname.endsWith('cart.html')) {
        displayCartItems();
    }
});


//search functionality//

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'Birkenstock Arizona',
            price: 67.69,
            image: 'birkenstock/Arizona Suede Soft Footbed - Taupe - EU 43 _ Taupe.jpg',
            category: 'birkenstock'
        },
        {
            name: 'Birkenstock Boston',
            price: 36.79,
            image: 'birkenstock/Boston Birkenstock Clog.jpg',
            category: 'birkenstock'
        },
        {
            name: 'Birkenstock',
            price: 14.99,
            image: 'birkenstock/birkenstock 6.jpg',
            category: 'birkenstock'
        },
        // Add more products here
        {
            name: 'Clarks Wallabee',
            price: 19.99,
            image: 'clarks/Women’s Clark’s “Wallabee” leather shoes size 8, never worn_.jpg',
            category: 'clarks'
        },
        {
            name: 'Clarks Wallabee',
            price: 169.99,
            image: 'clarks/nclgallery on Instagram_ _Franck Pellegrino x….jpg',
            category: 'clarks'
        },
        // Add more products here
    ];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        displayProducts(filteredProducts);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(),
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount();
        window.location.href = 'cart.html';
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    function displayProducts(products) {
        productsContainer.innerHTML = ''; // Clear existing products

        if (products.length === 0) {
            productsContainer.innerHTML = '<p>No products found.</p>';
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <div class="img">
                    <img class="img-1" src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                    <a href="#" class="btn">Add to Cart</a>
                </div>
            `;

            productCard.querySelector('.btn').addEventListener('click', addToCart);
            productsContainer.appendChild(productCard);
        });
    }

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            updateCartCount();
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartCount();
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
        updateCartCount();
    }

    updateCartCount();

    if (window.location.pathname.endsWith('cart.html')) {
        displayCartItems();
    }
});


//sign in functionality

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const signInLink = document.getElementById('sign-in');
    const accountInfo = document.getElementById('account-info');
    const userNameDisplay = document.getElementById('user-name');
    const signOutButton = document.getElementById('sign-out');
    const signInFormContainer = document.getElementById('sign-in-form');
    const createAccountFormContainer = document.getElementById('create-account-form');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const createAccountLink = document.getElementById('create-account-link');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    function displayUser() {
        if (currentUser) {
            signInLink.style.display = 'none';
            accountInfo.style.display = 'block';
            userNameDisplay.textContent = `Hello, ${currentUser.username}`;
        } else {
            signInLink.style.display = 'block';
            accountInfo.style.display = 'none';
        }
    }

    signInLink.addEventListener('click', () => {
        signInFormContainer.style.display = 'block';
        createAccountFormContainer.style.display = 'none';
    });

    createAccountLink.addEventListener('click', () => {
        signInFormContainer.style.display = 'none';
        createAccountFormContainer.style.display = 'block';
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            signInFormContainer.style.display = 'none';
            displayUser();
        } else {
            alert('Invalid email or password');
        }
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        const userExists = users.some(user => user.email === email);
        if (userExists) {
            alert('Email already exists');
            return;
        }

        const newUser = {
            id: Date.now(),
            username: username,
            email: email,
            password: password
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Account created successfully! Please sign in.');
        createAccountFormContainer.style.display = 'none';
        signInFormContainer.style.display = 'block';
    });

    signOutButton.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        currentUser = null;
        displayUser();
    });

    displayUser();
});// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Toggle the mobile menu
    const menuIcon = document.querySelector('.menu');
    const navLinks = document.querySelector('nav ul');
  
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
  
    // Handle search functionality
    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-btn');
  
    searchButton.addEventListener('click', () => {
        const query = searchBar.value;
        if (query) {
            // Perform the search (this is just a placeholder, you'd need to implement the search logic)
            alert(`Searching for: ${query}`);
        } else {
            alert('Please enter a search term.');
        }
    });
  
    // Handle contact form submission
    const contactForm = document.querySelector('#contact form');
  
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.message.value;
  
        if (name && email && message) {
            // Handle form submission (e.g., send data to server)
            alert('Thank you for your message!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
  });
  
  
  //adding items to cart//
  
  // script.js
  
  document.addEventListener('DOMContentLoaded', () => {
      const addToCartButtons = document.querySelectorAll('.btn');
  
      addToCartButtons.forEach(button => {
          button.addEventListener('click', addToCart);
      });
  
      function addToCart(event) {
          event.preventDefault();
          const productCard = event.target.closest('.img');
          const productName = productCard.querySelector('h3').textContent;
          const productPrice = productCard.querySelector('p').textContent;
  
          const cartItem = {
              name: productName,
              price: productPrice
          };
  
          // Save cart item to localStorage
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
  
          // Redirect to cart page
          window.location.href = 'cart.html';
      }
  
      // Display cart items on cart page
      const cartItemsContainer = document.getElementById('cart-items');
  
      function displayCartItems() {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
          if (cart.length === 0) {
              cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
              return;
          }
  
          let cartHTML = '';
          cart.forEach(item => {
              cartHTML += `
                  <div class="cart-item">
                      <h3>${item.name}</h3>
                      <p>${item.price}</p>
                  </div>
              `;
          });
  
          cartItemsContainer.innerHTML = cartHTML;
      }
  
      displayCartItems();
  });
  
  
  //adding to cart + img//
  
  // script.js
  
  document.addEventListener('DOMContentLoaded', () => {
      const addToCartButtons = document.querySelectorAll('.btn');
  
      addToCartButtons.forEach(button => {
          button.addEventListener('click', addToCart);
      });
  
      function addToCart(event) {
          event.preventDefault();
          const productCard = event.target.closest('.img');
          const productName = productCard.querySelector('h3').textContent;
          const productPrice = productCard.querySelector('p').textContent;
          const productImage = productCard.querySelector('img').src; // New line to get the image URL
  
          const cartItem = {
              name: productName,
              price: productPrice,
              image: productImage // Include the image URL in the cart item
          };
  
          // Save cart item to localStorage
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
  
          // Redirect to cart page
          window.location.href = 'cart.html';
      }
  
      // Display cart items on cart page
      const cartItemsContainer = document.getElementById('cart-items');
  
      function displayCartItems() {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
          if (cart.length === 0) {
              cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
              return;
          }
  
          let cartHTML = '';
          cart.forEach(item => {
              cartHTML += `
                  <div class="cart-item">
                      <img src="${item.image}" alt="${item.name}"> <!-- Display the product image -->
                      <div>
                          <h3>${item.name}</h3>
                          <p>${item.price}</p>
                      </div>
                  </div>
              `;
          });
  
          cartItemsContainer.innerHTML = cartHTML;
      }
  
      displayCartItems();
  });
  
  
  //25 may 2024

  // script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(), // unique id for each item
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.href = 'cart.html';
    }

    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart-btn');

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
    }

    displayCartItems();
});


//update the cart count whenever items are needed


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(), // unique id for each item
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount(); // Update the cart count
        window.location.href = 'cart.html';
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart-btn');

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            updateCartCount(); // Update the cart count when cart is empty
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartCount(); // Update the cart count after deletion
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
        updateCartCount(); // Update the cart count after clearing
    }

    // Call updateCartCount on page load to initialize the cart count
    updateCartCount();

    if (window.location.pathname.endsWith('cart.html')) {
        displayCartItems();
    }
});


//search functionality//

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'Birkenstock Arizona',
            price: 67.69,
            image: 'birkenstock/Arizona Suede Soft Footbed - Taupe - EU 43 _ Taupe.jpg',
            category: 'birkenstock'
        },
        {
            name: 'Birkenstock Boston',
            price: 36.79,
            image: 'birkenstock/Boston Birkenstock Clog.jpg',
            category: 'birkenstock'
        },
        {
            name: 'Birkenstock',
            price: 14.99,
            image: 'birkenstock/birkenstock 6.jpg',
            category: 'birkenstock'
        },
        // Add more products here
        {
            name: 'Clarks Wallabee',
            price: 19.99,
            image: 'clarks/Women’s Clark’s “Wallabee” leather shoes size 8, never worn_.jpg',
            category: 'clarks'
        },
        {
            name: 'Clarks Wallabee',
            price: 169.99,
            image: 'clarks/nclgallery on Instagram_ _Franck Pellegrino x….jpg',
            category: 'clarks'
        },
        // Add more products here
    ];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        displayProducts(filteredProducts);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(),
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount();
        window.location.href = 'cart.html';
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    function displayProducts(products) {
        productsContainer.innerHTML = ''; // Clear existing products

        if (products.length === 0) {
            productsContainer.innerHTML = '<p>No products found.</p>';
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <div class="img">
                    <img class="img-1" src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                    <a href="#" class="btn">Add to Cart</a>
                </div>
            `;

            productCard.querySelector('.btn').addEventListener('click', addToCart);
            productsContainer.appendChild(productCard);
        });
    }

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            updateCartCount();
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartCount();
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
        updateCartCount();
    }

    updateCartCount();

    if (window.location.pathname.endsWith('cart.html')) {
        displayCartItems();
    }
});


//sign in functionality

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const signInLink = document.getElementById('sign-in');
    const accountInfo = document.getElementById('account-info');
    const userNameDisplay = document.getElementById('user-name');
    const signOutButton = document.getElementById('sign-out');
    const signInFormContainer = document.getElementById('sign-in-form');
    const createAccountFormContainer = document.getElementById('create-account-form');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const createAccountLink = document.getElementById('create-account-link');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    function displayUser() {
        if (currentUser) {
            signInLink.style.display = 'none';
            accountInfo.style.display = 'block';
            userNameDisplay.textContent = `Hello, ${currentUser.username}`;
        } else {
            signInLink.style.display = 'block';
            accountInfo.style.display = 'none';
        }
    }

    signInLink.addEventListener('click', () => {
        signInFormContainer.style.display = 'block';
        createAccountFormContainer.style.display = 'none';
    });

    createAccountLink.addEventListener('click', () => {
        signInFormContainer.style.display = 'none';
        createAccountFormContainer.style.display = 'block';
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            signInFormContainer.style.display = 'none';
            displayUser();
        } else {
            alert('Invalid email or password');
        }
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        const userExists = users.some(user => user.email === email);
        if (userExists) {
            alert('Email already exists');
            return;
        }

        const newUser = {
            id: Date.now(),
            username: username,
            email: email,
            password: password
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Account created successfully! Please sign in.');
        createAccountFormContainer.style.display = 'none';
        signInFormContainer.style.display = 'block';
    });

    signOutButton.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        currentUser = null;
        displayUser();
    });

    displayUser();
});// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Toggle the mobile menu
    const menuIcon = document.querySelector('.menu');
    const navLinks = document.querySelector('nav ul');
  
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
  
    // Handle search functionality
    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-btn');
  
    searchButton.addEventListener('click', () => {
        const query = searchBar.value;
        if (query) {
            // Perform the search (this is just a placeholder, you'd need to implement the search logic)
            alert(`Searching for: ${query}`);
        } else {
            alert('Please enter a search term.');
        }
    });
  
    // Handle contact form submission
    const contactForm = document.querySelector('#contact form');
  
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.message.value;
  
        if (name && email && message) {
            // Handle form submission (e.g., send data to server)
            alert('Thank you for your message!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
  });
  
  
  //adding items to cart//
  
  // script.js
  
  document.addEventListener('DOMContentLoaded', () => {
      const addToCartButtons = document.querySelectorAll('.btn');
  
      addToCartButtons.forEach(button => {
          button.addEventListener('click', addToCart);
      });
  
      function addToCart(event) {
          event.preventDefault();
          const productCard = event.target.closest('.img');
          const productName = productCard.querySelector('h3').textContent;
          const productPrice = productCard.querySelector('p').textContent;
  
          const cartItem = {
              name: productName,
              price: productPrice
          };
  
          // Save cart item to localStorage
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
  
          // Redirect to cart page
          window.location.href = 'cart.html';
      }
  
      // Display cart items on cart page
      const cartItemsContainer = document.getElementById('cart-items');
  
      function displayCartItems() {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
          if (cart.length === 0) {
              cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
              return;
          }
  
          let cartHTML = '';
          cart.forEach(item => {
              cartHTML += `
                  <div class="cart-item">
                      <h3>${item.name}</h3>
                      <p>${item.price}</p>
                  </div>
              `;
          });
  
          cartItemsContainer.innerHTML = cartHTML;
      }
  
      displayCartItems();
  });
  
  
  //adding to cart + img//
  
  // script.js
  
  document.addEventListener('DOMContentLoaded', () => {
      const addToCartButtons = document.querySelectorAll('.btn');
  
      addToCartButtons.forEach(button => {
          button.addEventListener('click', addToCart);
      });
  
      function addToCart(event) {
          event.preventDefault();
          const productCard = event.target.closest('.img');
          const productName = productCard.querySelector('h3').textContent;
          const productPrice = productCard.querySelector('p').textContent;
          const productImage = productCard.querySelector('img').src; // New line to get the image URL
  
          const cartItem = {
              name: productName,
              price: productPrice,
              image: productImage // Include the image URL in the cart item
          };
  
          // Save cart item to localStorage
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
  
          // Redirect to cart page
          window.location.href = 'cart.html';
      }
  
      // Display cart items on cart page
      const cartItemsContainer = document.getElementById('cart-items');
  
      function displayCartItems() {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
          if (cart.length === 0) {
              cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
              return;
          }
  
          let cartHTML = '';
          cart.forEach(item => {
              cartHTML += `
                  <div class="cart-item">
                      <img src="${item.image}" alt="${item.name}"> <!-- Display the product image -->
                      <div>
                          <h3>${item.name}</h3>
                          <p>${item.price}</p>
                      </div>
                  </div>
              `;
          });
  
          cartItemsContainer.innerHTML = cartHTML;
      }
  
      displayCartItems();
  });
  
  
  //25 may 2024

  // script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(), // unique id for each item
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.href = 'cart.html';
    }

    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart-btn');

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
    }

    displayCartItems();
});


//update the cart count whenever items are needed


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(), // unique id for each item
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount(); // Update the cart count
        window.location.href = 'cart.html';
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart-btn');

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            updateCartCount(); // Update the cart count when cart is empty
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartCount(); // Update the cart count after deletion
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
        updateCartCount(); // Update the cart count after clearing
    }

    // Call updateCartCount on page load to initialize the cart count
    updateCartCount();

    if (window.location.pathname.endsWith('cart.html')) {
        displayCartItems();
    }
});


//search functionality//

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'Birkenstock Arizona',
            price: 67.69,
            image: 'birkenstock/Arizona Suede Soft Footbed - Taupe - EU 43 _ Taupe.jpg',
            category: 'birkenstock'
        },
        {
            name: 'Birkenstock Boston',
            price: 36.79,
            image: 'birkenstock/Boston Birkenstock Clog.jpg',
            category: 'birkenstock'
        },
        {
            name: 'Birkenstock',
            price: 14.99,
            image: 'birkenstock/birkenstock 6.jpg',
            category: 'birkenstock'
        },
        // Add more products here
        {
            name: 'Clarks Wallabee',
            price: 19.99,
            image: 'clarks/Women’s Clark’s “Wallabee” leather shoes size 8, never worn_.jpg',
            category: 'clarks'
        },
        {
            name: 'Clarks Wallabee',
            price: 169.99,
            image: 'clarks/nclgallery on Instagram_ _Franck Pellegrino x….jpg',
            category: 'clarks'
        },
        // Add more products here
    ];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        displayProducts(filteredProducts);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(),
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount();
        window.location.href = 'cart.html';
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    function displayProducts(products) {
        productsContainer.innerHTML = ''; // Clear existing products

        if (products.length === 0) {
            productsContainer.innerHTML = '<p>No products found.</p>';
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <div class="img">
                    <img class="img-1" src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                    <a href="#" class="btn">Add to Cart</a>
                </div>
            `;

            productCard.querySelector('.btn').addEventListener('click', addToCart);
            productsContainer.appendChild(productCard);
        });
    }

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            updateCartCount();
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartCount();
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
        updateCartCount();
    }

    updateCartCount();

    if (window.location.pathname.endsWith('cart.html')) {
        displayCartItems();
    }
});


//sign in functionality

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const signInLink = document.getElementById('sign-in');
    const accountInfo = document.getElementById('account-info');
    const userNameDisplay = document.getElementById('user-name');
    const signOutButton = document.getElementById('sign-out');
    const signInFormContainer = document.getElementById('sign-in-form');
    const createAccountFormContainer = document.getElementById('create-account-form');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const createAccountLink = document.getElementById('create-account-link');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    function displayUser() {
        if (currentUser) {
            signInLink.style.display = 'none';
            accountInfo.style.display = 'block';
            userNameDisplay.textContent = `Hello, ${currentUser.username}`;
        } else {
            signInLink.style.display = 'block';
            accountInfo.style.display = 'none';
        }
    }

    signInLink.addEventListener('click', () => {
        signInFormContainer.style.display = 'block';
        createAccountFormContainer.style.display = 'none';
    });

    createAccountLink.addEventListener('click', () => {
        signInFormContainer.style.display = 'none';
        createAccountFormContainer.style.display = 'block';
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            signInFormContainer.style.display = 'none';
            displayUser();
        } else {
            alert('Invalid email or password');
        }
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        const userExists = users.some(user => user.email === email);
        if (userExists) {
            alert('Email already exists');
            return;
        }

        const newUser = {
            id: Date.now(),
            username: username,
            email: email,
            password: password
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Account created successfully! Please sign in.');
        createAccountFormContainer.style.display = 'none';
        signInFormContainer.style.display = 'block';
    });

    signOutButton.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        currentUser = null;
        displayUser();
    });

    displayUser();
});// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Toggle the mobile menu
    const menuIcon = document.querySelector('.menu');
    const navLinks = document.querySelector('nav ul');
  
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
  
    // Handle search functionality
    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-btn');
  
    searchButton.addEventListener('click', () => {
        const query = searchBar.value;
        if (query) {
            // Perform the search (this is just a placeholder, you'd need to implement the search logic)
            alert(`Searching for: ${query}`);
        } else {
            alert('Please enter a search term.');
        }
    });
  
    // Handle contact form submission
    const contactForm = document.querySelector('#contact form');
  
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.message.value;
  
        if (name && email && message) {
            // Handle form submission (e.g., send data to server)
            alert('Thank you for your message!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
  });
  
  
  //adding items to cart//
  
  // script.js
  
  document.addEventListener('DOMContentLoaded', () => {
      const addToCartButtons = document.querySelectorAll('.btn');
  
      addToCartButtons.forEach(button => {
          button.addEventListener('click', addToCart);
      });
  
      function addToCart(event) {
          event.preventDefault();
          const productCard = event.target.closest('.img');
          const productName = productCard.querySelector('h3').textContent;
          const productPrice = productCard.querySelector('p').textContent;
  
          const cartItem = {
              name: productName,
              price: productPrice
          };
  
          // Save cart item to localStorage
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
  
          // Redirect to cart page
          window.location.href = 'cart.html';
      }
  
      // Display cart items on cart page
      const cartItemsContainer = document.getElementById('cart-items');
  
      function displayCartItems() {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
          if (cart.length === 0) {
              cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
              return;
          }
  
          let cartHTML = '';
          cart.forEach(item => {
              cartHTML += `
                  <div class="cart-item">
                      <h3>${item.name}</h3>
                      <p>${item.price}</p>
                  </div>
              `;
          });
  
          cartItemsContainer.innerHTML = cartHTML;
      }
  
      displayCartItems();
  });
  
  
  //adding to cart + img//
  
  // script.js
  
  document.addEventListener('DOMContentLoaded', () => {
      const addToCartButtons = document.querySelectorAll('.btn');
  
      addToCartButtons.forEach(button => {
          button.addEventListener('click', addToCart);
      });
  
      function addToCart(event) {
          event.preventDefault();
          const productCard = event.target.closest('.img');
          const productName = productCard.querySelector('h3').textContent;
          const productPrice = productCard.querySelector('p').textContent;
          const productImage = productCard.querySelector('img').src; // New line to get the image URL
  
          const cartItem = {
              name: productName,
              price: productPrice,
              image: productImage // Include the image URL in the cart item
          };
  
          // Save cart item to localStorage
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
  
          // Redirect to cart page
          window.location.href = 'cart.html';
      }
  
      // Display cart items on cart page
      const cartItemsContainer = document.getElementById('cart-items');
  
      function displayCartItems() {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
          if (cart.length === 0) {
              cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
              return;
          }
  
          let cartHTML = '';
          cart.forEach(item => {
              cartHTML += `
                  <div class="cart-item">
                      <img src="${item.image}" alt="${item.name}"> <!-- Display the product image -->
                      <div>
                          <h3>${item.name}</h3>
                          <p>${item.price}</p>
                      </div>
                  </div>
              `;
          });
  
          cartItemsContainer.innerHTML = cartHTML;
      }
  
      displayCartItems();
  });
  
  
  //25 may 2024

  // script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(), // unique id for each item
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.href = 'cart.html';
    }

    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart-btn');

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
    }

    displayCartItems();
});


//update the cart count whenever items are needed


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(), // unique id for each item
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount(); // Update the cart count
        window.location.href = 'cart.html';
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart-btn');

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            updateCartCount(); // Update the cart count when cart is empty
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartCount(); // Update the cart count after deletion
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
        updateCartCount(); // Update the cart count after clearing
    }

    // Call updateCartCount on page load to initialize the cart count
    updateCartCount();

    if (window.location.pathname.endsWith('cart.html')) {
        displayCartItems();
    }
});


//search functionality//

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'Birkenstock Arizona',
            price: 67.69,
            image: 'birkenstock/Arizona Suede Soft Footbed - Taupe - EU 43 _ Taupe.jpg',
            category: 'birkenstock'
        },
        {
            name: 'Birkenstock Boston',
            price: 36.79,
            image: 'birkenstock/Boston Birkenstock Clog.jpg',
            category: 'birkenstock'
        },
        {
            name: 'Birkenstock',
            price: 14.99,
            image: 'birkenstock/birkenstock 6.jpg',
            category: 'birkenstock'
        },
        // Add more products here
        {
            name: 'Clarks Wallabee',
            price: 19.99,
            image: 'clarks/Women’s Clark’s “Wallabee” leather shoes size 8, never worn_.jpg',
            category: 'clarks'
        },
        {
            name: 'Clarks Wallabee',
            price: 169.99,
            image: 'clarks/nclgallery on Instagram_ _Franck Pellegrino x….jpg',
            category: 'clarks'
        },
        // Add more products here
    ];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        displayProducts(filteredProducts);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(),
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount();
        window.location.href = 'cart.html';
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    function displayProducts(products) {
        productsContainer.innerHTML = ''; // Clear existing products

        if (products.length === 0) {
            productsContainer.innerHTML = '<p>No products found.</p>';
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <div class="img">
                    <img class="img-1" src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                    <a href="#" class="btn">Add to Cart</a>
                </div>
            `;

            productCard.querySelector('.btn').addEventListener('click', addToCart);
            productsContainer.appendChild(productCard);
        });
    }

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            updateCartCount();
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartCount();
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
        updateCartCount();
    }

    updateCartCount();

    if (window.location.pathname.endsWith('cart.html')) {
        displayCartItems();
    }
});


//sign in functionality

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const signInLink = document.getElementById('sign-in');
    const accountInfo = document.getElementById('account-info');
    const userNameDisplay = document.getElementById('user-name');
    const signOutButton = document.getElementById('sign-out');
    const signInFormContainer = document.getElementById('sign-in-form');
    const createAccountFormContainer = document.getElementById('create-account-form');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const createAccountLink = document.getElementById('create-account-link');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    function displayUser() {
        if (currentUser) {
            signInLink.style.display = 'none';
            accountInfo.style.display = 'block';
            userNameDisplay.textContent = `Hello, ${currentUser.username}`;
        } else {
            signInLink.style.display = 'block';
            accountInfo.style.display = 'none';
        }
    }

    signInLink.addEventListener('click', () => {
        signInFormContainer.style.display = 'block';
        createAccountFormContainer.style.display = 'none';
    });

    createAccountLink.addEventListener('click', () => {
        signInFormContainer.style.display = 'none';
        createAccountFormContainer.style.display = 'block';
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            signInFormContainer.style.display = 'none';
            displayUser();
        } else {
            alert('Invalid email or password');
        }
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        const userExists = users.some(user => user.email === email);
        if (userExists) {
            alert('Email already exists');
            return;
        }

        const newUser = {
            id: Date.now(),
            username: username,
            email: email,
            password: password
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Account created successfully! Please sign in.');
        createAccountFormContainer.style.display = 'none';
        signInFormContainer.style.display = 'block';
    });

    signOutButton.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        currentUser = null;
        displayUser();
    });

    displayUser();
});// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Toggle the mobile menu
    const menuIcon = document.querySelector('.menu');
    const navLinks = document.querySelector('nav ul');
  
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('open');
    });
  
    // Handle search functionality
    const searchBar = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-btn');
  
    searchButton.addEventListener('click', () => {
        const query = searchBar.value;
        if (query) {
            // Perform the search (this is just a placeholder, you'd need to implement the search logic)
            alert(`Searching for: ${query}`);
        } else {
            alert('Please enter a search term.');
        }
    });
  
    // Handle contact form submission
    const contactForm = document.querySelector('#contact form');
  
    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = contactForm.name.value;
        const email = contactForm.email.value;
        const message = contactForm.message.value;
  
        if (name && email && message) {
            // Handle form submission (e.g., send data to server)
            alert('Thank you for your message!');
            contactForm.reset();
        } else {
            alert('Please fill in all fields.');
        }
    });
  });
  
  
  //adding items to cart//
  
  // script.js
  
  document.addEventListener('DOMContentLoaded', () => {
      const addToCartButtons = document.querySelectorAll('.btn');
  
      addToCartButtons.forEach(button => {
          button.addEventListener('click', addToCart);
      });
  
      function addToCart(event) {
          event.preventDefault();
          const productCard = event.target.closest('.img');
          const productName = productCard.querySelector('h3').textContent;
          const productPrice = productCard.querySelector('p').textContent;
  
          const cartItem = {
              name: productName,
              price: productPrice
          };
  
          // Save cart item to localStorage
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
  
          // Redirect to cart page
          window.location.href = 'cart.html';
      }
  
      // Display cart items on cart page
      const cartItemsContainer = document.getElementById('cart-items');
  
      function displayCartItems() {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
          if (cart.length === 0) {
              cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
              return;
          }
  
          let cartHTML = '';
          cart.forEach(item => {
              cartHTML += `
                  <div class="cart-item">
                      <h3>${item.name}</h3>
                      <p>${item.price}</p>
                  </div>
              `;
          });
  
          cartItemsContainer.innerHTML = cartHTML;
      }
  
      displayCartItems();
  });
  
  
  //adding to cart + img//
  
  // script.js
  
  document.addEventListener('DOMContentLoaded', () => {
      const addToCartButtons = document.querySelectorAll('.btn');
  
      addToCartButtons.forEach(button => {
          button.addEventListener('click', addToCart);
      });
  
      function addToCart(event) {
          event.preventDefault();
          const productCard = event.target.closest('.img');
          const productName = productCard.querySelector('h3').textContent;
          const productPrice = productCard.querySelector('p').textContent;
          const productImage = productCard.querySelector('img').src; // New line to get the image URL
  
          const cartItem = {
              name: productName,
              price: productPrice,
              image: productImage // Include the image URL in the cart item
          };
  
          // Save cart item to localStorage
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
          cart.push(cartItem);
          localStorage.setItem('cart', JSON.stringify(cart));
  
          // Redirect to cart page
          window.location.href = 'cart.html';
      }
  
      // Display cart items on cart page
      const cartItemsContainer = document.getElementById('cart-items');
  
      function displayCartItems() {
          let cart = JSON.parse(localStorage.getItem('cart')) || [];
  
          if (cart.length === 0) {
              cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
              return;
          }
  
          let cartHTML = '';
          cart.forEach(item => {
              cartHTML += `
                  <div class="cart-item">
                      <img src="${item.image}" alt="${item.name}"> <!-- Display the product image -->
                      <div>
                          <h3>${item.name}</h3>
                          <p>${item.price}</p>
                      </div>
                  </div>
              `;
          });
  
          cartItemsContainer.innerHTML = cartHTML;
      }
  
      displayCartItems();
  });
  
  
  //25 may 2024

  // script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(), // unique id for each item
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        window.location.href = 'cart.html';
    }

    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart-btn');

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
    }

    displayCartItems();
});


//update the cart count whenever items are needed


// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(), // unique id for each item
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount(); // Update the cart count
        window.location.href = 'cart.html';
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    const cartItemsContainer = document.getElementById('cart-items');
    const clearCartButton = document.getElementById('clear-cart-btn');

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            updateCartCount(); // Update the cart count when cart is empty
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartCount(); // Update the cart count after deletion
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
        updateCartCount(); // Update the cart count after clearing
    }

    // Call updateCartCount on page load to initialize the cart count
    updateCartCount();

    if (window.location.pathname.endsWith('cart.html')) {
        displayCartItems();
    }
});


//search functionality//

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.btn');
    const searchInput = document.getElementById('search-input');
    const searchBtn = document.getElementById('search-btn');
    const productsContainer = document.getElementById('products');

    const products = [
        {
            name: 'Birkenstock Arizona',
            price: 67.69,
            image: 'birkenstock/Arizona Suede Soft Footbed - Taupe - EU 43 _ Taupe.jpg',
            category: 'birkenstock'
        },
        {
            name: 'Birkenstock Boston',
            price: 36.79,
            image: 'birkenstock/Boston Birkenstock Clog.jpg',
            category: 'birkenstock'
        },
        {
            name: 'Birkenstock',
            price: 14.99,
            image: 'birkenstock/birkenstock 6.jpg',
            category: 'birkenstock'
        },
        // Add more products here
        {
            name: 'Clarks Wallabee',
            price: 19.99,
            image: 'clarks/Women’s Clark’s “Wallabee” leather shoes size 8, never worn_.jpg',
            category: 'clarks'
        },
        {
            name: 'Clarks Wallabee',
            price: 169.99,
            image: 'clarks/nclgallery on Instagram_ _Franck Pellegrino x….jpg',
            category: 'clarks'
        },
        // Add more products here
    ];

    addToCartButtons.forEach(button => {
        button.addEventListener('click', addToCart);
    });

    searchBtn.addEventListener('click', () => {
        const query = searchInput.value.toLowerCase();
        const filteredProducts = products.filter(product => product.name.toLowerCase().includes(query));
        displayProducts(filteredProducts);
    });

    function addToCart(event) {
        event.preventDefault();
        const productCard = event.target.closest('.img');
        const productName = productCard.querySelector('h3').textContent;
        const productPrice = parseFloat(productCard.querySelector('p').textContent.replace('$', ''));
        const productImage = productCard.querySelector('img').src;

        const cartItem = {
            id: Date.now(),
            name: productName,
            price: productPrice,
            image: productImage
        };

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart.push(cartItem);
        localStorage.setItem('cart', JSON.stringify(cart));

        updateCartCount();
        window.location.href = 'cart.html';
    }

    function updateCartCount() {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const cartCountElement = document.getElementById('cart-count');
        cartCountElement.textContent = cart.length;
    }

    function displayProducts(products) {
        productsContainer.innerHTML = ''; // Clear existing products

        if (products.length === 0) {
            productsContainer.innerHTML = '<p>No products found.</p>';
            return;
        }

        products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.classList.add('product-card');

            productCard.innerHTML = `
                <div class="img">
                    <img class="img-1" src="${product.image}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>$${product.price.toFixed(2)}</p>
                    <a href="#" class="btn">Add to Cart</a>
                </div>
            `;

            productCard.querySelector('.btn').addEventListener('click', addToCart);
            productsContainer.appendChild(productCard);
        });
    }

    function displayCartItems() {
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
            updateCartCount();
            return;
        }

        let totalCost = 0;
        let cartHTML = '';

        cart.forEach(item => {
            cartHTML += `
                <div class="cart-item" data-id="${item.id}">
                    <img src="${item.image}" alt="${item.name}">
                    <div>
                        <h3>${item.name}</h3>
                        <p>$${item.price.toFixed(2)}</p>
                        <button class="delete-btn">Delete</button>
                    </div>
                </div>
            `;
            totalCost += item.price;
        });

        const deliveryFee = totalCost * 0.15; // 15% of total cost
        const shippingFee = totalCost * 0.10; // 10% of total cost
        const totalCostWithFees = totalCost + deliveryFee + shippingFee;

        cartHTML += `
            <div class="total-container">
                <p>Total Products: ${cart.length}</p>
                <p>Total Cost: $${totalCost.toFixed(2)}</p>
                <p>Delivery Fee: $${deliveryFee.toFixed(2)}</p>
                <p>Shipping Fee: $${shippingFee.toFixed(2)}</p>
                <p>Total Cost with Fees: $${totalCostWithFees.toFixed(2)}</p>
            </div>
        `;

        cartItemsContainer.innerHTML = cartHTML;

        document.querySelectorAll('.delete-btn').forEach(button => {
            button.addEventListener('click', deleteCartItem);
        });

        clearCartButton.addEventListener('click', clearCart);
    }

    function deleteCartItem(event) {
        const cartItemId = event.target.closest('.cart-item').getAttribute('data-id');
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        cart = cart.filter(item => item.id !== parseInt(cartItemId));
        localStorage.setItem('cart', JSON.stringify(cart));
        displayCartItems();
        updateCartCount();
    }

    function clearCart() {
        localStorage.removeItem('cart');
        displayCartItems();
        updateCartCount();
    }

    updateCartCount();

    if (window.location.pathname.endsWith('cart.html')) {
        displayCartItems();
    }
});


//sign in functionality

// script.js

document.addEventListener('DOMContentLoaded', () => {
    const signInLink = document.getElementById('sign-in');
    const accountInfo = document.getElementById('account-info');
    const userNameDisplay = document.getElementById('user-name');
    const signOutButton = document.getElementById('sign-out');
    const signInFormContainer = document.getElementById('sign-in-form');
    const createAccountFormContainer = document.getElementById('create-account-form');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const createAccountLink = document.getElementById('create-account-link');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    function displayUser() {
        if (currentUser) {
            signInLink.style.display = 'none';
            accountInfo.style.display = 'block';
            userNameDisplay.textContent = `Hello, ${currentUser.username}`;
        } else {
            signInLink.style.display = 'block';
            accountInfo.style.display = 'none';
        }
    }

    signInLink.addEventListener('click', () => {
        signInFormContainer.style.display = 'block';
        createAccountFormContainer.style.display = 'none';
    });

    createAccountLink.addEventListener('click', () => {
        signInFormContainer.style.display = 'none';
        createAccountFormContainer.style.display = 'block';
    });

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            currentUser = user;
            localStorage.setItem('currentUser', JSON.stringify(currentUser));
            signInFormContainer.style.display = 'none';
            displayUser();
        } else {
            alert('Invalid email or password');
        }
    });

    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const username = document.getElementById('signup-username').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        const userExists = users.some(user => user.email === email);
        if (userExists) {
            alert('Email already exists');
            return;
        }

        const newUser = {
            id: Date.now(),
            username: username,
            email: email,
            password: password
        };

        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        alert('Account created successfully! Please sign in.');
        createAccountFormContainer.style.display = 'none';
        signInFormContainer.style.display = 'block';
    });

    signOutButton.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        currentUser = null;
        displayUser();
    });

    displayUser();
});   const accountInfo = document.getElementById('account-info');
    const userNameDisplay = document.getElementById('user-name');
    const signOutButton = document.getElementById('sign-out');
    const signInFormContainer = document.getElementById('sign-in-form');
    const createAccountFormContainer = document.getElementById('create-account-form');
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');
    const createAccountLink = document.getElementById('create-account-link');

    let users = JSON.parse(localStorage.getItem('users')) || [];
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));

    function displayUser() {
        if (currentUser) {
            signInLink.style.display = 'none';
            accountInfo.style.display = 'block';
            userNameDisplay.textContent = `Hello, ${currentUser.username}`;
        } else {
            signInLink.style.display = 'block';
            accountInfo.style.display = 'none';
        }
    }

    signInLink.addEventListener('click', () => {
        signInFormContainer.style.display = 'block';
        createAccountFormContainer.style.display = 'none';
    });