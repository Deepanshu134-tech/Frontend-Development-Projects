const ctaBtn = document.getElementById("cta-btn");
ctaBtn.addEventListener("click", () => {
  alert("SmartWatch X1 features:\n- Heart Rate Monitor\n- Waterproof Design\n- Long Battery Life");
});

const newsletterForm = document.getElementById("newsletter-form");
const formMessage = document.getElementById("form-message");

newsletterForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  formMessage.textContent = `Thank you! You've subscribed with ${email}.`;
  newsletterForm.reset();
});