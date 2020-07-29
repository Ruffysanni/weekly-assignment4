function minCost(cost){
    var max = 100;
    let array = [];
      for(let i = 0; i < cost.length; i++){
       for(let j =0; j < cost[i].length; j++){
         if(cost[i][j] < max && array[i-1] !== cost[i][j]){
             array[i] = cost[i][j];
              max = cost[i][j];                    
         }
       }
          max = 100;
      }
      const reduced = array.reduce((total,number) => total + number);
   return `The minimum cost to build the three houses in the
  neighborhood based on the array passed is equal to $${reduced}.`;
  }
  
  minCost([[1, 2, 3], [1, 2, 3], [3, 3, 1]]);



//   Output:
//   "The minimum cost to build the three houses in the
//   neighborhood based on the array passed is equal to $4."