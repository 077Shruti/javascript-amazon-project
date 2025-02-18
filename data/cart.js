export let cart ;
loadFromStorage();


export function loadFromStorage(){
  cart=JSON.parse(localStorage.getItem('cart'));
if (!cart) {
  cart = [
    {
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 2,
      deliveryOptionId: "1",
    },
    {
      productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
      quantity: 1,
      deliveryOptionId: "2",
    }];
}
}

function saveToStorage() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

export function addToCart(productId) {
  const matchingItem = cart.find((cartItem) => cartItem.productId === productId);

  if (matchingItem) {
    matchingItem.quantity += 1;
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: "1", 
    });
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  cart = cart.filter((cartItem) => cartItem.productId !== productId);
  saveToStorage();
}

export function updateDeliveryOption(productId, deliveryOptionId) {
  const matchingItem = cart.find((cartItem) => cartItem.productId === productId);

  if (matchingItem) {
    matchingItem.deliveryOptionId = deliveryOptionId;
    saveToStorage();
  } else {
    console.error(`Product with ID ${productId} not found in cart.`);
  }
}

// export function loadCartfetch(){
//   const Promise=fetch('https://supersimplebackend.dev/cart').then((response)=>{
//     return response.json();

//   }).then((cartdata)=>{
//     console.log(cartdata);
//     fun();

//   });
// }

export function loadCart(fun){
 const xhr= new XMLHttpRequest();
 xhr.addEventListener('load',()=>{
     console.log(xhr.response);
    fun();
 });
 xhr.open('GET','https://supersimplebackend.dev/cart');
 xhr.send();
}
