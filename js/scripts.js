function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

Pizza.prototype.priceCalc = function(pizza) {
  let price = 11 + (this.toppings.length * .25);
  if(this.size === "10 inch") {
    price += 0;
  } else if (this.size === "12 inch") {
    price += 2;
  } else if (this.size === "14 inch") {
    price += 5;
  }
  return price;
}

let pizza = new Pizza(["pepperoni"], "12 inch");
console.log(pizza.priceCalc());
// ui logic

$(document).ready(function() {
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    let size = $("input:radio[name=size]:checked").val();
    let toppings = $("input:checkbox[name=toppings]:checked").map(function(event){
      return $(this).val();
    }).get();
    console.log(toppings);
    console.log(size);
  });

});