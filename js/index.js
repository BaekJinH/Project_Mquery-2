$(function(){
    $('.container > div').on({mouseover: function(){

    },mouseleave:function(){
        $('')
    }})
})
$(function(){
    $('.open').click(function(){
        // $('#sub_Menu').height(280)
        $('#sub_Menu').height(350)
    })
    $('.close').click(function(){
        // $('#sub_Menu').animate({height:0})
        $('#sub_Menu').height(0)
    })
})


// 서브 메뉴바 작업

$(function(){
    $('.semi_Menu').hide();
    $('.flex_Box > li').mouseover(function(){
        $(this).find('.semi_Menu').stop().slideDown();
    })
    $('.flex_Box > li').mouseout(function(){
        $(this).find('.semi_Menu').stop().slideUp()
    })
})



// 아래 인트로 슬라이드


$(function(){
    $('.intro_wrap button').not('.behind').not('.front').click(function(){
        $('.intro_wrap').stop().animate({marginLeft:'-100vw'},800,function(){
            $('.intro_wrap li:first').appendTo('.intro_wrap');
            $('.intro_wrap').css({marginLeft:0})
        })
    })
})



//  버튼 클릭시 div 마우스 이벤트가  true가 되면서 이벤트 실행할 수 있게 만들기

$(function(){
    $('.intro_Image4').children().not('.text4').not('.front').css('pointer-events', 'none')
    $('.front').css({pointerEvents:'true',top:'0%',left:'50%',transform:'translate(-50%,-250%)'});
    $('.behind').click(function(){
        $('.intro_Image4').children().not('.text4').not('.front').css({pointerEvents:'true'})
        $('.text4').css({transform:'translate(-50%,-250%)'});
        $('.front').css({pointerEvents:'true',top:'50%',left:'50%',transform:'translate(-50%,-50%)'});
    })
    $('.front').click(function(){
        $('.intro_Image4').children().not('.text4').not('.front').css({pointerEvents:'none'})
        $('.text4').css({transform:'translate(-50%,-50%)'});
        $('.front').css({pointerEvents:'true',top:'0%',left:'50%',transform:'translate(-50%,-250%)'});
    })
})





// 인트로 4번 div 호버시 커밍 순 글자 제거

// 아래는 글자 작업하려고 앞으로 당겨놓음

$(function(){
    $('.intro_wrap').animate({marginLeft:'-300vw'})
})

// 보류
// $(function(){
//     $('.intro_Image4').not('.text4').on({click:function(){
//         // $(this).addClass('up')
//         // 제이쿼리로 클릭시 상자 내리기
//         $('.text4').stop().animate({top:'-50%'},500);
//     },mouseout:function(){
//         $('.text4').stop().animate({top:'50%'},500)
//     }})
// })


// 시간지연 후 ㅅ원하는 애니메이션 끝나고 이미지 커지게
// $(this).find('.end').delay(1000).animate({transform: 'scale(1.1)'})





// $(function(){

//     var slides = document.querySelector('.intro_wrap'),
//         slide = document.querySelectorAll('.intro_wrap li'),
//         currentIdx = 0,
//         slideCount = slide.length,
//         slideWidth = $('.intro_Slide'),
//         slideMargin = 0,
//         nextBtn = document.querySelectorAll('.oth');

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
//         var currentSlides = document.querySelectorAll('.intro_wrap li');
//         var newSlideCount = currentSlides.length;
        
//         var newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
//         slides.style.width = newWidth;
//     }
//     function setInitialPos(){
//         var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
//         slides.style.transform = 'translateX('+ initialTranslateValue +'px)';
//     }

//     nextBtn.addEventListener('click',function(){
//         moveSlide(currentIdx +1 )
//     })
//     prevBtn.addEventListener('click',function(){
//         moveSlide(currentIdx -1 )
//     })

//     var timer = undefined;

//     function autoSlide(){
//         if(timer == undefined){
//             timer = setInterval(function(){
//                 moveSlide(currentIdx + 1 )
//             },3000)
//         }
//     }
//     autoSlide();
//     function stopSlide(){
//         clearInterval(timer);
//         timer = undefined;
//         // timer의 값을 undefined으로 지정을 해줘야 마우스로 왔다갔다 했을 때 오류가 안 생김
//     }
//     slides.addEventListener('mouseenter',function(){
//         stopSlide();
//     })

//     slides.addEventListener('mouseleave',function(){
//         autoSlide();
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
//     var length = $('.intro_wrap li').length;
//     var index = $('.intro_wrap').find('button').index();
//     $('.intro_wrap button').click(function(){
//         // var index = $('.intro_wrap li').length;
//         var me = $(this).index();
//         if(me == 3){
//             $('.intro_wrap').append('.intro_wrap li:first')
//         }
//         $(this).parent().parent().parent().animate({marginLeft:'-100vw'});
//     })
// })

// 인트로 버튼 누르면 글자 fade효과
// $(function(){
//     var i = 0;
//     var btn = $('.text > button').length
//     $('.text > button').click(function(){
//         i++
//         $(this).index(i);
//         $('.text').animate({marginRight:'50px'})
//     })
// })



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










// intro가 먹히는 애니메이션 추가하기
$(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 3200){
        }
    })
})


// 섹션 버튼 클릭시 이미지 회전 / 보류

// $(function(){
//     $('.main_txt').find('button').click(function(){
//         $(this).parent().css({transform:'rotateY(180deg)'})
//     })
// })

$(function(){
    $('.btn_Box > button').eq(0).click(function(){
        $('.container').children().show();
    })
})


$(function(){
    $('.text').css({display:'block'})
})

$(function(){
    $('input').on({'click keydown focus':function(){
        $('.popup').stop().animate({height:350},100);
        $('.popup').css({boxShadow:'0 0 8px white'});
        $('.btn_Box').css({display:'block'}).fadeDown('slow').height(350);
    }})
    $('.input_Cont').mouseleave(function(){
        $('.popup').height(0);
        $('input[type=text').val('')
        $('.btn_Box').fadeUp('slow').height(0);
    })
})


// 필터
$(function(){
    $('input:text').on({'keyup focus click':function(){
        var value = $(this).val().toUpperCase();
        $('.container').children().filter(function(){
            $(this).toggle($(this).text().toUpperCase().indexOf(value) > -1)
        })
    }})
    $('.btn_Box button').click(function(){
        var value2 = $(this).val().toUpperCase();
        $('.container').children().filter(function(){
            $(this).toggle($(this).text().toUpperCase().indexOf(value2) > -1)
        })
    })
})



// 검색어 값 가져오기

$(function(){
    var input = $('input:text');
    $('.btn_Box > button').on('click',function(){
        var value = $(this).val()
        $("input[type=text]").val("")
        input.val(value)
    })
})

// 그림 호버시 글자 생성 / 내려왔다 올라가는 버젼

$(function(){
    $('section > div').on({mouseover:function(){
        $(this).find('.main_txt').css({transform:'translateY(0%)',transition:'1s'});
        // $('.main_txt').stop().animate({},800);
    },mouseout:function(){
        $(this).find('.main_txt').css({transform:'translateY(-100%)',transition:'1s'});
        
    }})
})

// 내려왔다가 밑으로 가고 위에서 다시 내려오게 만들기

// $(function(){
//     $('section > div').on({mouseover:function(){
//         $(this).find('.main_txt').css({transform:'translateY(0%)',transition:'1s'});
//     },mouseout:function(){
//         $(this).find('.main_txt').css({transform:'translateY(100%)',transition:'1s'});
//     }})
// })

// $(function(){
//     function down(){
//         $('section > div').mouseover(function(){
//             $(this).find('.main_txt').css({transform:'translateY(0%)',transition:'1s'});
//         })
//     }
//     function up(){
//         $('section > div').mouseout(function(){
//             $(this).find('.main_txt').css({transform:'translateY(100%)',transition:'1s'})        
//         })
//     }
//     $('section div').mouseover(function(){
//         down()
//     })
//     $('section div').mouseover(function(){
//         up()
//     })
// })

// 밑 두개 햄버거 / 뜯어보기

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





// $(function(){
//     var hei = $('.semi_Menu li').height();
//     $('.semi_Menu li').on({'mouseenter focusin':function(){
//         var index = $(this).index();
//         $('.semi_Menu span').stop().animate({top:index * hei},'fast')
//     }});
//     $('.semi_Menu li:eq(0)').trigger('mouseenter')
// });




//  footer 스크롤 탑으로
$(function(){
    $('.scrollTop').click(function(){
        var offset = $('header').offset();
        $('html').animate({scrollTop:offset.top},1200)
    })
})

// 서브 메뉴 홈페이지 앵커
// $(function(){
//     $('.flex_Box > li').click(function(){
//         var i  = $('.flex_Box > li').index();
//         if(i == 0){
//             var offset = $('.slide_Head').offset();
//             $('html').animate({scrollTop:offset.top},800);
//         }
//         else if(i == 1){
//             var offset = $('.input_Cont').offset();
//             $('html').animate({scrollTop:offset.top},800);
//         }
//     })
// })
$(function(){
    $('.flex_Box > li').eq(0).click(function(){
        var offset = $('.slide_Head').offset();
        $('html').animate({scrollTop:offset.top},800);
    })
    $('.flex_Box > li').eq(1).click(function(){
        var offset = $('.input_Cont').offset();
        $('html').animate({scrollTop:offset.top},800);
    })
    $('.flex_Box > li').eq(2).click(function(){
        var offset = $('.main2').offset();
        $('html').animate({scrollTop:offset.top},800);
    })
    // $('.flex_Box > li').eq(3).click(function(){
    //     var offset = $('.slide_Head').offset();
    //     $('html').animate({scrollTop:offset.top},800);
    // })
    // $('.flex_Box > li').eq(4).click(function(){
    //     var offset = $('.slide_Head').offset();
    //     $('html').animate({scrollTop:offset.top},800);
    // })
})


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