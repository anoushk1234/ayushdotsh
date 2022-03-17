// this shit is broken, WIP!


const playarea = document.getElementById("page")


document.onload = load()
 


function post(slug){
	    playarea.innerHTML = "loading..."
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            playarea.innerHTML = marked.parse(this.responseText);
						document.title = pagename
        } else if (this.readyState == 4 && this.status == 404) {
          playarea.innerHTML = "Post not found."
        }
    };
    xhttp.open("GET", "https://ayush.sh/posts/" + slug + ".md", true);
    xhttp.send();	
}

function load(){
	const hash = window.location.hash.replace("#", "")
	if(hash){
		post(hash)
	} else {
		home();
	}
}

async function getPosts(){
		  var xhttp = new XMLHttpRequest();
    	xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
          index = JSON.parse(this.responseText);
					console.log(index)
					home()
        } 
    };
    xhttp.open("GET", "https://ayshptk.repl.co/writing/posts.json", true);
    xhttp.send();	
}+

async function home() {
	const finalCode = "";
	console.log(index)
	playarea.innerHTML = finalCode
}