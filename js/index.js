const body = document.querySelector("body");
const main = document.querySelector(".container");
const productsSection = document.querySelector(".products");
let categorias = [];

function listarProdutos(produtos, categoria) {
  for (let i = 0; i < produtos.length; i++) {
    if (produtos[i].tag[0] == categoria) {
      const productCard = document.createElement("div");
      const productImgDiv = document.createElement("div");
      const productImg = document.createElement("img");
      const productInfo = document.createElement("div");
      const productCategory = document.createElement("p");
      const productTitle = document.createElement("h3");
      const productDescription = document.createElement("p");
      const productPrice = document.createElement("p");
      const productAddCart = document.createElement("a");

      // Card
      productCard.classList.add("card");
      productCard.id = produtos[i].id;
      productsSection.appendChild(productCard);

      // Img
      productImgDiv.classList.add("product_img");
      productImg.src = produtos[i].img;
      productCard.appendChild(productImgDiv);
      productImgDiv.appendChild(productImg);

      // Product Info
      productInfo.classList.add("product_info");
      productCard.appendChild(productInfo);

      // Product Categoria
      productCategory.innerText = produtos[i].tag;
      productCategory.id = "product_category";
      productInfo.appendChild(productCategory);

      // Product Title
      productTitle.id = "product_title";
      productTitle.innerText = produtos[i].nameItem;
      productInfo.appendChild(productTitle);

      // Product Description
      productDescription.id = "product_description";
      productDescription.innerText = produtos[i].description;
      productInfo.appendChild(productDescription);

      // Product Price
      productPrice.id = "product_price";
      productPrice.innerText = `R$${produtos[i].value
        .toFixed(2)
        .replace(".", ",")}`;
      productInfo.appendChild(productPrice);

      // Add Cart Button
      productAddCart.id = "add_cart";
      productAddCart.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Adicionar ao Carrinho`;
      productAddCart.href = "#" + produtos[i].id;
      productInfo.appendChild(productAddCart);
    } else if (categoria == "Todos") {
      const productCard = document.createElement("div");
      const productImgDiv = document.createElement("div");
      const productImg = document.createElement("img");
      const productInfo = document.createElement("div");
      const productCategory = document.createElement("p");
      const productTitle = document.createElement("h3");
      const productDescription = document.createElement("p");
      const productPrice = document.createElement("p");
      const productAddCart = document.createElement("a");

      // Card
      productCard.classList.add("card");
      productCard.id = produtos[i].id;
      productsSection.appendChild(productCard);

      // Img
      productImgDiv.classList.add("product_img");
      productImg.src = produtos[i].img;
      productCard.appendChild(productImgDiv);
      productImgDiv.appendChild(productImg);

      // Product Info
      productInfo.classList.add("product_info");
      productCard.appendChild(productInfo);

      // Product Categoria
      productCategory.innerText = produtos[i].tag;
      productCategory.id = "product_category";
      productInfo.appendChild(productCategory);

      // Product Title
      productTitle.id = "product_title";
      productTitle.innerText = produtos[i].nameItem;
      productInfo.appendChild(productTitle);

      // Product Description
      productDescription.id = "product_description";
      productDescription.innerText = produtos[i].description;
      productInfo.appendChild(productDescription);

      // Product Price
      productPrice.id = "product_price";
      productPrice.innerText = `R$${produtos[i].value
        .toFixed(2)
        .replace(".", ",")}`;
      productInfo.appendChild(productPrice);

      // Add Cart Button
      productAddCart.id = "add_cart";
      productAddCart.innerHTML = `<i class="fa-solid fa-cart-plus"></i> Adicionar ao Carrinho`;
      productAddCart.href = "#" + produtos[i].id;
      productInfo.appendChild(productAddCart);
    }
  }
}

listarProdutos(data, "Todos");

const cartProducts = document.querySelector("#cart_products");
const products = document.querySelector(".products");
const cartList = document.createElement("ul");
let cartTotalItem = 0;
let cartTotalPrice = 0;
cartList.id = "cartList";
cartProducts.appendChild(cartList);

function addToCart(produtoId) {
  const cartProduct = document.createElement("li");
  cartProduct.id = produtoId;
  cartList.appendChild(cartProduct);

  const productImgDiv = document.createElement("div");
  productImgDiv.classList.add("img_div");
  cartProduct.appendChild(productImgDiv);
  const productImg = document.createElement("img");
  productImg.src = data[produtoId - 1].img;
  productImg.id = data[produtoId - 1].id;
  productImgDiv.appendChild(productImg);

  const productInfo = document.createElement("div");
  productInfo.classList.add("div_info");
  cartProduct.appendChild(productInfo);

  const productName = document.createElement("p");
  productName.innerText = data[produtoId - 1].nameItem;
  productName.id = "product_title";
  productInfo.appendChild(productName);

  const productPrice = document.createElement("p");
  productPrice.innerText = `R$${data[produtoId - 1].value
    .toFixed(2)
    .replace(".", ",")}`;
  productPrice.id = "product_price";
  productInfo.appendChild(productPrice);

  const productRemove = document.createElement("a");
  productRemove.innerText = "Remover Produto";
  productRemove.href = "#";
  productRemove.id = "product_remove";
  productInfo.appendChild(productRemove);

  cartTotalItem += 1;
  cartTotalPrice += data[produtoId - 1].value;

  const cartInfo = document.getElementById("cart_info");
  cartInfo.style = "display:flex";

  const cartQuantityP = document.getElementById("product_quantityp");
  cartQuantityP.innerText = "Quantidade:";

  const cartTotalP = document.getElementById("product_totalp");
  cartTotalP.innerText = "Total:";

  const cartQuantity = document.getElementById("product_quantity");
  cartQuantity.innerText = cartTotalItem;

  const cartTotal = document.getElementById("product_total");
  cartTotal.innerText = "R$" + cartTotalPrice.toFixed(2).replace(".", ",");
}

products.addEventListener("click", (event) => {
  const target = event.target;
  const produtoId = target.parentElement.parentElement.id;

  if (produtoId >= 1 && target.id == "add_cart") {
    addToCart(produtoId);
    document.querySelector("#cart_products p").setAttribute("hidden", "true");
    document
      .querySelector("#cart_products p:nth-child(2)")
      .setAttribute("hidden", "true");
    document.querySelector("#cart_products").style = "padding: 0;";
  }
});

cartList.addEventListener("click", (event) => {
  const target = event.target;
  const productId = document.querySelector;
  const produto = target.parentElement.parentElement;

  if (target.id == "product_remove") {
    const cartProduct = document.querySelectorAll("#cartList li");

    for (let i = 0; i < cartProduct.length; i++) {
      if (produto.id.includes(cartProduct[i].id)) {
        cartList.removeChild(produto);

        cartTotalItem -= 1;
        const cartQuantity = document.getElementById("product_quantity");
        cartQuantity.innerText = cartTotalItem;

        cartTotalPrice -= data[produto.id - 1].value;
        const cartTotal = document.getElementById("product_total");
        cartTotal.innerText =
          "R$" + cartTotalPrice.toFixed(2).replace(".", ",");
      }
    }

    if (document.querySelector("#cartList").childElementCount <= 0) {
      document.querySelector("#cart_products p").removeAttribute("hidden");
      document
        .querySelector("#cart_products p:nth-child(2)")
        .removeAttribute("hidden");
      document.querySelector("#cart_info").style = "display: none;";
      document.querySelector("#cart_products").style = "padding: 50px 0;";
    }
  }
});

function getCategory(lista) {
  for (let i = 0; i < lista.length; i++) {
    categorias.push(lista[i].tag[0]);
  }
  categorias = [...new Set(categorias)];
}

getCategory(data);

const navHeader = document.querySelector("header nav");

navHeader.addEventListener("click", (event) => {
  filhosDiv = productsSection.children.length;
  target = event.target.innerText;

  if (target == "Todos") {
    for (let i = 0; i < filhosDiv; i++) {
      document.querySelector(".card").remove();
    }
    listarProdutos(data, "Todos");
  } else if (target == "Acessórios") {
    for (let i = 0; i < filhosDiv; i++) {
      document.querySelector(".card").remove();
    }
    listarProdutos(data, "Acessórios");
  } else if (target == "Calçados") {
    for (let i = 0; i < filhosDiv; i++) {
      document.querySelector(".card").remove();
    }
    listarProdutos(data, "Calçados");
  } else if (target == "Camisetas") {
    for (let i = 0; i < filhosDiv; i++) {
      document.querySelector(".card").remove();
    }
    listarProdutos(data, "Camisetas");
  }
});

const searchBar = document.querySelector("form");

searchBar.addEventListener("submit", pesquisar);

function pesquisar(event) {
  event.preventDefault();
  filhosDiv = productsSection.children.length;

  const form = event.target;
  const target = form[0].value;
  for (let i = 0; i < filhosDiv; i++) {
    document.querySelector(".card").remove();
  }
  for (let dataIndice = 0; dataIndice < data.length; dataIndice++) {
    let nomeProduct = data[dataIndice].nameItem.toLowerCase();
    if (nomeProduct.includes(target.toLowerCase())) {
      produtoPesquisado = [data[dataIndice]];
      listarProdutos(produtoPesquisado, data[dataIndice].tag[0]);
    }
  }
}
