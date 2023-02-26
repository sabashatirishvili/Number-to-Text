
function numToText(num) {
const ones = ["ერთი", "ორი", "სამი", "ოთხი", "ხუთი", "ექვსი", "შვიდი", "რვა", "ცხრა", "ათი", "თერთმეტი",
"თორმეტი", "ცამეტი", "თოთხმეტი", "თხუტმეტი", "თექვსმეტი", "ჩვიდმეტი", "თვრამეტი", "ცხრამეტი"];
const tens = ["ოც", "ორმოც", "სამოც", "ოთხმოც"];


let first;
let returnValue;
let y = Number(num.toString()[num.toString().length-1]);
let z = Number(num.toString()[num.toString().length-2]);
console.log(z);
let x = y-1;
let index = num - 1;
let index2 = tens.length-1;
if (z % 2 !== 0) {
	x += 10;
}
switch (x) {
	case 0: 
	first = ones[x];
	break;
	case 1: 
	first = ones[x];
	break;
	case 2: 
	first = ones[x];
	break;
	case 3: 
	first = ones[x];
	break;
	case 4: 
	first = ones[x];
	break;
	case 5: 
	first = ones[x];
	break;
	case 6: 
	first = ones[x];
	break;
	case 7: 
	first = ones[x];
	break;
	case 8: 
	first = ones[x];
	break;
	case 9: 
	first = ones[x];
	break;
	case 9: 
	first = ones[x];
	break;
	case 10: 
	first = ones[x];
	break;
	case 11: 
	first = ones[x];
	break;
	case 12: 
	first = ones[x];
	break;
	case 13: 
	first = ones[x];
	break;
	case 14: 
	first = ones[x];
	break;
	case 15: 
	first = ones[x];
	break;
	case 16: 
	first = ones[x];
	break;
	case 17: 
	first = ones[x];
	break;
	case 18: 
	first = ones[x];
	break;
}
if (num === 0) {
	return "ნული";
} else if (num < 20) {
	return first;
} else if(num > 19 && num < 30) {
	return `ოცდა${first}`;
} else if (num > 29 && num < 40) {
	return `ოცდა${first}`;
}
}


console.log(numToText(34));