let container = document.querySelector(".container");
let girls = document.querySelectorAll(".girl");

document.body.addEventListener("mousemove", (e) => {
  let x = (window.innerWidth / 2 - e.pageX) / 30;
  let y = (window.innerHeight / 2 - e.pageY) / 30;

  container.style.transform = `rotateX(${-y}deg) rotateY(${-x}deg)`;

  [].forEach.call(girls, (girls) => {
    girls.style.transform = `translateY(${y}px) translateX(${x}px)`;
  });
});
