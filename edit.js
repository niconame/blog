const id = getURLParameter('id');

// 初始化 tagify
$('[name=tags]').tagify();
let tagifyTags = $('[name=tags]').data('tagify');
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
// 修改文章內容
function edit() {
  var title_value = $('#title').val();
  var content_value = $('#content').val();
  var tags_value = $('#tags').val();
  console.log(title_value);
  const data = {};
  data.title = title_value;
  data.content = content_value;
  data.tags = tags_value.split(',');
  console.log(data);
  
  $.ajax({
    'url': `https://richegg.top/posts/${id}`,
    'method': 'PATCH',
    contentType: 'application/json',
    'data': JSON.stringify(data),
    'xhrFields': {
      'withCredentials': true
    },
    'success': function(result) {
       console.log(result);
       window.location.href = `post.html?id=${id}`;
    },
    'error': function(err) {
      console.log(err);
    }
  });
}
$(function(){
    $('#post').on('click', edit);
});

// 刪除整篇文章
function deletePost() {
  console.log('------------')
  var title_value = $('#title').val();
  var content_value = $('#content').val();
  var tags_value = $('#tags').val();
  console.log(title_value);
  const data = {};
  data.title = title_value;
  data.content = content_value;
  data.tags = tags_value.split(',');
  console.log(data);
  
  $.ajax({
    'url': `https://richegg.top/posts/${id}`,
    'method': 'DELETE',
    'data': JSON.stringify(data),
    xhrFields: {
      withCredentials: true
    },
    'success': function(result) {
       console.log(result);
       window.location.href = `post.html?id=${id}`;
    },
    'error': function(err) {
      console.log(err);
    }
  });
}
$(function(){
    $('#delete').on('click', deletePost);
});