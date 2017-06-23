/******************************
** 文件描述 :  监控插件
** 时    间 ： 2017.06.20 - 06.23
** 作    者 ： Vic.Wang
** E-mail： mingsixue@163.com
*******************************/
$(function() {
  var $__mx_list = $('.__mx_List');

  sessionStorage.setItem('__mx_len', $__mx_list.find('tr').length);

  var __mx_timer = setInterval(function() {
    var __mx_len = $__mx_list.find('tr').length;

    if (__mx_len <= 0) {
      clearInterval(__mx_timer);
      return
    }

    if (sessionStorage.getItem('__mx_len') == __mx_len) {
      return
    }

    sessionStorage.setItem('__mx_len', __mx_len);
    chrome.runtime.sendMessage({mx_len: __mx_len});
  }, 1000);
})
