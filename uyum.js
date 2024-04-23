document.getElementById("passwordForm").addEventListener("submit", function(event) {
    var password1 = document.getElementById("password1").value.length;
    var password2 = document.getElementById("password2").value.length;

    if(password1!==password2){
        alert("şfreler uyuşmuyor");
        
    }else{
        if(password1.length<6&&password1.length>20){
            alert("şifre 6 ile 20 karakter arasında olmalıdır");
        }
        
    }
});
