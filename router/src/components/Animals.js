const Animals = () => {
    const animals = [
      {name: 'Fluffykins', species: 'rabbit'},
      {name: 'Caro', species: 'dog'},
      {name: 'Hamilton', species: 'dog'},
      {name: 'Harold', species: 'fish'},
      {name: 'Ursula', species: 'cat'},
      {name: 'Jimmy', species: 'fish'}
    ]
  
    const array3 = animals.map((animal) => {
    return animal.name + ' '
  });
  
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
  
    return (
      <div className="Animals">
        <li>Kaikki koirat: {array1}</li><br/>
        <li>Kaikki eläimet paitsi koirat: {array2}</li><br/>
        <li>Kaikki eläimien nimet: {array3}</li><br/>
      </div>
    );
  
  }

export default Animals;