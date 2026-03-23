// Write your code here
const products = ["Laptop", "Phone", "Headphones", "Monitor"];


console.log(products);


function logFirstProduct() {
  
  console.log("The first product in inventory is:", products[0]);
}

function addProduct(productName) {
  products.push(productName);
  console.log(productName + " was added to the inventory.");
}

function updateProductName(position, newName) {
  products[position] = newName;
  console.log("Product at index " + position + " was updated to " + newName + ".");
}

function removeLastProduct() {
  let removedItem = products.pop();
  console.log(removedItem + " was removed from the inventory.");
}

logFirstProduct();
// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
