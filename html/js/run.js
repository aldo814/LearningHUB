$(document).ready(function () {

$('.all_menu').click(function () {
    $('.mega_menu').show();
    $('.sitemapbg').show();
    $('body').addClass('not_scroll');
});

$('.mega_menu .close_btn').click(function () {
    $('.mega_menu').hide();
    $('.sitemapbg').hide();
    $('body').removeClass('not_scroll');
});

$('#header .m_menu .m_search .search_btn').click(function () {
    $(this).toggleClass('active');
    $(this).next().toggle();
});

$('#header .m_menu_btn').click(function () {
    $('.m_all_menu').show();
});

$('.m_all_menu .m_gnb > li > a').click(function () {
    $(this).next().toggle();
    $(this).addClass('active')
});

$('.m_all_menu .m_gnb > li > ul > li > a').click(function () {
    $(this).next().toggle();
    $(this).addClass('active')
});

$('.m_all_menu .close_btn').click(function () {
    $('.m_all_menu').hide();
});

var swiper = new Swiper(".main_banner", {
    slidesPerView: 'auto',
    loop: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    // 좌우 화살표 navigation element 지정
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },

    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            return ('0' + number).slice(-2);
        },
        formatFractionTotal: function (number) {
            return ('0' + number).slice(-2);
        },
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
                '<span class="' + totalClass + '"></span>';
        }
    },

});

var swiper = new Swiper(".hot_cont .con_list", {
    spaceBetween: 20,
    slidesPerView: 4,
    autoplay: false,
    loop: false,
    navigation: { // 버튼
        nextEl: ".hot_cont .swiper-button-next",
        prevEl: ".hot_cont .swiper-button-prev",
    },
    breakpoints: { //반응형
        // 화면의 넓이가 320px 이상일 때
        1024: {
            slidesPerView: 3
        },
        // 화면의 넓이가 640px 이상일 때
        640: {
            slidesPerView: "auto",
        }
    }
});

var swiper = new Swiper(".new_cont .con_list", {
    spaceBetween: 20,
    slidesPerView: 4,
    autoplay: false,
    loop: false,
    navigation: { // 버튼
        nextEl: ".new_cont .swiper-button-next",
        prevEl: ".new_cont .swiper-button-prev",
    },
    breakpoints: { //반응형
        // 화면의 넓이가 320px 이상일 때
        1024: {
            slidesPerView: 3
        },
        // 화면의 넓이가 640px 이상일 때
        640: {
            slidesPerView: "auto",
        }
    }
});

var swiper = new Swiper(".field_cont #tab01 .con_list", {
    spaceBetween: 20,
    slidesPerView: 4,
    autoplay: false,
    loop: false,
    navigation: { // 버튼
        nextEl: ".field_cont #tab01 .swiper-button-next",
        prevEl: ".field_cont #tab01 .swiper-button-prev",
    },
    breakpoints: { //반응형
        // 화면의 넓이가 320px 이상일 때
        1024: {
            slidesPerView: 3
        },
        // 화면의 넓이가 640px 이상일 때
        640: {
            slidesPerView: "auto",
        }
    }
});

var swiper = new Swiper(".field_cont #tab02 .con_list", {
    spaceBetween: 20,
    slidesPerView: 4,
    autoplay: false,
    loop: false,
    navigation: { // 버튼
        nextEl: ".field_cont #tab02 .swiper-button-next",
        prevEl: ".field_cont #tab02 .swiper-button-prev",
    },
    breakpoints: { //반응형
        // 화면의 넓이가 320px 이상일 때
        1024: {
            slidesPerView: 3
        },
        // 화면의 넓이가 640px 이상일 때
        640: {
            slidesPerView: "auto",
        }
    }
});

var swiper = new Swiper(".field_cont #tab03 .con_list", {
    spaceBetween: 20,
    slidesPerView: 4,
    autoplay: false,
    loop: false,
    navigation: { // 버튼
        nextEl: ".field_cont #tab03 .swiper-button-next",
        prevEl: ".field_cont #tab03 .swiper-button-prev",
    },
    breakpoints: { //반응형
        // 화면의 넓이가 320px 이상일 때
        1024: {
            slidesPerView: 3
        },
        // 화면의 넓이가 640px 이상일 때
        640: {
            slidesPerView: "auto",
        }
    }
});

var swiper = new Swiper(".field_cont #tab04 .con_list", {
    spaceBetween: 20,
    slidesPerView: 4,
    autoplay: false,
    loop: false,
    navigation: { // 버튼
        nextEl: ".field_cont #tab04 .swiper-button-next",
        prevEl: ".field_cont #tab04 .swiper-button-prev",
    },
    breakpoints: { //반응형
        // 화면의 넓이가 320px 이상일 때
        1024: {
            slidesPerView: 3
        },
        // 화면의 넓이가 640px 이상일 때
        640: {
            slidesPerView: "auto",
        }
    }
});

var swiper = new Swiper(".field_cont #tab05 .con_list", {
    spaceBetween: 20,
    slidesPerView: 4,
    autoplay: false,
    loop: false,
    navigation: { // 버튼
        nextEl: ".field_cont #tab05 .swiper-button-next",
        prevEl: ".field_cont #tab05 .swiper-button-prev",
    },
    breakpoints: { //반응형
        // 화면의 넓이가 320px 이상일 때
        1024: {
            slidesPerView: 3
        },
        // 화면의 넓이가 640px 이상일 때
        640: {
            slidesPerView: "auto",
        }
    }
});

var swiper = new Swiper(".field_cont #tab06 .con_list", {
    spaceBetween: 20,
    slidesPerView: 4,
    autoplay: false,
    loop: false,
    navigation: { // 버튼
        nextEl: ".field_cont #tab06 .swiper-button-next",
        prevEl: ".field_cont #tab06 .swiper-button-prev",
    },
    breakpoints: { //반응형
        // 화면의 넓이가 320px 이상일 때
        1024: {
            slidesPerView: 3
        },
        // 화면의 넓이가 640px 이상일 때
        640: {
            slidesPerView: "auto",
        }
    }
});


var swiper = new Swiper(".micro_cont  .con_list", {
    spaceBetween: 20,
    slidesPerView: 4,
    autoplay: false,
    loop: false,
    navigation: { // 버튼
        nextEl: ".micro_cont .swiper-button-next",
        prevEl: ".micro_cont .swiper-button-prev",
    },
    breakpoints: { //반응형
        // 화면의 넓이가 320px 이상일 때
        1024: {
            slidesPerView: 3
        },
        // 화면의 넓이가 640px 이상일 때
        640: {
            slidesPerView: "auto",
        }
    }
});

var swiper = new Swiper(".top_cont  .con_list", {
    spaceBetween: 20,
    slidesPerView: 4,
    autoplay: false,
    loop: false,
    navigation: { // 버튼
        nextEl: ".top_cont .swiper-button-next",
        prevEl: ".top_cont .swiper-button-prev",
    },
    breakpoints: { //반응형
        // 화면의 넓이가 320px 이상일 때
        1024: {
            slidesPerView: 3
        },
        // 화면의 넓이가 640px 이상일 때
        640: {
            slidesPerView: "auto",
        }
    }
});


var swiper = new Swiper(".card-wrap  .con_list", {
    spaceBetween: 20,
    slidesPerView: 3,
    autoplay: false,
    loop: false,
    pagination: {
        el: ".swiper-pagination",
        type: "progressbar",
    },
    navigation: { // 버튼
        nextEl: ".card-wrap .swiper-button-next",
        prevEl: ".card-wrap .swiper-button-prev",
    },
    breakpoints: { //반응형
        // 화면의 넓이가 320px 이상일 때
        1024: {
            slidesPerView: 3
        },
        // 화면의 넓이가 640px 이상일 때
        768: {
            slidesPerView: "auto",
        }
    }
});

$(".swiper-button-pause").click(function () {
    swiper.autoplay.stop();
    $('.swiper-button-play').show();
    $(this).hide();
});

$(".swiper-button-play").click(function () {
    swiper.autoplay.start();
    $(this).hide();
    $(".swiper-button-pause").show();
});

var ticker = function () {
    timer = setTimeout(function () {
        $('.top_searched li:first').animate({
            marginTop: '-20px'
        }, 400, function () {
            $(this).detach().appendTo('.top_searched ul').removeAttr('style');
        });
        ticker();
    }, 2000);
};

var tickerover = function () {
    $('.top_searched').mouseover(function () {
        clearTimeout(timer);
        $(this).addClass('active')
    });
    $('.top_searched').mouseout(function () {
        ticker();
        $(this).removeClass('active')
    });
};
tickerover();
// 4 끝
ticker();





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
$(".tab_container > .tab_content").hide();

// 첫번째 탭콘텐츠 보이기
$(".tab_container").each(function () {
    $(this).children(".tabs li:first").addClass("active"); //Activate first tab
    $(this).children(".tab_content").first().show();
});

$(".tab_container02 > .tab_content").hide();
$(".tab_container02").each(function () {
    $(this).children(".tab_content").first().show();
});

$('.player_wrap .side_wrap').hide()
$('.player_wrap').each(function () {
    $('.player_wrap .side_wrap').first().show();
});

$('.side_wrap .side_close,.sh').click(function () {
    $('.player_wrap').addClass('full')
});

//탭메뉴 클릭 이벤트
$(".side_tab li a").click(function () {

    $(this).parent().siblings("li").removeClass("active");
    $(this).parent().addClass("active");
    $(this).parent().parent().parent().children(".side_wrap").hide();
    var activeTab = $(this).attr("rel");
    $('.player_wrap').removeClass('full')
    $("#" + activeTab).fadeIn();
    $("#" + activeTab).addClass('active')
});

//탭메뉴 클릭 이벤트
$(".tabs li a").click(function () {

    $(this).parent().siblings("li").removeClass("active");
    $(this).parent().addClass("active");
    $(this).closest('.tab_container').find(".tab_content").hide();
    var activeTab = $(this).attr("rel");
    $("#" + activeTab).fadeIn();
});

// 드롭다운 탭
if ($(window).width() < 768) {
    $('.tab_select').addClass('m_tab');
    $('.player_wrap').addClass('full');
} else {
    $('.tab_select').removeClass('m_tab');
}

$(window).resize(function () {
    if ($(window).width() < 768) {
        $('.tab_select').addClass('m_tab');
        $('.player_wrap').addClass('full');
    } else {
        $('.tab_select').removeClass('m_tab');
    }
});
$('.m_tab .tabs_dropdown').each(function (i, elm) {
    $(elm).text($(elm).next('ul').find('li.active a').text());
});

$('.m_tab .tabs_dropdown').on('click', function (e) {
    e.preventDefault();
    $(e.target).toggleClass('open').next('ul').slideToggle();
});

$('.m_tab li a').on('click', function (e) {
    $(this).parent().parent().hide();
    $(this).parent().parent().prev('a').text($(this).text());
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

$('.view_area_cont .tab_style04 a').on('click', function (e) {
    e.preventDefault();
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active')
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

});

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

            var fname = fi.files.item(i).name; // THE NAME OF THE FILE.
            var fsize = fi.files.item(i).size; // THE SIZE OF THE FILE.
            var _size = (Math.floor(fsize / 1000));

            // SHOW THE EXTRACTED DETAILS OF THE FILE.
            document.getElementById('upload_prev').innerHTML =
                document.getElementById('upload_prev').innerHTML + '<div class="file">' + '<div class="filenameupload">' + '<span class="name">' + fname + '</span>' + '<span class="size">' + '(<b>' + _size.toLocaleString() + '</b> K)' + '</span>' + '</div>' + '<a href="javascript:void()" class="file_close" >X</a></div>' + '</div>'
        }

    }


});

$(".file_wrap02 input[type='file']").on('change', function () {
    var filename = this.value;
    var lastIndex = filename.lastIndexOf("\\");

    if (lastIndex >= 0) {
        filename = filename.substring(lastIndex + 1);
    }

    var totalBytes = (this.files[0].size);
    var totalSize = (Math.floor(totalBytes / 1000));
    var files = $(".file_wrap02 input[type='file']")[0].files;
    for (var i = 0; i < files.length; i++) {
        $(".upload-name").html('<span class="name">' + files[i].name + '</span>' + '<span class="size">(' + totalSize.toLocaleString() + 'K' + ')</span>');
    }


})
$('.homework_wrap > .item').each(function () {
    $('.file_table').addClass('no_file_table');
    $(this).find('.table_upload').on('change', function () {
        var $fileTable = $(this).parent().next('.file_table');
        $fileTable.find('.td').show();
        $fileTable.closest('.div_table05').removeClass('no_file_table');
        $(this).parent().parent().find('.no_file').hide();

        $fileTable.empty(); // 이전에 추가된 파일 목록을 지웁니다.

        for (var i = 0; i < this.files.length; i++) {
            var file = this.files[i];
            var totalBytes = file.size;

            if (totalBytes > 10 * 1024 * 1024) {
                alert("첨부파일 사이즈는 10MB 이내로 등록 가능합니다.");
                $(this).val(''); // 파일 선택 초기화
                return false;
            }

            var filename = file.name;

            var newItem = $('<div class="file_list"></div>');
            newItem.append('<div class="item w50"><div class="th">파일명</div> <div class="td tlt file_name">' + filename + '</div></div>');
            newItem.append('<div class="item w25"><div class="th">크기(Byte)</div><div class="td file_size">' + (totalBytes / 1000).toLocaleString() + '</div></div>');
            newItem.append('<div class="item w25"><div class="th">첨부파일</div><div class="td file_btn"><a href="#" class="btn_style09 btn_black01">다운로드</a><a href="#" class="btn_style09 btn_gray01 file_del ml5">삭제</a></div>');

            $fileTable.addClass('active').append(newItem);
        }
    });

});


$(document).on('click', '.file_del', function () {
    if (confirm('삭제 하시겠습니까?')) {
        var $fileTable = $(this).closest('.file_table'); // .file_table 요소 찾기
        $fileTable.prev().find('.table_upload').val("");
        $fileTable.find('.no_file').show();
        $(this).parent().parent().parent().remove();

        // Check if there are no child div elements in file_table
        if ($fileTable.children('div').length === 0) {
            $fileTable.append('<div class="item w50"><div class="th">파일명</div></div><div class="item w25"><div class="th">크기(Byte)</div></div><div class="item w25"><div class="th">첨부파일</div></div><div class="no_file"><p>등록된 첨부파일이 없습니다. 상단의 파일업로드 버튼을 눌러 과제를 제출해주세요.</p></div>');
            $fileTable.removeClass('active');
            $fileTable.addClass('no_file_table');
        }
    }
});

//자주하는 질문
$('.q_a .q').click(function () {
    $(this).parent().toggleClass('active');
    $(this).next().slideToggle();
    $(this).parent().siblings().find('.a').slideUp()
    $(this).parent().siblings().removeClass('active')
});


//학습목차
$('.div_table03 a').click(function () {
    $(this).next().slideToggle();
})

//date
$(".datep").datepicker({

    showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다.
    buttonImage: "./images/calendar_ico.png",

    changeMonth: true, // 월을 바꿀수 있는 셀렉트 박스를 표시한다.

    changeYear: true, // 년을 바꿀 수 있는 셀렉트 박스를 표시한다.

    minDate: '-100y', // 현재날짜로부터 100년이전까지 년을 표시한다.

    nextText: '다음 달', // next 아이콘의 툴팁.

    prevText: '이전 달', // prev 아이콘의 툴팁.

    numberOfMonths: [1, 1], // 한번에 얼마나 많은 월을 표시할것인가. [2,3] 일 경우, 2(행) x 3(열) = 6개의 월을 표시한다.

    stepMonths: 3, // next, prev 버튼을 클릭했을때 얼마나 많은 월을 이동하여 표시하는가. 

    yearRange: 'c-100:c+10', // 년도 선택 셀렉트박스를 현재 년도에서 이전, 이후로 얼마의 범위를 표시할것인가.

    showButtonPanel: true, // 캘린더 하단에 버튼 패널을 표시한다. 

    currentText: '오늘 날짜', // 오늘 날짜로 이동하는 버튼 패널

    closeText: '닫기', // 닫기 버튼 패널

    dateFormat: "yy.mm.dd", // 텍스트 필드에 입력되는 날짜 형식.

    showMonthAfterYear: true, // 월, 년순의 셀렉트 박스를 년,월 순으로 바꿔준다. 

    dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'], // 요일의 한글 형식.

    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], // 월의 한글 형식.


});

$(".datep02").datepicker({

    showOn: "both", // 버튼과 텍스트 필드 모두 캘린더를 보여준다.
    buttonImage: "./images/date.png",

    changeMonth: true, // 월을 바꿀수 있는 셀렉트 박스를 표시한다.

    changeYear: true, // 년을 바꿀 수 있는 셀렉트 박스를 표시한다.

    minDate: '-100y', // 현재날짜로부터 100년이전까지 년을 표시한다.

    nextText: '다음 달', // next 아이콘의 툴팁.

    prevText: '이전 달', // prev 아이콘의 툴팁.

    numberOfMonths: [1, 1], // 한번에 얼마나 많은 월을 표시할것인가. [2,3] 일 경우, 2(행) x 3(열) = 6개의 월을 표시한다.

    stepMonths: 3, // next, prev 버튼을 클릭했을때 얼마나 많은 월을 이동하여 표시하는가. 

    yearRange: 'c-100:c+10', // 년도 선택 셀렉트박스를 현재 년도에서 이전, 이후로 얼마의 범위를 표시할것인가.

    showButtonPanel: true, // 캘린더 하단에 버튼 패널을 표시한다. 

    currentText: '오늘 날짜', // 오늘 날짜로 이동하는 버튼 패널

    closeText: '닫기', // 닫기 버튼 패널

    dateFormat: "yy.mm.dd", // 텍스트 필드에 입력되는 날짜 형식.

    showMonthAfterYear: true, // 월, 년순의 셀렉트 박스를 년,월 순으로 바꿔준다. 

    dayNamesMin: ['월', '화', '수', '목', '금', '토', '일'], // 요일의 한글 형식.

    monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'], // 월의 한글 형식.


});


// 이미지 file
var container = $('.file_img'),
    inputFile = $('.file_img input'),
    img, btn, txt = '등록',
    txtAfter = '등록';

if (!container.find('.file_img input').length) {
    container.prepend('<input type="button" value="' + txt + '" id="upload">');
    btn = $('#upload');
    img = $('#uploadImg');
}

btn.on('click', function () {
    inputFile.click();
});

inputFile.on('change', function (e) {
    container.find('label').html(inputFile.val());

    var i = 0;
    for (i; i < e.originalEvent.srcElement.files.length; i++) {
        var file = e.originalEvent.srcElement.files[i],
            reader = new FileReader();

        reader.onloadend = function () {
            img.attr('src', reader.result).animate({
                opacity: 1
            }, 700);
        }
        reader.readAsDataURL(file);
        $('.img_area').css('display', 'flex');

    }

    btn.val(txtAfter);
});

$('.img_area .del').click(function () {
    $('.file_img input[type="file"]').val("");
    $(this).parent().find('img').attr("src", '/images/dft_img.png')
});

//snb
$('.snb > li > a').click(function () {
    $(this).parent().addClass('active');
    $(this).parent().siblings().removeClass('active');
});

// 아코디언 테이블
$('.accordion_table >  table > tbody .tlt').click(function () {
    $(this).parent().next('.fold').toggle();
    $(this).next('.fold').toggleClass('open')
});

var ctr = $('#side').height();
$('.m_flex').css('top', ctr - 20);

$('.con_list02 dl').each(function () {
    if (($(this).find('dd').height()) < 25) {
        $(this).find('dd').addClass('mt20')
    } else {

    }
})

// 미디어 쿼리를 사용하여 화면 너비를 확인
if (window.matchMedia("(max-width: 768px)").matches) {
    
    var activeLi = $(".winPop .snb > .active");
    var ulExists = activeLi.find("ul").length > 0;
    var activeText;
    $('.winPop .snb').wrap('<div class="snb_select"></div>')
    if (ulExists) {
        // <ul> 아래에 "active" 클래스가 지정된 <li>가 있는 경우
        activeText = activeLi.find("li.active a").text();
    } else {
        // <ul> 아래에 "active" 클래스가 지정된 <li>가 없는 경우, 첫 번째 <a> 요소의 텍스트 사용
        activeText = activeLi.find("a").text();
    }

    // "activeText" 클래스가 지정된 <div> 요소에 텍스트를 append로 추가
    $(".snb_select").prepend('<div class="activeText">' + activeText + '</div>');
    
    $('.snb_select .activeText').click(function(){
        $(this).next().toggle();
           $(this).parent().toggleClass('selected')
    })
    
    $(".winPop .snb > li > a").click(function (e) {

        // 모든 <li> 요소에서 "selected" 클래스 제거
        $(".winPop .snb > li > a").removeClass('selected');

        // 클릭된 <a> 요소의 다음 <ul> 요소의 상태를 토글하고 "selected" 클래스를 추가합니다.
        var $nextUl = $(this).next('ul');
        if ($nextUl.is(':visible')) {
            $nextUl.hide();
        } else {
            $nextUl.show();
            $(this).addClass('selected');
        }
    });
}



});


$(window).resize(function(){
    // 미디어 쿼리를 사용하여 화면 너비를 확인
if (window.matchMedia("(max-width: 768px)").matches) {
    
    var activeLi = $(".winPop .snb > .active");
    var ulExists = activeLi.find("ul").length > 0;
    var activeText;
    $('.winPop .snb').wrap('<div class="snb_select"></div>')
    if (ulExists) {
        // <ul> 아래에 "active" 클래스가 지정된 <li>가 있는 경우
        activeText = activeLi.find("li.active a").text();
    } else {
        // <ul> 아래에 "active" 클래스가 지정된 <li>가 없는 경우, 첫 번째 <a> 요소의 텍스트 사용
        activeText = activeLi.find("a").text();
    }

    // "activeText" 클래스가 지정된 <div> 요소에 텍스트를 append로 추가
    $(".snb_select").prepend('<div class="activeText">' + activeText + '</div>');
    
    $('.snb_select .activeText').click(function(){
        $(this).next().toggle();
           $(this).parent().toggleClass('selected')
    })
    
    $(".winPop .snb > li > a").click(function (e) {

        // 모든 <li> 요소에서 "selected" 클래스 제거
        $(".winPop .snb > li > a").removeClass('selected');

        // 클릭된 <a> 요소의 다음 <ul> 요소의 상태를 토글하고 "selected" 클래스를 추가합니다.
        var $nextUl = $(this).next('ul');
        if ($nextUl.is(':visible')) {
            $nextUl.hide();
        } else {
            $nextUl.show();
            $(this).addClass('selected');
        }
    });
}
})

function spinner() {
    //  SPINNER
    $("input[type='number']").spinner();

    //  INPUT ONLY NUMBERS
    $("input[type='number']").keyup(function () {
        this.value = this.value.replace(/[^0-9]/g, '');
    });
}

// INPUT NUMBER MAX LENGHT
function maxLengthCheck(object) {
    if (object.value.length > object.maxLength)
        object.value = object.value.slice(0, object.maxLength)
}



window.onload = spinner;

// 팝업
function openModal(modalname) {
    document.get
    $("." + modalname).show();
    $(".shadow").show();
    var offset = jQuery(document).scrollTop();
    jQuery("body").css({
        "position": "fixed",
        "width": "100%",
        "top": -offset
    });
    
    $('.popUp .pop_wrap .pop_side .snb').hide()

}


function twoModal(modalname) {
    document.get
    $("." + modalname).show();
    $(".shadow").show();
    var offset = jQuery(document).scrollTop();
    jQuery("body").css({
        "position": "fixed",
        "width": "100%",
        "top": -offset
    });

}

function close_pop(flag) {
    // 현재 클릭된 "닫기" 링크의 부모 요소인 "popUp" 요소를 찾아 숨깁니다.
    var $popup = $('.popUp:visible');
    $popup.hide();


    $(".shadow").hide();
    var offset = jQuery("body").offset().top;
    jQuery("html,body").css("position", "static").scrollTop(-offset);
};

function closeWPopup() {
    window.close();
}

function close_child_pop(element) {
    // 현재 클릭된 "닫기" 링크의 부모 요소를 찾아 숨깁니다.
    var $childPopup = $(element).closest(".popUp");

    // 자식 팝업만 닫으고 부모 팝업은 숨기지 않습니다.
    $childPopup.hide();


    $(".shadow").hide();
    var offset = jQuery("body").offset().top;
    jQuery("html,body").css("position", "static").scrollTop(-offset);
};




function onLoading() {
    $('.loading').show();
}


function offLoading() {
    $('.loading').hide();
}
