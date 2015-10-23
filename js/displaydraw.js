var formats = ["8-Panel Strip", "9-Panel Strip", "6-Panel Strip", 
"4-Panel Strip", "New Yorker Style", "5-Minute Time Limit Scrawl Page", 
"Rough Pencils Only", "Carl Barks Panel Copy 4 Times", " the Alphabet. The whole thing. Slowly.", 
"a cartoon or comic strip character from memory. Then draw it looking at a reference.", 
"warm-up page. Get your hand and wrist and elbow and shoulder loose. Big quick movements."];
// TODO:Add CSS
// TODO:Add well-designed characters
// TODO:Add Stanchfield hands
// TODO:Add selector for types of random suggestion
// TODO:Add obstructions
// TODO:Multiple obstructions
// TODO:Pull from Google image search
// TODO:Add user input character names
// TODO:Add timer functionality
// TODO: Add a series of available warm-ups, let user input if this is first page of day

function displayDraw(){
	var pick = Math.floor(Math.random() * formats.length);
	document.getElementById("todraw").innerHTML = "Draw a " + formats[pick];
}
