function menu() {
	var x = document.getElementById("menu");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}

function menu_wwAre() {
	var x = document.getElementById("whatweare");
	var y = document.getElementById("menu");
	if (x.style.display === "none") {
	  y.style.display = "block";
	} else {
	  y.style.display = "none";
	  x.style.display = "none";
	}
	wwAre();
	menupage("overview");
}

function menu_wwDo() {
	var x = document.getElementById("whatwedo");
	var y = document.getElementById("menu");
	if (x.style.display === "none") {
	  y.style.display = "block";
	} else {
	  y.style.display = "none";
	  x.style.display = "none";
	}
	wwDo();
	menupage("development");
}

function menu_contactUs() {
	var x = document.getElementById("contactus");
	var y = document.getElementById("menu");
	if (x.style.display === "none") {
	  y.style.display = "block";
	} else {
	  y.style.display = "none";
	  x.style.display = "none";
	}
	contactUs();
	menupage("recruitment");
}

function wwAre() {
	var x = document.getElementById("whatweare");
	hideList();
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}

function wwDo() {
	var x = document.getElementById("whatwedo");
	hideList();
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}

function contactUs() {
	var x = document.getElementById("contactus");
	hideList();
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}

function menupage(id){
	var x = document.getElementById(id+'T');
	var y = document.getElementById(id+'A');
	var str = document.getElementById(id);
	hidePage();
	x.style.display = "block";
	y.style.display = "inline-block";
	//str.style.fontWeight = "500";
}

function hideList(){
	var wwAre = document.getElementById("whatweare");
	var wwDo = document.getElementById("whatwedo");
	var contactUs = document.getElementById("contactus");
	wwAre.style.display = "none";
	wwDo.style.display = "none";
	contactUs.style.display = "none";
}

function hidePage(){
    var open_page = document.getElementsByClassName("menuThumbnail");
	for (var i = 0; i < open_page.length; i ++) {
		open_page[i].style.display = 'none';
	}
	var active_arrow = document.getElementsByClassName("arrow aright");
	for (var j = 0; j < active_arrow.length; j ++) {
		active_arrow[j].style.display = 'none';
	}
	/*var bold_text = document.getElementsByClassName("menu_list");
	for (var k = 0; k < active_arrow.length; k ++) {
		bold_text[k].style.fontWeight = 100;
	}*/
}

function goToTop(){
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
  }

function index(){
	location.href = "http://afterfit.co.id/";
}

function overview(){
	location.href = "http://afterfit.co.id/overview";
}

function development(){
	location.href = "http://afterfit.co.id/development";
}

function ourTeam(){
	location.href = "http://afterfit.co.id/our-team";
}

function epc(){
	location.href = "http://afterfit.co.id/epc";
}

function message(){
	location.href = "http://afterfit.co.id/our-message";
}

function kawamura(){
	location.href = "http://afterfit.co.id/kawamura";
}

function nagao(){
	location.href = "http://afterfit.co.id/nagao";
}

function maria(){
	location.href = "http://afterfit.co.id/maria";
}

function asep(){
	location.href = "http://afterfit.co.id/asep";
}

function andrie(){
	location.href = "http://afterfit.co.id/andrie";
}

function kemas(){
	location.href = "http://afterfit.co.id/kemas";
}

function wika(){
	location.href = "http://afterfit.co.id/wika";
}

function rosi(){
	location.href = "http://afterfit.co.id/rosi";
}

function ancha(){
	location.href = "http://afterfit.co.id/ancha";
}