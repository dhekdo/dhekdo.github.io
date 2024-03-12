var mainColor = "#4801ff";

// 홈 버튼 클래스 적용
$(".home_bt").click(function(){
    home();
});

// 팝업박스 클릭시 로고 이동 메뉴 사라짐
$(".popup_box a").click(function(){
    $(".logo_box").css({display:"flex", animation: "slideUp 0.8s ease-in-out forwards", height:0});
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

// 팝업 박스 클릭 세분화
$(".profile_bt").click(function(){
    $(".profile_content").fadeIn(900);
    $(".skill_content").css({display:"none"});
});

$(".skill_bt").click(function(){
    $(".skill_content").fadeIn(900);
    $(".profile_content").css({display:"none"});
});

// 닫기 버튼 클릭시
$(".exit_btn").click(function(){
    $(".logo_box").css({display:"inline-block", animation: "slideDown 0.8s ease-in-out forwards", height:"auto"});
    $(".info_box").fadeIn();
    $("body").removeClass("scroll_off");
    $(".info_link_popup").fadeOut();


    // if (matchMedia("screen and (max-width: 600px)").matches) {
    //     $(".logo .logo_text").css({animation: "", opacity : 1, transition : "all 0.8s"});
    //   }
}).mouseover(function(){
    $(".exit_btn span").css({"-webkit-text-stroke" : "2px #fff", color: mainColor});
}).mouseout(function(){
    $(".exit_btn span").css({color : ""});
});

// 메인 링크 클릭시
$(".main_link>li").click(function(){
    $(".logo_box").css({animation: "slideUp 0.8s ease-in-out forwards", height:0});
    $(".popup_box").fadeOut();
    $(".main_box").fadeIn(function(){
        $(".logo_box h1").mouseover(function(){
            $(".logo_box h1").css({color:"#000"});        
        }).mouseout(function(){
            $(".logo_box h1").css({color:"#fff"});
        });
    });
    $(".pre_btn").fadeIn(700);
    
    var titleIndex = $(this).index();

    $(this).css({transform : "translate(0,0)"});
    $("body").addClass("scroll_off_bl");
    $(".main_box .port_wrap >div").eq(titleIndex).fadeIn().siblings().hide();
    
});

$(".built_box > .port_btn").click(function(){
    alert("1080*1920 고정값으로 작업한 프로젝트입니다.")
});

$(".yes_locker > .port_btn a:first").click(function(){
    alert("1080*1920 고정값으로 작업한 프로젝트입니다.");
});

$(".yes_locker > .port_btn a:last").click(function(){
    alert("모바일 사이즈로 작업한 프로젝트입니다.");
});


// 뒤로가기 버튼 클릭시
$(".pre_btn").click(function(){
    $(".main_box").fadeOut(
        function(){
            $(".logo_box h1").mouseover(function(){
                $(".logo_box h1").css({color:mainColor});        
            }).mouseout(function(){
                $(".logo_box h1").css({color:"#fff"});
            });
        }
    );
    $(".logo_box").css({animation: "slideDown 0.8s ease-in-out forwards", height:"auto"});
    $(".main_link li").css({transform : ""});
    $("body").removeClass("scroll_off_bl");
    $(".popup_box").fadeIn();
});



// 홈 버튼 이동
function home() {
    window.location.href = './index.html';
}
