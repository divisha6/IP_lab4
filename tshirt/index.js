function validateForm() {
    // Part A
    const values = [
        document.forms["myForm"]["custom"].value,
        document.forms["myForm"]["size"].value,
        document.forms["myForm"]["qty"].value,
        document.forms["myForm"]["date"].value,
        document.forms["myForm"]["fname"].value,
        document.forms["myForm"]["lname"].value,
        document.forms["myForm"]["address"].value,
        document.forms["myForm"]["Contact"].value,
        document.forms["myForm"]["email"].value,
        document.forms["myForm"]["color"].value,
        document.forms["myForm"]["payment"].value,
    ];

    const receipt_formatted = `Thank you for shopping!
Here's your receipt:
Date: ${new Date().toLocaleDateString("UK")}
Custom Message: ${values[0]}
Size: ${values[1]}
Quantity: ${values[2]}
Date: ${values[3]}
First Name: ${values[4]}
Last Name: ${values[5]}
Address: ${values[6]}
Contact: ${values[7]}
Email: ${values[8]}
Payment Method: ${values[9]}
Color: ${values[10]}`;
    alert(receipt_formatted);
}
const form = document.getElementById("place_order");
form.addEventListener("submit", (event) => {
    // stop form submission
    event.preventDefault();
});
