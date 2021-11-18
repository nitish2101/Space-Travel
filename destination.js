function moonToMars() {
  document.querySelector(".mars").classList.add("pressed");
  setTimeout(function () {
    document.querySelector(".mars").classList.remove("pressed");
  }, 300);
  document.querySelector(".moonImg").src =
    "./assets/destination/image-mars.png";
  document.querySelector(".planet-info").innerHTML =
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  document.querySelector(".planet-heading").innerHTML = "MARS";
}
function moonToEuropa() {
  document.querySelector(".europa").classList.add("pressed");
  setTimeout(function () {
    document.querySelector(".europa").classList.remove("pressed");
  }, 300);
  document.querySelector(".moonImg").src =
    "./assets/destination/image-europa.png";
  document.querySelector(".planet-info").innerHTML =
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  document.querySelector(".planet-heading").innerHTML = "EUROPA";
}
function moonToTitan() {
  document.querySelector(".titan").classList.add("pressed");
  setTimeout(function () {
    document.querySelector(".titan").classList.remove("pressed");
  }, 300);
  document.querySelector(".moonImg").src =
    "./assets/destination/image-titan.png";
  document.querySelector(".planet-info").innerHTML =
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  document.querySelector(".planet-heading").innerHTML = "TITAN";
}
function moon() {
  document.querySelector(".moon").classList.add("pressed");
  setTimeout(function () {
    document.querySelector(".moon").classList.remove("pressed");
  }, 300);
  document.querySelector(".moonImg").src =
    "./assets/destination/image-moon.png";
  document.querySelector(".planet-info").innerHTML =
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  document.querySelector(".planet-heading").innerHTML = "MOON";
}
