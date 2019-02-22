let re;
// Literal Characters
re = /hello/;
re = /hello/i;

// Metacharactors Synbols
re = /^h/i; 		// must start with
re = / world$/i; // must End with
re = /^hallo$/i; // must begin and end with
re = /h.llo/i; // Matches any ONE character
re = /h*llo/i; // Matches any character 0 or more times
re = /gre?a?y/i; // Optional character
re = /gre?a\?y/i; // Escape character

// Brackets [] - character sets
re = /gr[ae]y/i; // Must be an a or e
re = /[GF]ray/i; // Must be a G or F
re = /[^GF]ray/i; // Math anything except a G or F (carrot ^ inide of brackets means it can be anything except G and F) if you want it to mean "has to start with" you need to put the carrot outside of the brackets
re = /[A-Z]ray/; // Match any uppercase letter
re = /[a-z]ray/; // Match any lowercase letter
re = /[A-Za-z]ray/; // Match any letter
re = /[0-9]ray/; // Match any digit


// Braces {} - Quantifiers
re = /Hel{2}o/i;  // Must occur exactly 2 amount if times
re = /Hel{2,4}o/i;  // Has to be between the 2 amounts
re = /Hel{2,}o/i;  // Must occure at least 2 times

// Parethenses () - Grouping
re = /^([0-9]x){3}$/ // has to start with 0-9 followed with an X and that should appear at least 3 times and end with 3


// Shorthand Character Classes
re = /\w/; // Word character - alphanumeric or _
re = /\w+/; // + = one or more
re = /\W/; // Non-Word character
re = /\d/; // Match any digit
re = /\d+/; // Match any digit 0 or more times
re = /\D/; // Match any non-digit
re = /\s/; // Match whitespace character
re = /\S/; // Match non-whitespace character
re = /Hell/i; // looks for the word "Hell" (without any word boundary)
re = /Hell\b/i; // Word boundary looks for the specific word, so "Hello" is not included in this case but "Hell" is


// Assertions
re = /x(?=y)/; // Match x only if followed by y
re = /x(?!y)/; // Match x only if NOT followed by y


//string to match
let str = 'Hello World';

// Log Results
const result = re.exec(str);
console.log(str);

function regexTest(re, str){
	if (re.test(str)) {
		console.log(`${str} matches ${re.source}`);
	}else{
		console.log(`${str} does NOT match ${re.source}`);
	}
}

reTest(re, str);