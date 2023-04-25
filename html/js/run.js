$(document).ready(function () {
    /* header */
    $('#header .input_wrap input').focusin(function () {
        $('.search_history').show();
    });
    $(document).mouseup(function (e) {
        var movewrap = $("#header .seach_area");
        if (movewrap.has(e.target).length === 0) {
            $('.search_history').hide();
        }
    });

    //imgfill
    $(".imgFill").imgLiquid();

    //quick_menu
    $('.quick_menu').mouseenter(function () {
        $(this).addClass('hover');
    });

    $('.quick_menu').mouseleave(function () {
        $(this).removeClass('hover');
        $('.quick_menu > ul > li').removeClass('active');
        $('.recent_more').hide();
    });

    $('.quick_menu > ul > li > a').click(function () {
        $(this).parent().toggleClass('active');
    });

    $('.quick_menu > ul > li.recent > ul li a').click(function () {
        $('.recent_more').toggle();
    });

    $('.quick_menu > ul > li.top a').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    /* infinite Scroll */

    $(".infiniteScroll .item").slice(0, 16).css("display", "block"); // 초기갯수
    var docHeight = $(document).height();
    var winHeight = $(window).height();
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $(document).height() - $(window).height() - 100) {
            $(".infiniteScroll .item:hidden").slice(0, 4).fadeIn(500).css('display', 'block');
        }
    });

    // tab 
    // 탭 컨텐츠 숨기기
    $(".tab_content").hide();

    // 첫번째 탭콘텐츠 보이기
    $(".tab_container").each(function () {
        $(this).children(".tabs li:first").addClass("active"); //Activate first tab
        $(this).children(".tab_content").first().show();
    });
    //탭메뉴 클릭 이벤트
    $(".tabs li a").click(function () {

        $(this).parent().siblings("li").removeClass("active");
        $(this).parent().addClass("active");
        $(this).parent().parent().parent().parent().find(".tab_content").hide();
        var activeTab = $(this).attr("rel");
        $("#" + activeTab).fadeIn();
    });
    
    // 스크롤바
    $(".scr").mCustomScrollbar({
            theme:"minimal-dark"
        })


});
