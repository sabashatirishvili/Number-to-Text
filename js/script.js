
 function numToText(num) {
const ones = ["", "ერთი", "ორი", "სამი", "ოთხი", "ხუთი", "ექვსი", "შვიდი", "რვა", "ცხრა", "ათი", "თერთმეტი",
"თორმეტი", "ცამეტი", "თოთხმეტი", "თხუტმეტი", "თექვსმეტი", "ჩვიდმეტი", "თვრამეტი", "ცხრამეტი"];
const tens = ["", "ოცი", "ორმოცი", "სამოცი", "ოთხმოცი",];
const hundreds = ["", "ასი", "ორასი", "სამასი", "ოთხასი", "ხუთასი", "ექვსასი", "შვიდასი", "რვაასი", "ცხრაასი"]
const thousands = ["", "ათასი", "მილიონი", "მილიარდი"];

let numStr = num.toString();
let last = Number(numStr[numStr.length-1]);
let secondToLast = Number(numStr[numStr.length-2]);
let third = Number(numStr[numStr.length-3]);
let fourth = Number(numStr[numStr.length-4]);
let second = Math.floor((secondToLast*10)/20);
if (num < 20 && num !== 0) {
	return ones[last];
} 
if (secondToLast % 2 !== 0) {
	last += 10;
}

if (num === 0) {
	return "ნული";
} else  if (numStr.length === 2) {
	if(last === 0 && secondToLast % 2 === 0) {
		return tens[second];
	}
	
	return(`${tens[second].slice(0, -1)}და${ones[last]}`)
} else if(numStr.length ===3) {
	if (last === 0 && secondToLast===0) {
		return `${hundreds[third]}`;
	} 
	else if(last === 0){
		return `${hundreds[third].slice(0,-1)} ${tens[second]}`;
	} else if (last ===0 && secondToLast === 1) {
		return `${hundreds[third].slice(0,-1)} ${ones[second]}`;
	} else if (secondToLast===0){
		return `${hundreds[third].slice(0,-1)} ${ones[last]}`;
	}
	else if(third === 8 || third === 9) {
		return `${hundreds[third].slice(0,-1)} ${tens[second].slice(0,-1)}და${ones[last]}`;
	} else if(last !== 0) {
		return `${hundreds[third].slice(0,-1)} ${tens[second].slice(0,-1)}და${ones[last]}`;
	} 
} else if(numStr.length === 4) {
	if (num === 1000) {
		return "ათასი";
	}
	if (num%1000 === 0) {
		return `${ones[fourth]} ${thousands[1]}`;
	} else {
		return `${ones[fourth]} ${thousands[1].slice(0,-1)} ${hundreds[third].slice(0,-1)} ${tens[second].slice(0,-1)}და${ones[last]}`;
	}
}
}

// for(let i = 0; i < 10000; i++) {
// 	console.log(numToText(i));
// }
console.log(numToText(2))
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

const receiverInput = document.querySelector('#receiver');
const amountInput = document.querySelector('#amount');
const receivedDisplay = document.querySelector('#received')
const nameDisplay = document.querySelector('#name');
const button = document.querySelector('#btn');


button.addEventListener("click", function() {
	nameDisplay.textContent = receiverInput.value + " -ს";
	receivedDisplay.textContent = `${amountInput.value} ${numToText(amountInput.value.trim())} ` ;
})


