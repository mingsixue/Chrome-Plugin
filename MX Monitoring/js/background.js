/******************************
** 文件描述 :  监控插件
** 时    间 ： 2017.06.20 - 06.23
** 作    者 ： Vic.Wang
** E-mail： mingsixue@163.com
*******************************/

// 生成时间
function times(flag) {
  var date = new Date();
  var y = date.getFullYear(),
      m = date.getMonth() + 1,
      d = date.getDate(),
      h = date.getHours(),
      i = date.getMinutes(),
      s = date.getSeconds();

      m = m < 10 ? '0' + m : m;
      d = d < 10 ? '0' + d : d;
      h = h < 10 ? '0' + h : h;
      i = i < 10 ? '0' + i : i;
      s = s < 10 ? '0' + s : s;

  switch (flag) {
    case 'ymdhis':
      return y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s;
    case 'ymd':
      return y + '-' + m + '-' + d;
    case 'his':
      return h + ':' + i + ':' + s;
    case 'hi':
      return h + ':' + i
    default:
      return y + '-' + m + '-' + d + ' ' + h + ':' + i + ':' + s;
  }
}

// 桌面消息
function show() {
  new Notification('系统监控消息 ' + times('hi'), {
    icon: 'icon32.png',
    body: '有新的警报消息！'
  });
}

// 播放声音
function play() {
  var sound = document.createElement('audio');
  sound.src = '../audio/fd.mp3';
  sound.play();
}

// 监听页面消息
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
  if (request.mx_len)
    show();
    play();
});
