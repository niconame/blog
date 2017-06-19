const id = getURLParameter('id');

// 初始化 tagify
$('[name=tags]').tagify();
const tagifyTags = $('[name=tags]').data('tagify');
tagifyTags.on('add', (e) => {
  console.log(e.detail);
  console.log(tagifyTags.value);
});

tagifyTags.on('remove', (e) => {
  console.log(e.detail);
});

tagifyTags.on('duplicate', (e) => {
  console.log(e);
})
// 連接 API
$.ajax({
  'url': `https://richegg.top/posts/${id}`,
  'method': 'GET'
})
  .then( (post) => {
    const id = post.id;
    const title = post.title;
    const content = post.content;
    const tags = post.tags.join(',');

    $('#title').attr('value', title);
    $('#content').html(content);
    $('#cancel').attr('href', `post.html?id=${id}`);
    tagifyTags.addTag(tags);
  })
  .catch( (err) => {
    console.log(err);
  });

function edit() {
  $('#title').attr('value');

  // $.ajax({
  //   'url': `https://richegg.top/posts/${id}`,
  //   'method': 'PATCH',
  //   'data': 
  // })
}