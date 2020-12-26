"use strict";

document.addEventListener('DOMContentLoaded', function () {
  // Custom JS
  var body = document.querySelector('body');
  cx = window.innerHeight / 2;
  cy = window.innerWidth / 2;
  body.addEventListener('mousemove', function (e) {
    clientX = e.pageX;
    clientY = e.pageY; //console.log(clientX + '/' + clientY);

    request = requestAnimationFrame(updateMe);
  });

  function updateMe() {
    dx = clientX - cx;
    dy = clientY - cy;
    tiltx = dy / cy;
    tilty = dx / cx;
    radius = Math.sqrt(Math.pow(tiltx, 2) + Math.pow(tilty, 2));
    begree = radius * 12; //угол наклона 3d анимации

    gsap.to('.content', 1, {
      transform: "rotate3d(".concat(tiltx, ", ").concat(tilty, ", 0, ").concat(begree, "deg)")
    });
  }

  gsap.to('.card', {
    zoom: .98
  });
  gsap.to('.l', {
    opacity: 1,
    duration: .1
  });
  gsap.to('.l2', {
    opacity: 1,
    left: -10,
    top: 10,
    duration: .3,
    delay: .25
  });
  gsap.to('.l3', {
    opacity: 1,
    left: -20,
    top: 20,
    duration: .3,
    delay: .25
  });
  gsap.to('.card-russia', {
    opacity: 0.07,
    duration: .1
  });
  gsap.to('.card-logo-w', {
    opacity: 1,
    duration: .3
  });
  gsap.to('.card-valid', {
    opacity: 1,
    zoom: 1,
    delay: .3,
    duration: 1
  });
  gsap.to('.card-number-holder', {
    opacity: 1,
    zoom: 1,
    delay: .3,
    duration: 1
  });
  gsap.to('.card-chip', {
    opacity: 1,
    duration: .3
  });
});