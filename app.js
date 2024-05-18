var map = L.map("map").setView([0, 0], 2);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const marker = L.marker([0, 0]).addTo(map).bindPopup("You are Here").openPopup();

function currPos(pos) {
  const lat = pos.coords.latitude;
  const long = pos.coords.longitude;

  marker.setLatLng([lat, long]).update();
  map.setView([lat, long], 13);
}
function errPos(pos) {
  console.log("Error");
}

const options = {};

function getUserPos() {
  const position = navigator.geolocation.getCurrentPosition(
    currPos,
    errPos,
    options
  );
}

function init() {
  getUserPos();
}

document.addEventListener("DOMContentLoaded", init);
