$(document).ready(function () {
  
  // =========================================
  // 1. HELPER: Email Validation
  // =========================================
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  // =========================================
  // 2. LOGIN FORM
  // =========================================
  $('#loginForm').on('submit', function (e) {
    e.preventDefault();
    let isValid = true;
    const email = $('#loginEmail').val().trim();
    const password = $('#loginPassword').val().trim();

    $(this).find('.form-control').removeClass('is-invalid');

    if (email === '' || !isValidEmail(email)) {
      $('#loginEmail').addClass('is-invalid');
      isValid = false;
    }
    if (password === '') {
      $('#loginPassword').addClass('is-invalid');
      isValid = false;
    }

    if (isValid) {
      alert('Login Successful!');
      $('#loginForm')[0].reset();
      const loginModal = bootstrap.Modal.getInstance(document.getElementById('loginModal'));
      loginModal.hide();
    }
  });

  // =========================================
  // 3. REGISTER FORM
  // =========================================
  $('#registerForm').on('submit', function (e) {
    e.preventDefault();
    let isValid = true;
    const name = $('#regName').val().trim();
    const email = $('#regEmail').val().trim();
    const password = $('#regPassword').val().trim();
    const confirmPassword = $('#regConfirmPassword').val().trim();

    $(this).find('.form-control').removeClass('is-invalid');

    if (name === '') { $('#regName').addClass('is-invalid'); isValid = false; }
    if (email === '' || !isValidEmail(email)) { $('#regEmail').addClass('is-invalid'); isValid = false; }
    if (password.length < 6) { $('#regPassword').addClass('is-invalid'); isValid = false; }
    if (confirmPassword === '' || password !== confirmPassword) { $('#regConfirmPassword').addClass('is-invalid'); isValid = false; }

    if (isValid) {
      alert('Registration Successful!');
      $('#registerForm')[0].reset();
      const registerModal = bootstrap.Modal.getInstance(document.getElementById('registerModal'));
      registerModal.hide();
    }
  });

  // =========================================
  // 4. REMOVE ERROR ON TYPE
  // =========================================
  $('.form-control').on('input', function() {
    $(this).removeClass('is-invalid');
  });

});