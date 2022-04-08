//Pseudo database
function PizzaShack() {
  this.menu = {}
  this.orders = {}
  this.uniqueId = 0;
}

let pizzaShack = new PizzaShack();
// ^^^^^ database ^^^^^

PizzaShack.prototype.addMenu = function(newMenu) {
  this.menu = newMenu;
}

PizzaShack.prototype.addPizza = function(newPizza) {
  newPizza.id = this.assignId();
  this.orders[newPizza.id] = newPizza;
}

PizzaShack.prototype.assignId = function() {
  this.uniqueId ++
  return this.uniqueId;
}

PizzaShack.prototype.orderTotal = function() {
  price = 0;
  let pizzas = this.orders;
  Object.keys(this.orders).forEach(function(key){
    price += parseFloat(pizzas[key].priceCalc());
    
  });
  return price.toFixed(2);
}

function Menu(toppings, sizes) {
  this.toppings = toppings;
  this.sizes = sizes;
}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

// let pizza1 = new Pizza(["peps"], "10 inch");
// let pizza2 = new Pizza(["pines"], "10 inch");
// let pizza3 = new Pizza(["sausy"], "10 inch");
// pizzaShack.addPizza(pizza1);
// pizzaShack.addPizza(pizza2);
// pizzaShack.addPizza(pizza3);

Pizza.prototype.priceCalc = function() {
  let price = 11 + (this.toppings.length * .25);
  if(this.size === "10 inch") {
    price += 0;
  } else if (this.size === "12 inch") {
    price += 2;
  } else if (this.size === "14 inch") {
    price += 5;
  }
  return price.toFixed(2);
}


// ui logic

Menu.prototype.menuBoardToppings = function(form) {
  this.toppings.reverse().forEach(function(topping){
    form.prepend('<input type="checkbox" name="toppings" value="'+topping+'">'+'<label>'+topping+'</label>');
  });
}

Menu.prototype.menuBoardSizes = function(form) {
  this.sizes.reverse().forEach(function(size){
    form.prepend('<input type="radio" name="size" value="'+size+'">'+'<label>'+size+'</label>');
  });
}

Pizza.prototype.receipt = function() {
  let order = "<h4>"+this.size+" Pizza </h4><ul>";
  this.toppings.forEach(function(topping){
    order += "<li>" + topping + " +0.25</li>";
  });
  return order += "</ul><h5>Sub total: " + this.priceCalc() + "</h5>";
}

function gatherData() {
  let size = $("input:radio[name=size]:checked").val();
    let toppings = $("input:checkbox[name=toppings]:checked").map(function(){
      return $(this).val();
    }).get();
  let pizza = new Pizza(toppings, size);
  return pizza;
}

$(document).ready(function() {
  let pizzaForm = $("#pizza-form");
  let menu = new Menu(["Pepperoni", "Bacon", "Sausage", "Canadian Bacon", "Mushrooms", "Black Olives", "Green Pepper", "Garlic", "Onions", "Pineapple", "Extra Cheese"], ["10 inch", "12 inch", "14 inch"]);
  menu.menuBoardSizes(pizzaForm);
  pizzaForm.prepend("<h4>Size:</h4>");
  menu.menuBoardToppings(pizzaForm);
  pizzaForm.prepend("<h4>Toppings ($0.25 each):</h4>");

  pizzaForm.change(function(){
    let pizza = gatherData();
    let price = pizza.priceCalc();
    $("#current-price").text("$"+price)
  });

  pizzaForm.submit(function(event){
    event.preventDefault();
    let pizza = gatherData();
    $(".receipt").append(pizza.receipt());
    $(".receipt").append("Order total");
    // $(".receipt").html("<h4>Price: $" + price+"</h4>")
  });

});
