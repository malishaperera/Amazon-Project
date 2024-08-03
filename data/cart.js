export const cart = [];


export function addToCart(productId){

  let matchingItem;

  //check if the product is already in the cart
  cart.forEach((cartItem) => {
    if(productId === cartItem.productId){
      matchingItem = cartItem;
    }
  });

  //if it is in the cart, increase the quantity
  if(matchingItem){
    matchingItem.quantity += 1;
  }else{
    //if it's not in the cart, add it to the cart.
    cart.push({
      productId:productId,
      quantity: 1
    });
  }
}
















