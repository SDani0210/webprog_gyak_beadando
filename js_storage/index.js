//Dizájn javascript.
const particleContainer = document.getElementById("particle-background");

for (let i = 0; i < 80; i++) {
  const particle = document.createElement("div");
  particle.classList.add("particle");

  const size = Math.random() * 3 + 2;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;

  const x = Math.random() * 100;
  const y = Math.random() * 100;
  particle.style.left = `${x}%`;
  particle.style.top = `${y}%`;

  // Szín: kék-lila átmenetből random
  const color = `hsl(${Math.floor(Math.random() * 50 + 220)}, 100%, 70%)`;
  particle.style.background = color;

  // Késleltetés az animációhoz, hogy ne egyszerre induljanak
  particle.style.animationDelay = `${Math.random() * 5}s`;

  particleContainer.appendChild(particle);
}
