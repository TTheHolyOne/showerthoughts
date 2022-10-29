// Where ur shower thought is put
const thought = document.getElementById("thought");
// Fetch those thoughts!
var showerThoughts
fetch('https://showerthoughts.ttheholyone.repl.co/showerThoughts.json').then(response => response.json()).then(data => { showerThoughts = data.showerThoughts });

//Generate them!!!
function gen() {
	var ranThought = showerThoughts[Math.floor(Math.random() * showerThoughts.length)];
	thought.innerHTML = ranThought;
}