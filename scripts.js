var withButtonsClass = document.getElementsByClassName('button');
console.log(withButtonsClass);
var numButtons = withButtonsClass.length;

for (var i = 0; i < numButtons; i++) {
	alert(withButtonsClass[i].innerText);
}