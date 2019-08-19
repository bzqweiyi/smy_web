$(function(){
	
	$('.sq-bbox').hover(function(){
		 $(".st-list").css("display","block");
	},function(){
		$(".st-list").css("display","none");
	})
						
	$('.nav-list-l .nav-a').click(function(){
		$(this).addClass('active').siblings().removeClass('active');
	})
	
	$('.nav-list-l .nav-hover').hover(function(){
		$('.cda-classify').show();
	},function(){
		$('.cda-classify').hide();
	})
	
//	banner轮播
	
	$(".o-slider-pagination li").click(function(event) {
		$(this).addClass('isActive').siblings('').removeClass('isActive');
		$(".o-slider .o-slider--item").eq($(this).index()).fadeIn("slow").siblings().fadeOut("slow");
	});
	$(".o-slider-pagination li").hover(function(){
		$(this).children('a').show();
	},function(){
		$(this).children('a').hide();
	});
	
	//$(".banner ol li").click(function(event) {
	//	$(this).addClass('out').siblings('').removeClass('out');
	//	$(".banner-img .img-b").eq($(this).index()).fadeIn("slow").siblings().fadeOut("slow");
	//});
	
	var key=0;
	var time=null;
	function imgplay(){
		clearTimeout(time);
		if( key < 0 || key > 4){
			key = 0;
		}
		
		$('.o-slider .o-slider--item').eq(key).stop().show().siblings('').stop().hide();
		$('.o-slider-pagination li').eq(key).addClass('isActive').siblings('').removeClass('isActive');
		set_time();
		key++;
	}
	
	function set_time(){
		var timeOut=parseInt($('.o-slider .o-slider--item').eq(key).attr('timeout'));
		timeOut = timeOut ? timeOut : 1;
		time = setTimeout(imgplay, timeOut * 3000);
		
	}
	imgplay();
	
	$('.banner-index').hover(function(){
		clearTimeout(time);
	},function(){
		clearTimeout(time);
		set_time();		
	})
	



		var index=0;timer=null;z=[];length=$('.ibanner-img a').length-1;
		for(i=0;i>0;i--){z.push(i);}
		$('.ibanner-img a').each(function(i,m){
			$(m).css('z-index',z[i]);
			
		})
		$('.lists li').eq(0).addClass('oList');
		$('.ibanner').hover(function(){
			clearInterval(timer);
			
		},function(){
		
			timer=setInterval(function(){
				index++;
				if(index>length){index=0;}
				$('.ibanner-img .items').each(function(i,m){
					if(i==index){$(m).fadeIn(1000);}else{$(m).fadeOut(1000)}
				})
				$('.lists li').eq(index).addClass('oList').siblings().removeClass('oList');
			},3000)
		}).trigger('mouseout')
	
	$('.activity-nav a').hover(function(){
		$(this).addClass('block-a').siblings().removeClass('block-a');
		
		var aDiv = $('.activity-list .activity-xq');
		aDiv.removeClass('block');
		
		aDiv.eq($(this).index()).fadeIn("slow").siblings().fadeOut();
	})
	
	
	$('.NN_zl_tc_bg .off').click(function(){
		$('.NN_zl_tc_bg').hide();
	})

	$('.zoology-shu a').hover(function(){
		$(this).children().children('.sect2_ani_c1').addClass('c1_moving');
		$(this).children().children('.sect2_ani_c2').addClass('c2_moving');
		$(this).children().children('.sect2_ani_c3').addClass('c3_moving');
		$(this).children().children('.pen-blo').css({'display':'block'});
	},function(){
		$(this).children().children('.sect2_ani_c1').removeClass('c1_moving');
		$(this).children().children('.sect2_ani_c2').removeClass('c2_moving');
		$(this).children().children('.sect2_ani_c3').removeClass('c3_moving');
		$(this).children().children('.pen-blo').css({'display':'none'});
	});
	
	
	$('.zhonglei a').click(function(){
		$('this').addClass('acive').sibling().removeClass('active');
	});
	
	$('.preferential').hover(function(){
		$(this).children('img').addClass('my-right');
	},function(){
		$(this).children('img').removeClass('my-right');
	});
	
	$('.name-box').hover(function(){
		$('.yiru-lb').show();
	},function(){
		$('.yiru-lb').hide();
	});
	
//	搜索下拉框

	$('.suos .text').click(function(){
		$('.drop-down').toggle({'transition':'1s'});
	});
	$('.suos').hover(function(){
		
	},function(){
		$('.drop-down').hide();
	});
	
//	选课中心切换
	$('.xk-ul li').click(function(){
		$(this).addClass('bank-block').siblings().removeClass('bank-block')
		var aDiv=$('.xk-box-max .xk-box');
		aDiv.eq($(this).index()).addClass('xk-box-block').siblings().removeClass('xk-box-block');
	});
	
	$('.eli-left').hover(function(){
		$(this).children('.lesson-js').fadeOut();
		$(this).children('.particulars-xq').fadeIn();
	},function(){
		$(this).children('.lesson-js').fadeIn();
		$(this).children('.particulars-xq').fadeOut();
	});
	
	
//	名师风采

	$('.activity-a a.specialist').hover(function(){
		$(this).children('.introduce').removeClass('introduce-back')
	},function(){
		$(this).children('.introduce').addClass('introduce-back')
	});




//课程详情
    $('.region-sq a').click(function(){
    	$(this).addClass('acti').siblings().removeClass('acti');
    });

	$('.fen-shou a.collect').click(function(){
		$(this).children().first('span').toggleClass('shouc2');
	});
	
	$('.one-z .one-z-child').hover(function(){
		$(this).children('i').addClass('jt').parent().siblings().children('i').removeClass('jt');
	},function(){
		$(this).children('i').removeClass('jt');
	});
	
	$('.section h4').click(function(){
		$(this).siblings('.one-z').toggle('slow');
		$(this).css({'border':'1px dashed #edeceb'});
	});
	
	$('#kc_zj .section:first-child .one-z').show();
	$('#kc_zj .section:first-child h4').css({'border':'1px dashed #edeceb'});
	
	$('.course-nav a').hover(function(){
		$(this).children('span').addClass('color-d').parent().siblings().children('span').removeClass('color-d')
		var aDivv = $('.course-list .course-none');
		aDivv.removeClass('counrse-block');
		aDivv.eq($(this).index()).addClass('counrse-block').siblings().removeClass('counrse-block');
	});
	
	//2018-02-01新加代码
	$('.jiathis_txt').click(function(){
		$('.Popover-content').toggleClass('Popover-content2');
	});

})



function downloadyy(){
		$('.NN_zl_tc_bg').show();
	};
