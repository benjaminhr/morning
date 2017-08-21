window.onload = () => {
  var html = document.querySelector('html');
  html.style.backgroundImage = 'url(' + 'https://source.unsplash.com/category/buildings/?helsinki' + ')';
  ready();
}


function ready() {

  var input = document.getElementById('input');
  var userName;

  input.addEventListener('keydown', (e) => {
    if (e.keyCode == 13) {
      userName = input.value;
      console.log(userName);
      input.value = '';
      e.preventDefault();
      return false;
    }
  }, false)

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
