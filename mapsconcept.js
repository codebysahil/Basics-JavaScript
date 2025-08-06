let numbers = [1,2,3,4,5]

let newNumbers=numbers.map(ele=>{return (ele+5 +':' + ele)});
console.log(newNumbers);

let mynumber = [1,2,3,4,5]

let numsquare= mynumber.map(ele=> ele*ele)
console.log(numsquare);


let words = ['hello', 'world','playwright','javascript']

let upperWords= words.map(ele=>ele.toUpperCase().charAt(0))
console.log(upperWords);

// wap to get the first letter of each word.

// let firstLetter = words.map(ele=> ele.charAt(0))
// console.log(firstLetter);

let firstLetter = words.map(ele=> ele[0])
console.log(firstLetter);

// hello! world! playwright! javascript!

let addedSymbol = words.map(ele=>ele+'!')
console.log(addedSymbol);

let links = ['help','contact','prime','fresh']
let addedLinks = links.map(ele=>'amazon'+' ' + ele)
console.log(addedLinks);
