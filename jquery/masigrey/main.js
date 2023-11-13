$(function(){
    $('ul li').css({
        'list-style' : 'none'
    })
    $('body').css({
        'margin' : '0px',
        'padding' : '0px'
    })

    $('.top-banner').css({
        height:'50px',
        border:'1px solid gold',
        position: 'relative',
        margin: '0 auto',
        width: '80%'
    })

    $('.top-banner-link > ul > li').css({
        'float' : 'left'
    })



    $('.top-banner-link > ul').css({
        float:'right',
        marginTop:'14px',
        marginRight:'14px',
        position:'relative'
    })

    $('.top-banner-link > ul > li:nth-child(1)').css({
        backgroundImage: 'url(http://masigray.com/images/common/sns_blog.png)',
        width: '23px',
        height: '23px',
        marginRight: '5px'
    })
    
    $('.top-banner-link > ul > li:nth-child(2)').css({
        backgroundImage: 'url(http://masigray.com/images/common/sns_insta.png)',
        width: '23px',
        height: '23px',
        marginRight: '5px'
    })

    $('.top-banner-link > ul > li:nth-child(3)').css({
        backgroundImage: 'url(http://masigray.com/images/common/sns_facebook.png)',
        width: '23px',
        height: '23px',
        marginRight: '5px'
    })

    $().css({})





    // $('#banner-image').css({'background':'url(http://masigray.com/images/common/visual04.jpg)',
    // "background-repeat" : "no-repeat", 
    // "background-position":"center center",
    // "width":"100px",
    // "height":"100px"});
})


// jQuery('#image').attr("src","이미지경로");