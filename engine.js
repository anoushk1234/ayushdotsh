const playarea = document.getElementById("page");

document.onload = load();

function page(pagename, isMarkdown) {
  console.log(currentPage, "-->", pagename);
  if (currentPage == pagename) {
    return;
  }
  currentPage = pagename;
  playarea.innerHTML = "loading...";
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      playarea.innerHTML = marked.parse(this.responseText);
      document.title = pagename;
    } else if (this.readyState == 4 && this.status == 404) {
      page(undefined);
    }
  };
  const ext = isMarkdown ? ".md" : ".html";
  console.log(pagename, ext);

  xhttp.open("GET", "components/" + pagename + ext, true);
  xhttp.send();
}

function url(url) {
  window.open(url, "_blank").focus();
}

function load() {
  currentPage = "home";
  page("anoushk", false);
}
