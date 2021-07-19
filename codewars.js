// let isIsogram = (str) => (str = str.toLowerCase());
// str.split("").every((character, i) => str.indexOf(character) == i);
// console.log(isIsogram("Dermatoglyphics"));

// if (bool === true) {
//     return "yes"

// } else {
//     return "no"
// }

// function oddOrEven(array) {
// 	return array.reduce(function (sum, item) {
// 		return sum + item;
// 	}, 0) %
// 		2 ==
// 		0
// 		? "even"
// 		: "odd";
// }

// console.log(oddOrEven([1, 2]));
// console.log(oddOrEven([1, 3]));
// console.log(oddOrEven([]));

// haystack(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);

// function findNeedle(haystack) {
// 	// your code here
// 	const needlePlace = haystack.indexOf("needle");
// 	return "found the needle at position " + needlePlace;
// }

//We need a function that can transform a number into a string.
// function numberToString(num) {
// 	// Return a string of the number here!
// 	return String(num);
// }
// console.log(num);
// String.prototype.toJadenCase = function () {
// 	//...

// 	var array = this.split(" ");
// 	// console.log("fix this string", array);
// 	for (let i = 0; i < array.length; i++) {
// 		console.log(array[i].charAt(0).toUpperCase() + array[i].slice(1));
// 		array[i] = array[i].charAt(0).toUpperCase() + array[i].slice(1);
// 	}
// 	console.log("array after for loop", array.join(" "));
// 	return array.join(" ");
// };

// var string = "How can mirrors be real if our eyes aren't real";

// string.toJadenCase();

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
// 	// operation ? '+' value1 + value2;

// 	// return answer;
// 	return eval(value1 + operation + value2);
// }

// console.log("we did it", basicOp("+", 15, 18));
