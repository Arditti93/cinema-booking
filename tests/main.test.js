const order = require("../src/index");


test('Your child ticket price will be £3', () => {
  const ticket = new order ("James", 6, "no") 
  expect(order.price).toBe("Your child ticket price will be £3");

});

test('Your adult ticket price will be £10', () => {
  const ticket = new order ("James", 36, "no") 
  expect(order.price).toBe("Your adult ticket price will be £10");

}); 

test('Your student price will be £6', () => {
  const ticket = new order ("James", 24, "yes") 
  expect(order.price).toBe("Your student price will be £6");

}); 

test('Your senior ticket price will be £5', () => {
  const ticket = new order ("James", 66, "no") 
  expect(order.price).toBe("Your senior ticket price will be £5");

});




// test 

// const newPerson = new order ("James", 24, "yes", "Wispa",  

// console.log(newPerson.price()) 

// food.forEach((food) => console.log(`You are buying: ${food.name} This costs: ${food.price}`));
// drink.forEach((drink) => console.log(`You are buying: ${drink.name} This costs: ${drink.price}`));


/* test('oh, a failed test?', () => {
  const ticket = new CinemaBooking('Adult', 2);
  expect(index.price).toBe(20);
}); */

