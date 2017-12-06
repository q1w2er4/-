$(function () {

    // 2.ajax传数据
    $.ajax({
        url: 'http://127.0.0.1:9090/api/getsitenav',
        // datatype:'json',
        success: function (data) {
            console.log(data);
            var html = template("nineTmp", data);
            console.log(html);
            $('#nine-main .nine-main-mid').html(html);
        }
    });
})