
 $(document).ajaxStart(function () {
    NProgress.start();
  });
  
  //所有的ajax只要结束，延迟500毫秒，结束进度条
  $(document).ajaxStop(function () {
    setTimeout(function () {
      NProgress.done();
    }, 500);
  
  });
  //二级分类隐藏显示功能
  $('.child').prev().on('click',function(){
      $(this).next().slideToggle();
  })
  //侧边栏显示隐藏
  $('.icon_menu').on('click',function(){
      $('.main').toggleClass('now');
      $('.topbar').toggleClass('now');
      $('.aside').toggleClass('now');
  })
  //退出功能
  $('.icon-logout').on('click',function(){
    $('#logoutModal').modal('show');
  })
  $('.btn-logout').on('click',function(){
    $.ajax({
      type:'get',
      url:'/employee/employeeLogout',
      success:function(data){
        if (data.success){
          location.href = "login.html";
        }
      }

    })
  })
