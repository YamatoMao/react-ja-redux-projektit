import './App.css';

const App = () => {


const animals = [
  {name: 'Fluffykins', species: 'rabbit'},
  {name: 'Caro', species: 'dog'},
  {name: 'Hamilton', species: 'dog'},
  {name: 'Harold', species: 'fish'},
  {name: 'Ursula', species: 'cat'},
  {name: 'Jimmy', species: 'fish'}
]

const orders = [
  {product: "apple", amount: 250},
  {product: "orange", amount: 400},
  {product: "banana", amount: 100},
  {product: "mango", amount: 325}
]

const array3 = animals.map((animal) => {
  return animal.name + ' '
});

/* let dogs = [];
for (let i;i<animals.length;i++) {
  if (animals[i].species === 'dog')
  dogs.push(animals[i])
}; */

/*let totalAmount = 0;
for (let i = 0; i < orders.length; i++) {
  totalAmount += orders[i].amount
} */

const isDog = function(animal) {
  return animal.species === 'dog'
};

const notDog = function(animal) {
  return animal.species !== 'dog'
};

const dogs = animals.filter(isDog);
const otherAnimals = animals.filter(notDog);

const array1 = dogs.map((animal) => {
  return animal.name + ' '
});

const array2 = otherAnimals.map((animal) => {
  return animal.name + ' '
});

const totalAmount = orders.reduce(function(sum, order){
  return sum + order.amount
}, 0);

  return (
    <div className="App">
      <li>Kaikki koirat: {array1}</li><br/>
      <li>Kaikki eläimet paitsi koirat: {array2}</li><br/>
      <li>Kaikki eläimien nimet: {array3}</li><br/>
      <li>Orders: {totalAmount}</li>
    </div>
  );
}

export default App;
