//轮播图
    $(function () {
        $.ajax({
            url: 'http://127.0.0.1:9091/api/getlunbo',
            dataType: 'json',
            success: function (data) {
                // console.log(data);
                $('.carousel-inner').html(template('templateslide', data));
                $('.carousel-inner .item').first().addClass('active');
            }
        })
//gethometab首页内容
        $.ajax({
            url: 'http://127.0.0.1:9091/api/gethometab/1',
            dataType: 'json',
            success: function (data) {
                console.log(data);
                $('.ul-wapper .tab-content .active').html(template('templatetab', data));
            }
        })
        $('.ul-wapper .nav-tabs li').each(function (index, value) {
            // console.log(value);

            $(value).click(function () {
                var type = index + 1;
                // console.log(type);
                $.ajax({
                    url: 'http://127.0.0.1:9091/api/gethometab/' + type + '',
                    dataType: 'json',
                    success: function (data) {
                        console.log(data);
                        $('.ul-wapper .tab-content .active').html(template('templatetab', data));
                    }
                })
            })
            //      if($(value).hasClass('active')) {
            //         var type = index + 1;
            //         console.log(type);
            //         $.ajax({
            //             url: 'http://127.0.0.1:9091/api/gethometab/' + type + '',
            //             dataType: 'json',
            //             success: function (data) {
            //                 console.log(data);
            //                 $('.ul-wapper .tab-content .active').html(template('templatetab', data));
            //             }
            //         })
            //    }


        })
       

//连载动漫
         $('#header #lian').click(function () {
            $('#layout').hide();
            $('#layout1').fadeIn();
            $.ajax({
                url: 'http://127.0.0.1:9091/api/getlianzai',
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    $('#layout1 #context1').html(template('templatec', data));
                }
            })
        }) 

//专题列表
        $('#header #lie').click(function () {
            $('#layout').hide();
            $('#layout1').hide();
            $('#layout2').fadeIn();
            $.ajax({
                url: 'http://127.0.0.1:9091/api/gettopics',
                dataType: 'json',
                success: function (data) {
                    console.log(data);
                    $('#layout2 #context2').html(template('templategettopics', data));
                }
            })
        })
    })