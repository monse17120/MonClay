// Sample product data
const products = [
  {
    id: 1,
    name: "Llavero Kawaii de Porcelana Fría",
    price: 8.99,
    category: "Porcelana Fría",
    description:
      "Lindo llavero hecho a mano con porcelana fría. Cada pieza es única y está diseñada con mucho amor. Perfecto para decorar tus llaves o mochila.",
    images: [
      createSVG("#FFD1DC", "🦄"),
      createSVG("#E0BBE4", "🌈"),
      createSVG("#C7CEEA", "⭐"),
    ],
    emoji: "🦄",
  },
  {
    id: 2,
    name: "Pendientes de Nube",
    price: 12.5,
    category: "Porcelana Fría",
    description:
      "Adorables pendientes en forma de nube hechos con porcelana fría. Ligeros y cómodos de llevar todo el día. Un accesorio perfecto para completar tu look kawaii.",
    images: [
      createSVG("#E0BBE4", "☁️"),
      createSVG("#C7CEEA", "🌧️"),
      createSVG("#FDFD96", "⚡"),
    ],
    emoji: "☁️",
  },
  {
    id: 3,
    name: "Posavasos de Madera Láser",
    price: 15.99,
    category: "Madera Láser",
    description:
      "Set de 4 posavasos de madera cortados con láser con diseños kawaii. Protege tus muebles con estilo. Cada posavasos tiene un diseño único.",
    images: [
      createSVG("#B5EAD7", "🌿"),
      createSVG("#FDFD96", "🍵"),
      createSVG("#FFD1DC", "🍰"),
    ],
    emoji: "🍵",
  },
  {
    id: 4,
    name: "Colgante Acrílico Transparente",
    price: 9.99,
    category: "Acrílico Láser",
    description:
      "Hermoso colgante de acrílico transparente cortado con láser. Diseño delicado y moderno que brilla con la luz. Incluye cadena plateada.",
    images: [
      createSVG("#C7CEEA", "💎"),
      createSVG("#E0BBE4", "✨"),
      createSVG("#FFD1DC", "🌟"),
    ],
    emoji: "💎",
  },
  {
    id: 5,
    name: "Figura Decorativa de Porcelana Fría",
    price: 18.5,
    category: "Porcelana Fría",
    description:
      "Figura decorativa hecha a mano con porcelana fría. Perfecta para decorar tu escritorio o estantería. Cada pieza es única y está pintada a mano.",
    images: [
      createSVG("#FDFD96", "🐱"),
      createSVG("#B5EAD7", "🐰"),
      createSVG("#FFD1DC", "🐶"),
    ],
    emoji: "🐱",
  },
  {
    id: 6,
    name: "Caja de Madera Personalizada",
    price: 24.99,
    category: "Madera Láser",
    description:
      "Caja de madera cortada con láser que puede personalizarse con tu nombre o mensaje. Ideal para guardar pequeños tesoros o como regalo especial.",
    images: [
      createSVG("#B5EAD7", "🎁"),
      createSVG("#E0BBE4", "📦"),
      createSVG("#FDFD96", "💝"),
    ],
    emoji: "🎁",
  },
  {
    id: 7,
    name: "Llavero Acrílico Personalizado",
    price: 7.5,
    category: "Acrílico Láser",
    description:
      "Llavero de acrílico cortado con láser que puede personalizarse con tu diseño favorito. Disponible en varios colores y formas.",
    images: [
      createSVG("#C7CEEA", "🔑"),
      createSVG("#FFD1DC", "🔮"),
      createSVG("#FDFD96", "🌙"),
    ],
    emoji: "🔮",
  },
  {
    id: 8,
    name: "Set de Imanes de Porcelana Fría",
    price: 14.99,
    category: "Porcelana Fría",
    description:
      "Set de 5 imanes decorativos hechos con porcelana fría. Diseños kawaii para decorar tu refrigerador o cualquier superficie metálica.",
    images: [
      createSVG("#E0BBE4", "🍓"),
      createSVG("#FDFD96", "🍎"),
      createSVG("#B5EAD7", "🍉"),
    ],
    emoji: "🍓",
  },
  {
    id: 9,
    name: "Marcapáginas Kawaii",
    price: 5.99,
    category: "Madera Láser",
    description:
      "Adorable marcapáginas de madera con diseños kawaii. Nunca pierdas tu página con este lindo accesorio para tus libros favoritos.",
    images: [
      createSVG("#FFD1DC", "📚"),
      createSVG("#FDFD96", "📖"),
      createSVG("#E0BBE4", "🔖"),
    ],
    emoji: "📚",
  },
  {
    id: 10,
    name: "Pins Acrílicos Kawaii",
    price: 6.5,
    category: "Acrílico Láser",
    description:
      "Set de 3 pins acrílicos con diseños kawaii. Perfectos para decorar tu mochila, chaqueta o cualquier prenda.",
    images: [
      createSVG("#C7CEEA", "🌟"),
      createSVG("#FDFD96", "🌈"),
      createSVG("#B5EAD7", "✨"),
    ],
    emoji: "🌟",
  },
  {
    id: 11,
    name: "Caja Pintada Unicornio",
    price: 29.99,
    category: "Cajas Pintadas",
    description:
      "Hermosa caja de madera pintada a mano con diseño de unicornio. Perfecta para guardar joyas, recuerdos o como regalo especial.",
    images: [
      createSVG("#E0BBE4", "🦄"),
      createSVG("#FFD1DC", "🌈"),
      createSVG("#FDFD96", "✨"),
    ],
    emoji: "🦄",
  },
  {
    id: 12,
    name: "Caja Pintada Galaxia",
    price: 32.5,
    category: "Cajas Pintadas",
    description:
      "Caja de madera pintada a mano con diseño de galaxia. Colores vibrantes y detalles brillantes que la hacen única.",
    images: [
      createSVG("#C7CEEA", "🌌"),
      createSVG("#E0BBE4", "⭐"),
      createSVG("#FFD1DC", "🚀"),
    ],
    emoji: "🌌",
  },
];

// Helper function to create SVG placeholders for product images
function createSVG(bgColor, emoji) {
  return `
                <div class="w-full h-full flex items-center justify-center" style="background-color: ${bgColor};">
                    <span class="text-6xl">${emoji}</span>
                </div>
            `;
}

// Cart functionality
let cart = [];
let currentProduct = null;
let currentCategory = "Todos";

// DOM Elements
const productsContainer = document.getElementById("products-container");
const discountsSection = document.getElementById("discounts-section");
const cartSidebar = document.getElementById("cart-sidebar");
const cartItems = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const cartCount = document.getElementById("cart-count");
const overlay = document.getElementById("overlay");
const productModal = document.getElementById("product-modal");
const modalMainImage = document.getElementById("modal-main-image");
const modalImageSelectors = document.getElementById("modal-image-selectors");
const modalTitle = document.getElementById("modal-title");
const modalPrice = document.getElementById("modal-price");
const modalDescription = document.getElementById("modal-description");
const modalQuantity = document.getElementById("modal-quantity");
const mobileMenuButton = document.getElementById("mobile-menu-button");
const mobileMenu = document.getElementById("mobile-menu");

// Initialize the page
function init() {
  renderProducts(products);
  setupEventListeners();
}

// Render products to the page
function renderProducts(productsToRender) {
  productsContainer.innerHTML = "";

  productsToRender.forEach((product) => {
    const productCard = document.createElement("div");
    productCard.className =
      "product-card kawaii-shadow bg-white rounded-3xl overflow-hidden fade-in";
    productCard.innerHTML = `
                    <div class="h-48 overflow-hidden relative">
                        ${product.images[0]}
                        <div class="absolute top-2 left-2 w-8 h-8 rounded-full flex items-center justify-center" 
                             style="background-color: var(--color-${getCategoryColor(
                               product.category
                             )});">
                            <span class="text-lg">${product.emoji}</span>
                        </div>
                    </div>
                    <div class="p-4">
                        <div class="flex items-center mb-2">
                            <!-- Mini logo junto al nombre del producto -->
                            <div class="w-8 h-8 rounded-full flex items-center justify-center mr-2" style="background-color: var(--color-pink);">
                                <span class="text-lg">🌸</span>
                            </div>
                            <h3 class="font-bold text-lg">${product.name}</h3>
                        </div>
                        <div class="text-lg font-bold mb-2" style="color: #FF85A2;">$${product.price.toFixed(
                          2
                        )}</div>
                        <div class="flex justify-between items-center">
                            <span class="text-sm py-1 px-3 rounded-full" style="background-color: var(--color-${getCategoryColor(
                              product.category
                            )});">
                                ${product.category}
                            </span>
                            <div class="flex space-x-2">
                                <button class="add-to-cart-main kawaii-button p-2 rounded-full" style="background-color: var(--color-pink);" data-id="${
                                  product.id
                                }">
                                    <span class="text-xl">🛒</span>
                                </button>
                                <button class="view-product kawaii-button p-2 rounded-full" style="background-color: var(--color-blue);" data-id="${
                                  product.id
                                }">
                                    <span class="text-xl">👁️</span>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
    productsContainer.appendChild(productCard);
  });
}

// Get color based on category
function getCategoryColor(category) {
  switch (category) {
    case "Porcelana Fría":
      return "purple";
    case "Madera Láser":
      return "blue";
    case "Acrílico Láser":
      return "green";
    case "Cajas Pintadas":
      return "mint";
    default:
      return "pink";
  }
}

// Setup event listeners
function setupEventListeners() {
  // Mobile menu toggle
  mobileMenuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("hidden");
  });

  // Cart button
  document.getElementById("cart-button").addEventListener("click", toggleCart);
  document.getElementById("close-cart").addEventListener("click", toggleCart);

  // Category filtering
  document
    .querySelectorAll(".category-button, .category-tab")
    .forEach((button) => {
      button.addEventListener("click", function () {
        const category = this.textContent.trim();
        currentCategory = category;

        // Update active state
        document
          .querySelectorAll(".category-button, .category-tab")
          .forEach((btn) => {
            btn.classList.remove("active");
          });
        this.classList.add("active");

        // Show/hide sections based on category
        if (category === "Descuentos") {
          discountsSection.classList.remove("hidden");
          productsContainer.classList.add("hidden");
        } else {
          discountsSection.classList.add("hidden");
          productsContainer.classList.remove("hidden");

          // Filter products
          if (category === "Todos") {
            renderProducts(products);
          } else {
            const filteredProducts = products.filter(
              (product) => product.category === category
            );
            renderProducts(filteredProducts);
          }
        }

        // Close mobile menu if open
        mobileMenu.classList.add("hidden");
      });
    });

  // View product details
  document.addEventListener("click", function (e) {
    if (e.target.closest(".view-product")) {
      const productId = parseInt(e.target.closest(".view-product").dataset.id);
      openProductModal(productId);
    }
  });

  // Add to cart from main page
  document.addEventListener("click", function (e) {
    if (e.target.closest(".add-to-cart-main")) {
      const button = e.target.closest(".add-to-cart-main");
      const productId = button.dataset.id;

      // Check if it's a discount product
      if (productId.startsWith("d")) {
        // Handle discount products
        const discountProducts = [
          {
            id: "d1",
            name: "Llavero Unicornio",
            price: 8.79,
            originalPrice: 10.99,
            category: "Porcelana Fría",
            description:
              "Lindo llavero de unicornio hecho a mano con porcelana fría. Cada pieza es única y está diseñada con mucho amor.",
            images: [
              createSVG("#FFD1DC", "🦄"),
              createSVG("#E0BBE4", "🌈"),
              createSVG("#C7CEEA", "⭐"),
            ],
            emoji: "🦄",
          },
          {
            id: "d2",
            name: "Caja Arcoíris",
            price: 21.24,
            originalPrice: 24.99,
            category: "Cajas Pintadas",
            description:
              "Hermosa caja de madera pintada a mano con diseño de arcoíris. Colores vibrantes y acabado de alta calidad.",
            images: [
              createSVG("#E0BBE4", "🌈"),
              createSVG("#C7CEEA", "☁️"),
              createSVG("#FDFD96", "✨"),
            ],
            emoji: "🌈",
          },
          {
            id: "d3",
            name: "Llavero Estrella",
            price: 6.38,
            originalPrice: 8.5,
            category: "Acrílico Láser",
            description:
              "Llavero en forma de estrella cortado con láser en acrílico brillante. Disponible en varios colores pastel.",
            images: [
              createSVG("#FDFD96", "⭐"),
              createSVG("#FFD1DC", "✨"),
              createSVG("#C7CEEA", "🌟"),
            ],
            emoji: "⭐",
          },
          {
            id: "d4",
            name: "Posavasos Pastel",
            price: 11.19,
            originalPrice: 15.99,
            category: "Madera Láser",
            description:
              "Set de 4 posavasos de madera cortados con láser con diseños de pasteles. Protege tus muebles con estilo kawaii.",
            images: [
              createSVG("#FDFD96", "🍰"),
              createSVG("#FFD1DC", "🧁"),
              createSVG("#B5EAD7", "🍮"),
            ],
            emoji: "🍰",
          },
        ];

        const discountProduct = discountProducts.find(
          (p) => p.id === productId
        );
        if (discountProduct) {
          addToCart(discountProduct, 1);

          // Add a little animation to the button
          button.classList.add("animate-bounce");
          setTimeout(() => {
            button.classList.remove("animate-bounce");
          }, 1000);
        }
      } else {
        // Handle regular products
        const productId = parseInt(button.dataset.id);
        const product = products.find((p) => p.id === productId);
        if (product) {
          addToCart(product, 1);

          // Add a little animation to the button
          button.classList.add("animate-bounce");
          setTimeout(() => {
            button.classList.remove("animate-bounce");
          }, 1000);
        }
      }
    }
  });

  // Close modal
  document
    .getElementById("close-modal")
    .addEventListener("click", closeProductModal);

  // Quantity controls
  document.getElementById("decrease-quantity").addEventListener("click", () => {
    if (modalQuantity.value > 1) {
      modalQuantity.value = parseInt(modalQuantity.value) - 1;
    }
  });

  document.getElementById("increase-quantity").addEventListener("click", () => {
    modalQuantity.value = parseInt(modalQuantity.value) + 1;
  });

  // Add to cart from modal
  document.getElementById("add-to-cart-modal").addEventListener("click", () => {
    if (currentProduct) {
      addToCart(currentProduct, parseInt(modalQuantity.value));
      closeProductModal();
    }
  });

  // Overlay click to close modals
  overlay.addEventListener("click", () => {
    closeProductModal();
    if (cartSidebar.classList.contains("translate-x-0")) {
      toggleCart();
    }
  });
}

// Toggle cart sidebar
function toggleCart() {
  cartSidebar.classList.toggle("translate-x-full");
  cartSidebar.classList.toggle("translate-x-0");
  overlay.classList.toggle("hidden");
  renderCart();
}

// Open product modal
function openProductModal(productId) {
  // Check if it's a discount product
  if (typeof productId === "string" && productId.startsWith("d")) {
    // Handle discount products
    const discountProducts = [
      {
        id: "d1",
        name: "Llavero Unicornio",
        price: 8.79,
        originalPrice: 10.99,
        category: "Porcelana Fría",
        description:
          "Lindo llavero de unicornio hecho a mano con porcelana fría. Cada pieza es única y está diseñada con mucho amor.",
        images: [
          createSVG("#FFD1DC", "🦄"),
          createSVG("#E0BBE4", "🌈"),
          createSVG("#C7CEEA", "⭐"),
        ],
        emoji: "🦄",
      },
      {
        id: "d2",
        name: "Caja Arcoíris",
        price: 21.24,
        originalPrice: 24.99,
        category: "Cajas Pintadas",
        description:
          "Hermosa caja de madera pintada a mano con diseño de arcoíris. Colores vibrantes y acabado de alta calidad.",
        images: [
          createSVG("#E0BBE4", "🌈"),
          createSVG("#C7CEEA", "☁️"),
          createSVG("#FDFD96", "✨"),
        ],
        emoji: "🌈",
      },
      {
        id: "d3",
        name: "Llavero Estrella",
        price: 6.38,
        originalPrice: 8.5,
        category: "Acrílico Láser",
        description:
          "Llavero en forma de estrella cortado con láser en acrílico brillante. Disponible en varios colores pastel.",
        images: [
          createSVG("#FDFD96", "⭐"),
          createSVG("#FFD1DC", "✨"),
          createSVG("#C7CEEA", "🌟"),
        ],
        emoji: "⭐",
      },
      {
        id: "d4",
        name: "Posavasos Pastel",
        price: 11.19,
        originalPrice: 15.99,
        category: "Madera Láser",
        description:
          "Set de 4 posavasos de madera cortados con láser con diseños de pasteles. Protege tus muebles con estilo kawaii.",
        images: [
          createSVG("#FDFD96", "🍰"),
          createSVG("#FFD1DC", "🧁"),
          createSVG("#B5EAD7", "🍮"),
        ],
        emoji: "🍰",
      },
    ];

    currentProduct = discountProducts.find((p) => p.id === productId);
  } else {
    // Handle regular products
    currentProduct = products.find((p) => p.id === productId);
  }

  if (currentProduct) {
    modalTitle.textContent = currentProduct.name;

    // Check if it's a discount product with original price
    if (currentProduct.originalPrice) {
      modalPrice.innerHTML = `<span class="line-through text-gray-400 mr-2">$${currentProduct.originalPrice.toFixed(
        2
      )}</span> $${currentProduct.price.toFixed(2)}`;
    } else {
      modalPrice.textContent = `$${currentProduct.price.toFixed(2)}`;
    }

    modalDescription.textContent = currentProduct.description;
    modalQuantity.value = 1;

    // Set main image
    modalMainImage.innerHTML = currentProduct.images[0];

    // Set image selectors
    modalImageSelectors.innerHTML = "";
    currentProduct.images.forEach((image, index) => {
      const selector = document.createElement("div");
      selector.className = `image-selector ${index === 0 ? "active" : ""}`;
      selector.innerHTML = image;
      selector.addEventListener("click", () => {
        document
          .querySelectorAll(".image-selector")
          .forEach((s) => s.classList.remove("active"));
        selector.classList.add("active");
        modalMainImage.innerHTML = currentProduct.images[index];
      });
      modalImageSelectors.appendChild(selector);
    });

    productModal.classList.remove("hidden");
    overlay.classList.remove("hidden");
  }
}

// Close product modal
function closeProductModal() {
  productModal.classList.add("hidden");
  overlay.classList.add("hidden");
  currentProduct = null;
}

// Add product to cart
function addToCart(product, quantity = 1) {
  const existingItem = cart.find((item) => item.id === product.id);

  if (existingItem) {
    existingItem.quantity += quantity;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.images[0],
      emoji: product.emoji,
      quantity: quantity,
    });
  }

  updateCartCount();
  renderCart();

  // Show a brief notification with the product emoji
  const notification = document.createElement("div");
  notification.className =
    "fixed bottom-4 right-4 bg-white text-pink-500 py-3 px-5 rounded-full shadow-lg z-50 fade-in flex items-center cart-notification";
  notification.innerHTML = `
                <span class="text-xl mr-2">${product.emoji}</span>
                <span>¡Añadido al carrito!</span>
            `;
  notification.style.border = "2px solid #FF85A2";
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.opacity = "0";
    setTimeout(() => {
      document.body.removeChild(notification);
    }, 300);
  }, 2000);
}

// Update cart count badge
function updateCartCount() {
  const count = cart.reduce((total, item) => total + item.quantity, 0);
  cartCount.textContent = count;

  // Add a little animation to the cart icon
  const cartButton = document.getElementById("cart-button");
  cartButton.classList.add("animate-bounce");
  setTimeout(() => {
    cartButton.classList.remove("animate-bounce");
  }, 1000);
}

// Render cart items
function renderCart() {
  if (cart.length === 0) {
    cartItems.innerHTML = `
                    <div class="flex justify-center items-center h-full text-gray-400">
                        <div class="text-center">
                            <div class="text-5xl mb-3">🛍️</div>
                            <p>Tu carrito está vacío</p>
                        </div>
                    </div>
                `;
    cartTotal.textContent = "$0.00";
    return;
  }

  cartItems.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const itemTotal = item.price * item.quantity;
    total += itemTotal;

    const cartItem = document.createElement("div");
    cartItem.className =
      "cart-item bg-white p-3 mb-3 flex items-center kawaii-shadow";
    cartItem.innerHTML = `
                    <div class="w-16 h-16 rounded-lg overflow-hidden mr-3 relative">
                        ${item.image}
                        <div class="absolute top-1 left-1 w-6 h-6 rounded-full flex items-center justify-center" 
                             style="background-color: var(--color-pink);">
                            <span class="text-sm">${item.emoji || "🌸"}</span>
                        </div>
                    </div>
                    <div class="flex-grow">
                        <div class="flex items-center">
                            <h4 class="font-medium">${item.name}</h4>
                        </div>
                        <div class="flex justify-between items-center mt-1">
                            <div class="flex items-center">
                                <button class="decrease-cart-item p-1 rounded-full" style="background-color: var(--color-blue);" data-id="${
                                  item.id
                                }">
                                    <span class="text-xs">➖</span>
                                </button>
                                <span class="mx-2">${item.quantity}</span>
                                <button class="increase-cart-item p-1 rounded-full" style="background-color: var(--color-blue);" data-id="${
                                  item.id
                                }">
                                    <span class="text-xs">➕</span>
                                </button>
                            </div>
                            <div class="font-bold">$${itemTotal.toFixed(
                              2
                            )}</div>
                        </div>
                    </div>
                    <button class="remove-from-cart ml-2 p-1 rounded-full" style="background-color: var(--color-pink);" data-id="${
                      item.id
                    }">
                        <span class="text-sm">✖️</span>
                    </button>
                `;
    cartItems.appendChild(cartItem);
  });

  // Add a cute summary at the bottom
  const cartSummary = document.createElement("div");
  cartSummary.className = "p-3 rounded-xl mt-4 text-center";
  cartSummary.style.backgroundColor = "var(--color-yellow)";
  cartSummary.innerHTML = `
                <div class="flex justify-center mb-2">
                    ${Array.from(
                      { length: Math.min(5, cart.length) },
                      (_, i) =>
                        `<span class="text-lg mx-1">${
                          cart[i % cart.length].emoji || "🌸"
                        }</span>`
                    ).join("")}
                </div>
                <p class="text-sm">¡Tienes ${cart.reduce(
                  (total, item) => total + item.quantity,
                  0
                )} productos kawaii en tu carrito!</p>
            `;
  cartItems.appendChild(cartSummary);

  cartTotal.textContent = `$${total.toFixed(2)}`;

  // Add event listeners to cart item buttons
  document.querySelectorAll(".remove-from-cart").forEach((button) => {
    button.addEventListener("click", function () {
      const itemId = this.dataset.id;
      removeFromCart(itemId);
    });
  });

  document.querySelectorAll(".decrease-cart-item").forEach((button) => {
    button.addEventListener("click", function () {
      const itemId = this.dataset.id;
      updateCartItemQuantity(itemId, -1);
    });
  });

  document.querySelectorAll(".increase-cart-item").forEach((button) => {
    button.addEventListener("click", function () {
      const itemId = this.dataset.id;
      updateCartItemQuantity(itemId, 1);
    });
  });
}

// Update cart item quantity
function updateCartItemQuantity(productId, change) {
  const item = cart.find((item) => item.id === productId);
  if (item) {
    item.quantity += change;
    if (item.quantity <= 0) {
      removeFromCart(productId);
    } else {
      updateCartCount();
      renderCart();
    }
  }
}

// Remove item from cart
function removeFromCart(productId) {
  cart = cart.filter((item) => item.id !== productId);
  updateCartCount();
  renderCart();
}

// Initialize the page when DOM is loaded
document.addEventListener("DOMContentLoaded", init);

(function () {
  function c() {
    var b = a.contentDocument || a.contentWindow.document;
    if (b) {
      var d = b.createElement("script");
      d.innerHTML =
        "window.__CF$cv$params={r:'966fd23ba118741d',t:'MTc1MzgyNTcxNC4wMDAwMDA='};var a=document.createElement('script');a.nonce='';a.src='/cdn-cgi/challenge-platform/scripts/jsd/main.js';document.getElementsByTagName('head')[0].appendChild(a);";
      b.getElementsByTagName("head")[0].appendChild(d);
    }
  }
  if (document.body) {
    var a = document.createElement("iframe");
    a.height = 1;
    a.width = 1;
    a.style.position = "absolute";
    a.style.top = 0;
    a.style.left = 0;
    a.style.border = "none";
    a.style.visibility = "hidden";
    document.body.appendChild(a);
    if ("loading" !== document.readyState) c();
    else if (window.addEventListener)
      document.addEventListener("DOMContentLoaded", c);
    else {
      var e = document.onreadystatechange || function () {};
      document.onreadystatechange = function (b) {
        e(b);
        "loading" !== document.readyState &&
          ((document.onreadystatechange = e), c());
      };
    }
  }
})();
