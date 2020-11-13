(function($){

    (function init(){ 
        $('.comhide').hide()
        $('.depth1 > li').eq(0).find('a').addClass('on')
        $('.dotBox > a').eq(0).addClass('on')
        $('html, body').stop().animate({
            scrollTop:0
        }, 800)

    })()

    var winHeight = $(window).height()
    $(window).scroll(function(){ 
        var index;
        var sct = $(this).scrollTop()
        if (sct < winHeight) { 
            $('.depth1 > li').eq(0).find('a').addClass('on')
            $('.depth1 > li').eq(0).siblings().find('a').removeClass('on')
            $('.dotBox > a').eq(0).addClass('on')
            $('.dotBox > a').eq(0).siblings().removeClass('on')
        } else { 
            if (sct >= winHeight*3) { 
                index = 3
            } else if (sct >= winHeight*2) { 
                index = 2
            } else if (sct >= winHeight*1) { 
                index = 1
            }
            $('.depth1 > li').eq(index).siblings().find('a').removeClass('on')
            $('.depth1 > li').eq(index).find('a').addClass('on')
            $('.dotBox > a').eq(index).siblings().removeClass('on')
            $('.dotBox > a').eq(index).addClass('on')
            $('.section').eq(index).find('.blind_box').stop().animate({ 
                height: '0%'
            }, 800, function(){ 
                $(this).prevAll('.comhide').fadeIn(200)
            })
            $('.section').eq(index).find('.blind_box1').stop().animate({ 
                width: '0%'
            }, 800, function(){ 
                $(this).prevAll('.comhide').fadeIn(200)
            })  
            
   
        }
    })

    $('.section').on('mousewheel', function(e, wh){ 
        if(wh > 0) { 
            var prev = $(this).prev().offset().top
            $('html, body').stop().animate({ 
                scrollTop:prev
            }, 800,'linear')           

        } else if(wh < 0) { 
            var next = $(this).next().offset().top
            $('html, body').stop().animate({ 
                scrollTop:next
            },800,'linear')
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


    // $('.nav li a').on('click', function(){ 
    //     var index = $(this).parent().index()
    //     var wh = $(window).height()
    //     $('html, body').stop().animate({
    //         scrollTop:index*wh
    //     }, 800, 'linear')
    //     return false
    // })


    $('.dotBox > a').on('click', function(e){ 
        e.preventDefault();
        var index = $(this).index()
        var distance = $('.section').eq(index).offset().top
        $('html, body').stop().animate({ 
            scrollTop: distance
        }, 800, 'linear')
    })

    var lieq;
    $('.gallery > li > a').on('click', function(e){ 
        e.preventDefault();
        $('.popup').addClass('on')
        lieq = $(this).parent().index()
        var href = $(this).attr('href')
        var src = $(this).find('img').attr('src')
        var alt = $(this).find('img').attr('alt')
        $('.popupList > div > a').attr('href', href)
        $('.popupList > div > a > img').attr('src', src)
        $('.popupList > div > a > img').attr('alt', alt)
    })

    $('.popup .close, .popup').on('click', function(){ 
        $('.popup').removeClass('on')
    })
    $('.popupList').on('click', function(e){
        e.stopPropagation();
    })

    function changeList(ind) {
        href = $('.gallery > li').eq(ind).find('a').attr('href')
        src = $('.gallery > li').eq(ind).find('img').attr('src')
        alt = $('.gallery > li').eq(ind).find('img').attr('alt')
        $('.popupList > div > a').attr('href', href)
        $('.popupList > div > a > img').attr({
            'src':src,
            'alt':alt
        }).css({
            opacity:'0.5'
        }).stop().animate({
            opacity:'1'
        }, 300)
    }

    $('.popupList .prev').on('click', function(){
        --lieq;
        if (lieq<0) {
            lieq = 5;
        }
        changeList(lieq)
    })

    $('.popupList .next').on('click', function(){
        ++lieq;
        if (lieq>5) {
            lieq = 0;
        }
        changeList(lieq)
    })  


    $('.section').on('mousemove', function(e){ 
        var posX = e.pageX
        var posY = e.pageY
        $('.slide > img').css({
           left:450-(posX/80),
           bottom:2-(posY/100)
        })
    })

       



 







    



 

})(jQuery)