$(document).ready(function () {
    $('#registrationForm').on('submit', function (e) {
      if ($('#name').val() === '' || $('#email').val() === '' || $('#age').val() === '') {
        alert('All fields are required!');
        e.preventDefault();
      }
    });
  });
  