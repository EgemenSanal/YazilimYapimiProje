
//kelime ekleme butonu icin dropdown menu 
document.getElementById('setting-icon').addEventListener('click', function() {
    var dropdownMenu = document.querySelector('.dropdown-menu');
    dropdownMenu.classList.toggle('show');
  
    if (dropdownMenu.classList.contains('show')) {
      document.addEventListener('click', function(event) {
        if (!event.target.closest('#setting-icon, .dropdown-menu')) {
          dropdownMenu.classList.remove('show');
        }
      });
    }
  });