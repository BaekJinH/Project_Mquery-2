// header

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
    $('.container > div').on({mouseover: function(){

    },mouseleave:function(){
        $('')
    }})
})
$(function(){
    function windowMask(){
        var maskHeight = $(document).height();
        var maskWidth = $(window).width();

        $('.mask').css({width:maskWidth,height:maskHeight});

        $('.mask').fadeIn(1000);
        // $('.mask').fadeOut('slow')
    }

    // 화면 흐리게 + 서브 메뉴 제외하고 나머지 마우스 이벤트 무효화

    $('.open').click(function(){
        windowMask()
        $('#sub_Menu').css({position:'fixed'})
    })
    $('.close').click(function(){
        $('.mask').fadeOut('slow')
    })
    
    // 서브메뉴 오픈
    $('.open').click(function(){
        $('#sub_Menu').height(310);
    })
    $('.close').click(function(){
        $('#sub_Menu').height(0)
    })
})

$(function(){
    $('.mask').click(function(){
        $('#sub_Menu').height(0)
        $(this).fadeOut('slow')
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








// header





// intro가 먹히는 애니메이션 추가하기
// 블럭을 따로 따로 지정하면 가능할 것 같음 (header intro) (그 외 나머지들) 이라면 가능할듯

$(function(){

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

// 아래는 글자 작업하려고 앞으로 당겨놓음

// $(function(){
//     $('.intro_wrap').animate({marginLeft:'-300vw'})
// })




//  버튼 클릭시 div 마우스 이벤트가  true가 되면서 이벤트 실행할 수 있게 만들기

$(function(){
    $('.text3 > button').click(function(){
        $('.intro_Image4').children().not('.text4').not('.front').css({pointerEvents:'none'})
    })
    $('.front').css({pointerEvents:'true',top:'0%',left:'50%',transform:'translate(-50%,-250%)'});
    $('.behind').click(function(){
        $('.intro_Image4').children().not('.text4').not('.front').css({pointerEvents:'all'})
        $('.text4').css({transform:'translate(-50%,-250%)'});
        $('.front').css({pointerEvents:'true',top:'50%',left:'50%',transform:'translate(-50%,-50%)'});
    })
    $('.front').click(function(){
        $('.text4').css({transform:'translate(-50%,-50%)'});
        $('.intro_Image4').children().not('.text4').not('.front').css({pointerEvents:'none'})
        $('.front').css({pointerEvents:'true',top:'0%',left:'50%',transform:'translate(-50%,-250%)'});
    })
})

// 인트로 박스 열리기

$(function(){
    $(".end").on({mouseover:function(){
        $(this).find('.down').css({transform:'translateY(-100%)',transition:'0.6s'})
        $(this).css({transform:'scale(1.06)'})
    },mouseout:function(){
        $(this).find('.down').css({transform:'translateY(00%)',transition:'0.6s'})
        $(this).css({transform:'scale(1)'})
    }})
    
})


// 애니메이션 끝나고 이미지 커지게

// $(function(){
//     $('.end').mouseover(function(){
//         // $(this).addClass('scale').delay(5000);
//         $(this).delay('slow').css({transform:'scale(1.05)'});
//     })
//     $('.end').mouseleave(function(){
//         $(this).css({transform:'scale(1)'})
//     })
// })

// $(function(){
//     $('.end').mouseover(function(){
//         $(this).addClass('scale').delay(5000);
//     })
//     $('.end').mouseleave(function(){
//     })
// })


// 인트로 버튼 클릭시 다음 페이지 글자 애니메이션 효과 넣기

// 반복문 아닌 것

// $(function(){
//     $('.intro_Image button').not('.front').not('.behind').click(function(){
//         $('.text').addClass('add')
//     })
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



// offset 이용해서 입체 슬라이드 만들어보기


if(matchMedia('screen and (min-width:1500px)').matches){
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
}
else if(matchMedia('screen and (min-width:1100px)').matches){
    $(function(){
        var slides = document.querySelector('.mySlide'),
            slide = document.querySelectorAll('.mySlide li'),
            currentIdx = 0,
            slideCount = slide.length,
            slideWidth = $('.slideBox').width()
            slideMargin = 20,
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
            autoSlide()
        })
    })
}
// else if(matchMedia('min-width:799px')){
//     $(function(){
//         var slides = document.querySelector('.mySlide'),
//             slide = document.querySelectorAll('.mySlide li'),
//             currentIdx = 0,
//             slideCount = slide.length,
//             slideWidth = $('.slideBox').width()
//             slideMargin = 20,
//             prevBtn = document.querySelector('.prev'),
//             nextBtn = document.querySelector('.next');
    
//         makeClone();
    
//         function makeClone(){
//             for(var i = 0; i <slideCount; i++){
//                 var cloneSlide = slide[i].cloneNode(true);
//                 cloneSlide.classList.add('clone');
//                 slides.appendChild(cloneSlide);
//             }
//             for(var i = slideCount -1; i >=0; i--){
//                 var cloneSlide = slide[i].cloneNode(true);
//                 cloneSlide.classList.add('clone');
//                 slides.prepend(cloneSlide);
//             }
//                 ubdateWidth();
//                 setInitialPos();
                
//                 setTimeout(function(){
//                     slides.classList.add('animated');
//                 },100)
//         }
    
//         function ubdateWidth(){
//             var currentSlides = document.querySelectorAll('.mySlide li');
//             var newSlideCount = currentSlides.length;
            
//             var newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
//             slides.style.width = newWidth;
//         }
//         function setInitialPos(){
//             var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
//             slides.style.transform = 'translateX('+ initialTranslateValue +'px)';
//         }
    
//         nextBtn.addEventListener('click',function(){
//             moveSlide(currentIdx +1 )
//         })
//         prevBtn.addEventListener('click',function(){
//             moveSlide(currentIdx -1 )
//         })
    
//         var timer = undefined;
    
//         function autoSlide(){
//             if(timer == undefined){
//                 timer = setInterval(function(){
//                     moveSlide(currentIdx + 1 )
//                 },3000)
//             }
//         }
//         autoSlide();
    
//         function stopSlide(){
//             clearInterval(timer);
//             timer = undefined;
//             // timer의 값을 undefined으로 지정을 해줘야 마우스로 왔다갔다 했을 때 오류가 안 생김
//         }
        
//         slides.addEventListener('mouseenter',function(){
//             stopSlide();
//         })
    
//         slides.addEventListener('mouseleave',function(){
//             autoSlide();
//         })
    
//         function moveSlide(num){
//             slides.style.left = -num * (slideWidth + slideMargin) + 'px';
//             currentIdx = num;
//             console.log(currentIdx,slideCount);
            
//             if(currentIdx == slideCount || currentIdx == -slideCount){
//                 setTimeout(function(){
//                     slides.classList.remove('animated');
//                     slides.style.left = '0px';
//                     currentIdx = 0;
//                 },500);
//                 setTimeout(function(){
//                     slides.classList.add('animated');
//                 },600);
//             }
//         }
//         prevBtn.addEventListener('click',function(){
//             stopSlide()
//         })
//         prevBtn.addEventListener('mouseleave',function(){
//             autoSlide()
//         })
//         nextBtn.addEventListener('click',function(){
//             stopSlide()
//         })
//         nextBtn.addEventListener('mouseleave',function(){
//             autoSlide()
//         })
//     })
// }




// function dectectMediaSize(){
//     if(window.matchMedia('(min-width:0px) and (max-width:599px)').matches){

//     }
//     else if(window.matchMedia('(min-width:600px) and (max-width:1100px)').matches){

//     }
//     else if(window.matchMedia('(min-width:1101px) and (max-width:1300px)').matches){
//         $(function(){
//             var slides = document.querySelector('.mySlide'),
//                 slide = document.querySelectorAll('.mySlide li'),
//                 currentIdx = 0,
//                 slideCount = slide.length,
//                 slideWidth = $('.slideBox').width()
//                 slideMargin = 20,
//                 prevBtn = document.querySelector('.prev'),
//                 nextBtn = document.querySelector('.next');
        
//             makeClone();
        
//             function makeClone(){
//                 for(var i = 0; i <slideCount; i++){
//                     var cloneSlide = slide[i].cloneNode(true);
//                     cloneSlide.classList.add('clone');
//                     slides.appendChild(cloneSlide);
//                 }
//                 for(var i = slideCount -1; i >=0; i--){
//                     var cloneSlide = slide[i].cloneNode(true);
//                     cloneSlide.classList.add('clone');
//                     slides.prepend(cloneSlide);
//                 }
//                     ubdateWidth();
//                     setInitialPos();
                    
//                     setTimeout(function(){
//                         slides.classList.add('animated');
//                     },100)
//             }
        
//             function ubdateWidth(){
//                 var currentSlides = document.querySelectorAll('.mySlide li');
//                 var newSlideCount = currentSlides.length;
                
//                 var newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
//                 slides.style.width = newWidth;
//             }
//             function setInitialPos(){
//                 var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
//                 slides.style.transform = 'translateX('+ initialTranslateValue +'px)';
//             }
        
//             nextBtn.addEventListener('click',function(){
//                 moveSlide(currentIdx +1 )
//             })
//             prevBtn.addEventListener('click',function(){
//                 moveSlide(currentIdx -1 )
//             })
        
//             var timer = undefined;
        
//             function autoSlide(){
//                 if(timer == undefined){
//                     timer = setInterval(function(){
//                         moveSlide(currentIdx + 1 )
//                     },3000)
//                 }
//             }
//             autoSlide();
        
//             function stopSlide(){
//                 clearInterval(timer);
//                 timer = undefined;
//                 // timer의 값을 undefined으로 지정을 해줘야 마우스로 왔다갔다 했을 때 오류가 안 생김
//             }
            
//             slides.addEventListener('mouseenter',function(){
//                 stopSlide();
//             })
        
//             slides.addEventListener('mouseleave',function(){
//                 autoSlide();
//             })
        
//             function moveSlide(num){
//                 slides.style.left = -num * (slideWidth + slideMargin) + 'px';
//                 currentIdx = num;
//                 console.log(currentIdx,slideCount);
                
//                 if(currentIdx == slideCount || currentIdx == -slideCount){
//                     setTimeout(function(){
//                         slides.classList.remove('animated');
//                         slides.style.left = '0px';
//                         currentIdx = 0;
//                     },500);
//                     setTimeout(function(){
//                         slides.classList.add('animated');
//                     },600);
//                 }
//             }
//             prevBtn.addEventListener('click',function(){
//                 stopSlide()
//             })
//             prevBtn.addEventListener('mouseleave',function(){
//                 autoSlide()
//             })
//             nextBtn.addEventListener('click',function(){
//                 stopSlide()
//             })
//             nextBtn.addEventListener('mouseleave',function(){
//                 autoSlide()
//             })
//         })
//     }
//     else{
//         $(function(){
//             var slides = document.querySelector('.mySlide'),
//                 slide = document.querySelectorAll('.mySlide li'),
//                 currentIdx = 0,
//                 slideCount = slide.length,
//                 slideWidth = $('.slideBox').width(),
//                 slideMargin = 50,
//                 prevBtn = document.querySelector('.prev'),
//                 nextBtn = document.querySelector('.next');
        
//             makeClone();
        
//             function makeClone(){
//                 for(var i = 0; i <slideCount; i++){
//                     var cloneSlide = slide[i].cloneNode(true);
//                     cloneSlide.classList.add('clone');
//                     slides.appendChild(cloneSlide);
//                 }
//                 for(var i = slideCount -1; i >=0; i--){
//                     var cloneSlide = slide[i].cloneNode(true);
//                     cloneSlide.classList.add('clone');
//                     slides.prepend(cloneSlide);
//                 }
//                     ubdateWidth();
//                     setInitialPos();
                    
//                     setTimeout(function(){
//                         slides.classList.add('animated');
//                     },100)
//             }
        
//             function ubdateWidth(){
//                 var currentSlides = document.querySelectorAll('.mySlide li');
//                 var newSlideCount = currentSlides.length;
                
//                 var newWidth = (slideWidth + slideMargin) * newSlideCount - slideMargin + 'px';
//                 slides.style.width = newWidth;
//             }
//             function setInitialPos(){
//                 var initialTranslateValue = -(slideWidth + slideMargin) * slideCount;
//                 slides.style.transform = 'translateX('+ initialTranslateValue +'px)';
//             }
        
//             nextBtn.addEventListener('click',function(){
//                 moveSlide(currentIdx +1 )
//             })
//             prevBtn.addEventListener('click',function(){
//                 moveSlide(currentIdx -1 )
//             })
        
//             var timer = undefined;
        
//             function autoSlide(){
//                 if(timer == undefined){
//                     timer = setInterval(function(){
//                         moveSlide(currentIdx + 1 )
//                     },3000)
//                 }
//             }
//             autoSlide();
        
//             function stopSlide(){
//                 clearInterval(timer);
//                 timer = undefined;
//                 // timer의 값을 undefined으로 지정을 해줘야 마우스로 왔다갔다 했을 때 오류가 안 생김
//             }
            
//             slides.addEventListener('mouseenter',function(){
//                 stopSlide();
//             })
        
//             slides.addEventListener('mouseleave',function(){
//                 autoSlide();
//             })
        
//             function moveSlide(num){
//                 slides.style.left = -num * (slideWidth + slideMargin) + 'px';
//                 currentIdx = num;
//                 console.log(currentIdx,slideCount);
                
//                 if(currentIdx == slideCount || currentIdx == -slideCount){
//                     setTimeout(function(){
//                         slides.classList.remove('animated');
//                         slides.style.left = '0px';
//                         currentIdx = 0;
//                     },500);
//                     setTimeout(function(){
//                         slides.classList.add('animated');
//                     },600);
//                 }
//             }
//             prevBtn.addEventListener('click',function(){
//                 stopSlide()
//             })
//             prevBtn.addEventListener('mouseleave',function(){
//                 autoSlide()
//             })
//             nextBtn.addEventListener('click',function(){
//                 stopSlide()
//             })
//             nextBtn.addEventListener('mouseleave',function(){
//                 autoSlide()
//             })
//         })
//     }
// }

// window.addEventListener('resize',dectectMediaSize,true);
// dectectMediaSize()



$(function(){
    $('.slideBox').on({mouseover:function(){
        $(this).css({transform:'translateY(-5%)',transition:'all 0.45s ease-in-out'});

    },mouseout:function(){
        $(this).css({transform:'translateY(0%)',transition:'all 0.45s ease-in-out'})

    }})
    
})





// 천천히 누르면 적용되는데 빨리 누르면 적용이 안 됨 여쭤보기 / prev next 클릭시 인터벌 요소를 제거해야할 것 같음




// slider end line








// section



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
        $('.main_Head').css({color:'red'})
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




$(function(){
    // main 박스들 슬라이드 열리면 사이즈 커지게 만들기
})
// $(function(){
//     $('.flex_Box').children().on({mouseover:function(){
//         $(this).find('ul').slideDown().css({display:'flex'})
//     }})
// })



// 마우스 오버시 밑줄 변경


// $(function(){
//     var hei = $('.main2_txt ul li').height();
//     var margin = 50
//     $('.main2_txt ul li').on({'mouseenter focusin':function(){
//         var index = $(this).index();
//         $(this).find('a').addClass('on');
//         $(this).siblings().find('a').removeClass('on');
//         $('.main2_txt span').stop().animate({top:index * (hei+margin)},'fast')
//     }});
//     $('.main2_txt ul li:eq(0)').trigger('mouseenter')
// });



// Main 2  line



// 검색어 값 가져오기

$(function(){
    var input = $('input:text');
    $('.btn_Box > button').on('click',function(){
        var value = $(this).val()
        $("input[type=text]").val("")
        input.val(value)
    })
})

// 그림 호버시 글자 생성

$(function(){
    $('section > div').on({mouseover:function(){
        $(this).find('.main_txt').css({transform:'translateY(0%)',transition:'1s'})
        $(this).find('p').stop().fadeIn(3200)
    },mouseout:function(){
        $(this).find('.main_txt').css({transform:'translateY(-100%)',transition:'1s'})
        $(this).find('p').stop().fadeOut('fast')
    }})
})




// 바로 밑은 콜백함수 참고용

// $(document).ready(function(){
//     $("button").click(function(){
//         $("p").hide("slow", function(){
//             alert("주소 숨었지롱.");
//         });
//     });
// });


//  텍스트들이 박스가 닫히고 나오게 만드는 중

// $(function(){
//     $('section > div').on({mouseover:function(){
//         var txt = $('.txt_P');
//         setTimeout(() => {
//             $(this).find('p').stop().fadeIn(500)
//         },1000)
//     }})
//     $('section > div').on({mouseout:function(){
//         $(this).find('p').stop().fadeOut('fast')
//     }})
// })


// $(function(){
//     $('section > div').on({mouseout:function(){
//         $('.txt_P').stop().fadeOut()
//     }})
// })



// function textIn(){
//     var txt = document.querySelectorAll('.txt_P')
//     // var txt = $(this).find('p')
//     setTimeout(() => {
//         $(this).stop().fadeIn('slow')
//         // $(txt).stop().fadeIn('slow')
//     },1000)
// }

window.onload=function(){
    
    var obTimeout;

    var ObjectArray  = new Array();
    ObjectArray [0]='../img/slide_img-1.jpg'
    ObjectArray [1]='../img/section-1.jpg'
    ObjectArray [2]='../img/intro3-1.jpg'

    var nObjectCnt = 0;

    function ShowDefaultRotate(){   // 스스로 자신을 호출하는 재귀함수
        nObjectCnt++;
        if(nObjectCnt < ObjectArray.length){
            // document.getElementsByClassName('main2_img1')[0].src=imageArr[imgCnt];
            document.getElementById("image").src = ObjectArray[nObjectCnt];
            obTimeOut = setTimeout("ShowDefaultRotate()",1000)
        }
        else{
            clearTimeout(obTimeout)
        }
    } 
    function startAnimation(){
        obTimeout = window.setTimeout(ShowDefaultRotate,100)
    }

        window.onload=startAnimation;

    //확인용
    console.log(ObjectArray)
}
    

//     var arr = ['../img/slide_img-1.jpg','../img/section-1.jpg','../img/intro3-1.jpg']

// main2







// 클릭시 밑줄 변경

$(function(){
    $('.main2_txt ul span').css({top:80})
    var hei = $('.main2_txt ul li').height();
    // var margin = 50
    var margin = 50
    $('.main2_txt ul li').on({'keydown click':function(){
        var index = $(this).index();
        $(this).find('a').addClass('on');
        $(this).siblings().find('a').removeClass('on');
        $('.main2_txt span').stop().animate({top:index * (hei+margin)},'fast')
    }});
    $('.main2_txt ul li:eq(0)').trigger('mouseenter')
});


$(function(){
    $('.main2_img').hover(function(){
        $(this).find('.main2_imgtxt').css({transform:'translateY(0%)'});
        $('.main2_imgtxt').children().not('button').css({pointerEvents:'none'})
    },function(){
        $(this).find('.main2_imgtxt').css({transform:'translateY(100%)'})
    })
})



$(function(){
    $('.main2 > .main2_img').not('.main2_img1').css({display:'none'});
        // 1번 빼고 다 지우기

    // 제목에 맞는 그림 가져오기
    $('.main2_txt ul li').eq(0).click(function(){
        $('.main2_img1').show();
        $('.main2_img').not('.main2_img1').hide()
    })
    $('.main2_txt ul li').eq(1).click(function(){
        $('.main2_img2').show()
        $('.main2_img').not('.main2_img2').hide()
    })
    $('.main2_txt ul li').eq(2).click(function(){
        $('.main2_img3').show()
        $('.main2_img').not('.main2_img3').hide()
    })
    $('.main2_txt ul li').eq(3).click(function(){
        $('.main2_img4').show()
        $('.main2_img').not('.main2_img4').hide()
    })
    $('.main2_txt ul li').eq(4).click(function(){
        $('.main2_img5').show()
        $('.main2_img').not('.main2_img5').hide()
    })
    $('.main2_txt ul li').eq(5).click(function(){
        $('.main2_img6').show()
        $('.main2_img').not('.main2_img6').hide()
    })
    $('.main2_txt ul li').eq(6).click(function(){
        $('.main2_img7').show()
        $('.main2_img').not('.main2_img7').hide()
    })
})


$(function(){
    var hei = $('.reviewWrap').height();
    $('.reviewBtn > div').click(function(){
        var i = $('.reviewBtn > div').index(this)
        if(i == 0){
            $('.reviewImg').stop().animate({marginTop:0},800)
        }
        else if(i == 1){
            $('.reviewImg').stop().animate({marginTop:-hei},800)
        }
        else if(i == 2){
            $('.reviewImg').stop().animate({marginTop:-hei*2},800)
        }
        else{
            $('.reviewImg').stop().animate({marginTop:-hei*3},800)
        }
        $(this).addClass('reviewAdd');
        $(this).siblings().removeClass('reviewAdd');
    })
})

// 반복문으로 만들기

// Main 2  line


// 보류
// $(function(){
//     $('.text > button').on({click:function(){
//         $('.intro_Image').addClass('intro_black')
//         $('.text').addClass('text-out')
//         $('.intro_Subtx').addClass('Txt2_fade');
//         $('.intro_Sub').width('50%')
//     }})
// })




//  footer 스크롤 탑으로
$(function(){
    $('.scrollTop').click(function(){
        var offset = $('header').offset();
        $('html').animate({scrollTop:offset.top},1200)
    })
})
