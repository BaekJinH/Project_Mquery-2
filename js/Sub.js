// position:sticky 사용해서 폴더식으로 만들기 


$(function(){
})



// Wrap end line

// 스크롤 다운시 보이고 올리면 안 보이는 메뉴바 보류

var lastScrollTop = 0;

$(window).scroll(function(){
    var scrollTop = $(this).scrollTop(); 
    if(scrollTop >= 100) { 
        if ((scrollTop > lastScrollTop) && (lastScrollTop>0)) { 
            $("header").css("top","-100px");
        } else {
            $("header").css("top","0px");
        }

        lastScrollTop = scrollTop;
    } 

    $(".content").each(function () {
        var contentIndex = $(this).attr("id");
        if(scrollTop >= $(this).offset().top) {
            $(".scroll_03 a").removeClass("on");
            $(".scroll_03 a[href=#"+contentIndex+"]").addClass("on");
        }
    })
});

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
            },1500);
            setTimeout(function(){
                slides.classList.add('animated');
            },1600);
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



// #slider end line

$(function(){
    $('.category li').mouseover(function(){
        $(this).find('.categorySub').stop().fadeIn('slow');
        $(this).siblings().find('.categorySub').stop().fadeOut('fast')
    })
    $('.category li').mouseout(function(){
        $('.categorySub').stop().fadeOut('fast')
    })
})



$(function(){
    $('.imgWrap1 > div').on({mouseover:function(){
        $(this).find('.videoAndimg').stop().css({height:'100%',top:0});
        $(this).siblings().find('.videoAndimg').stop().css({height:'0%',top:'101%'})
    },mouseout:function(){
        $('.videoAndimg').stop().css({height:'0%',top:'101%'})
    }})
})




// main end line