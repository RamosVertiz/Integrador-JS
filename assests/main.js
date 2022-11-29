const products = document.querySelector(".products-container");
const productsCart = document.querySelector(".cart-container");
const total = document.querySelector(".total");
const categories = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");
const buyBtn = document.querySelector(".btn-buy");
const cartBtn = document.querySelector(".cart-label");
const barsBtn = document.querySelector(".menu-label");
const cartMenu = document.querySelector(".cart");
const barsMenu = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");

const successModal = document.querySelector(".add-modal");
const deleteBtn = document.querySelector(".btn-delete");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveLocalStorage = (cartList) => {
    localStorage.setItem("cart", JSON.stringify(cartList));
};


// Renderizar productos

const renderProduct = (product) => {
  const { img, name, promotionPrice, discount, price, id } = product;

    return `
     <div class="product">
            <img src=${img} alt=${name} />
            <h3>${name}</h3>
            <div class= "product-discount">
            <span class="promotionPrice">${promotionPrice}</span>
            <span class="discount">${discount}</span>
            </div>
            <div class="product-offer">
                <p>$${price}</p>
                <button class="btn-add"
                    data-id='${id}'
                    data-name='${name}'
                    data-price='${price}'
                    data-img='${img}'
                >Agregar</button>
            </div>
     </div>      
    `;
};


const renderPopularProducts = () => {
  products.innerHTML += mostPopularProducts()
    .map(renderProduct) // .map((e) => renderProduct(e))
    .join("");
};

const renderFilteredProducts = (category) => {
  const productsList = productData.filter(
      (product) => product.category === category
  );
  products.innerHTML = productsList.map(renderProduct).join('');
};

const renderProducts = (category = undefined) => {
  if (!category) {
    renderPopularProducts();
    return;
  }
  renderFilteredProducts(category);
};

//Filtros

const changeFilterState = (e) => {
  const selectedCategory = e.target.dataset.category;
  changeBtnActiveState(selectedCategory);
};
  

const changeBtnActiveState = (selectedCategory) => {
  const categories = [...categoriesList];
  categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
      categoryBtn.classList.remove("active");
      return;
    }
    categoryBtn.classList.add("active");
  });
};
  
  const applyFilter = (e) => {
  if (!e.target.matches(".category")) return;
  changeFilterState(e);
  if (!e.target.dataset.category) {
    products.innerHTML = "";
    renderProducts();
  } 
  else {
    renderProducts(e.target.dataset.category);
  }

  };

const toggleMenu = () => {
  barsMenu.classList.toggle("open-menu");
  if (cartMenu.classList.contains("open-cart")) {
    cartMenu.classList.remove("open-cart");
    return;
    }
    overlay.classList.toggle("show-overlay");
};

const toggleCart = () => {
  cartMenu.classList.toggle("open-cart");
  if (barsMenu.classList.contains("open-menu")) {
    barsMenu.classList.remove("open-menu");
    return;
  }
  overlay.classList.toggle("show-overlay");
};

const closeOnClick = (e) => {
  if (!e.target.classList.contains("navbar-link")) return;
  barsMenu.classList.remove("open-menu");
  overlay.classList.remove("show-overlay");
};
const closeOnOverlayClick = () => {
  barsMenu.classList.remove("open-menu");
  cartMenu.classList.remove("open-cart");
  overlay.classList.remove("show-overlay");
};

const renderCartProduct = (cartProduct) => {
  const { id, name, price, img, quantity } = cartProduct;
  return `    
  <div class="cart-item">
    <img src=${img} alt="camiseta" />
    <div class="item-info">
      <h3 class="item-title">${name}</h3>
      <span class="item-price">$${price}</span>
    </div>
    <div class="item-handler">
      <span class="quantity-handler down" data-id=${id}>-</span>
      <span class="item-quantity">${quantity}</span>
      <span class="quantity-handler up" data-id=${id}>+</span>
    </div>
  </div>`;
};



const renderCart = () => {
  if (!cart.length) {
    productsCart.innerHTML = `<p class="empty-msg"> SU CARRITO ESTA VACIO </p>`;
    return;
  }
  productsCart.innerHTML = cart.map(renderCartProduct).join("");
};

const getCartTotal = () => {
  return cart.reduce(
    (acc, cur) => acc + Number(cur.price) * Number(cur.quantity),
    0
  );
};

const showTotal = () => {
  total.innerHTML = `$ ${getCartTotal().toFixed(2)} `;
};
const disableBtn = (btn) => {
  if (!cart.length) {
    btn.classList.add("disabled");
    return;
  }
  btn.classList.remove("disabled");
};

const addUnitToProduct = (product) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === product.id
      ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
      : cartProduct;
  });
};

const createCartProduct = (product) => {
  cart = [...cart, { ...product, quantity: 1 }];
};

const isExistingCartProduct = (product) => {
  return cart.find((item) => item.id === product.id);
};

const createProductData = (id, name, price, img) => {
  return { id, name, price, img };
};

const checkCartState = () => {
  saveLocalStorage(cart);
  renderCart(cart);
  showTotal(cart);
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
};

const showSuccessModal = (msg) => {
  successModal.classList.add("active-modal");
  successModal.textContent = msg;
  setTimeout(() => {
    successModal.classList.remove("active-modal");
  }, 2000);
};

const addProduct = (e) => {
  if (!e.target.classList.contains("btn-add")) return;
  const { id, name, price, img } = e.target.dataset;

  const product = createProductData(id, name, price, img);

  if (isExistingCartProduct(product)) {
    addUnitToProduct(product);
    showSuccessModal("Se agregó una unidad del producto al carrito 😊");
  } else {
    createCartProduct(product);
    showSuccessModal("El producto se ha agregado al carrito");
  }
  checkCartState();
};

const substractProductUnit = (existingProduct) => {
  cart = cart.map((cartProduct) => {
    return cartProduct.id === existingProduct.id
      ? { ...cartProduct, quantity: cartProduct.quantity - 1 }
      : cartProduct;
  });
};

const removeProductFromCart = (existingProduct) => {
  cart = cart.filter((product) => product.id !== existingProduct.id);
  checkCartState();
};

const handleMinusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);

  if (existingCartProduct.quantity === 1) {
    if (window.confirm("¿Desea Eliminar el producto del carrito?")) {
      removeProductFromCart(existingCartProduct);
    }
    return;
  }
  substractProductUnit(existingCartProduct);
};

const handlePlusBtnEvent = (id) => {
  const existingCartProduct = cart.find((item) => item.id === id);
  addUnitToProduct(existingCartProduct);
};

const handleQuantity = (e) => {
  if (e.target.classList.contains("down")) {
    handleMinusBtnEvent(e.target.dataset.id);
  } else if (e.target.classList.contains("up")) {
    handlePlusBtnEvent(e.target.dataset.id);
  }
  checkCartState();
};

const resetCartItems = () => {
  cart = [];
  checkCartState();
};

const completeCartAction = (confirmMsg, successMsg) => {
  if (!cart.length) return;
  if (window.confirm(confirmMsg)) {
    resetCartItems();
    alert(successMsg);
  }
};


const completeBuy = () => {
  completeCartAction(
    "¿Desea completar su compra?" ,
    "La compra se ha realizado correctamente"
  );
};

const deleteCart = () => {
  completeCartAction(
    "¿Está seguro de que desea vaciar el carrito?",
    "El carrito esta vacío."
  );
};


  
const init = () => {
  renderProducts();
  categories.addEventListener("click", applyFilter);
  barsBtn.addEventListener("click", toggleMenu);
  cartBtn.addEventListener("click", toggleCart);
  barsMenu.addEventListener("click", closeOnClick);
  overlay.addEventListener("click", closeOnOverlayClick);
  document.addEventListener("DOMContentLoaded", renderCart);
  document.addEventListener("DOMContentLoaded", showTotal);
  products.addEventListener("click", addProduct);
  productsCart.addEventListener("click", handleQuantity);
  buyBtn.addEventListener("click", completeBuy);
  deleteBtn.addEventListener("click", deleteCart);
  disableBtn(buyBtn);
  disableBtn(deleteBtn);
};

init();




