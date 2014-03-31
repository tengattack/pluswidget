// 到底哪定义了的 `prefixs` 这货，逼我用 firebug 查值_(:з」∠)_
var prefixs = ["-webkit-", "-moz-", "-ms-", ""];
// 话说萌购前端好赞啊....

// 翻滚吧舰娘！
(function($) {
    // 防止触发ie的图片拖动效果
    document.ondragstart = function(){ return false; }

    var _loop = %loop%;
    var _speed = %speed%;
    var _image = '%image%';
    if (_image == ['%', 'image', '%'].join('')) {
        _image = '';
    }

    var kans = $('.kankore-bath .kan'),
        kan_id,
        kan;
    var screen_width = 0,
        screen_height = 0,
        x = 0,
        dx = 0,
        y = 0,
        angle = 0,
        water_direction;


    // 鼠标抓取
    $(document).on('mousedown', '.kan', start_drag)
            .on('mousemove', dragging)
            .on('mouseup', stop_drag);

    // resize
    $(window).resize(function(){
        screen_width = $(window).width();
        screen_height = $(window).height();
        y = screen_height - 170;
    });

    var tick = null;

    function kan_init() {
        if (_image) {
            $(kans[kans.length - 1]).after(
                '<div class="custom kan">\
                    <img src="' + _image + '" width="170px">\
                </div>');
            kan = $('.custom.kan');
        } else {
            // 随机选择一只舰娘
            kan_id = Math.floor(Math.random()*kans.length);
            kan = kans.eq(kan_id);
        }

        // 随机从左侧或右侧进入屏幕
        screen_width = $(window).width();
        screen_height = $(window).height();
        x = Math.random() > .5 ? screen_width : -170;
        dx = x > 0 ? -_speed : _speed;
        y = screen_height - 170;
        angle = 1.3;
        water_direction = x > 0 ? 'waves-r2l' : 'waves-l2r';

        // 根据舰娘漂浮的方向决定水流方向
        var water_animation = {};
        for( var i in prefixs )
            water_animation[prefixs[i]+'animation'] = water_direction + ' 10s linear infinite';
        $('.kankore-bath .water').css(water_animation);

        // 把舰娘放到初始位置上
        kan.css({'left': x, 'top': y, 'display': 'block'}).addClass('floating');
        kan.show();
        float();
    }

    kan_init();

    // GO
    function float() {
        clearInterval(tick);
        tick = setInterval(frame, 1000);
    }

    function frame(){
        if( x < -170 || x > screen_width ) {
            stop();
            return;
        }

        x += dx;
        var _y = y + 3 * Math.sin(x) - 3;
        angle = Math.random() * 4 - 2;

        var transform = {'left': x, 'top': _y};

        for( var i in prefixs ) {
            transform[prefixs[i]+'transform'] = 'rotate(' + angle + 'deg)'
        }

        // lte ie9用Jquery来做动画，modern则由css transition去做
        // tengattack: jQuery 1.9 移除了$.browser，但是我们并不关心
        /*if( $.browser.msie && $.browser.version < 10 ) {
            kan.animate(transform, 1000, 'linear');
        } else {*/
            kan.css(transform);
        //}
    }

    function pause() {
        clearInterval(tick);
    }

    function stop() {
        pause();
        //again
        if (_loop) {
            kan.hide();
            kan_init();
        } else {
            $('.kankore-bath').fadeOut();
        }
    }

    var offsetX, offsetY, mouse_down_flag = false, mouse_move_flag = false;
    function start_drag(e) {
        // 暂停漂浮动画
        pause();
        kan.removeClass('floating').addClass('dragging');

        // 记录用户操作
        mouse_down_flag = true;
        mouse_move_flag = false;

        // 记录鼠标点击的位置与舰娘图像的左上角坐标差
        offsetX = kan.offset().left - e.pageX;
        offsetY = kan.offset().top - e.pageY;
    }

    function dragging(e) {
        //
        if( !mouse_down_flag ) return;

        //
        mouse_move_flag = true;

        x = e.clientX + offsetX;
        // 舰娘跟随鼠标移动
        kan.css({
            'left': x,
            'top' : e.clientY + offsetY
        });
    }

    function stop_drag() {
        //
        if( !mouse_down_flag )
            return;

        // 如果没有移动过鼠标说明是单击，打开商品链接并隐藏动画
        if( !mouse_move_flag ) {
            /*
            stop();
            var url = kan.attr('href');
            window.open(url, '_blank');
            */
        } else {
            // 有移动则是鼠标拖拽事件
            kan.removeClass('dragging').addClass('dropping');

            /*if( $.browser.msie && $.browser.version < 10 )
                kan.animate({'left': x, 'top': y}, 800);
            else*/
                kan.css({'left': x, 'top': y});

            setTimeout(function() {
                kan.removeClass('dropping').addClass('floating');
                frame();
                float();
            }, 800);
        }

        // 重置标识
        mouse_down_flag = false;
        mouse_move_flag = false;
    }

})(jQuery);
// 舰娘游泳ends