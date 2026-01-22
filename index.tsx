// TechSoft Interactive Logic
// Enhanced vanilla JavaScript for modern UI components

// 1. Server Status Monitoring Simulation
const statusButton = document.getElementById('status-btn');
if (statusButton) {
  statusButton.onclick = function() {
    statusButton.innerText = "Connecting to NOC...";
    statusButton.style.opacity = "0.7";
    
    setTimeout(() => {
      alert("Infrastructure Audit Complete: All 12 global regions are operational. API latency is within 20ms.");
      statusButton.innerText = "Live Infrastructure Status";
      statusButton.style.opacity = "1";
    }, 1200);
  };
}

// 2. Innovation Lab Reveal Logic
const showSecretButton = document.getElementById('show-secret-btn');
const secretParagraph = document.getElementById('secret-text');

if (showSecretButton && secretParagraph) {
  showSecretButton.onclick = function() {
    const isHidden = secretParagraph.style.display === "" || secretParagraph.style.display === "none";
    
    if (isHidden) {
      secretParagraph.style.display = "block";
      showSecretButton.innerHTML = "Exit Research View";
    } else {
      secretParagraph.style.display = "none";
      showSecretButton.innerHTML = "Explore Research Lab";
    }
  };
}

// 3. FAQ Accordion Logic
const faqQuestions = document.querySelectorAll('.faq-question');
faqQuestions.forEach(question => {
  question.addEventListener('click', () => {
    const item = question.parentElement;
    const isActive = item.classList.contains('active');
    
    // Close other open FAQ items (optional, but cleaner UX)
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    
    if (!isActive) {
      item.classList.add('active');
    }
  });
});

// 4. Newsletter Subscription Logic
const newsletterForm = document.getElementById('newsletter-form');
if (newsletterForm) {
  newsletterForm.onsubmit = function(e) {
    e.preventDefault();
    const emailInput = newsletterForm.querySelector('input') as HTMLInputElement;
    const btn = newsletterForm.querySelector('button') as HTMLButtonElement;
    
    if (emailInput.value) {
      const originalText = btn.innerText;
      btn.innerText = "Adding...";
      btn.disabled = true;
      
      setTimeout(() => {
        alert("Subscription Successful! You'll receive our next tech briefing shortly.");
        emailInput.value = "";
        btn.innerText = originalText;
        btn.disabled = false;
      }, 1000);
    }
  };
}

// 5. Inquiry Form Validation & Submission Handling
const contactForm = document.getElementById('my-contact-form');
if (contactForm) {
  contactForm.onsubmit = function(event) {
    event.preventDefault();

    const nameInput = document.getElementById('user-name') as HTMLInputElement;
    const emailInput = document.getElementById('user-email') as HTMLInputElement;
    const messageInput = document.getElementById('user-msg') as HTMLTextAreaElement;

    // Basic validation check
    if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
      alert("Please ensure all required fields are filled out accurately.");
      return;
    }

    // Mock successful submission
    const submitBtn = contactForm.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (submitBtn) {
      const originalText = submitBtn.innerText;
      submitBtn.innerText = "Transmitting Inquiry...";
      submitBtn.disabled = true;

      setTimeout(() => {
        alert("Transmission Success! A Strategy Advisor has been assigned to your request. Expect a briefing within 24 hours at " + emailInput.value);
        
        // Reset form
        (contactForm as HTMLFormElement).reset();
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
      }, 1500);
    }
  };
}
