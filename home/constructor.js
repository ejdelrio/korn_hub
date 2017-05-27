'use strict';

//This Js file houses all the content for the contructor, as well as an array containing an array of said objects

function Video(url, videoSource, imgSource, profile, description, views, likes) {
  this.url = url;
  this.videoSource = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${this.url}" frameborder="0" allowfullscreen></iframe>`;
  this.imgSource = `https://i.ytimg.com/vi/${this.url}/hqdefault.jpg?sqp=-oaymwEXCNACELwBSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBpr15oeJPLnYydPpt2ET9I-657Dg`;
  this.profile = profile;
  this.description = description;
  this.views = 0;
  this.likes = 0;
}
