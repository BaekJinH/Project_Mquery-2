// position:sticky 사용해서 폴더식으로 만들기 


$(function(){
})



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
    $('.videoPlay').on({click:function(){
        $(this).parent().css({boxShadow:'inset 100vw 100vh 3px rgba(0,0,0,'+0.5+')'})
    },mouseleave:function(){
        $(this).parent().css({boxShadow:'none'})
    }})
})


$(function(){
    $('.imgUp > div').click(function(){
        var index = $('.imgUp > div').index(this)
        if(index == 0){
            $('iframe').attr('src','?autoplay=1&mute=1')
        }
        else if(index == 1){
            $('iframe').attr('src','?autoplay=1&mute=1')
        }
        else if(index == 2){
            $('iframe').attr('src','?autoplay=1&mute=1')
        }
        else{
            $('iframe').attr('src','?autoplay=1&mute=1')
        }
        $('.popup , .mask , .close').stop().fadeIn()
    })
    $('.close').click(function(){
        $('.mask , .popup').stop().fadeOut()
    })
})

// $(function(){
//     $('.category li').mouseover(function(){
//         $(this).find('.categorySub').stop().fadeIn('slow');
//         $(this).siblings().find('.categorySub').stop().fadeOut(50)
//     })
//     $('.category li').mouseout(function(){
//         $('.categorySub').stop().fadeOut(50)
//     })
// })



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
        $(this).css({boxShadow:'inset 100vw 100vh 8px rgba(0,0,0,'+0.5+')'})
    },mouseout:function(){
        $('.videoAndimg').stop().css({height:'100%',top:'101%'})
        $('.imgWrap1 > div').css({boxShadow:'none'})
    }})
})



// dlc line

// swiper 슬라이드



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
    })
}  



// dlc end line

// main end line