
const axios = require('axios');


const options = {
  method: 'GET',
  url: `https://www.themealdb.com/api/json/v1/1/random.php`,
  
};

const getPizza = async () => {
  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

const getPizzas = async () => {
  const pizzas = [];

  for (let index = 0; index < 5; index++) {
    try {
      const pizza = await getPizza();
      pizzas.push(pizza.meals);
    } catch (error) {
      // Handle errors if needed.
    }
  }

  return pizzas;
};

getPizzas()
  .then((pizzas) => {
    console.log("API request successful");
console.log(pizzas)
  })
  .catch((error) => {
    console.error("API request failed", error);
  });
