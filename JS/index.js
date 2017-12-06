$(function () {

    $.ajax({
        url: 'http://127.0.0.1:9090/api/getindexmenu',
        success: function (data) {
            // console.log(data);
            var html = template("navTmp", data);
            // console.log(html);
            $('#nav ul').html(html);
        }
    })

    // <!-- 商品促销展示栏 -->
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getmoneyctrl',
        success: function (data) {
            //  console.log(data.result);

            $('#aspnetForm #jxhdc').html(template("jxhdcTmp", data));
        }
    })

    // 设置点击"更多"的效果
    $("#nav ul").on('click','li:eq(7)',function(){
       var array = $("#nav ul>li");
       for(var i=0;i<array.length;i++){
            if(i>=8){
                $("#nav ul>li").eq(i).toggle();
            }
       }
    
       
    });
   
})