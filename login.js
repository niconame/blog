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
    url: `https://yuer.tw/login`,
    method: 'POST',
    contentType: 'application/json; charset=utf-8',
    data: JSON.stringify(data),
    xhrFields: {
      withCredentials: true
    }
  })
    .then( (author) => {
      console.log(author);
      window.location.href = 'index.html';
    })
    .catch( (err) => {
      $('#error-message').html(err.responseJSON.message);
    });
});
