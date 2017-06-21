let id = getURLParameter('id');
// 連接 API 
$.ajax({
  url: `https://richegg.top/authors/test1`,
  method: 'GET',
  'xhrFields': {
      'withCredentials': true
  },
})
//成功後執行
  .then( (author) => {
    // console.log(author);
    const username = author.username;
    const name = author.name;
    const password = author.password;
    const gender = author.gender;
    const address = author.address;


    $('#author_name').html(name); 
    $('#author_username').html(username); 
    $('#author_password').html(password); 
    $('#author_gender').html(gender); 
    $('#author_address').html(address); 
    
    $('#author').attr('href', `profile.html?id=${author.id}`); 

  })

  // 失敗則執行
  .catch( (err) => {
      
    if (err.status === 404) {
      const notFound = ` 
        <div style="text-align: center;">
          <p class="lead">
            查無此人。
          </p>
        </div>`;
      
      $('.container').html(notFound);
    }
  });
  