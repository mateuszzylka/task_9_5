var withButtonsClass = document.getElementsByClassName('button');

for (var i = 0; i < withButtonsClass.length; i++) {
	alert(withButtonsClass[i].innerText);
	var numButtons = withButtonsClass.length;
}

alert('Number of buttons : ' + numButtons);