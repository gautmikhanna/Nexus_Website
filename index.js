const load = async (page, isReload = false) => {
  fetch("./content/" + pages[page] + ".html")
    .then((response) => response.text())
    .then((data) => {
      if (isReload) {
        document.querySelector(".loader").classList.add("fadeOut");
        setTimeout(() => {
          document.querySelector("main").innerHTML = data;
        }, 1000);
      } else document.querySelector("main").innerHTML = data;
    });
};
const pages = ["landing", "about", "sponsors"];
var page_serve = window.location.search.split("=");
page_serve = page_serve.length > 1 ? page_serve[page_serve.length - 1] : 0;
load(page_serve, true);

const next = (event) => {
  page_serve = (page_serve + 1) % pages.length;
  console.log(page_serve);
  load(page_serve);
};

const previous = (event) => {
  if (!page_serve) page_serve = pages.length - 1;
  else page_serve -= 1;
  page_serve = page_serve % pages.length;
  console.log(page_serve);
  load(page_serve);
};

document.getElementById("next").addEventListener("click", next);
document.getElementById("previous").addEventListener("click", previous);
