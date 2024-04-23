document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Form submission prevented for this example
    var passwordField = document.getElementById("password");
    var password = passwordField.value;
    alert("Girilen Şifre: " + password);
});
