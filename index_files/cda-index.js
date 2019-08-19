jQuery(document).ready(function() {
	jQuery(".elevator-kefu").hover(function() {
		jQuery(this).children('.elevator-kefu-box').css('display', 'block');
	}, function() {
		jQuery(this).children('.elevator-kefu-box').css('display', 'none');
	});
    jQuery(".elevator-QQ").hover(function() {
        jQuery(this).children('.elevator-qq-box').css('display', 'block');
    }, function() {
        jQuery(this).children('.elevator-qq-box').css('display', 'none');
    });
    
    //banner
    jQuery(".banner").hover(function() {
		clearTimeout(time);
		jQuery("#banner-left,#banner-right").css('display', 'block');
	}, function() {
		clearTimeout(time);
		set_time();
		jQuery("#banner-left,#banner-right").css('display', 'none');
	});
	jQuery(".dian li").click(function(event) {
		jQuery(this).addClass('cur').siblings('').removeClass('cur');
		jQuery(".banner-img .itme").eq(jQuery(this).index()).fadeIn("slow").siblings().fadeOut("slow");
	});
	//图片轮播
	var key=0;
	var time=null;
	function imgplay(){
		clearTimeout(time);
		if(key < 0 || key > 4){
			key = 0;
		};
      	jQuery(".banner-img .itme").eq(key).stop().fadeIn("slow").siblings().stop().fadeOut("slow");
      	jQuery(".dian li").eq(key).addClass('cur').siblings('').removeClass('cur');
		set_time();
		key++;
	}
	function set_time(){
		var timeOut = parseInt(jQuery(".banner-img .itme").eq(key).attr('timeout'));
		timeOut = timeOut ? timeOut : 5;
		time = setTimeout(imgplay, timeOut * 1000);
	}
	imgplay();

	jQuery("#banner-left").click(function(event) {
		key--;
		if(key<0){
			key=6
		}
		jQuery(".banner-img .itme").eq(key).stop().fadeIn("slow").siblings().stop().fadeOut("slow");
      	jQuery(".dian li").eq(key).addClass('cur').siblings('').removeClass('cur');
	});
	jQuery("#banner-right").click(function(event) {
		key++;
		if(key>6){
			key=0
		}
		jQuery(".banner-img .itme").eq(key).stop().fadeIn("slow").siblings().stop().fadeOut("slow");
      	jQuery(".dian li").eq(key).addClass('cur').siblings('').removeClass('cur');
	});
    
    //获取资料
    jQuery(".NNhq_xuanze a").click(function(event) {
       jQuery(".NN_zl_tc_bg").css('display', 'block');
    });
    jQuery(".NN_zl_tc_close,.NN_zl_tc_ok").click(function(event) {
        jQuery(".NN_zl_tc_bg").css('display', 'none');
    });
    //观看视频
    jQuery("#videoone").click(function(event) {
        jQuery("#video1").css('display', 'block');
    });
    jQuery("#videotwo").click(function(event) {
        jQuery("#video2").css('display', 'block');
    });
    jQuery("#videothre").click(function(event) {
        jQuery("#video3").css('display', 'block');
    });
    jQuery(".close-video").click(function(event) {
        jQuery(this).parent().css('display', 'none');
    });

    //学员说
    jQuery(".NN_xy_bar").hover(function() {
        jQuery(this).children('.NN_xy_img').children('img').css({'width':'77px',"height":"77px","border":"3px solid #bc0605"});
    }, function() {
        jQuery(this).children('.NN_xy_img').children('img').css({'width':'80px',"height":"80px","border":"none"});
    });
    //课程列表页
    jQuery(".courses li").hover(function() {
        jQuery(this).addClass('active');
    }, function() {
        jQuery(this).removeClass('active');
    });
    jQuery(".course-star").click(function(event) {
        jQuery(this).toggleClass('emonclick');
    });

    /**/
    jQuery(".course-system-rencaipeiyang li").hover(function() {
        jQuery(this).children('a').children('h4').stop().animate({"top":"35px",}, 500).siblings('p').stop().animate({"top":"70px"}, 500).siblings('span').css("opacity","0.6");
        jQuery(this).children('.system-coursebtn').stop().animate({"opacity":"1","top":"115px"}, 500);
    }, function() {
        jQuery(this).children('a').children('h4').stop().animate({"top":"55px",}, 500).siblings('p').stop().animate({"top":"90px"}, 500).siblings('span').css("opacity","0")
        jQuery(this).children('.system-coursebtn').stop().animate({"opacity":"0","top":"140px"}, 500);
    });
    /*课程详情页*/
    jQuery(".course-choosebtn a").click(function(event) {
        jQuery(this).addClass('active').siblings('').removeClass("active");
        jQuery(".course-choosebtn-list ul").eq(jQuery(this).index()).css('display', 'block').siblings('').css('display', 'none');
		var cid = jQuery(".course-choosebtn-list ul").eq(jQuery(this).index()).children('li.li-red').attr('lid');
		if(cid){
			jQuery("#baoming_id").attr("href", 'http://www.peixun.net/main.php?mod=buy&cid=' + cid);
		}
    });
    jQuery(".course-choosebtn-list li").click(function(event) {
        jQuery(this).addClass('li-red').siblings('').removeClass("li-red");
		var cid = jQuery(this).attr('lid');
		if(cid){
			jQuery("#baoming_id").attr("href", 'http://www.peixun.net/main.php?mod=buy&cid=' + cid);
		}
    });

    //俱乐部注册
    jQuery(".L").focus(function(){
        jQuery(this).addClass('textarea-job-detaliL').removeClass("textarea-job-detali");
    });
    jQuery(".L").blur(function(){
        jQuery(this).addClass('textarea-job-detali').removeClass("textarea-job-detaliL");
    });
    /*个人中心-我的课程*/
    jQuery(".course-title li").click(function(event) {
        jQuery(this).addClass('activ').siblings('').removeClass("activ");
        jQuery(".lesson-list div").eq(jQuery(this).index()).css('display', 'block').siblings('').css('display', 'none');
    });
    jQuery(".check-detail").click(function(event) {
        jQuery(".check-jf").css('display', 'block');
    });
    jQuery(".close").click(function(event) {
        jQuery(".check-jf").css('display', 'none');
    });

    //首页学员说
    //俱乐部-资料
    jQuery(".wj_ .ilike").click(function(event) {
        jQuery(this).toggleClass('ilike-full');
    });
    //俱乐部
    jQuery(".club-kzjf-list li p").click(function(event) {
		var did = parseInt(jQuery(this).attr('did'));
		if(did && did > 0){
			jQuery(".club-kzjf-list-bg-" + did).css('display', 'block');
		}
    });
    jQuery(".close").click(function(event) {
		var did = jQuery(this).attr('did');
      jQuery(".club-kzjf-list-bg-" + did).css('display', 'none');
    });
    
    //兑换  弹框
    jQuery('a.lkdh-p').click(function(){
    	jQuery('#tk').show();
    })
    jQuery('.exchange h2 em').click(function(){
    	jQuery('#tk').hide();
    })
    jQuery('.exchange h4').click(function(){
    	jQuery('#tk').hide();
    })
    
    //  行业路径
    jQuery('.show_title').hover(function(){
        jQuery(this).children('span,div').show();
    },function(){
        jQuery(this).children('span,div').hide();
    })

    jQuery('.H_hylj').hover(function(){$('.hylj_nav').show();})
    jQuery('.hylj_nav').mouseleave(function(){$(this).hide();})
    jQuery('.hylj_nav_box li').hover(function(){
        jQuery(this).children().eq(0).animate({'top':'40px'},200);
        jQuery(this).children().eq(1).animate({'top':'0px'},200);
    },function(){
        jQuery(this).children().eq(0).animate({'top':'4px'},200);
        jQuery(this).children().eq(1).animate({'top':'40px'},200);
    })
});


function news_search_submit(){
	if(jQuery('#topsearch').val() == ''){
		return false;
	} else {
		jQuery('#news_search_form').submit();
	}
}