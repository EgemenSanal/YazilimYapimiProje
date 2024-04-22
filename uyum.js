document.getElementById("passwordForm").addEventListener("submit", function(event) {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if (password1 !== password2) {
        alert("Şifreler eşleşmiyor. Lütfen aynı şifreyi girin.");
        event.preventDefault(); 
    } else {
        alert("Şifreler eşleşti. Artık giriş yapabilirsiniz.");
    }
});
