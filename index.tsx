// TechSoft Interactive Logic
// Enhanced vanilla JavaScript for modern UI components

// 1. Server Status Monitoring Simulation
const statusButton = document.getElementById('status-btn');
if (statusButton) {
  statusButton.onclick = function() {
    statusButton.innerText = "Scanning...";
    statusButton.style.opacity = "0.7";
    
    setTimeout(() => {
      alert("System Status: All infrastructure components are operating normally across all regions.");
      statusButton.innerText = "Check Server Status";
      statusButton.style.opacity = "1";
    }, 600);
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
      showSecretButton.innerHTML = "Hide Project Details";
    } else {
      secretParagraph.style.display = "none";
      showSecretButton.innerHTML = "View Our Special Projects";
    }
  };
}

// 3. Inquiry Form Validation & Submission Handling
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
      submitBtn.innerText = "Processing...";
      submitBtn.disabled = true;

      setTimeout(() => {
        alert("Inquiry Received! Thank you, " + nameInput.value.split(' ')[0] + ". A technical advisor will contact you at " + emailInput.value + " shortly.");
        
        // Reset form
        (contactForm as HTMLFormElement).reset();
        submitBtn.innerText = originalText;
        submitBtn.disabled = false;
      }, 1000);
    }
  };
}
