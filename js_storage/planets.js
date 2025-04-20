function flipCard(element) {
    const innerCard = element.querySelector('.card-inner');
    if (innerCard) {
      innerCard.classList.toggle('flipped');
    }
  }
  
  

  document.querySelectorAll('.planet-card').forEach(card => {
    const inner = card.querySelector('.card-inner');
    card.addEventListener('click', () => {
      inner.classList.toggle('flipped');
    });
  });
  