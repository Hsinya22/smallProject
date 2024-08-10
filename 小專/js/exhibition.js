// 導覽列ＪＳ
document.getElementById('menuIcon').addEventListener('click', function() {
  var navLinks = document.getElementById('navLinks');
  if (navLinks.classList.contains('show')) {
      navLinks.classList.remove('show');
  } else {
      navLinks.classList.add('show');
  }
});

// 展區介紹
function openArea(evt, cityName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();