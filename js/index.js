$(function(){
    $('.container > div').on({mouseover: function(){

    },mouseleave:function(){
        $('')
    }})
})
$(function(){
    $('.open').click(function(){
        document.getElementById('sub_Menu').style.height='300px';
    })
    $('.close').click(function(){
        document.getElementById('sub_Menu').style.height='0%'
    })

})
function close(){
    document.getElementById('sub_Menu').style.height='0%'
}

function slide(){
    $('.mySlide').stop().animate({marginLeft:'-30vw'},1000,function(){
        $('.mySlide li:first').appendTo('.mySlide');
        $('.mySlide').css({marginLeft:0})
    })
}
setInterval(slide,5000)




$(function(){
    $('input').focus(function(){
        document.getElementsByClassName('popup')[0].style.height='300px';
        $('.popup').css({boxShadow:'0 0 50px'})
    })
    $('input').blur(function(){
        $('.popup').height(0);
    })

})