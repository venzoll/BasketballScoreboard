let homePoints = document.getElementById("home-points");
let awayPoints = document.getElementById("away-points");
let countHome = 0;
let countAway = 0;

function incrementOneHome() {
  countHome += 1;
  homePoints.textContent = countHome;
}

function incrementTwoHome() {
  countHome += 2;
  homePoints.textContent = countHome;
}

function incrementThreeHome() {
  countHome += 3;
  homePoints.textContent = countHome;
}

function incrementOneAway() {
  countAway += 1;
  awayPoints.textContent = countAway;
}

function incrementTwoAway() {
  countAway += 2;
  awayPoints.textContent = countAway;
}

function incrementThreeAway() {
  countAway += 3;
  awayPoints.textContent = countAway;
}
