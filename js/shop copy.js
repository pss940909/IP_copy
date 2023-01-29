const productData = [
  {
    id: 1,
    title: "Classic Sofa",
    color: "Ivory",
    material:
      "Construction - Kiln-Dried Wood And Poly Fill Cushions. Fabric - 95% Polyester, 5% Linen.",
    assembly_required: "No",
    origin_price: 23999,
    price: 21000,
    dimensions: '39"H x 81"W x 35"D',
    imgUrl: "../img/product4.jpg",
    category: "sofa",
  },
  {
    id: 2,
    title: "Modern Sofa, Ocean Velvet",
    color: "blue",
    material:
      "Construction - Kiln-Dried Wood And Poly Fill Cushions; Powdercoated Steel Legs. Fabric - 100% Polyester.",
    assembly_required: "No",
    origin_price: 27999,
    price: 25000,
    dimensions: '32"H X 89"W X 33.5"D',
    imgUrl: "../img/product2.jpg",
    category: "sofa",
  },
  {
    id: 3,
    title: "Carleton 81 Square Arm Sofa",
    color: "Durango Marine",
    material: "leather.",
    assembly_required: "No",
    origin_price: 45999,
    price: 42000,
    dimensions: '36"H X 81"W X 39"D',
    imgUrl: "../img/product3.jpg",
    category: "sofa",
  },
  {
    id: 4,
    title: "Kaila Sofa",
    color: "Reese Fog",
    material: "polyester",
    assembly_required: "No",
    origin_price: 32999,
    price: 31000,
    dimensions: "33'' H x 91'' W x 39'' D",
    imgUrl: "../img/product1.jpg",
    category: "sofa",
  },
  {
    id: 5,
    title: "Industrial Storage Modular Desk",
    color: "black",
    material: "Wood, Metal",
    assembly_required: "No",
    origin_price: 35999,
    price: 35000,
    dimensions: '64"H x 64"W x 35"D',
    imgUrl: "../img/product5.jpg",
    category: "desk",
  },
  {
    id: 6,
    title: "Rosamonde Desk",
    color: "Natural,Brown",
    material: "Wood, Metal",
    assembly_required: "No",
    origin_price: 31999,
    price: 30000,
    dimensions: '39"H x 81"W x 35"D',
    imgUrl: "../img/product6.jpg",
    category: "desk",
  },
  {
    id: 7,
    title: "Stacia Upholstered Side Chair",
    color: "black",
    material: "Wood, Metal",
    assembly_required: "No",
    origin_price: 12999,
    price: 12000,
    dimensions: '32"H x 20"W x 35"D',
    imgUrl: "../img/product7.jpg",
    category: "chair",
  },
  {
    id: 8,
    title: "Lombok Wooden Chair",
    color: "Natural",
    material: "Locally Sourced Wood",
    assembly_required: "No",
    origin_price: 15999,
    price: 15000,
    dimensions: '35"H x 25"W x 35"D',
    imgUrl: "../img/product8.jpg",
    category: "chair",
  },
  {
    id: 9,
    title: "Sydney Morgan Velvet Chair",
    color: "Gray",
    material: "Velvet",
    assembly_required: "No",
    origin_price: 18999,
    price: 18000,
    dimensions: '29.5"W X 31.9"D X 34"H',
    imgUrl: "../img/product9.jpg",
    category: "chair",
  },
];

const productPanel = document.querySelector(".product_list");
let productHTMLtemp = "";
productData.forEach(function (item) {
  productHTMLtemp += `<li class="product_item" >
    <a href="shop_product.html"
      ><img src="${item.imgUrl}" alt="${item.title}" class='product_img'
    /></a>
    <i class="fa-solid fa-cart-plus fa-xl addToCart" data-id='${item.id}'></i>
    
      <h3 class="product_name">${item.title}</h3>
      <p class="product_price">
      ${item.price}
      </p>
    
  </li>`;
});
productPanel.innerHTML = productHTMLtemp;

// 側邊選單
/* Set the width of the side navigation to 250px */
function openNav() {
  document.getElementById("mySidenav").style.width = "600px";
}

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

// 取得addtocart的DOM
const addToCartBtn = document.querySelectorAll(".addToCart");
// 宣告購物車清單
let cart;
// 確認購物車內是否已經有資料
if (localStorage.getItem("cart")) {
  cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);
} else {
  cart = [];
}

// 監聽add to cart btn
addToCartBtn.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const id = e.target.dataset.id;

    // 取得產品價格
    const price = Number(
      this.parentElement.querySelector(".product_price").textContent
    );
    console.log(price);
    // 取得產品名稱
    const title = this.parentElement.querySelector(".product_name").textContent;
    console.log(title);
    // 取得產品圖片
    const imgLink = this.parentElement
      .querySelector(".product_img")
      .getAttribute("src");
    console.log(imgLink);
    cart.push({ name: title, price: price, img: imgLink });
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCart();
  });
});

// 更新購物車
function updateCart() {
  console.log("updateCart");
  let cartTemp = "";
  // total!
  let total = 0;

  let cart = JSON.parse(localStorage.getItem("cart"));
  console.log(cart);

  // remove all children from cart__items
  document.querySelector(".cartRenderArea").innerHTML = "";

  cart.forEach(function (item) {
    cartTemp += `<tr>
    <td>
      <div class="cartItem-title">
        <img src="${item.img}" alt="" />
        <p>${item.name}</p>
      </div>
    </td>
    <td>${item.price}</td>
    <td class="qty_ctrl">
      <a href="#">-</a>
      <a class="qty">1</a>
      <a href="#">+</a>
    </td>
    <td>${item.price}</td>
    <td class="discardBtn_side">
      <i class="fa-solid fa-trash-can"></i>
    </td>
  </tr>`;
  });
  document.querySelector(".cartRenderArea").innerHTML = cartTemp;
}
