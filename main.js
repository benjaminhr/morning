window.onload = () => {
  var html = document.querySelector('html');
  html.style.backgroundImage = 'url(' + 'https://source.unsplash.com/category/buildings/?helsinki' + ')';
  ready();
}


function ready() {

  var preText = document.getElementById('preText');
  var afterText = document.getElementById('afterText');
  var text = document.getElementsByClassName('text')
  var input = document.getElementById('input');
  var user = document.getElementById('userName');
  var userName;

  input.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
    userName = input.value;
      if(typeof(Storage) !== 'undefined') {
        localStorage.setItem('username', userName);
      }
      input.value = '';
      e.preventDefault();
      hideShow();
      return false;
    }
  });

  function hideShow() {
    preText.classList.add('hidden');
    afterText.classList.remove('hidden');
  }

  function name() {
    var localUserName = localStorage.username;
    user.innerHTML = 'Hello, ' + localUserName + '.';
  } name();

  function startTime() {
    var d = new Date();
    var time = d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds();
    var dateText = document.getElementById('dateText');

    dateText.innerHTML = time;

    t = setTimeout(function () {
      startTime();
    }, 500);
  } startTime();

}
