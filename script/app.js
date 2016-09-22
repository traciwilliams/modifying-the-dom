window.onload = function(evt) {
	console.log ("yeah");

	var checkmark = "(insert checkbox here)";
	//get a list of element with a tag
	

	//get a list of element with a tag
	var list = document.getElementsByTagName ("li");
	var n = list.length;
	var paragraph = document.getElementById("target-for-text");

	var content = buildParagraph("I love waffles and maple syrup");
	var name = document.getElementById("name");
	//name.innerHTML = "I am the kind of all that is awesome";
	paragraph.innerHTML = content;
	var username = prompt("What is your name?");
	name.innerHTML = username;
	paragraph.innerHTML = content;



	//console.log(checkmark);
	//console.log(list);
	console.log(paragraph);
	console.log(content);

	for (var i = 0; i < n; i++) {
		list[i].innerHTML = list[i].innerHTML + checkmark;
	}

};
//--------problem in class --------//
//loop through the ordered list 
//and at the end of the innerHTML of each li 
//add <strong>wish I could have</strong>
//loop in the reverse order

	var list = document.getElementsByTagName ("li");
	var openTag = "<strong>" + "wish I could have" + "</strong>";
	
	for (var i = 0; i < n-1; i--) {
		list[i].innerHTML = list[i].innerHTML + openTag;
	};

	//--------------------------------------
function buildParagraph(content) {
	var openTag = "<em><strong>";
	var closingTag = "</strong></em>";


	return openTag + content + closingTag;

}