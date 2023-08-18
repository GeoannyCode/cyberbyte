
/*
 * This function calculates total price of a new order
 * @params {Array} products cartProducts: Array of Objects 
 * @return {number} Total price
 */


export const totalPrice = (productList) => {
    const listPrices = productList.map( product => product.price)
    return sumArray(listPrices)
}

function sumArray(arr){
    return arr.reduce( (total, currentValue) => total + currentValue, 0)
}