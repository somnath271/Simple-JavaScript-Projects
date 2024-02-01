function generatePassword() {
    const length = document.getElementById("length").value; // Password length entered by the user
    const includeSmall = document.getElementById("includeSmall").checked;
    const includeCapital = document.getElementById("includeCapital").checked;
    const includeNumbers = document.getElementById("includeNumbers").checked;
    const includeSpecial = document.getElementById("includeSpecial").checked;

    let charset = "";
    let password = "";

    if (includeSmall) {
        charset += "abcdefghijklmnopqrstuvwxyz";
    }
    if (includeCapital) {
        charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (includeNumbers) {
        charset += "0123456789";
    }
    if (includeSpecial) {
        charset += "!@#$%^&*()_+{}[]<>";
    }

    if (charset === "") {
        alert("Please select at least one character set.");
        return;
    }

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    document.getElementById("password").value = password;
}