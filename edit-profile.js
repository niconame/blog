let username = 'test1';
// 抓取 profile.html 上使用者的資料
$.ajax({
  url: `https://yuer.tw/authors/${username}`,
  contentType: 'application/json; charset=utf-8',
  method: 'GET',
  'xhrFields': {
      'withCredentials': true
  },
})
  .then( (author) => {
    // const username = author.username;
    const name = author.name;
    const password = author.password;
    const gender = author.gender;
    const address = author.address;
    // console.log(author);
    // $('#username').attr('value', username);
    // $('#password').attr('value',password);
    $('#name').attr('value',name);
    $('#address').attr('value',address);
    $(`:radio[value=${gender}]`).attr("checked",true);
  })
  .catch( (err) => {
    console.log(err);
  });

// 修改 post 內容
function send() {
  var name_value = $('#name').val();
  // var password_value = $('#password').val();
  var gender_value = $(`:radio[name=gender]:checked`).val();
  var address_value = $('#address').val();
  const data = {};
  data.name = name_value;
  // data.password = password_value;
  data.password = 'test123';
  data.gender = gender_value;
  data.address = address_value;
  console.log(data);

  // 透過 API 修改已抓取到的使用者的資料
  $.ajax({
      url: `https://yuer.tw/authors/${username}`,
      method: 'PATCH',
      contentType: 'application/json; charset=utf-8',
      data: JSON.stringify(data),
      'xhrFields': {
        'withCredentials': true
      }
    })
      .then( (authors) => {
        console.log(authors);
        window.location.href = 'profile.html';
      })
      .catch( (err) => {
        $('#error-message').html(err.responseJSON.message);
      });
}


$(function(){
    $('#send').on('click', send);
});
