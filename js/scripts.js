function Menu(toppings, sizes) {
  this.toppings = toppings;
  this.sizes = sizes;
}

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


// ui logic

$(document).ready(function() {
  $("#pizza-form").submit(function(event){
    event.preventDefault();
    let size = $("input:radio[name=size]:checked").val();
    let toppings = $("input:checkbox[name=toppings]:checked").map(function(event){
      return $(this).val();
    }).get();
    let pizza = new Pizza(toppings, size);
    console.log(pizza.priceCalc());
  });

});
