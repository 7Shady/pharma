function showPopup(page,pwidth,pheight) {
		createPopUp(page,"New Window",pwidth,pheight,"yes","no");
}
function createPopUp(theURL, Name, popW, popH, scroll, resize) {
	var winleft = (screen.width - popW) / 2;
	var winUp = (screen.height - popH) / 2;
	winProp = 'width='+popW+',height='+popH+',left='+winleft+',top='+winUp+',scrollbars='+scroll+',resizable='+resize+'';
	Win = window.open(theURL, Name, winProp);
	Win.window.focus();
	Win.window.document.title=Name;
	}