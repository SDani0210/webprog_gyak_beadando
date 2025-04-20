document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault();
  
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const planet = document.getElementById("planet").value;
    const message = document.getElementById("message").value.trim();
  
    let errors = [];
  
    if (name.length < 10) errors.push("A név legalább 10 karakter legyen.");
    if (subject.length < 10) errors.push("A tárgy legalább 10 karakter legyen.");
    if (message.length < 10) errors.push("Az üzenet legalább 10 karakter legyen.");
    if (!planet) errors.push("Kérlek válassz egy bolygót.");
    if (!validateEmail(email)) errors.push("Érvénytelen email cím.");
  
    if (errors.length > 0) {
      alert(errors.join("\n"));
    } else {
      alert("Sikeres üzenetküldés! Köszönjük a megkeresést.");
      this.reset();
    }
  });
  
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }
  