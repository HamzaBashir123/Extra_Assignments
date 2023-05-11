// Q1)  Write a function that takes two parameters, an array of numbers and a target number. The function should return a pair of numbers from the array that adds up to the target number. If no such pair is found, the function should return null.

// Example input: findPair([1, 2, 3, 4], 5) Example output: [1, 4]

// Answer

// function sum(arr , number){
//     let sumArr = [];
//     for (var i = 0; i < arr.length-2; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if(arr[i] +arr[j] == number){
//                 sumArr.push([arr[i], arr[j]]);

//             }


//     }

// }
// return sumArr
// }
// console.log( sum([1,8,6,4,-1,-8,21,4,8],10))





// Q2) Write a function that takes a string as input and returns the reverse of the string.

// Example input: reverseString("hello") Example output: "olleh"


// Answer

//  1st way
//  let input  =  "hello world"
//  function reverse(strValue){
//     return strValue.split("").reverse().join("");
    
//  }
//  console.log(reverse(input))

 //  2nd way

// function revese1(str){
    
//     let splitArray = "";
//     for(    i = str.length-1 ; i>=0 ; i--){
//         splitArray += str[i]
        

//     }
//     return splitArray
 
    
    
// }
//  console.log(revese1(input))



// Q3) Write a function that takes an array of numbers as input and returns the sum of the two largest numbers in the array.

// Example input: sumLargest([1, 2, 3, 4]) Example output: 7



// Answer

// function sum(arr){
//     let maxSum = 1;
//     let sumArr = [];
//     for (var i = 0; i < arr.length-2; i++) {
//         for (var j = i + 1; j < arr.length; j++) {
//             if(arr[i] +arr[j] > maxSum){
//                 maxSum = arr[i] +arr[j]
//                 sumArr = [arr[i] ,arr[j]]
                

//             }


//     }

// }
// return [maxSum ,sumArr]
// }
// console.log( sum([1,8,6,4,-1,-8,21,4,8]))





// Q4) Write a function that takes an array of strings as input and returns a new array that contains only the strings that have more than three characters.

// Example input: filterStrings(["hi", "hello", "hey", "howdy"]) Example output: ["hello", "howdy"]

// Answer

// function filterStrings(str) {
//     let resultStringArray = []
//     for(i=0;i<str.length; i++){
//         if(str[i].length > 3){
//            resultStringArray.push(str[i])
//         }
//     }
//     return resultStringArray
    
// }


// console.log(filterStrings(["hi", "hello", "hey", "howdy", "ashdfasjdh"]))


// Q5 ) Write a function that takes an array of numbers as input and returns a new array that contains only the even numbers.

// Example input: filterEven([1, 2, 3, 4, 5, 6]) Example output: [2, 4, 6]


// Answer

// function filterEven(str){
//     let result = []
//     for(i=0;i<str.length; i++){
//         if( str[i] % 2 == 0){
//             result.push(str[i])

//         }


//     }
//      return result  
// }
 

// console.log(filterEven([1, 2, 3, 4, 5, 6,4,6,4,2,6,7,7,77,,2,243,5,343,343,232]))


// Q6)  Write a function that takes an array of objects and a key name as input and returns a new array that contains only the values of the specified key from each object in the array.

// Example input: pluck([{name: "John", age: 30}, {name: "Jane", age: 25}], "name") Example output: ["John", "Jane"]

// Answer


// function pluck(obj, value){

    

//     let result = [];
//    for(i=0;i<obj.length; i++){
//     result.push(obj[i][value])
//    }
// return result   

// }



// console.log(pluck([{name: "John", age: 30}, {name: "Jane", age: 25}],"age"))

// Q7) Write a function that takes a string as input and returns true if the string is a palindrome (reads the same backwards as forwards), and false otherwise.

// Example input: isPalindrome("racecar") Example output: true


// function isPalindrome(value){
//     valueLower = value.toLowerCase()
    
//     let reverse =  valueLower.split("").reverse().join("")
//     console.log(reverse)
//     if(valueLower === reverse){
//         return true
//     }
//     else{
//         return false
//     }

// }


// console.log(isPalindrome("Madam"))



// Q8) Write a function that takes a string as input and returns the most frequent character in the string. If there are multiple characters that appear with the same frequency, return the one that appears first.

// Example input: mostFrequent("hello world") Example output: "l"


// Q9)
// Write a function that takes an array of strings as input and returns a new array that contains the length of each string in the original array.

// Example input: stringLengths(["hi", "hello", "hey", "howdy"]) Example output: [2, 5, 3, 5]


// q10)
// Write a function that takes an array of numbers as input and returns the index of the first number in the array that is greater than or equal to 10.

// Example input: firstGreater([1, 5, 15, 20]) Example output: 2