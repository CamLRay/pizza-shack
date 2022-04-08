function Menu(toppings, sizes) {
  this.toppings = toppings;
  this.sizes = sizes;
}

function Pizza(toppings, size) {
  this.toppings = toppings;
  this.size = size;
}

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
    $("#current-price").text("$"+pizza.priceCalc())
  });

  pizzaForm.submit(function(event){
    event.preventDefault();
    let pizza = gatherData();
    $(".receipt").html("<h4>Price: $" + pizza.priceCalc()+"</h4>")
  });

});
