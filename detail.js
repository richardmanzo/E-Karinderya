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

// const initApp = () =>{
//     let idProduct = new URLSearchParams(window.location.search).get('id');
//     let info = products.filter((value) => value.id == idProduct) [0];
//     console.log(info);
//     if (!info){
//         window.location.href= '/';
//     }
// }