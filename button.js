document.addEventListener('DOMContentLoaded', function() {
    var kelimeEklemeLink = document.querySelector('.kelime-ekleme-link');
    var kelimeEklemeFormu = document.querySelector('.kelime-ekleme-formu');

    kelimeEklemeLink.addEventListener('click', function(event) {
        event.preventDefault();
        kelimeEklemeFormu.classList.toggle('hidden');
        alert("ekleme başarılı");
    });
});
