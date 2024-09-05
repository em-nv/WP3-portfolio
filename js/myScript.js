/* JS FOR TYPING TEXTS */
var typed = new Typed('#texts', {
  strings: ['Website Developer.', 'UI/UX Designer.'],
  typeSpeed: 30,
  backSpeed: 30,
  loop: true
});

/* JS FOR RESETING EXTS IN INPUT FIELDS */
function clearFields(){
  document.getElementById("name-field").value=""
  document.getElementById("email-field").value=""
  document.getElementById("message-field").value=""
}


/* JS FOR CHANGING PICTURE WHEN CLICKED */
var images = ["img/1.png", "img/2.png", "img/3.jpg", "img/4.jpg", "img/5.jpg"];
var currentIndex = 0;

function changeImage() {
    var img = document.getElementById("imgClickAndChange");
    currentIndex = (currentIndex + 1) % images.length;
    img.src = images[currentIndex];
}



/* JS FOR FONT CHANGING */

var fonts = ["Arial, sans-serif", "Times New Roman, serif", "Courier New, monospace"];
var currentFontIndex = 0;

document.getElementById("changeFontButton").addEventListener("click", function() {
    var contentDiv = document.getElementById("main");
    contentDiv.style.fontFamily = fonts[currentFontIndex];
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
})