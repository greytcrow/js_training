function isUpperCase(str) {
	return str === str.toUpperCase();
}

let word = "";
let letter;

while(true)
{
	letter = prompt('Parle a ton ado');

	if(letter.length >= 1)
	{
		word += letter;
	}
	else
	{
		break; 
	}
}

if (word === "")
	console.log("t'es en PLS ?");
else if(word.slice(-1) === '?')
	console.log("Ouais Ouais...");
else if(word === word.toUpperCase())
	console.log("Pwa, calme-toi...");
else
	console.log("balek.");