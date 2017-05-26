'use strict';

function unhideList () {
  var main = document.getElementById('main');
  var listTags = main.getElementsByTagName('ul');
  for (var i = 0; i < listTags.length; i++) {
    var targetLi = listTags[i].getElementsByTagName('li');
    targetLi[8].style.visibility = 'visible';
    targetLi[8].style.position = 'static';
    targetLi[9].style.visibility = 'visible';
    targetLi[9].style.position = 'static';
  }
}

function hideList () {
  var main = document.getElementById('main');
  var listTags = main.getElementsByTagName('ul');
  for (var i = 0; i < listTags.length; i++) {
    var targetLi = listTags[i].getElementsByTagName('li');
    targetLi[8].style.visibility = 'hidden';
    targetLi[8].style.position = 'fixed';
    targetLi[9].style.visibility = 'hidden';
    targetLi[9].style.position = 'fixed';
  }

}

function hideMenu() {
  document.getElementsByClassName('hidden')[0].style.visibility = 'hidden';
}

function unhideMenu() {
  document.getElementsByClassName('hidden')[0].style.visibility = 'visible';
}

function expandMain() {
  var main = document.getElementById('main');
  main.style.width = '1070px';
  main.style.marginLeft = '100px';
  var headers = main.getElementsByTagName('h3');
  var divs = main.getElementsByTagName('div');
  for (var i = 0; i < headers.length; i++) {
    divs[i].style.width = '1070px';
    headers[i].style.width = '1055px';
  }

}

function shrinkMain() {
  var main = document.getElementById('main');
  main.style.width = '856px';
  main.style.marginLeft = '280px';
  var headers = main.getElementsByTagName('h3');
  var divs = main.getElementsByTagName('div');
  for (var i = 0; i < headers.width; i++) {
    divs[i].style.width = '856px';
    headers[i].style.width = '841px';
  }
}

function handler() {
  if (document.getElementsByClassName('hidden')[0].style.visibility === 'hidden') {
    unhideMenu();
    hideList();
    shrinkMain();
  } else {
    hideMenu();
    expandMain();
    unhideList();
  }
}

document.getElementsByClassName('menu')[0].addEventListener('click', handler);
