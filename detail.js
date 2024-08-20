import products from "./products.js";
import cart from "./cart.js";

let app = document.getElementById('app');
let temporaryContent = document.getElementById('temporaryContent');

//load template file
const loadTemplate = () => {
    fetch('/template.html')
    .then(response => response.text())
    .then(html => {
        app.innerHTML = html;
        let contentTab = document.getElementById('contentTab');
        contentTab.innerHTML = temporaryContent .innerHTML;
        temporaryContent.innerHTML = null; 
        cart(); 
        initApp();
    })
}
loadTemplate();

const initApp = () =>{
    let idProduct = new URLSearchParams(window.location.search).get('id');
    let info = products.filter((value) => value.id == idProduct) [0];
    console.log(info);
    if (!info){
        window.location.href= '/';
    }
    let detail = document.querySelector('.detail');
    detail.querySelector('.image img').src = info.images;
    detail.querySelector('.name').innerText = info.name;
    detail.querySelector('.price').innerText = '₱' + info.price;
    detail.querySelector('.description').innerText = info.description;
    detail.querySelector('.addCart').dataset.id = idProduct;

    let listProduct = document.querySelector('.listProduct'); 
    listProduct.innerHTML = null;
    products.forEach(product =>{
       let newProduct = document.createElement('div')
       newProduct.classList.add('item');
       newProduct.innerHTML =
       `
       <a href="detail.html?id=${product.id}">
       <img src="${product.images}"/>
       </a>
       <h2>${product.name}</h2>
       <div class="price">₱${product.price}</div>
       <button class="addCart"
       data-id="${product.id}">
           Add To Cart
       </button>
       `;
       listProduct.appendChild(newProduct);
    })
}
