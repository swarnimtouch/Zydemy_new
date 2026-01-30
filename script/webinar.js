$(document).ready(function () {
 
  $('#sidebarOpen').on('click', function() {
    $('#mobileSidebar').addClass('active');
    $('#sidebarOverlay').addClass('active');
  });

  $('#sidebarClose').on('click', function() {
    $('#mobileSidebar').removeClass('active');
    $('#sidebarOverlay').removeClass('active');
  });

  $('#sidebarOverlay').on('click', function() {
    $('#mobileSidebar').removeClass('active');
    $(this).removeClass('active');
  });

  $('#mobileFilterToggle').on('click', function() {
    $('#filterSidebar').slideToggle();
  });
  
  $('#closeFilterBtn').on('click', function() {
    $('#filterSidebar').slideUp();
  });

  $('#loginForm').validate({
    rules: {
      loginEmail: {
        required: true,
        email: true
      },
      loginPassword: {
        required: true
      }
    },
    messages: {
      loginEmail: {
        required: "Please enter your email address",
        email: "Please enter a valid email address"
      },
      loginPassword: {
        required: "Please enter your password"
      }
    },
    submitHandler: function(form) {
      alert('Login Successful! Welcome back.');
      form.reset();
      bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
    }
  });

  $('#registerForm').validate({
    rules: {
      regName: {
        required: true
      },
      regEmail: {
        required: true,
        email: true
      },
      regPassword: {
        required: true,
        minlength: 6
      },
      regConfirmPassword: {
        required: true,
        equalTo: "#regPassword"
      }
    },
    messages: {
      regName: {
        required: "Please enter your full name"
      },
      regEmail: {
        required: "Please enter your email address",
        email: "Please enter a valid email address"
      },
      regPassword: {
        required: "Please provide a password",
        minlength: "Your password must be at least 6 characters long"
      },
      regConfirmPassword: {
        required: "Please confirm your password",
        equalTo: "Passwords do not match"
      }
    },
    submitHandler: function(form) {
      alert('Registration Successful! Please login.');
      form.reset();
      bootstrap.Modal.getInstance(document.getElementById('registerModal')).hide();
    }
  });

  $('#subscribeForm').validate({
    rules: {
      subEmail: {
        required: true,
        email: true
      }
    },
    messages: {
      subEmail: {
        required: "Please enter your email address",
        email: "Please enter a valid email address"
      }
    },
    submitHandler: function(form) {
      alert('Thanks for subscribing! You will receive updates shortly.');
      form.reset();
    }
  });

  $('#resetFilters').on('click', function() {
    $('.filter-sidebar input[type="checkbox"]').prop('checked', false);
    $('#allUpcoming').prop('checked', true);
  });
});