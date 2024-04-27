document.getElementById("passwordForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    var passwordField = document.getElementById("password");
    var password = passwordField.value;
    alert("Girilen Şifre: " + password);
});
