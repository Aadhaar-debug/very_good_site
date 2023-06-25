var elements = document.getElementsByClassName("littleoptions1");
for (var i = 0; i < elements.length; i++) {
  elements[i].addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}
