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
  productHTMLtemp += `<li class="product_item" data-id='${item.id}'>
    <a href="shop_product.html"
      ><img src="${item.imgUrl}" alt="${item.title}"
    /></a>
    <a href="#"
      ><iconify-icon
        icon="material-symbols:shopping-cart-outline"
        class="cart"
      ></iconify-icon
    ></a>
    <div class="product_detail">
      <h3 class="product_name">${item.title}</h3>
      <p class="product_price">
      $${item.price}<span class="origin_price"> $${item.origin_price}</span>
      </p>
    </div>
  </li>`;
});
productPanel.innerHTML = productHTMLtemp;
