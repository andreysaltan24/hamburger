Hamburger.SIZE_SMALL = {
    price: 50,
    callories: 20,
}
Hamburger.SIZE_MEDIUM = {
    price: 75,
    callories: 30,
}
Hamburger.SIZE_LARGE = {
    price: 100,
    callories: 40,
}

Hamburger.STUFFING_CHEESE = {
    price: 10,
    callories: 20,
}
Hamburger.STUFFING_SALAD = {
    price: 20,
    callories: 5,
}
Hamburger.STUFFING_POTATO = {
    price: 15,
    callories: 10,
}
Hamburger.TOPPING_MAYO = {
    price: 15,
    callories: 0,
}
Hamburger.TOPPING_SPICE = {
    price: 20,
    callories: 5,
}

const hamburger = new Hamburger(Hamburger.SIZE_SMALL);

function Hamburger(hamburger) {
    this.hamburger = hamburger;
}

Hamburger.prototype.getPrice = function() {
    return this.hamburger.price;
}

Hamburger.prototype.getCallories = function () {
    return this.hamburger.callories;
  };

Hamburger.prototype.addTopping = function( {price, callories} ) {
    return this.hamburger = {
              price: this.hamburger.price += price,
              callories: this.hamburger.callories += callories
 }
}

hamburger.addTopping(Hamburger.TOPPING_MAYO);
hamburger.addTopping(Hamburger.STUFFING_POTATO);
hamburger.addTopping(Hamburger.STUFFING_POTATO);

console.log('Price with sauce:' + hamburger.getPrice());
console.log('Callories with sauce:' + hamburger.getCallories());