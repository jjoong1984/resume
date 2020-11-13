(function($){ 

    var winHeight = $(window).height()
    $(window).scroll(function(){ 
        var index;
        var sct = $(this).scrollTop()
        if (sct < winHeight) { //스크롤탑값이 한 화면높이보다 작으면 0번 섹션
            $('#gnb').removeClass('on')
            $('#gnb > li').eq(0).find('a').addClass('on')
            $('#gnb > li').eq(0).siblings().find('a').removeClass('on')
        } else { 
            $('#gnb').addClass('on') //두번째 섹션으로 진입하면서 네비게이션박스 90도로 세워 오른쪽 끝으로 이동
            if (sct >= winHeight*4) { 
                index = 4
            } else if (sct >= winHeight*3) { 
                index = 3
            } else if (sct >= winHeight*2) { 
                index = 2
            } else if (sct >= winHeight*1) { 
                index = 1
            }
            $('.section').eq(index).find('.back_l').stop().animate({ 
                left: '0%'
            }, 800)
            $('.section').eq(index).find('.back_r').stop().animate({ 
                right: '5%'
            }, 800, function(){ 
                $(this).prevAll('.comhide').fadeIn(300)
            })
            $('#gnb > li').eq(index).siblings().find('a').removeClass('on')
            $('#gnb > li').eq(index).find('a').addClass('on')
        }
    })

  
    $('.section').on('mousewheel', function(e,wh){ 
        $('#gnb > li > a').blur() 
        if (wh>0) {  
           var prev = $(this).prev().offset().top
           $('html, body').stop().animate({ 
               scrollTop: prev
           }, 800, 'linear')
        } else if (wh<0) { 
           var next = $(this).next().offset().top
           $('html, body').stop().animate({ 
            scrollTop: next
        }, 800, 'linear')
        }
    })

    $('.nav li > a').on('click', function(e){ 
        e.preventDefault();
        var index = $(this).parent().index()
        var distance = $('.section').eq(index).offset().top
        $('html, body').stop().animate({ 
            scrollTop: distance
        }, 800, 'linear')
    })


})(jQuery)