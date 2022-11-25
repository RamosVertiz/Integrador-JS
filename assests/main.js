const products = document.querySelector(".products-container");
const productsCarts = document.querySelector(".cart-container");
const total = document.querySelector(".total");
const categories = document.querySelector(".categories");
const categoriesList = document.querySelectorAll(".category");
const buyBtn = document.querySelector(".btn-buy");
const cartBtn = document.querySelector(".cart-label");
const barsBtn = document.querySelector(".menu-label");
const cartMenu = document.querySelector(".cart");
const barsmenu = document.querySelector(".navbar-list");
const overlay = document.querySelector(".overlay");

const successModal = document.querySelector(".add-modal");
const deleteBtn = document.querySelector(".btn-delete");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const saveLocalStorage = (cartList) => {
    localStorage.setItem("cart", JSON.stringify(cartList));
};


// Renderizar productos

const renderProduct = (product) => {
  const { img, name, price, id } = product;

    return `
     <div class="product">
            <img src=${img} alt=${name} />
            <h3>${name}</h3>
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

  
const init = () => {
  renderProducts();
  categories.addEventListener("click", applyFilter);
  barsBtn.addEventListener("click", toggleMenu);
  // cartBtn.addEventListener("click", toggleCart);
  // barsMenu.addEventListener("click", closeOnClick);
  // window.addEventListener("scroll", closeOnScroll);
  // overlay.addEventListener("click", closeOnOverlayClick);
  // document.addEventListener("DOMContentLoaded", renderCart);
  // document.addEventListener("DOMContentLoaded", showTotal);
  // products.addEventListener("click", addProduct);
  // productsCart.addEventListener("click", handleQuantity);
  // buyBtn.addEventListener("click", completeBuy);
  // deleteBtn.addEventListener("click", deleteCart);
  // disableBtn(buyBtn);
  // disableBtn(deleteBtn);
};

init();




