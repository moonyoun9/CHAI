$(document).ready(function(){

    // mousewheel 이벤트
    var win_h = $(window).height();
    $('.cont > div').each(function(index){
        $(this).attr("data-index",win_h * index);
    });

    $('.cont > div').on("mousewheel",function(e){
        var sectionPos = parseInt($(this).attr("data-index"));

        if(e.originalEvent.wheelDelta >= 0) {
            $("html,body").stop().animate({scrollTop:sectionPos - win_h});
        return false;
        } else if (e.originalEvent.wheelDelta < 0) {
            $("html,body").stop().animate({scrollTop:sectionPos + win_h});
        return false;
        }
    });

    // 숫자 카운트
    var Txt = 80;


    $({val: 0}).animate({
        val: Txt
    }, {
        duration: 6000,
        step: function () {
            var num = numberWithCommas(Math.floor(this.val));
            $(".Count").text(num);
        },
        complete: function () {
            var num = numberWithCommas(Math.floor(this.val));
            $(".Count").text(num);
        }
    });

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    //  click
    $('.click').mouseover(function(){
        $('.download a img').fadeIn()
    })
    $('.phone').mouseleave(function(){
        $('.download a img').fadeOut()
    })
})