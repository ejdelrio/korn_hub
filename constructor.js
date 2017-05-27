'use strict';

//This Js file houses all the content for the contructor, as well as an array containing an array of said objects

var allVids = [];

function Video(url, profile, description) {
  this.url = url;
  this.videoSource = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${this.url}" frameborder="0" allowfullscreen></iframe>`;
  this.imgSource = `https://i.ytimg.com/vi/${this.url}/hqdefault.jpg`;
  this.profile = profile;
  this.description = description;
  this.views = 0;
  this.likes = 0;

  allVids.push(this);

  this.display = document.createElement('li');
  this.thumbnail = document.createElement('img');
  this.desHeader = document.createElement('h5');
  this.proHeader = document.createElement('h6');
  this.viewHeader = document.createElement('p');

  this.thumbnail.setAttribute('src', this.imgSource);
  this.desHeader.innerHTML = this.description;
  this.proHeader.innerHTML = this.profile;
  this.viewHeader.innerHTML = `Number of views: ${this.views}`;

  this.display.appendChild(this.thumbnail);
  this.display.appendChild(this.desHeader);
  this.display.appendChild(this.proHeader);
  this.display.appendChild(this.viewHeader);

}

new Video('aOYoM1mEL0Q', 'Eddie Del Rio', 'Lots of corn');
new Video('rCSJb9Pv2qc', 'Default', 'Default');
new Video('uOXZh6tdmSQ', 'Default', 'Default');
new Video('SZoX6Q0UK8A', 'Default', 'Default');
new Video('aOYoM1mEL0Q', 'Default', 'Default');
new Video('rCSJb9Pv2qc', 'Default', 'Default');
new Video('uOXZh6tdmSQ', 'Default', 'Default');
new Video('SZoX6Q0UK8A', 'Default', 'Default');
new Video('aOYoM1mEL0Q', 'Default', 'Default');
new Video('rCSJb9Pv2qc', 'Default', 'Default');
new Video('uOXZh6tdmSQ', 'Default', 'Default');
new Video('SZoX6Q0UK8A', 'Default', 'Default');
