console.log('This is the first line \nAnd this is the second')
console.log('A newline character is written like \'\\n\'')
console.log('con'+'cat'+'e'+'nate')
console.log(`Half of 100 is ${100/2}`)
console.log('Uppercase letters are always "less" than lower case ones:','Z' < 'a')
console.log('true' && 'true','true' && 'false')
console.log('true' || 'true', 'true' || 'false')
console.log('true' != 'false')
console.log(!false)
console.log('Ternary operator:',true ? 1 : 2)

console.log('Examples of type coersion:')
console.log(8 * null, 'null was converted to 0')
console.log('5' - 1, typeof('5' - 1), '5, string, was converted to integer')
console.log('5' + 1, typeof('5' + 1), '1, integer, was converted to string')
console.log('five' * 2)
console.log(false == 0, false === 0, '' == false, '' === false)

console.log(null == undefined, null === undefined)

// Logic operations
console.log('Short-circuiting of logical operators')
console.log(null || 'user')
console.log('Rodrigo' || 'Souza')
console.log(3 === 4)
// 0, NaN and "" count as false, while all the other values count as true.
console.log(0 || -1)
console.log('' || '!?')
console.log(3 || ':)')