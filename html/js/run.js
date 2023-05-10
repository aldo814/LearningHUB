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
			
	if(!container.find('.file_img input').length){
		container.prepend('<input type="button" value="'+txt+'" id="upload">');
		btn = $('#upload');
		img = $('#uploadImg');
	}
			
	btn.on('click', function(){
		inputFile.click();
	});

	inputFile.on('change', function(e){
		container.find('label').html( inputFile.val() );
		
		var i = 0;
		for(i; i < e.originalEvent.srcElement.files.length; i++) {
			var file = e.originalEvent.srcElement.files[i], 
				reader = new FileReader();

			reader.onloadend = function(){
				img.attr('src', reader.result).animate({opacity: 1}, 700);
			}
			reader.readAsDataURL(file);
			$('.img_area').css('display','flex');
            
		}
		
		btn.val( txtAfter );
	});
    
    $('.img_area .del').click(function(){
        $('.file_img input[type="file"]').val("");
        $(this).parent().find('img').attr("src", '/images/dft_img.png')
    });

});

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
    $('body').addClass('not_scroll');
    var offset = jQuery(document).scrollTop();
    jQuery("body").css({"position":"fixed","top":-offset});
}

function close_pop(flag) {
    $('.popUp').hide();
    $(".shadow").hide();
    $('body').removeClass('not_scroll');
    var offset = jQuery("body").offset().top;
    jQuery("html,body").css("position","static").scrollTop(-offset);
};
