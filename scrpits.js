const form = document.getElementById("booking-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Retrieve form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const destination = document.getElementById("destination").value;
    const checkInDate = document.getElementById("check-in").value;
    const checkOutDate = document.getElementById("check-out").value;
    const adults = document.getElementById("adults").value;
    const children = document.getElementById("children").value;
    const message = document.getElementById("message").value;

    // Perform further actions like validation or sending the data to the backend
    // For this example, let's just log the form data
    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Destination:", destination);
    console.log("Check-in Date:", checkInDate);
    console.log("Check-out Date:", checkOutDate);
    console.log("Adults:", adults);
    console.log("Children:", children);
    console.log("Additional Message:", message);

    // Optionally, you can display a success message or redirect to a thank-you page
    alert("Booking successful!");
    window.location.href = "thank-you.html";
});
