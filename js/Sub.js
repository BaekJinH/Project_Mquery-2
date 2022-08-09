// position:sticky 사용해서 폴더식으로 만들기 


// Wrap end line

// 스크롤 다운시 보이고 올리면 안 보이는 메뉴바 보류

// var lastScrollTop = 0;

// $(window).scroll(function(){
//     var scrollTop = $(this).scrollTop(); 
//     if(scrollTop >= 100) { 
//         if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) { 
//             $("header").css("top","-100px");
//         } else {
//             $("header").css("top","0px");
//         }

//         lastScrollTop = scrollTop;
//     } 

//     $(".content").each(function () {
//         var contentIndex = $(this).attr("id");
//         if(scrollTop >= $(this).offset().top) {
//             $(".scroll_03 a").removeClass("on");
//             $(".scroll_03 a[href=#"+contentIndex+"]").addClass("on");
//         }
//     })
// });

// header 

// Vanila Js vs
$(function(){
    $('.slideWrap').hover(function(){
        $('.prev')
    },function(){
        $('.prev')

    })
})

$(function(){
    var slides = document.querySelector('.slideWrap'),
        slide = document.querySelectorAll('.slideWrap li'),
        currentIdx = 0,
        slideCount = slide.length,
        slideWidth = $('.slide').width(),
        slideMargin = 0,
        prevBtn = document.querySelector('.prev1'),
        nextBtn = document.querySelector('.next1');

    makeClone();

    function makeClone(){
        for(var i = 0; i <slideCount; i++){
            var cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides.appendChild(cloneSlide);
        }
        for(var i = slideCount -1; i >=0; i--){
            var cloneSlide = slide[i].cloneNode(true);
            cloneSlide.classList.add('clone');
            slides.prepend(cloneSlide);
        }
            ubdateWidth();
            setInitialPos();
            
            setTimeout(function(){
                slides.classList.add('animated');
            },100)
    }

    function ubdateWidth(){
        var currentSlides = document.querySelectorAll('.slideWrap li');
        var newSlideCount = currentSlides.length;
        
        var newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
        slides.style.width = newWidth;
    }
    function setInitialPos(){
        var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
        slides.style.transform = 'translateX('+ initialTranslateValue +'px)';
    }

    nextBtn.addEventListener('click',function(){
        moveSlide(currentIdx +1 )
    })
    prevBtn.addEventListener('click',function(){
        moveSlide(currentIdx -1 )
    })

    var timer = undefined;

    function autoSlide(){
        if(timer == undefined){
            timer = setInterval(function(){
                moveSlide(currentIdx + 1 )
            },3000)
        }
    }
    autoSlide();

    function stopSlide(){
        clearInterval(timer);
        timer = undefined;
        // timer의 값을 undefined으로 지정을 해줘야 마우스로 왔다갔다 했을 때 오류가 안 생김
    }
    // stop()을 붙여줘야 할 것 같음
    slides.addEventListener('mouseenter',function(){
        stopSlide();
    })

    slides.addEventListener('mouseleave',function(){
        autoSlide();
    })

    function moveSlide(num){
        slides.style.left = -num * (slideWidth + slideMargin) + 'px';
        currentIdx = num;
        console.log(currentIdx,slideCount);
        
        if(currentIdx == slideCount || currentIdx == -slideCount){
            setTimeout(function(){
                slides.classList.remove('animated');
                slides.style.left = '0px';
                currentIdx = 0;
            },600);
            setTimeout(function(){
                slides.classList.add('animated');
            },700);
        }
    }
    prevBtn.addEventListener('click',function(){
        stopSlide()
    })
    prevBtn.addEventListener('mouseleave',function(){
        autoSlide()
    })
    nextBtn.addEventListener('click',function(){
        stopSlide()
    })
    nextBtn.addEventListener('mouseleave',function(){
        autoSlide();
    })
})



// #slider end line 보류

$(function(){
    $('.videoPlay').hide()
    $('.imgWrap1 > div').on({mouseover:function(){
        $(this).find('.videoPlay').show()
    }})
    $('.videoPlay').hover(function(){
        $(this).parent().css({boxShadow:'inset 100vw 100vh 3px rgba(0,0,0,'+0.5+')'})
    },function(){
        $(this).parent().css({boxShadow:'none'})
    })


    // 밑의 주석처리는 비디오버튼 클릭하면 뒤의 사진이 흐려지는 건데 왜 넣었는지 모르겠네 일단 보류
    
    // $('.videoPlay').on({click:function(){
    //     $(this).parent().css({boxShadow:'inset 100vw 100vh 3px rgba(0,0,0,'+0.5+')'})
    // },mouseleave:function(){
    //     $(this).parent().css({boxShadow:'none'})
    // }})
})






$(function(){
    $('.action  .imgUp > div').click(function(){
        var index = $('.action  .imgUp > div').index(this)
        if(index == 0){
            $('.popup iframe').attr('src','https://www.youtube.com/embed/yQxwbZsL14Y?autoplay=1&mute=1')
        }
        else if(index == 1){
            $('.popup iframe').attr('src','https://www.youtube.com/embed/cheYIVEtVQ4?autoplay=1&mute=1')
        }
        else if(index == 2){
            $('.popup iframe').attr('src','https://www.youtube.com/embed/Lq594XmpPBg?autoplay=1&mute=1')
        }
        else{
            $('.popup iframe').attr('src','https://www.youtube.com/embed/lrL3Qjv2jZI?autoplay=1&mute=1')
        }
        $('.popup , .mask , .close').stop().fadeIn()
    })
    $('.story  .imgUp > div').click(function(){
        var index = $('.story .imgUp > div').index(this)
        if(index == 0){
            $('.popup iframe').attr('src','https://www.youtube.com/embed/eaW0tYpxyp0?autoplay=1&mute=1')
        }
        else if(index == 1){
            $('.popup iframe').attr('src','https://www.youtube.com/embed/ohClxMmNLQQ?autoplay=1&mute=1')
        }
        else if(index == 2){
            $('.popup iframe').attr('src','https://www.youtube.com/embed/dIQGI36BxDE?autoplay=1&mute=1')
        }
        else{
            $('.popup iframe').attr('src','https://www.youtube.com/embed/rXMX4YJ7Lks?autoplay=1&mute=1')
        }
        $('.popup , .mask , .close').stop().fadeIn()
    })
    $('.casual  .imgUp > div').click(function(){
        var index = $('.casual .imgUp > div').index(this)
        if(index == 0){
            $('.popup iframe').attr('src','https://www.youtube.com/embed/ot7uXNQskhs?autoplay=1&mute=1')
        }
        else if(index == 1){
            $('.popup iframe').attr('src','https://www.youtube.com/embed/jp_XgQjgGNY?autoplay=1&mute=1')
        }
        else if(index == 2){
            $('.popup iframe').attr('src','https://www.youtube.com/embed/0JG5Y7ZWvWU?autoplay=1&mute=1')
        }
        else{
            $('.popup iframe').attr('src','https://www.youtube.com/embed/z00mK3Pxc8w?autoplay=1&mute=1')
        }
        $('.popup , .mask , .close').stop().fadeIn()
    })
    $('.fantasy  .imgUp > div').click(function(){
        var index = $('.fantasy .imgUp > div').index(this)
        if(index == 0){
            $('.popup iframe').attr('src','https://www.youtube.com/embed/c0i88t0Kacs?autoplay=1&mute=1')
        }
        else if(index == 1){
            $('.popup iframe').attr('src','https://www.youtube.com/embed/H70EGmRMMnk?autoplay=1&mute=1')
        }
        else if(index == 2){
            $('.popup iframe').attr('src','https://www.youtube.com/embed/ETWtvVGFNqU?autoplay=1&mute=1')
        }
        else{
            $('.popup iframe').attr('src','https://www.youtube.com/embed/y8f8QZTOrfk?autoplay=1&mute=1')
        }
        $('.popup , .mask , .close').stop().fadeIn()
    })
    $('.close').click(function(){
        $('.mask , .popup').stop().fadeOut()
    })
})
$(function(){
    
})
$(function(){
    $('.categorySub').css({display:'none'})
    $('.category li').mouseover(function(){
        $(this).find('.categorySub').stop().fadeIn('slow');
        $(this).siblings().find('.categorySub').stop().fadeOut(50)
    })
    $('.category li').mouseout(function(){
        $('.categorySub').stop().fadeOut(50)
    })
})



// $(function(){
//     $('.imgWrap1 > div').on({mouseover:function(){
//         $(this).find('.videoAndimg').stop().css({height:'100%',top:0});
//         $(this).siblings().find('.videoAndimg').stop().css({height:'0%',top:'101%'})
//     },mouseout:function(){
//         $('.videoAndimg').stop().css({height:'0%',top:'101%'})
//     }})
// })


$(function(){
    $('.imgWrap1 > div').on({mouseover:function(){
        $(this).find('.videoAndimg').stop().css({height:'100%',top:0});
        $(this).siblings().find('.videoAndimg').stop().css({height:'100%',top:'101%'})
        $(this).css({boxShadow:'inset 100vw 100vh 8px rgba(0,0,0,'+0.5+')',transform:'scale(1.1)'})
    },mouseout:function(){
        $('.videoAndimg').stop().css({height:'100%',top:'101%'})
        $('.imgWrap1 > div').css({boxShadow:'none'})
        $(this).css({transform:'scale(1)'})
    }})
})

// dlc line


$(function(){
    $('.imgWrap1').siblings().not('.액션').not('.imgWrap2').not('.imgWrap3').hide()
    $('.dlc > ul').not('.dlcAction').css({display:'none'})
    $('.slideRight').siblings().not('.slideAction').not('.wrap3Head').hide()            
    $('.category > ul > li').click(function(){

        var index = $('.category > ul > li').index(this);
        if(index == 0){
            $('.액션').fadeIn()
            $('.imgWrap1').siblings().not('.액션').not('.imgWrap2').not('.imgWrap3').hide()

            $('.slideAction').show()
            $('.slideRight').siblings().not('.slideAction').hide()            

            $(this).addClass('categoryHold')
            $(this).siblings().not(this).removeClass('categoryHold')
    

            // slideRight 텍스트 부분
            
        }
        else if(index == 1){
            $('.스토리').fadeIn()
            $('.imgWrap1').siblings().not('.스토리').not('.imgWrap2').not('.imgWrap3').hide()

            $('.slideStory').show()
            $('.slideRight').siblings().not('.slideStory').hide()            
            $('.slideStory h4 , .slideStory p').css({display:'block'})
            
            $(this).addClass('categoryHold')
            $(this).siblings().not(this).removeClass('categoryHold')
            
            
            
        }
        else if(index == 2){
            $('.캐쥬얼').fadeIn()
            $('.imgWrap1').siblings().not('.캐쥬얼').not('.imgWrap2').not('.imgWrap3').hide()
            
            
            $('.slideCasual').show()
            $('.slideRight').siblings().not('.slideCasual').hide()            
            $('.slideCasual h4 , .slideCasual p').css({display:'block'})
            
            
            $(this).addClass('categoryHold')
            $(this).siblings().not(this).removeClass('categoryHold')
            
            
            
        }
        else if(index == 3){
            $('.판타지').fadeIn()
            $('.imgWrap1').siblings().not('.판타지').not('.imgWrap2').not('.imgWrap3').hide()

            
            $('.slideFantasy').show()
            $('.slideRight').siblings().not('.slideFantasy').hide()          
            $('.slideFantasy h4 , .slideFantasy p').css({display:'block'})
            
            $(this).addClass('categoryHold')
            $(this).siblings().not(this).removeClass('categoryHold')

            
            
        }   
    })
})

// 위는 태그 선택시 태그에 맞는 이미지로 모두 바꾸기


// 밑의 슬라이드를 반복문으로 사용해서 태그별로 슬라이드를 적용해야함

$(function(){
    var bannerLeft = 0;
    var imgCnt = 0;
    var first = 1;
    var last;
    var interval;

    $('.dlcAction > li').each(function(){
        $(this).css('left',bannerLeft);
        bannerLeft += $(this).width() +50;
        $(this).attr('id','content'+(++imgCnt));
    })
    last = imgCnt;
    startAction();

    $('.content').hover(function(){
        stopAction();
    },function(){
        startAction();
    })

    function startAction() {
        interval = setInterval(function(){
            $('.dlcAction > li').each(function(){
                $(this).css('left',$(this).position().left-1);
            });

            var firstContent = $('#content' + first);
            var lastContent = $('#content' + last);

            if(firstContent.position().left < '-' + $(firstContent).width()) {
                firstContent.css('left',lastContent.position().left+lastContent.width()+50);
                first++;
                last++;
                if(last > imgCnt) {last =1};
                if(first > imgCnt) {first = 1};
            }
        },15)
    }
    function stopAction(){
        clearInterval(interval)
    }
})

$(function(){
    var bannerLeft = 0;
    var imgCnt = 0;
    var first = 1;
    var last;
    var interval;

    $('.dlcStory > li').each(function(){
        $(this).css('left',bannerLeft);
        bannerLeft += $(this).width() +50;
        $(this).attr('id','content'+(++imgCnt));
    })
    last = imgCnt;
    startAction();

    $('.content').hover(function(){
        stopAction();
    },function(){
        startAction();
    })

    function startAction() {
        interval = setInterval(function(){
            $('.dlcStory > li').each(function(){
                $(this).css('left',$(this).position().left-1);
            });

            var firstContent = $('#content' + first);
            var lastContent = $('#content' + last);

            if(firstContent.position().left < '-' + $(firstContent).width()) {
                firstContent.css('left',lastContent.position().left+lastContent.width()+50);
                first++;
                last++;
                if(last > imgCnt) {last =1};
                if(first > imgCnt) {first = 1};
            }
        },15)
    }
    function stopAction(){
        clearInterval(interval)
    }
})


$(function(){
    var bannerLeft = 0;
    var imgCnt = 0;
    var first = 1;
    var last;
    var interval;

    $('.dlcCasual > li').each(function(){
        $(this).css('left',bannerLeft);
        bannerLeft += $(this).width() +50;
        $(this).attr('id','content'+(++imgCnt));
    })
    last = imgCnt;
    startAction();

    $('.content').hover(function(){
        stopAction();
    },function(){
        startAction();
    })

    function startAction() {
        interval = setInterval(function(){
            $('.dlcCasual > li').each(function(){
                $(this).css('left',$(this).position().left-1);
            });

            var firstContent = $('#content' + first);
            var lastContent = $('#content' + last);

            if(firstContent.position().left < '-' + $(firstContent).width()) {
                firstContent.css('left',lastContent.position().left+lastContent.width()+50);
                first++;
                last++;
                if(last > imgCnt) {last =1};
                if(first > imgCnt) {first = 1};
            }
        },15)
    }
    function stopAction(){
        clearInterval(interval)
    }
})


$(function(){
    var bannerLeft = 0;
    var imgCnt = 0;
    var first = 1;
    var last;
    var interval;

    $('.dlcFantasy > li').each(function(){
        $(this).css('left',bannerLeft);
        bannerLeft += $(this).width() +50;
        $(this).attr('id','content'+(++imgCnt));
    })
    last = imgCnt;
    startAction();

    $('.content').hover(function(){
        stopAction();
    },function(){
        startAction();
    })

    function startAction() {
        interval = setInterval(function(){
            $('.dlcFantasy > li').each(function(){
                $(this).css('left',$(this).position().left-1);
            });

            var firstContent = $('#content' + first);
            var lastContent = $('#content' + last);

            if(firstContent.position().left < '-' + $(firstContent).width()) {
                firstContent.css('left',lastContent.position().left+lastContent.width()+50);
                first++;
                last++;
                if(last > imgCnt) {last =1};
                if(first > imgCnt) {first = 1};
            }
        },15)
    }
    function stopAction(){
        clearInterval(interval)
    }
})





$(function(){
    $(window).scroll(function(){
        var scrollValue = $(this).scrollTop()
        if(scrollValue > $('.wrap3Head').offset().top-600){
            $('.slideIn1').stop().css({left:'0%'})
            $('.slideRight h4').eq(0).stop().fadeIn(3000)
            $('.slideRight p').eq(0).stop().fadeIn(3000)
        }
        else{
            $('.slideIn1').css({left:'-100%'})
            $('.slideRight h4').eq(0).stop().fadeOut('fast')
            $('.slideRight p').eq(0).stop().fadeOut('fast')
        }


        if(scrollValue > $('.slideIn1').offset().top-600){
            $('.slideIn2').css({right:'0%'})
            $('.slideRight h4').eq(1).fadeIn(3000)
            $('.slideRight p').eq(1).fadeIn(3000)
        }
        else{
            $('.slideIn2').css({right:'-100%'})
            $('.slideRight h4').eq(1).fadeIn('fast')
            $('.slideRight p').eq(1).fadeIn('fast')
        }

        
        if(scrollValue > $('.slideIn2').offset().top-600){
            $('.slideIn3').css({left:'0%'})
            $('.slideRight h4').eq(2).fadeIn(3000)
            $('.slideRight p').eq(2).fadeIn(3000)
        }
        else{
            $('.slideIn3').css({left:'-100%'})
            $('.slideRight h4').eq(2).fadeIn('fast')
            $('.slideRight p').eq(2).fadeIn('fast')
        }
        


        if(scrollValue > $('.slideIn3').offset().top-600){
            $('.slideIn4').css({right:'0%'})
            $('.slideRight h4').eq(3).fadeIn(3000)
            $('.slideRight p').eq(3).fadeIn(3000)
        }
        else{
            $('.slideIn4').css({right:'-100%'})
            $('.slideRight h4').eq(3).fadeIn('fast')
            $('.slideRight p').eq(3).fadeIn('fast')
        }
    })
})



$(function(){
    $('.leftDownText2 > div').click(function(){
        var index = $('.leftDownText2 > div').index(this)
        if(index == 0) {
            $('.slide-2 > .bgImg > img').attr('src','img/banner_2-1.jpg')
        }
        else if (index == 1) {
            $('.slide-2 > .bgImg > img').attr('src','img/banner_2.jpg')

        }

        else if (index == 2) {
            $('.slide-2 > .bgImg > img').attr('src','img/banner_2-3.jpg')

        }
        else if (index == 3) {
            $('.slide-2 > .bgImg > img').attr('src','img/banner_2-5.jpg')

        }
    })
})

$(function(){
    $('.leftDownText3 > div').click(function(){
        var index = $('.leftDownText3 > div').index(this)
        if(index == 0) {
            $('.slide-3 > .bgImg > img').attr('src','img/banner_3-1.jpg')
        }
        else if (index == 1) {
            $('.slide-3 > .bgImg > img').attr('src','img/banner_3-2.jpg')

        }

        else if (index == 2) {
            $('.slide-3 > .bgImg > img').attr('src','img/banner_3-3.jpg')

        }
        else if (index == 3) {
            $('.slide-3 > .bgImg > img').attr('src','img/banner_3-4.jpg')

        }
        else if (index == 4) {
            $('.slide-3 > .bgImg > img').attr('src','img/banner_3-5.jpg')

        }
        else if (index == 5) {
            $('.slide-3 > .bgImg > img').attr('src','img/banner_3-6.jpg')

        }

    })
})

$(function(){
    $('.leftDownText4 > div').click(function(){
        var index = $('.leftDownText4 > div').index(this)
        if(index == 0) {
            $('.slide-4 > .bgImg > img').attr('src','img/banner_4-1.jpg')
        }
        else if (index == 1) {
            $('.slide-4 > .bgImg > img').attr('src','img/banner_4-2.jpg')

        }

        else if (index == 2) {
            $('.slide-4 > .bgImg > img').attr('src','img/banner_4-3.jpg')

        }
        else if (index == 3) {
            $('.slide-4 > .bgImg > img').attr('src','img/banner_4-4.jpg')

        }
        else if (index == 4) {
            $('.slide-4 > .bgImg > img').attr('src','img/banner_4-5.png')

        }
        else if (index == 5) {
            $('.slide-4 > .bgImg > img').attr('src','img/banner_4-6.png')

        }

    })
})

$(function(){
    $('.upAngle').click(function(){
        $(".subAncNav").stop().css({top:'0%'})
    })
})
// main end line