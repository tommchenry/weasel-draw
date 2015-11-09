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
// TODO:Add user input character names
// TODO: Add a series of available warm-ups, let user input if this is first page of day
// TODO: Maybe something like http://www.diddly.com/random/


// Display a random prompt from an array
function displayDraw(){
	var pick = Math.floor(Math.random() * formats.length);
	document.getElementById("todraw").innerHTML = "Draw a " + formats[pick];
}

// Flash image for a set amount of time, originally a fraction of a second, progressively longer as time proceeded, originally simple abstracts, becoming more elaborate
function flashImage(){
document.getElementById('flash').innerHTML="<img src='http://lorempixel.com/600/400/'>"
// 5000 = 5 secs
setTimeout(function() {document.getElementById('flash').innerHTML='';},3000);
}