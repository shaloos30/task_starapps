//Algorithm: Breadth First Search algorithm are used in this problem.
//This code has a time complexity of O(N^2) due to the nested loop.

function minPlanesRequired(fuel) {
  const n = fuel.length;
  const visited = new Set(); // to keep track of visited airports
  const queue = [{ airport: 0, planes: 0 }]; // start with airport 0 (first airport)
  
  while (queue.length > 0) {
    const { airport, planes } = queue.shift(); // get the next airport and number of planes used to reach it
    if (airport === n - 1) return planes; // we've reached the last airport
    
    visited.add(airport); // mark current airport as visited
    
    for (let i = 1; i <= fuel[airport]; i++) {
      const nextAirport = airport + i; // try flying to the next airport
      
      if (nextAirport >= n) break; // can't go beyond last airport
      
      if (!visited.has(nextAirport)) { // if we haven't visited this airport before
        queue.push({ airport: nextAirport, planes: planes + 1 }); // add it to the queue with incremented planes count
      }
    }
  }
  
  return -1; // we couldn't reach the last airport
}



