function validatestudentlogin(){
  const studentNumberInput = document.getElementById("student-number");
  const libraryCardNumberInput = document.getElementById("library-card-number");
  const studentPasswordInput = document.getElementById("password");

 if (studentNumberInput.value.trim() === "" || libraryCardNumberInput.value.trim() === "" || studentPasswordInput.value.trim() === "") {
    alert("Please Fill In All Fields");
  } else {
    window.location = "/HTML/studentpage1.html";
  }
}

function validatetechlogin(){
const emailInput = document.getElementById("email");
const technicianPasswordInput = document.getElementById("tech-password");

if (emailInput.value.trim() === "" || technicianPasswordInput.value.trim() === "") {
    alert("Please Fill In All Fields");
  } else {
    window.location = "/HTML/technicanpage1.html";
  }
}

