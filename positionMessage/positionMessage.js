var movement;  
function positionMessage(){
	if (!document.getElementById) return;
	if (!document.getElementById('message')) return;
	var elem = document.getElementById('message');
	elem.style.position = 'absolute';
	elem.style.left = '100px';
	elem.style.top = '50px';
	//movement = setTimeout('moveMessage()', 5000);
}
//clearTimeout(movement);
function moveMessage(){
	if (!document.getElementById) return;
	if (!document.getElementById('message')) return;
	var elem = document.getElementById('message');
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if(xpos == 200 && ypos == 100){
		return true;
	}
	if (xpos < 200) {
		xpos++;
	}
	if (xpos > 200) {
		xpos--;
	}

	if (ypos < 100) {
		ypos++;
	}
	if (ypos > 100) {
		ypos--;
	}
	elem.style.left = xpos + 'px';
	elem.style.top = ypos + 'px';
	movement = setTimeout('moveMessage()', 10);
}