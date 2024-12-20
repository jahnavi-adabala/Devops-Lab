window.onload = function handleSubmit ()  {
    const pass = document.getElementById("password").value;
    const conpass = document.getElementById("confirmPassword").value;
    const pho = document.getElementById("phoneNumber").value;

    if (pass !== conpass) {
        alert("Password Mismatch");
    } else {
        if (pho.length !== 10) {
            alert("Invalid phone number");
        } else {
            alert("Registration successful");
        }
    }
};
