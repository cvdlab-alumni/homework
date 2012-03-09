/* Sum positive numbers */

var numbers = [-3,-1,3,6,-8,5,2,-6,2];

var sumPositive = function(array) {
  return array
    .filter(function(item) { 
      return item >= 0; 
    })
    .reduce(function(prev, cur) { 
      return prev + cur; 
    });
};

var res = sumPositive(numbers);  //18