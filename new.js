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
    'url': 'https://yuer.tw/posts',
    'method': 'POST',
    'data': JSON.stringify(data),
    'xhrFields': {
      'withCredentials': true
    },
    'success': function(result) {
       console.log(result);
      window.location.href = `post.html?id=${result.id}`;
    },
    'error': function(err) {
      console.log('err');
      console.log(err);
    }
  });
}
$(function(){
    $('#post').on('click', edit);
});