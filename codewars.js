String.prototype.toJadenCase = function () {
	//...

	var array = this.split(" ");
	// console.log("fix this string", array);
	for (let i = 0; i < array.length; i++) {
		console.log(array[i].charAt(0).toUpperCase() + array[i].slice(1));
		array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
	}
	console.log("array after for loop", array.join(" "));
	return array.join(" ");
};

var string = "How can mirrors be real if our eyes aren't real";

string.toJadenCase();

// function basicOp(operation, value1, value2) {
// 	// var answer;

// 	// if (operation === "+") {
// 	// 	answer = value1 + value2;
// 	// } else if (operation === "-") {
// 	// 	answer = value1 - value2;
// 	// } else if (operation === "*") {
// 	// 	answer = value1 * value2;
// 	// } else {
// 	// 	answer = value1 / value2;
// 	// }
//     operation ? '+' value1 + value2 :

// 	// return answer;
// 	return eval(value1 + operation + value2);
// }

// console.log("we did it", basicOp("+", 15, 18));
