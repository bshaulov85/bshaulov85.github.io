// Initialize EmailJS with your User ID

(function(){
    emailjs.init({
      publicKey: "MNA2dV0DiN-UG7sE7",
    });
 })();

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form values
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const email = document.getElementById('email').value;
    const interestSelect = document.getElementById('interest');
    const interests = Array.from(interestSelect.selectedOptions).map(option => option.value);

    // Validate Name
    if (name.length < 5) {
        alert("Your name should be at least 6 characters. Please enter your first and last name")
        return;
    }

    // Validate email
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Validate phone number (example: should be 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(phone)) {
        alert("Please enter a valid 10-digit phone number.");
        return;
    }

    // Validate that at least one interest is selected
    if (interests.length === 0) {
        alert("Please select at least one area of interest.");
        return;
    }


    // Send the email using EmailJS
    emailjs.sendForm("service_dq1abjf", "template_34iqkzo", this)
        .then(function(response) {
            alert("Thank you, your submission has been entered.");
            document.getElementById('userForm').reset();  // Reset the form
        }, function(error) {
            alert("Failed to send the email. Please try again.");
            console.error("EmailJS error:", error);
        });
});