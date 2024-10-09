const form = document.getElementById("form-value");
const firstName = document.getElementById("Firstname");
const lastName = document.getElementById("lastname");
const email = document.getElementById("Email");
const phoneNumber = document.getElementById("phone");
const genderMale = document.getElementById("male");
const genderFemale = document.getElementById("female");

const name_error = document.getElementById("name_error");
const last_error = document.getElementById("last_error");
const Emailerror = document.getElementById("email_error");
const phoneerror = document.getElementById("phone_error");
const gendererror = document.getElementById("gender_error");

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
function validateName(firstName) {
    const namePattern = /^[a-zA-Z]+$/; 
    return namePattern.test(firstName);
}
function validateLastName(lastName) {
    const lastnamePattern = /^[a-zA-Z]+$/; 
    return lastnamePattern.test(lastName);
}
function validatePhoneNumber(phoneNumber) {
    return /^\d{10}$/.test(phoneNumber);
}

function validateForm() {
    let isValid = true;




    if (firstName.value.trim() === "") {
        name_error.innerHTML = "First name is required";
    } else if (!validateName(firstName.value)) {
        name_error.innerHTML = "first name only contains alphabets";  
    }
    if (lastName.value.trim() === "") {
        last_error.innerHTML = "Last name is required";
       
    } else if (!validateLastName(lastName.value)) {
        last_error.innerHTML = "Last name only contain alphabets";
    }
    if (email.value.trim() === "") {
        Emailerror.innerHTML = "Email is required";
    } else if (!validateEmail(email.value)) {
        Emailerror.innerHTML = "Please enter a valid email address";
    } 

    if (phoneNumber.value.trim() === "") {
        phoneerror.innerHTML = "Phone number is required";
        
    } else if (!validatePhoneNumber(phoneNumber.value)) {
        phoneerror.innerHTML = "Please enter a valid phone number (10 digits)";
    }
    if (!genderMale.checked && !genderFemale.checked) {
        gendererror.innerHTML = "Gender is required"
    } 

    return isValid;
}
form.addEventListener('submit', function (e) {
    e.preventDefault(); 

    if (validateForm()) {
        const gender = genderMale.checked ? 'Male' : 'Female';
        const log = `${firstName.value} ${lastName.value} ${email.value} ${phoneNumber.value} ${gender}`;
        console.log(log);
        console.log('Form submitted successfully');
    }
});
