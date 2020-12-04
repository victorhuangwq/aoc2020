const fs = require('fs');

try {	
	
	const data = fs.readFileSync('values.txt','UTF-8');
	
	// split by empty line
	const lines = data.split("\r\n\r\n");
	const index = (a) => (a!=null ? a[1] : -1)
	let result = 0;
	
	// for each line
	lines.forEach(line =>{

	let verified = true;

	// birth year
	const byr = RegExp('byr:([0-9]{4})( |\r|\n|$)');
	const birth_year = index(byr.exec(line));
	verified = (birth_year >= 1920 && birth_year <= 2002) && verified;

	// issue year
	const iyr = RegExp('iyr:([0-9]{4})( |\r|\n|$)');
	const issue_year = index(iyr.exec(line));
	verified = (issue_year  >= 2010 && issue_year  <= 2020) && verified;

	// expiration year
	const eyr = RegExp('eyr:([0-9]{4})( |\r|\n|$)');
	const exp_year = index(eyr.exec(line));
	verified = (exp_year  >= 2020 && exp_year  <= 2030) && verified;

	// height
	const hgt_in = RegExp('hgt:([0-9]*)in');
	const hgt_cm = RegExp('hgt:([0-9]*)cm');
	const height_inches = index(hgt_in.exec(line));
	const height_cm = index(hgt_cm.exec(line));
	verified = ((height_inches >= 59 && height_inches  <= 76) || (height_cm >= 150 && height_inches  <= 193)) 
		   && verified;
	// haircolor
	const hcl = RegExp('hcl:#([a-z]|[0-9]){6}( |\r|\n|$)');
	const hair_color = hcl.test(line);
	verified = hair_color && verified;

	// eyecolor
	const ecl = RegExp('ecl:amb|blu|brn|gry|grn|hzl|oth');
	const eye_color = ecl.test(line);
	verified = eye_color && verified;

	// passport
	const pid = RegExp('pid:[0-9]{9}( |\r|\n|$)');
	verified = verified && pid.test(line);
	if(verified)
		result++;
	
	});

	console.log(result);
} catch (err) {
    console.error(err);
}
