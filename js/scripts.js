function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.priceCalc = function(pizza) {
  let price;
  if(this.size === "10 inch") {
    price = 11;
  } else if (this.size === "12 inch") {
    price = 13;
  } else if (this.size === "14 inch") {
    price = 16;
  }
  return price;
}

let pizza = new Pizza(["pepperoni"], "15 inch");
console.log(pizza.priceCalc());