window.onload = () => {
  ready();
}

function ready() {

  var html = document.querySelector('html');
  html.style.backgroundImage = 'url(' + 'https://source.unsplash.com/daily' + ')';

  function startTime() {
    var d = new Date();
    var time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    var dateText = document.getElementById('dateText');

    dateText.innerHTML = time;

    t = setTimeout(function () {
      startTime();
    }, 500);
  } startTime();

  function user() {
    var userName = document.getElementById('userName');
    userName.innerHTML = 'Benjamin';
  }
}
