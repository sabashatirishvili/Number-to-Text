
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

const receiverInput = document.querySelector('#receiver');
const amountInput = document.querySelector('#amount');
const receivedDisplay = document.querySelector('#received')
const nameDisplay = document.querySelector('#name');
const button = document.querySelector('#btn');


button.addEventListener("click", function() {
	nameDisplay.textContent = receiverInput.value + " -ს";
	receivedDisplay.textContent = `${amountInput.value} ${numToText(amountInput.value.trim())} ` ;
})


