
function numToText(num) {
const ones = ["ერთი", "ორი", "სამი", "ოთხი", "ხუთი", "ექვსი", "შვიდი", "რვა", "ცხრა", "ათი", "თერთმეტი",
"თორმეტი", "ცამეტი", "თოთხმეტი", "თხუტმეტი", "თექვსმეტი", "ჩვიდმეტი", "თვრამეტი", "ცხრამეტი"];
const tens = ["ოცი", "ორმოცი", "სამოცი", "ოთხმოცი",];
const hundreds = ["ასი", "ათასი"]



let y = Number(num.toString()[num.toString().length-1]);
let z = Number(num.toString()[num.toString().length-2]);
let second = Math.floor((z*10)/20 -1);
let x = y-1;


if (z % 2 !== 0) {
	x += 10;
}
let first = ones[(convert(x))];

if (num === 0) {
	return "ნული";
} else if (num < 20 && num !== 0) {
	return first;
} else if (num.toString().length === 2) {
	if(y === 0 && z % 2 === 0) {
		return tens[second];
	}
	return(`${tens[second].slice(0, -1)}და${first}`)
}
}

console.log(numToText(50));

function convert(x) {
	let first;
	switch (x) {
		case 0: 
		first = 0;
		break;
		case 1: 
		first = 1;
		break;
		case 2: 
		first = 2;
		break;
		case 3: 
		first = 3;
		break;
		case 4: 
		first = 4
		break;
		case 5: 
		first = 5;
		break;
		case 6: 
		first = 6;
		break;
		case 7: 
		first = 7
		break;
		case 8: 
		first = 8;
		break;
		case 9: 
		first = 9;
		break;
		case 10: 
		first = 10;
		break;
		case 11: 
		first = 11;
		break;
		case 12: 
		first = 12;
		break;
		case 13: 
		first = 13;
		break;
		case 14: 
		first = 14;
		break;
		case 15: 
		first = 15;
		break;
		case 16: 
		first = 16;
		break;
		case 17: 
		first = 17;
		break;
		case 18: 
		first = 18;
		break;
		case 19: 
		first = 19;
		break;
	}
	return first;
}


console.log(Math.round(20/20)-1);