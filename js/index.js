// 홈 버튼 클래스 적용
$(".home_bt").click(function(){
    home();
});

// 클릭시 로고 이동 메뉴 사라짐
$(".popup_box a").click(function(){
    $(".logo_box").css({display:"flex", animation: "slideUp 0.8s ease-in-out forwards"});
    $(".info_box").fadeOut();
    $(".info_link_popup").fadeIn(900);
    $("body").addClass("scroll_off");
    // 스크롤 중지
    $(".info_link_popup").on('scroll touchmove mousewheel', function(event) {
        event.preventDefault();
        event.stopPropagation();
        return false;
    });
});

// 닫기 버튼 클릭시
$(".exit_btn").click(function(){
    $(".logo_box").css({display:"inline-block", animation: "slideDown 0.8s ease-in-out forwards"});
    $(".info_box").fadeIn();
    $("body").removeClass("scroll_off");
    $(".info_link_popup").fadeOut();


    // if (matchMedia("screen and (max-width: 600px)").matches) {
    //     $(".logo .logo_text").css({animation: "", opacity : 1, transition : "all 0.8s"});
    //   }
}).mouseover(function(){
    $(".exit_btn span").css({"-webkit-text-stroke" : "2px #fff", color:"#4801ff"});
}).mouseout(function(){
    $(".exit_btn span").css({color : ""});
});

// 메인 링크 클릭시
$(".main_link>li").click(function(){
    var titleIndex = $(this).index();

    $(this).css({transform : "translate(0,0)"});
    $("body").addClass("scroll_off");
    $(".logo .logo_text").css({animation: "slideUp 0.8s ease-in-out forwards"}).mouseover(function(){
        $(".logo .logo_text").css({color:"#000"});
    }).mouseout(function(){
        $(".logo .logo_text").css({color:"#fff"})
    });
    $("nav a, nav li").css({color : "#fff"});
    $(".info li:last-child").fadeOut();
    $(".content").fadeIn(600,function(){
        $(".slide_wrap>div").eq(titleIndex).fadeIn();
    });
});



// 홈 버튼 이동
function home() {
    window.location.href = './index.html';
}
// 뒤로가기 버튼 이동
function back() {
    window.location.href = 'javascript:history.back();';
}