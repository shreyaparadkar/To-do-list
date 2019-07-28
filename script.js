var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";
	var delButton = document.createElement("button");
	li.appendChild( delButton).innerHTML = "Remove";
	
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);


function strikingOut(event) {
	var itIsDone = event.target;
	if (itIsDone.tagName === "LI") {
		itIsDone.classList.toggle("done");
    }if (itIsDone.tagName === "BUTTON") {
		itIsDone.parentNode.remove();
	}
}

ul.addEventListener("click", strikingOut);