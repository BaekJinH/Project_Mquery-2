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
            $('iframe').attr('src','https://www.youtube.com/embed/yQxwbZsL14Y?autoplay=1&mute=1')
        }
        else if(index == 1){
            $('iframe').attr('src','https://www.youtube.com/embed/cheYIVEtVQ4?autoplay=1&mute=1')
        }
        else if(index == 2){
            $('iframe').attr('src','https://www.youtube.com/embed/Lq594XmpPBg?autoplay=1&mute=1')
        }
        else{
            $('iframe').attr('src','https://www.youtube.com/embed/lrL3Qjv2jZI?autoplay=1&mute=1')
        }
        $('.popup , .mask , .close').stop().fadeIn()
    })
    $('.story  .imgUp > div').click(function(){
        var index = $('.story .imgUp > div').index(this)
        if(index == 0){
            $('iframe').attr('src','https://www.youtube.com/embed/eaW0tYpxyp0?autoplay=1&mute=1')
        }
        else if(index == 1){
            $('iframe').attr('src','https://www.youtube.com/embed/ohClxMmNLQQ?autoplay=1&mute=1')
        }
        else if(index == 2){
            $('iframe').attr('src','https://www.youtube.com/embed/dIQGI36BxDE?autoplay=1&mute=1')
        }
        else{
            $('iframe').attr('src','https://www.youtube.com/embed/rXMX4YJ7Lks?autoplay=1&mute=1')
        }
        $('.popup , .mask , .close').stop().fadeIn()
    })
    $('.casual  .imgUp > div').click(function(){
        var index = $('.casual .imgUp > div').index(this)
        if(index == 0){
            $('iframe').attr('src','https://www.youtube.com/embed/ot7uXNQskhs?autoplay=1&mute=1')
        }
        else if(index == 1){
            $('iframe').attr('src','https://www.youtube.com/embed/jp_XgQjgGNY?autoplay=1&mute=1')
        }
        else if(index == 2){
            $('iframe').attr('src','https://www.youtube.com/embed/0JG5Y7ZWvWU?autoplay=1&mute=1')
        }
        else{
            $('iframe').attr('src','https://www.youtube.com/embed/z00mK3Pxc8w?autoplay=1&mute=1')
        }
        $('.popup , .mask , .close').stop().fadeIn()
    })
    $('.fantasy  .imgUp > div').click(function(){
        var index = $('.fantasy .imgUp > div').index(this)
        if(index == 0){
            $('iframe').attr('src','https://www.youtube.com/embed/c0i88t0Kacs?autoplay=1&mute=1')
        }
        else if(index == 1){
            $('iframe').attr('src','https://www.youtube.com/embed/H70EGmRMMnk?autoplay=1&mute=1')
        }
        else if(index == 2){
            $('iframe').attr('src','https://www.youtube.com/embed/ETWtvVGFNqU?autoplay=1&mute=1')
        }
        else{
            $('iframe').attr('src','https://www.youtube.com/embed/y8f8QZTOrfk?autoplay=1&mute=1')
        }
        $('.popup , .mask , .close').stop().fadeIn()
    })
    $('.close , .mask').click(function(){
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
        // dlcindex 값으로 슬라이드 이름 바꾸기
        // var dlcIndex = 
        var index = $('.category > ul > li').index(this);
        if(index == 0){
            $('.dlcAction').fadeIn()
            $('.액션').fadeIn()
            $('.imgWrap1').siblings().not('.액션').not('.imgWrap2').not('.imgWrap3').hide()
            $('.dlcScreen').siblings().not('.dlcAction').hide();
            $('.slideAction').show()
            $('.slideRight').siblings().not('.slideAction').hide()            

            $(this).addClass('categoryHold')
            $(this).siblings().not(this).removeClass('categoryHold')
    
        }
        else if(index == 1){
            $('.dlcStory').fadeIn()
            $('.스토리').fadeIn()
            $('.imgWrap1').siblings().not('.스토리').not('.imgWrap2').not('.imgWrap3').hide()
            $('.dlcScreen').siblings().not('.dlcStory').hide()
            $('.slideStory').show()
            $('.slideRight').siblings().not('.slideStory').hide()            

            
            $(this).addClass('categoryHold')
            $(this).siblings().not(this).removeClass('categoryHold')
        }
        else if(index == 2){
            $('.dlcCasual').fadeIn()
            $('.캐쥬얼').fadeIn()
            $('.imgWrap1').siblings().not('.캐쥬얼').not('.imgWrap2').not('.imgWrap3').hide()
            $('.dlcScreen').siblings().not('.dlcCasual').hide()
            $('.slideCasual').show()
            $('.slideRight').siblings().not('.slideCasual').hide()            
            
            
            $(this).addClass('categoryHold')
            $(this).siblings().not(this).removeClass('categoryHold')
        }
        else if(index == 3){
            $('.dlcFantasy').fadeIn()
            $('.판타지').fadeIn()
            $('.imgWrap1').siblings().not('.판타지').not('.imgWrap2').not('.imgWrap3').hide()
            $('.dlcScreen').siblings().not('.dlcFantasy').hide()
            $('.slideFantasy').show()
            $('.slideRight').siblings().not('.slideFantasy').hide()          
            
            
            $(this).addClass('categoryHold')
            $(this).siblings().not(this).removeClass('categoryHold')
        }   
    })
})

// 위는 태그 선택시 태그에 맞는 이미지로 모두 바꾸기


// 밑의 슬라이드를 반복문으로 사용해서 태그별로 슬라이드를 적용해야함

$(function(){

    var slides = document.querySelector('.dlcAction'),
        slide = document.querySelectorAll('.dlcAction > li'),
        currentIdx = 0,
        slideCount = slide.length,
        slideWidth = $('.dlcSlide').width(),
        slideMargin = 50,
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
        var currentSlides = document.querySelectorAll('.dlcAction li');
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
    }
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
            },400);
            setTimeout(function(){
                slides.classList.add('animated');
            },4100);
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




// swiper 슬라이드


$(function(){
    window.addEventListener('touchstart',callback);
    window.addEventListener('touchmove',callback);
    window.addEventListener('touchend',callback);


    const outer = document.querySelector('.dlc');
    const inner = document.querySelector('.dlcScreen');

    let startPos = 0;
    let offset = 0;
    let curPos = 0;
    const screenWidth = outer.clientWidth;

    window.onload=function(){
        outer.addEventListener('touchstart',(e) => {
            startPos = e.touchs[0].pageX
        })

        outer.addEventListener('touchmove',(e) =>{
            offset = curPos + (e.targetTouches[0].pageX - startPos)
            inner.style.transform = 'translate3d(${offset}px,0x,0px)'
            inner.style.transitionDuration = '0ms';
        })

        outer.addEventListener('touchend',(e) => {
            const sum = curPos + (e.changedTouches[0].pageX - startPos);
            let destination = Math.round(sum / screenWidth) * screenWidth;
            if(destination > 0){
                destination = 0;
            }
            else if (destination < -(screenWidth * (4 - 1))) {
                destination = -(screenWidth * (4 - 1));
            }
            
            inner.style.transform = `translate3d(${destination}px, 0px, 0px)`;
            inner.style.transitionDuration = '300ms';
            curPos = destination;
            
            setTimeout(() => {
                inner.style.transitionDuration = '0ms';
            }, 300);
            //   }, 300);
        })
    }  
})


$(function(){
    $(window).scroll(function(){
        var scrollValue = $(this).scrollTop()
        if(scrollValue > 2000){
            $('.slideIn1').stop().css({right:'100%'})
            $('.slideRight h4').eq(0).fadeIn(3000)
            $('.slideRight p').eq(0).fadeIn(3000)
        }
        else{
            $('.slideIn1').css({right:'-100%'})
            $('.slideRight h4').eq(0).fadeOut()
            $('.slideRight p').eq(0).fadeOut()
        }


        if(scrollValue > 2600){
            $('.slideIn2').css({right:'0%'})
            $('.slideRight h4').eq(1).fadeIn(3000)
            $('.slideRight p').eq(1).fadeIn(3000)
        }
        else{
            $('.slideIn2').css({right:'-100%'})
            $('.slideRight h4').eq(1).fadeIn(3000)
            $('.slideRight p').eq(1).fadeIn(3000)
        }

        
        if(scrollValue > 3400){
            $('.slideIn3').css({right:'100%'})
            $('.slideRight h4').eq(2).fadeIn(3000)
            $('.slideRight p').eq(2).fadeIn(3000)
        }
        else{
            $('.slideIn3').css({right:'-100%'})
            $('.slideRight h4').eq(2).fadeIn(3000)
            $('.slideRight p').eq(2).fadeIn(3000)
        }
        


        if(scrollValue > 4100){
            $('.slideIn4').css({right:'0%'})
            $('.slideRight h4').eq(3).fadeIn(3000)
            $('.slideRight p').eq(3).fadeIn(3000)
        }
        else{
            $('.slideIn4').css({right:'-100%'})
            $('.slideRight h4').eq(3).fadeIn(3000)
            $('.slideRight p').eq(3).fadeIn(3000)
        }
    })
})





// main end line