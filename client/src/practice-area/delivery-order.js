function deliveryOrder(cityNodes, cityFrom, cityTo, company) {
  //console.log(cityNodes);
  //console.log(cityFrom);
  //console.log(cityTo);
  //console.log(company);

  // Create a list to keep track of the road connections between the cities.
  const roadConnectionsList = [];

  // Load the list based on the given cityFrom and cityTo arrays.
  for (let i = 0; i < cityFrom.length; i++) {
    const fromCity = cityFrom[i];
    const toCity = cityTo[i];

    if (roadConnectionsList[fromCity]) {
      roadConnectionsList[fromCity].push(toCity);
    } else {
      roadConnectionsList[fromCity] = [toCity];
    }

    if (roadConnectionsList[toCity]) {
      roadConnectionsList[toCity].push(fromCity);
    } else {
      roadConnectionsList[toCity] = [fromCity];
    }
  }

  // Initialize the lists for tracking the visited cities and distances.
  const visited = [];
  const distances = [];

  // Create a queue starting with the company's city.
  const citiesQueue = [company];

  // Set the starting values.
  visited[company] = true;
  distances[company] = 0;

  // Initialize the goods delivery order array.
  const goodsDeliveryOrder = [];

  while (citiesQueue.length > 0) {
    // Sort the queue to visit the cities in ascending order of distance.
    citiesQueue.sort((a, b) => {
      // If distances are equal, then order by priority.
      if (distances[a] === distances[b]) {
        return a - b;
      } else {
        // If distances are not equal, then order by distance.
        return distances[a] - distances[b];
      }
    });

    // Remove the current city from the queue and add it to the delivery order.
    const currentCity = citiesQueue.shift();
    goodsDeliveryOrder.push(currentCity);

    // Visit the nearby cities and update their distances if needed.
    roadConnectionsList[currentCity].forEach((nearbyCity) => {
      if (!visited[nearbyCity]) {
        visited[nearbyCity] = true;
        distances[nearbyCity] = distances[currentCity] + 1;
        citiesQueue.push(nearbyCity);
      }
    });
  }

  // Remove the starting city (company's city) and then return the final delivery order.
  return goodsDeliveryOrder.slice(1);
}
export default deliveryOrder;
