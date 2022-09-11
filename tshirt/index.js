function validateForm() {
    // Part A
    const values = [
        document.forms["myForm"]["custom"].value,
        document.forms["myForm"]["text-tshirt"].value,
        document.forms["myForm"]["size"].value,
        document.forms["myForm"]["qty"].value,
        document.forms["myForm"]["details"].value,
        document.forms["myForm"]["date"].value,
        document.forms["myForm"]["fname"].value,
        document.forms["myForm"]["lname"].value,
        document.forms["myForm"]["address"].value,
        document.forms["myForm"]["Contact"].value,
        document.forms["myForm"]["email"].value,
        document.forms["myForm"]["color"].value,
        document.forms["myForm"]["payment"].value,
    ];
    const hasEmptyFields = Object.values(values).some(
        (element) => element === ""
    );
    if (hasEmptyFields) {
        alert("Please fill in all fields");
        return;
    }

const receipt_formatted = `Thank you for shopping!
Here's your receipt:
Date: ${new Date().toLocaleDateString("UK")}
Custom Message: ${values[0]}
Size: ${values[1]}
Quantity: ${values[2]}
Details: ${values[3]}
Date: ${values[4]}
First Name: ${values[5]}
Last Name: ${values[6]}
Address: ${values[7]}
Contact: ${values[8]}
Email: ${values[9]}
Payment Method: ${values[10]}
Color: ${values[11]}`;
    alert(receipt_formatted);
}
const form = document.getElementById("place_order");
form.addEventListener("submit", (event) => {
    // stop form submission
    event.preventDefault();
});
