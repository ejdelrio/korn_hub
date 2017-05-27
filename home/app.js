
var menu = document.getElementsByClassName('menu')[0];

function toggle() {
  var dropDown = document.getElementsByClassName('dropdown')[0];
  if (dropDown.style.display === 'inline') {
    hide();
  } else {
    unHide();
  }
}

function hide() {
  var dropDown = document.getElementsByClassName('dropdown')[0];
  var container = document.getElementsByClassName('container');
  dropDown.style.display = 'none';
  for (var i = 0; i < container.length; i++) {
    container[i].style.width = '1071px';
  }
}

function unHide() {
  var dropDown = document.getElementsByClassName('dropdown')[0];
  var container = document.getElementsByClassName('container');
  dropDown.style.display = 'inline';
  for (var i = 0; i < container.length; i++) {
    container[i].style.width = '860px';
  }
}



menu.addEventListener('click', toggle);

var containers = document.getElementsByClassName('container');
var parentList = containers[0].getElementsByTagName('ul');

for (var i = 0; i < 10; i++) {
  parentList[0].appendChild(allVids[i].display);
}
