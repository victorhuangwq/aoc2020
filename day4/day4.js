const fs = require('fs');

const regex_list = [RegExp('byr'),
		    RegExp('iyr'),
		    RegExp('eyr'),
		    RegExp('hgt'),
		    RegExp('hcl'),
		    RegExp('ecl'),
	            RegExp('pid')]

try {	
	
	const data = fs.readFileSync('values.txt','UTF-8');
	
	// split by empty line
	const lines = data.split("\r\n\r\n");
	
	let result = 0;
	
	
	// for each line
	lines.forEach(line =>{

	let verified = true;

	regex_list.forEach( reg => {
		verified = verified && reg.test(line);
	});

	if(verified)
		result++;
	});

	console.log(result);
} catch (err) {
    console.error(err);
}
