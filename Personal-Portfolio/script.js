// ==================== Assigning a varibale to the tablink elemnt-=========/
var tablinks = document.getElementsByClassName("tab-links");

// ==================== Assigning a varibale to the tabcontent elemnt-=========/

var tabcontents = document.getElementsByClassName("tab-contents");

// Creating a function call with one argument tabname

async function opentab(tabname) {
  //looping through all the tablinks
  for (tablink of tablinks) {
    tablink.classList.remove("active");
  }

  for (tabcontent of tabcontents) {
    tabcontent.classList.remove("active-tab");
  }

  // Targetting the clicked event to add the active tab and content.
  event.currentTarget.classList.add("active");
  document.getElementById(tabname).classList.add("active-tab");
}

// ================================ Media screen function to display Sidemenu items ===========================
var sidemenu = document.getElementById("sidemenu");

async function openmenu() {
  sidemenu.style.right = "0";
}

async function closemenu() {
  sidemenu.style.right = "-200px";
}

// =================================== Gotten from gitHub link https://github.com/jamiewilson/form-to-google-sheets=======
// ========= This will allow us receive instant messages on googe sheet when a user fill the contacts section ===============
const scriptURL =
  "https://script.google.com/macros/s/AKfycbz9Ce08ZjH4RQacUfj2wTbAVXS286xzhnJlbOFtTCXtO5Y2CdQwTsJKnVuDwbSTG4N6/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully"; //Display a success message after submit 
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000); // 5000 here means the form is set to reset after 5seconds of successfull submittion .
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
