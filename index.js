var pages = document.getElementsByClassName("page");
let clickedPage = 0;

for (var i = 0; i < pages.length; i++) {
  var page = pages[i];
  if (i % 2 === 0) {
    page.style.zIndex = pages.length - i;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  for (var i = 0; i < pages.length; i++) {
    //Or var page = pages[i];
    pages[i].pageNum = i + 1;
    clickedPage = pages[i].pageNum;
    pages[i].onclick = function (e) {
      if (this.pageNum % 2 === 0) {
        this.classList.remove("flipped");
        this.previousElementSibling.classList.remove("flipped");
      } else {
        this.classList.add("flipped");
        this.nextElementSibling.classList.add("flipped");
      }
    };
  }
});

window.onkeyup = function (e) {
  pages[clickedPage].dispatchEvent(new Event("click"));
};
