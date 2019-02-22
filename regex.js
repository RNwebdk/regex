let regex;

regex = /hello/;
regex = /hello/i; // i = case insensitive
//regex = /hello/g; // Global search all instances of hallo, not just the one paragraph

// console.log(regex);
// console.log(regex.source);

// exec() - Return result in array  or null
// const result = regex .exec('hello world');

// console.log(result);
// console.log(result[0]);
// console.log(result.index);
// console.log(result.input);

// test() - Return true or false
// const result = regex.test('hello');
// console.log(result);

// match() - Return result array or null
// const str = 'Hello there';
// const result = str.match(regex);
// console.log(result);

// search() - returns index of the first match
// const str = "Hello There";
// const result = str.search(regex);
// console.log(result);

// replace() - Return new string with some or all matches of a pattern
// const str = 'Hello There';
// const result = str.replace(regex, 'Hi');
// console.log(result);