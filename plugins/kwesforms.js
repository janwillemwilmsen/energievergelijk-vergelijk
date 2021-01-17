// Use import
// import kwesforms from 'kwesforms';

// Or use require
// const kwesforms = require('kwesforms');



var form = document.getElementById("contactform");
var formMessage = document.getElementById("form-message");
form.onsubmit = function(event) {
event.preventDefault();
var formData = new FormData(form);
var xhr = new XMLHttpRequest();
xhr.open("POST", form.action, true);
xhr.onload = function(e) {
console.log(xhr);
var response = JSON.parse(xhr.response);
if (xhr.status === 200) {
formMessage.innerHTML = "Success";
} else {
formMessage.innerHTML = "Error: " + response.error;
}
};
xhr.send(formData);
};