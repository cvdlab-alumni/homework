Filtrare i numeri positivi di un array e restituire la somma

var sumPositiveArray = function(array) {
	return array
			.filter(function(item) {
				return item > 0;
			})
			.reduce(function(previous,current){
				return previous + current;
			});
}