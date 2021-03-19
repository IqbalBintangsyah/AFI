function menu() {
	var x = document.getElementById("menu");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}

function wwAre() {
	var x = document.getElementById("whatweare");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}

function wwDo() {
	var x = document.getElementById("whatwedo");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}

function contactUs() {
	var x = document.getElementById("contactus");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}

function menupage(id){
	var x = document.getElementById(id+'T');
	hidePage();
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
}

function hidePage(){
    var open_page = document.getElementsByClassName("menuThumbnail");
	for (var i = 0; i < open_page.length; i ++) {
		open_page[i].style.display = 'none';
	}
}