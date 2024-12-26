// Contact Me Form to Google Sheet -------------------------------
const scriptURL = 'https://script.google.com/macros/s/AKfycbyzbv8zwiIixFZ6-aVfBqd7pFIQoczlYpUNelYsS6cRdB0VqBCYEl_e3c_gPx9NUnZO/exec';
const form = document.forms['contact-us-portfolio'];

// form.addEventListener('submit', e => {
//   e.preventDefault()
//   fetch(scriptURL, { method: 'POST', body: new FormData(form)})
//     .then(response => console.log('Success!', response))
//     .catch(error => console.error('Error!', error.message))
// })


form.addEventListener("submit", (e) => {
    e.preventDefault();
    const formData = new FormData(form);
  
    // Client-side validation
    const email = formData.get("email");
    const phone = formData.get("phone-number");
  
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      Swal.fire({
        title: 'Erreur',
        text: 'Please enter a valid email address.',
        icon: 'warning',
        background: 'var(--snd-bg-color)', // Background color from your CSS
        confirmButtonColor: '#0078d4', // Button color
        confirmButtonText: 'D\'accord',
        customClass: {
          title: 'alert-title', // Custom class for title (optional)
          content: 'alert-content', // Custom class for content (optional)
          confirmButton: 'alert-confirm-btn', // Custom class for button (optional)
        }
      });
      return;
    }
  
    if (phone && !/^\d+$/.test(phone)) {
      Swal.fire({
        title: 'Erreur',
        text: 'The phone number must be numeric.',
        icon: 'warning',
        background: 'var(--snd-bg-color)', // Background color from your CSS
        confirmButtonColor: '#0078d4', // Button color
        confirmButtonText: 'D\'accord',
        customClass: {
          title: 'alert-title',
          content: 'alert-content',
          confirmButton: 'alert-confirm-btn',
        }
      });
      return;
    }
  
    // Send data via fetch API
    fetch(scriptURL, { method: "POST", body: formData })
      .then((response) => {
        if (response.ok) {
          Swal.fire({
            title: 'Success',
            text: 'Your message has been sent successfully.',
            icon: 'success',
            background: 'var(--snd-bg-color)', // Background color from your CSS
            confirmButtonColor: '#0078d4', // Success button color
            confirmButtonText: 'Super',
            customClass: {
              title: 'alert-title',
              content: 'alert-content',
              confirmButton: 'alert-confirm-btn',
            }
          });
          form.reset(); // Clear the form after successful submission
        } else {
          Swal.fire({
            title: 'Erreur',
            text: 'Server problem. Please try again..',
            icon: 'error',
            background: 'var(--snd-bg-color)', // Background color from your CSS
            confirmButtonColor: 'var(--main-color)', // Button color
            confirmButtonText: 'Fermer',
            customClass: {
              title: 'alert-title',
              content: 'alert-content',
              confirmButton: 'alert-confirm-btn',
            }
          });
        }
      })
      .catch((error) => {
        console.error("Submission error:", error);
        Swal.fire({
          title: 'Erreur',
          text: 'Network problem or server error. Please try again..',
          icon: 'error',
          background: 'var(--snd-bg-color)', // Background color from your CSS
          confirmButtonColor: 'var(--main-color)', // Button color
          confirmButtonText: 'Fermer',
          customClass: {
            title: 'alert-title',
            content: 'alert-content',
            confirmButton: 'alert-confirm-btn',
          }
        });
      });
  });
  
  
  