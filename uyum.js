//giris modulu icin kontrol yapan fonksiyon

document.getElementById("passwordForm").addEventListener("submit", function(event) {
    var password1 = document.getElementById("password1").value;
    var password2 = document.getElementById("password2").value;

    if (password1 !== password2) {
        alert("Şifreler uyuşmuyor.");
        event.preventDefault(); // Prevent form submission
    } else {
        if (password1.length < 6 || password1.length > 20) {
            alert("Şifre 6 ile 20 karakter arasında olmalıdır.");
            event.preventDefault(); // Prevent form submission
        } else {
            alert("Giriş başarılı!");
        }
    }
});
