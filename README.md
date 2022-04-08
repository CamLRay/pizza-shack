##Project Goals
* Allow the user to choose toppings and size for the pizza they'd like to order.
* Create a pizza object constructor with properties for toppings and size.
* Create a prototype method for the cost of a pizza depending on the selections chosen. Use your own formula for this.

##Tests

Describe Pizza();

Test: "It should make a Pizza object containing two properties, toppigs and size"
Code: let newPizza = new Pizza(["pepperoni", "olives"], "12 inch");
Expected Output: pizza {toppings: ["pepperoni", "olives"], size: "12 inch"}

Describe Pizza.prototype.priceCalc();

Test: 'It should return a price for a pizza based on size ie "10 inch" is $11, "12 inch" $13, "14 inch" $16 
Code:  pizza {toppings: ["pepperoni", "olives"], size: "12 inch"} pizza.priceCalc();
Expected Output: "13"

Test: "It should calculate price based on size and the ammount of toppings at 25 cents per topping."
Code:  pizza {toppings: ["pepperoni", "olives"], size: "12 inch"} pizza.priceCalc();
Expected Output: "13.25"

Describe Menu();

Test: "It should construct a menu object containing an array of available toppings and sizes"
Code: let newMenu = new Menu(["pepperoni", "olives"], ["10 inch", "12 inch", "14 inch"]);
Expected Ouput: menu {toppings: ["pepperoni", "olives"], sizes: ["pepperoni", "olives"]}