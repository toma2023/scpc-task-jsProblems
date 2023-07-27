
//TASK_1.
// function reverseWord() {
//     const inputValue = document.getElementById("reverse-input").value
//     const splitWord = inputValue.split('')

//     let array = []
//     for (let i = splitWord.length - 1; i >= 0; i--) {
//         array.push(splitWord[i])
//     }
//     const reverseWord = array.join('');
//     document.getElementById("text").innerText = inputValue;
//     document.getElementById("reverse-text").innerText = reverseWord;

// }

// document.getElementById("reverse-btn").addEventListener("click", reverseWord);


//TASK_2.
// const numArr = [10, 23, -40, 50, -20, -3];
// let sum = 0;
// function sumOfPositive(array) {
//     for (const arr of numArr) {
//         if (arr >= 0) {
//             sum = sum + arr

//         }

//     }
//     console.log(sum)
// }
// sumOfPositive(numArr)


//TASK_3
// const numArr = [3, 5, 2, 5, 3, 3, 1, 4, 5, 5, 2, 2, 2, 2, 2];
// function mostFrequentNum(array) {
//     const obj = {};
//     for (const arr of numArr) {
//         obj[arr] = (obj[arr] || 0) + 1;
//     }

//     let maxFreq = 0;
//     let mostFrequentNum;

//     for (const key in obj) {
//         if (obj[key] > maxFreq) {
//             maxFreq = obj[key];
//             mostFrequentNum = key;
//         }
//     }

//     console.log("The most frequent number is:", mostFrequentNum);
// }

// mostFrequentNum(numArr);


//TASK_4
// function findTwoNumbers(array, target) {
// 	let left = 0;
// 	let right = array.length - 1;

// 	while (left < right) {
// 		const sum = array[left] + array[right];

// 		if (sum === target) {
// 			return [left, right];
// 		} else if (sum < target) {
// 			left++;
// 		} else {
// 			right--;
// 		}
// 	}

// 	return [];
// }

// const sortedArray = [1, 3, 6, 8, 11, 15];
// const targetValue = 9;
// const indices = findTwoNumbers(sortedArray, targetValue);
// console.log(indices)








//TASK_5
// function calculate() {
//     const num_1 = parseFloat(document.getElementById("number_1").value)
//     const operator = document.getElementById("operator").value
//     const num_2 = parseFloat(document.getElementById("number_2").value
//     )
//     let calculation = 0
//     if (operator === "+") {
//         calculation = num_1 + num_2;
//     }
//     else if (operator === "-") {
//         calculation = num_1 - num_2;

//     }
//     else if (operator === "*") {
//         calculation = num_1 * num_2;

//     }
//     else if (operator === "/") {
//         calculation = num_1 / num_2;

//     }
//     console.log(calculation)

// }

// document.getElementById("calculate-btn").addEventListener("click", calculate)



//TASK_6

// function randomPassword(){
//     const length = document.getElementById("lengthOfPassword").value;
//     const uppercaseLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
//     	const lowercaseLetters = "abcdefghijklmnopqrstuvwxyz";
//     	const numbers = "0123456789";
//     	const specialCharacters = "!@#$%^&*";
//         const allCharacters =
//         		uppercaseLetters + lowercaseLetters + numbers + specialCharacters;
//                 let password = "";
//                 for (let i = 0; i < length; i++) {
//                     		// Generate a random index to select a character from allCharacters
//                     		const randomIndex = Math.floor(Math.random() * allCharacters.length);
                    
//                     		// Append the randomly selected character to the password
//                     		password += allCharacters[randomIndex];
//                     	}

//                         document.getElementById("showPassword").innerText = password;       

// }
// document.getElementById("passwordGenerator").addEventListener("click", randomPassword)




//TASK_7
// const romanNumberToNumber = () => {
// 	const romanNumber = document.getElementById("romanNumberInput").value;
// 	const romanValues = {
// 		I: 1,
// 		V: 5,
// 		X: 10,
// 		L: 50,
// 		C: 100,
// 		D: 500,
// 		M: 1000,
// 	};

// 	let result = 0;
// 	let previousValue = 0;

// 	for (let i = romanNumber.length - 1; i >= 0; i--) {
// 		const currentValue = romanValues[romanNumber[i]];

// 		console.log(currentValue)
// 		if (currentValue >= previousValue) {
// 			result += currentValue;
// 		} else {
// 			result -= currentValue;
// 		}

// 		previousValue = currentValue;
// 	}

	
// 	document.getElementById("romanToNumber").innerText = result;
// };

// document
// 	.getElementById("romanToNumberConvertor")
// 	.addEventListener("click", romanNumberToNumber);


//TASK_8

// const array = [34, 60, 12, 44, 18, 2,4, 8]
// // [3, 6, 1, 4, 1, 8]
// //[1,1, 3, 4, 6, 8] //less than to greater than
// //[12, 18, 34, 44, 60, 8]

// function secondSmallestElement(array) {
//     const sorted = array.sort((a, b) => {
//         return b-a
//     })
//     console.log(sorted[1])
//     //numbers.sort((a, b) => a - b);
// }
// secondSmallestElement(array)









