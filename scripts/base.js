function stopTimer(){
	 clearTimeout(timer);
}

function isUndefined(obj){
	if(typeof obj === 'undefined')
		return true;
	else if(!obj)
		return true;
	return false;
}

function showLogoutAlert(){
	alert("15 minutes up. You should stop now");
}
