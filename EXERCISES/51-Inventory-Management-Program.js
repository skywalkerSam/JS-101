// In this lab, you will build an inventory management program that will allow you to add, update, find and remove products from the inventory. You will use an array of objects to represent your inventory, where each object will have name and quantity as the keys.

let inventory = [];

function findProductIndex(productName) {
  for (let i = 0; i < inventory.length; i++) {
    const element = inventory[i];
    if (productName.toLowerCase() === element.name) {
      return i;
    }
  }
  return -1;
}

// console.log(findProductIndex("idk"));

function addProduct(productObj) {
  if (Object.hasOwn(productObj, "name")) {
    productObj.name = productObj.name.toLowerCase();
  } else {
    return;
  }

  for (let i = 0; i < inventory.length; i++) {
    const element = inventory[i];
    if (productObj.name === element.name.toLowerCase()) {
      inventory[i].quantity += productObj.quantity;
      console.log(`${productObj.name} quantity updated`);
      return;
    }
  }

  inventory.push(productObj);
  console.log(`${productObj.name} added to inventory`);
}

addProduct({ name: "FLOUR", quantity: 5 });
addProduct({ name: "FLOUR", quantity: 5 });

function removeProduct(name, quantity) {
  name = name.toLowerCase();
  quantity = Math.trunc(Number(quantity));
  for (let i = 0; i < inventory.length; i++) {
    const element = inventory[i];
    if (name === element.name.toLowerCase()) {
      if (quantity > element.quantity) {
        console.log(
          `Not enough ${inventory[i].name} available, remaining pieces: ${inventory[i].quantity}`,
        );
        return;
      }
      inventory[i].quantity -= quantity;
      console.log(
        `Remaining ${inventory[i].name} pieces: ${inventory[i].quantity}`,
      );
      if (inventory[i].quantity === 0) {
        inventory.splice(i, 1);
      }
      return;
    }
  }
  console.log(`${name} not found`);
}

removeProduct("flour", 1);
removeProduct("flour", 9);
removeProduct("flou", 1);
