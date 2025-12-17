// Grab the form and fields
const form = document.contact_form;
const fullname = form.fname;
const email = form.email;
const whoRadios = form.who;
const otherField = form.other;
const msg = form.msg;

// Utility: check valid email
function isValidEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(email);
}

// Show error
function showError(field, message) {
  field.nextElementSibling.innerHTML = message;
}

// Clear error
function clearError(field) {
  field.nextElementSibling.innerHTML = "";
}

// Handle form submission
form.addEventListener("submit", function (event) {
  let valid = true;

  // Full name validation
  if (fullname.value.trim() === "") {
    showError(fullname, "Must enter full name!");
    valid = false;
  } else {
    clearError(fullname);
  }

  // Email validation
  if (email.value.trim() === "" || !isValidEmail(email.value)) {
    showError(email, "Invalid email address!");
    valid = false;
  } else {
    clearError(email);
  }

  // Message validation
  if (msg.value.trim() === "") {
    showError(msg, "Message cannot be empty!");
    valid = false;
  } else {
    clearError(msg);
  }

  // "Other" field validation if "Others" is selected
  const selectedWho = Array.from(whoRadios).find((r) => r.checked)?.value;
  if (selectedWho === "Others" && otherField.value.trim() === "") {
    showError(otherField, "Please specify who you are!");
    valid = false;
  } else {
    clearError(otherField);
  }

  // Prevent submission if any field is invalid
  if (!valid) {
    event.preventDefault();
  }
});

// Real-time validation
fullname.addEventListener("input", () => {
  if (fullname.value.trim() !== "") clearError(fullname);
});

email.addEventListener("input", () => {
  if (isValidEmail(email.value)) clearError(email);
});

msg.addEventListener("input", () => {
  if (msg.value.trim() !== "") clearError(msg);
});

otherField.addEventListener("input", () => {
  if (otherField.value.trim() !== "") clearError(otherField);
});

// Show/hide "Other" field based on radio selection
Array.from(whoRadios).forEach((radio) => {
  radio.addEventListener("change", () => {
    if (radio.value === "Others" && radio.checked) {
      otherField.style.display = "inline-block";
    } else if (radio.checked) {
      otherField.style.display = "none";
      otherField.value = "";
      clearError(otherField);
    }
  });
});

// Initialize "Other" field visibility on page load
window.addEventListener("DOMContentLoaded", () => {
  const selectedWho = Array.from(whoRadios).find((r) => r.checked)?.value;
  if (selectedWho === "Others") {
    otherField.style.display = "inline-block";
  } else {
    otherField.style.display = "none";
  }
});
