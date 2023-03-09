function example1() {
  const person = {
    name: 'Andrew',
    age: 26,
    location: {
      city: 'Philadelphia',
      temp: 92
    }
  };

  const { name, age } = person;
  console.log(`${name} is ${age}`);

  const { city, temp: temperature } = person.location;

  if (city && temperature) console.log(`It's ${temperature}F in ${city}`);
}

(() => {
  const book = {
    author: 'Ryan Holiday',
    title: 'Ego is the enemy',
    publisher: {
      name: 'Penguin'
    }
  };

  const { name = 'Self-published' } = book.publisher;
  console.log(name);

});

(() => {
    const address = ['1299 Grove Street', 'Los Santos', 'San Andreas', '13947'];
    const [, city, state = 'Liberty State'] = address;

    console.log(`You are in ${city}, ${state}.`);

    const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
    const [beverage, ,cost] = item;
    console.log(`A medium ${beverage} costs ${cost}.`);

})();