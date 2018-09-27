const id = getURLParameter('id');
// 連接 API 
$.ajax({
  url: `https://yuer.tw/posts/${id}`,
  method: 'GET'
})
//成功後執行
  .then( (post) => {
    const id = post.id;
    const title = post.title;
    const created_at = moment(post.created_at).format('DD/MM/YYYY');
    const updated_at = moment(post.updated_at).format('DD/MM/YYYY');
    const author = post.author.name;
    const content = post.content;
    const tags = post.tags.join(',');

    $('#post-title').html(title); 
    $('#post-created-time').html(created_at); 
    $('#post-updated-time').html(updated_at); 
    $('#post-author').html(author); 
    $('#post-content').html(content); 
    $('#post-tags').html(tags); 
    $('#edit').attr('href', `edit.html?id=${id}`); 

  })

  // 失敗則執行
  .catch( (err) => {
      
    if (err.status === 404) {
      const notFound = ` 
        <div style="text-align: center;">
          <p class="lead">
            查無此頁。
          </p>
        </div>`;
      
      $('.container').html(notFound);
    }
    
  });
