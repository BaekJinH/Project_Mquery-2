$(function(){
    $('.container > div').on({mouseover: function(){

    },mouseleave:function(){
        $('')
    }})
})
$(function(){
    $('.open').click(function(){
        $('#sub_Menu').height(280)
        // $('#sub_Menu').animate({height:300})
    })
    $('.close').click(function(){
        // $('#sub_Menu').animate({height:0})
        $('#sub_Menu').height(0)
    })
})

// $(function(){
//     $('.intro_Image').fadeIn(3000);
// })


// 아래 인트로 슬라이드

$(function(){
    var length = $('.intro_wrap li').length;
    var index = $('.intro_wrap').find('button').index();
    $('button').click(function(){
        $(this).parent().parent().parent().animate({marginLeft:'-100vw'});
    })
})


// 아래 메인 멀티플 슬라이드

$(function(){

    var slides = document.querySelector('.mySlide'),
        slide = document.querySelectorAll('.mySlide li'),
        currentIdx = 0,
        slideCount = slide.length,
        slideWidth = 450,
        slideMargin = 50,
        prevBtn = document.querySelector('.prev'),
        nextBtn = document.querySelector('.next');

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
        var currentSlides = document.querySelectorAll('.mySlide li');
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
            },500);
            setTimeout(function(){
                slides.classList.add('animated');
            },600);
        }
    }
})
// 천천히 누르면 적용되는데 빨리 눌리면 적용이 안 됨 여쭤보기



// 뜯어보는중



// $(function(){

//     var slides = document.querySelector('.mySlide'),
//         slide = document.querySelectorAll('.mySlide li'),
//         currentIdx = 0,
//         slideCount = slide.length,
//         slideWidth = 450,
//         slideMargin = 50,
//         prevBtn = document.querySelector('.prev'),
//         nextBtn = document.querySelector('.next');

//     makeClone();

//     function makeClone(){
//         for(var i = 0; i <slideCount; i++){
//             var cloneSlide = slide[i].cloneNode(true);
//             cloneSlide.classList.add('clone');
//             slides.appendChild(cloneSlide);
//         }
//         for(var i = slideCount -1; i >=0; i--){
//             var cloneSlide = slide[i].cloneNode(true);
//             cloneSlide.classList.add('clone');
//             slides.prepend(cloneSlide);
//         }
//             ubdateWidth();
//             setInitialPos();
            
//             setTimeout(function(){
//                 slides.classList.add('animated');
//             },100)
//     }

//     function ubdateWidth(){
//         var currentSlides = document.querySelectorAll('.mySlide li');
//         var newSlideCount = currentSlides.length;
        
//         var newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
//         slides.style.width = newWidth;
//     }
//     function setInitialPos(){
//         var initialTranslateValue = -(slideWidth + slideMargin) * newSlideCount;
//         slides.style.transform = 'translateX('+ initialTranslateValue +'px)';
//     }

//     nextBtn.addEventListener('click',function(){
//         moveSlide(currentIdx -1 )
//     })



//     function moveSlide(num){
//         slides.style.left = -num * (slideWidth + slideMargin) + 'px';
//         currentIdx = num;
//         console.log(currentIdx,slideCount);
        
//         if(currentIdx == slideCount || currentIdx == -slideCount){
//             setTimeout(function(){
//                 slides.classList.remove('animated');
//                 slides.style.left = '0px';
//                 currentIdx = 0;
//             },500);
//             setTimeout(function(){
//                 slides.classList.add('animated');
//             },600);
//         }
//     }
// })










// $(function(){
//     var img = $('.mySlide > li')
//     var img_Array = ['.mySlide li'].length
//     var i = 0;
//     img_Array.eq(0).css({transform:'scale(0.5)'})
// })

// $(function(){
//     var w = $('.mySlide > li').width();
//     var scrLeft = $('.mySlide').scrollLeft();
//     var img_Array = ['.mySlide li'].length;
//     // var cop = img_Array.clone();

//     function prev(){
//         $('.mySlide li:last').prependTo('.mySlide');
//         // $('.mySlide').css({marginLeft:'-28vw'});
//         $('.mySlide').css({marginLeft:-w});
//         $('.mySlide').stop().animate({marginLeft:'0'}, 1000);
//     }
//     function next(){
//             // $('.mySlide').stop().animate({marginLeft:'-28vw'}, 1000,function(){
//             $('.mySlide').stop().animate({marginLeft:-w}, 1000,function(){
//             $('.mySlide li:first').appendTo('.mySlide');
//             $('.mySlide').css({marginLeft:0});
//         });
//     }
//     function slide(){
//             // $('.mySlide').stop().animate({marginLeft:'-28vw'},1000,function(){
//             $('.mySlide').stop().animate({marginLeft:-w},1000,function(){
//             $('.mySlide li:first').appendTo('.mySlide');
//             $('.mySlide').css({marginLeft:0})
//         })
//     }
    
//     setInterval(slide,5000)
//     $('.prev').click(function(){
//         prev()
//     })
    
//     $('.next').click(function(){
//         next()
//     })
// })


// intro가 먹히는 애니메이션 추가하기
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 200){
            // $('#intro').css({position:'absolute'}).css('z-index',-9);
        }
    })
})






$(function(){
    $('.text').css({display:'block'})
})

$(function(){
    $('input').on({'click keydown focus':function(){
        document.getElementsByClassName('popup')[0].style.height='300px';
        // $('.popup').height(300);
        $('.popup').css({boxShadow:'0 0 50px'});
        $('.btn_Box').css({display:'block'}).fadeDown('slow').height(300);
    }})

    $('.input_Cont').mouseleave(function(){
        $('.popup').height(0);
        $('.btn_Box').fadeUp('slow').height(0);
    })
})


// 팝업에서 버튼 누르면 value 값 가져오기


$(function(){
    var input = $('input');
    $('.btn_Box > button').on('click',function(){
        var value = $(this).val()
        $("input[type=text]").val("")
        input.val(value)
        $('.input_Cont').mouseleave(function(){
            input=null
        })
    })
})






// 밑 두개 햄버거

// var burger = $('.menu-trigger');

// burger.each(function(index){
//   var $this = $(this);
  
//   $this.on('click', function(e){
//     e.preventDefault();
//     $(this).toggleClass('active-' + (index+1));
//   })
// });

// var e = document.getElementById('btn');
// e.addEventListener('click', function() {
//   if (this.className == 'on') this.classList.remove('on');
//   else this.classList.add('on');
// });




// 수정해서 사용

// $(function(){
//     var wid = $('#gnb ul li').width();
//     $('#gnb').append('<span></span>');
//     $('#gnb ul li').on({'mouseenter focusin':function(){
//         var index = $(this).index();
//         $(this).find('a').addClass('on');
//         $(this).siblings().find('a').removeClass('on');
//         $('#gnb span').stop().animate({left:index * wid},'fast')
//     }});
//     $('#gnb ul li:eq(0)').trigger('mouseenter')
// });



$(function(){
    var hei = $('.semi_Menu li').height();
    $('.semi_Menu').append('<span></span>');
    $('.semi_Menu li').on({'mouseenter focusin':function(){
        var index = $(this).index();
        $('.semi_Menu span').stop().animate({top:index * hei},'fast')
    }});
    $('.semi_Menu li:eq(0)').trigger('mouseenter')
});




$(function(){
    // main 박스들 슬라이드 열리면 사이즈 커지게 만들기
})
// $(function(){
//     $('.flex_Box').children().on({mouseover:function(){
//         $(this).find('ul').slideDown().css({display:'flex'})
//     }})
// })




// 보류
// $(function(){
//     $('.text > button').on({click:function(){
//         $('.intro_Image').addClass('intro_black')
//         $('.text').addClass('text-out')
//         $('.intro_Subtx').addClass('Txt2_fade');
//         $('.intro_Sub').width('50%')
//     }})
// })