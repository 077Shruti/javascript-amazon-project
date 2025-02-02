import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
// import '../data/cart-class.js';
// import '../data/backend-practice.js';
import { loadProductsfetch } from "../data/products.js";
import { loadCart } from "../data/cart.js";


async function LoadPage(){
   await loadProductsfetch();

   const value=await new Promise((resolve)=>{
    loadCart(()=>{
    resolve('value 3');

    });
});
    renderOrderSummary();
    renderPaymentSummary();
}
LoadPage();


/*
Promise.all([
    loadProductsfetch(),
    new Promise((resolve)=>{
        loadCart(()=>{
        resolve();

        });
    })

]).then((value)=>{
    console.log(value);
    renderOrderSummary();
    renderPaymentSummary();

});
*/
// new Promise((resolve)=>{
//     loadProducts(()=>{
//         resolve('value1');                    
//     });

// }).then((value)=>{
//     console.log(value);
//     return new Promise((resolve)=>{
//         loadCart(()=>{
//         resolve();

//         });
//     });

// }).then(()=>{
//         renderOrderSummary();
//         renderPaymentSummary();

        

    
    
// });

/*
loadProducts(()=>{
    loadCart(()=>{
        renderOrderSummary();
        renderPaymentSummary();     
    });
});
*/
              