$(document).ready(function () {
  
  // =========================================
  // 1. HELPER FUNCTION: Email Validation Regex
  // =========================================
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // =========================================
  // 2. LOGIN FORM VALIDATION
  // =========================================
  $('#loginForm').on('submit', function (e) {
    e.preventDefault(); // Page refresh hone se rokna
    let isValid = true;

    // Get Values
    const email = $('#loginEmail').val().trim();
    const password = $('#loginPassword').val().trim();

    // Reset Errors
    $(this).find('.form-control').removeClass('is-invalid');

    // Check Email
    if (email === '' || !isValidEmail(email)) {
      $('#loginEmail').addClass('is-invalid');
      isValid = false;
    }

    // Check Password
    if (password === '') {
      $('#loginPassword').addClass('is-invalid');
      isValid = false;
    }

    // If Form is Valid
    if (isValid) {
      alert('Login Successful! Welcome back.');
      $('#loginForm')[0].reset(); // Form clear karna
      
      // Close Modal (Bootstrap 5 syntax via jQuery)
      const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
      loginModal.hide();
    }
  });

  // =========================================
  // 3. REGISTER FORM VALIDATION
  // =========================================
  $('#registerForm').on('submit', function (e) {
    e.preventDefault(); // Page refresh hone se rokna
    let isValid = true;

    // Get Values
    const name = $('#regName').val().trim();
    const email = $('#regEmail').val().trim();
    const password = $('#regPassword').val().trim();
    const confirmPassword = $('#regConfirmPassword').val().trim();

    // Reset Errors
    $(this).find('.form-control').removeClass('is-invalid');

    // Check Name
    if (name === '') {
      $('#regName').addClass('is-invalid');
      isValid = false;
    }

    // Check Email
    if (email === '' || !isValidEmail(email)) {
      $('#regEmail').addClass('is-invalid');
      isValid = false;
    }

    // Check Password (Min 6 chars)
    if (password.length < 6) {
      $('#regPassword').addClass('is-invalid');
      isValid = false;
    }

    // Check Confirm Password
    if (confirmPassword === '' || password !== confirmPassword) {
      $('#regConfirmPassword').addClass('is-invalid');
      isValid = false;
    }

    // If Form is Valid
    if (isValid) {
      alert('Registration Successful! Please login.');
      $('#registerForm')[0].reset(); // Form clear karna
      
      // Close Modal
      const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
      registerModal.hide();
    }
  });

  // =========================================
  // 4. INPUT FOCUS EVENT (Remove Error on Type)
  // =========================================
  // Jab user type karna shuru kare, toh red border hata do
  $('.form-control').on('input', function() {
    $(this).removeClass('is-invalid');
  });

});