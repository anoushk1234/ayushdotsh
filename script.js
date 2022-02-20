const playarea = document.getElementById("page")


document.onload = load()


function page(pagename) {
    playarea.innerHTML = "loading..."
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            playarea.innerHTML =
                this.responseText;
							document.title = pagename

        } else if (this.readyState == 4 && this.status == 404) {
            page(undefined)
        }
    };
    xhttp.open("GET", "components/" + pagename + ".html", true);
    xhttp.send();
}

function url(url) {
    window.open(url, '_blank').focus();
}

function load(){
	page("ayush")
}