$(document).ready(function () {

    $('a[href="#"]').click(function (event) {
        event.preventDefault();
    });
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

    $(".tab_style01 li a").click(function () {
        $(this).parent().siblings("li").removeClass("active");
        $(this).parent().addClass("active");
    });

    // 스크롤바
    $(".scr").mCustomScrollbar({
        theme: "minimal-dark"
    });

    // 학습후기
    $('.review-filter li a').click(function () {
        $(this).parent().addClass('active');
        $(this).parent().siblings().removeClass('active')
    });

    $('.view_area_cont .tab_style01 a').on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 500)
    });


    $('.popUp .view_area_cont .tab_style01 a').on('click', function (e) {
        var href = $(this).attr("href"),
            target = $(href).parents(".mCustomScrollbar");
        if (target.length) {
            e.preventDefault();
            target.mCustomScrollbar("scrollTo", href);
        }
    })


    //파일
    $(document).on('click', '.file_close', function () {
        $(this).parents('.file').remove();
        $('#uploadFile').val("");
        if ($('#upload_prev  .file').length) {} else {
            $('.file_wrap label').removeClass('active')
        }

    })

    $('#uploadFile').on('change', function () {
        
        $(this).next('label').addClass('active')
        var filename = this.value;
        var lastIndex = filename.lastIndexOf("\\");
        if (lastIndex >= 0) {
            filename = filename.substring(lastIndex + 1);
        }
        
        var fi = document.getElementById('uploadFile');
        if (fi.files.length > 0) {


            // RUN A LOOP TO CHECK EACH SELECTED FILE.
            for (var i = 0; i <= fi.files.length - 1; i++) {

                var fname = fi.files.item(i).name;      // THE NAME OF THE FILE.
                var fsize = fi.files.item(i).size ;      // THE SIZE OF THE FILE.
                var _size = (Math.floor(fsize / 1000));

                // SHOW THE EXTRACTED DETAILS OF THE FILE.
                document.getElementById('upload_prev').innerHTML =
                    document.getElementById('upload_prev').innerHTML + '<div class="file">' + '<div class="filenameupload">' + '<span class="name">' + fname + '</span>' + '<span class="size">' + '(<b>' + _size.toLocaleString() + '</b> K)' + '</span>' +  '</div>' +  '<a href="javascript:void()" class="file_close" >X</a></div>' + '</div>'
            }
            
        }

//        var totalBytes = (this.files[0].size / 1024);
//        if (totalBytes < 1000000) {
//            var _size = (Math.floor(totalBytes * 1000) / 100) + 'KB';
//        }
//        var files = $('#uploadFile')[0].files;
//        for (var i = 0; i < files.length; i++) {
//            $("#upload_prev").append('<div class="file">' + '<div class="filenameupload">' + '<span class="name">' + files[i].name + '</span>' + '<span class="size">(' + totalBytes.toLocaleString() + 'K' + ')</span>' +
//
//                '</div>' + '<a href="javascript:void()" class="file_close" >X</a></div>');
//        }

    });

    //자주하는 질문
    $('.q_a .q').click(function () {
        $(this).parent().toggleClass('active');
        $(this).next().slideToggle();
        $(this).parent().siblings().find('.a').slideUp()
        $(this).parent().siblings().removeClass('active')
    });


    //학습목차
    $('.div_table03 a').click(function(){
        $(this).next().slideToggle();
    })



});

// 팝업
function openModal(modalname) {
    document.get
    $("." + modalname).show();
    $(".shadow").show();
    $('body').addClass('not_scroll');
}

function close_pop(flag) {
    $('.popUp').hide();
    $(".shadow").hide();
    $('body').removeClass('not_scroll');
};
