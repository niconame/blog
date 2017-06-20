// 取得所有文章
$.ajax({
  url: 'https://richegg.top/posts',
  method: 'GET'
})
  .then( (postList) => {
    let postListHtml = '';
    
    // 如果沒文章，提示
    if (postList.length === 0) {
      postListHtml = `
        <div style="text-align: center;">
          <p class="lead">
            現在沒有文章喔 QQ
          </p>
        </div>
      `;
    }
    
    // 生成文章列表的 html 內容
    for (let post of postList) {
      const id = post.id;
      const title = post.title;
      const content = post.content.substring(0, 39);
      

      let postHtml = `
        <a href="post.html?id=${id}">
          <h1>${title}</h1>
          <p class="lead">${content}</p>
        </a>
      `;

      postListHtml = postListHtml + postHtml;
    }

    // 將文章列表的內容綁定到介面 (html 的 container)上
    $('.container').html(postListHtml); 
  })
  .catch( (err) => {
    console.log(error);
  });



