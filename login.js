$('#login-form').submit( (event) => {
  event.preventDefault();
  
  const username = $('[name=username]').val();
  const password = $('[name=password]').val();
  
  const data = {
    username: username,
    password: password
  };
// 連接 API
  $.ajax({
    url: `https://richegg.top/login`,
    method: 'POST',
    data: JSON.stringify(data)
  })
    .then( (author) => {
      window.location.href = 'profile.html';
    })
    .catch( (err) => {
      $('#error-message').html(err.responseJSON.message);
    });
});

