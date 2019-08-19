// JavaScript Document
$(function(){

	$(".NN_xy_bar").hover(function() {
        $(this).children('.NN_xy_img').children('img').css({'width':'67px',"height":"67px","border":"3px solid #bc0605"});
    }, function() {
        $(this).children('.NN_xy_img').children('img').css({'width':'67px',"height":"67px","border":"3px solid #fff"});
    });
	
/* 	$(window).scroll(function(){
		var oH = $('#course-detail-top').height();
		var num = $(document).scrollTop();
		if (num>=oH) {
			$('.kec-r-nav').css({'position':'fixed','right':'80px','top':'250px','display':'block'});
			$('.fuwu-zx').css({'position':'fixed','right':'80px','top':'150px','display':'block','z-index':'9999'})}
		 else{
			$('.kec-r-nav').css({'display':'none'});
			$('.fuwu-zx').css({'display':'none'});
		}
	}) */
	
	//同意注册协议
	$(".dd").click(function(){ 
		$('.NN_zl_tc_bg').show();
	
	});
	$(".NN_zl_tc_ok,.NN_zl_tc_close").click(function(){ 
		$('.NN_zl_tc_bg').hide();
	});
	
	/*资料修改弹出框*/
	$(".xiugai2").click(function(){ 
		$('.ziliao-xiugai,.yinying2').show();
	});
	$(".yinying2,.d-qx").click(function(){ 
		window.location.reload();
		//$('.ziliao-xiugai').hide();
		//$('.yinying2,.youxiang-gai,.shoujigai,.xin-shouji,.shoujigai-ma,.mima-gai').hide();
	});
	
	/*头部会员登陆状态*/
	$(".li-toux").hover(function(){
		$(".yiru-lb").show();
	},function(){
		$(".yiru-lb").hide();
	});
	
	/*选课点击*/
$(function(){
	var aBtn1=$('#zhonglei1 a');
	var aBtn2=$('#zhonglei2 a');
	var aBtn3=$('#zhonglei3 a');
	var aBtn4=$('#zhonglei4 a');
	aBtn1.click(function(){
		aBtn1.removeClass('active');
		$(this).addClass('active');
	});
	aBtn2.click(function(){
		aBtn2.removeClass('active');
		$(this).addClass('active');
	});
	aBtn3.click(function(){
		aBtn3.removeClass('active');
		$(this).addClass('active');
	});
	aBtn4.click(function(){
		aBtn4.removeClass('active');
		$(this).addClass('active');
	});
})

$('.cda-qynx').hover(function(){
	$('.cda-hylj').show();
},function(){
	$('.cda-hylj').hide();
});
$('.cda-hylj').hover(function(){
	$('.cda-hylj').show();
},function(){
	$('.cda-hylj').hide();
});

//导航企业内训滑动
$("#qynxhd,#hylj").hover(function() {
   $('#hylj').css('display', 'block');
},function() {
   $('#hylj').css('display', 'none');
});

	//课程介绍视频
	$('.f-pr').click(function(){
		
		$('.video-r,.tcc').show();	
	});
	$('.video-r h3 .guan-b').click(function(){
		$('.video-r,.tcc').hide();
		history.go(0);
	});
});

$(function(){
	var Param_zhuan=getUrlParam('zhuan');
	var Param_deng=getUrlParam('deng');
	var Param_ruan=getUrlParam('ruan');
	var Param_time=getUrlParam('time');
	// var Param_fang=getUrlParam('fang');
	if(Param_zhuan){
		$('#zhuan'+Param_zhuan).addClass('active').siblings().removeClass('active');
	}else{
		$('#zhuan0').addClass('active').siblings().removeClass('active');
	}
	if(Param_deng){
		$('#deng'+Param_deng).addClass('active').siblings().removeClass('active');
	}else{
		$('#deng0').addClass('active').siblings().removeClass('active');
	}
	if(Param_ruan){
		$('#ruan'+Param_ruan).addClass('active').siblings().removeClass('active');
	}else{
		$('#ruan0').addClass('active').siblings().removeClass('active');
	}
	if(Param_time){
		$('#time'+Param_time).addClass('active').siblings().removeClass('active');
	}else{
		$('#time0').addClass('active').siblings().removeClass('active');
	}
	// if(Param_fang){
	// 	$('#fang'+Param_fang).addClass('active').siblings().removeClass('active');
	// }else{
	// 	$('#fang0').addClass('active').siblings().removeClass('active');
	// }

});



/*会员中心兴趣爱好*/
function inter(tp,id){
	if(tp=='yx'){
		var cur_inter=$('.xingqu').attr('yxdata').split('|');
		cur_inter=del_empty(cur_inter);
		for(j in mrdata){
			if(cur_inter[id]==mrdata[j]){
				$('#wx_'+j).removeClass('S_func3');
				$('#wx_'+j).attr('status','show');
			}
		}
		
		var new_yxstr=new_mrstr='';
		for (x in cur_inter){
			if(x==id){
				cur_inter.splice(id,1);
			}
			if(cur_inter[x]){
				new_yxstr+=cur_inter[x]+'|';
				new_mrstr+="<a href='javascript:void(0);' id='yx_"+x+"' onclick=inter('yx',"+x+") class='W_btn_arrow tag'><span class='S_func1 S_func2'>"+cur_inter[x]+"&nbsp;<em>×</em></span><em class='xxx'></em></a>";
			}
		}
		$('.xingqu').attr('nextid',parseInt(x));
		$('.xingqu-t').html(new_mrstr);		
		$('.xingqu').attr('yxdata',new_yxstr);
		$('input[name=interest]').val(new_yxstr);
	}else if(tp=='wx'){
		if($('#wx_'+id).attr('status')=='show'){
			$('#wx_'+id).addClass('S_func3');
			$('#wx_'+id).attr('status','hide');
			
			//$('input[name=interest]').val(mrdata[id]);
			var nextid=$('.xingqu').attr('nextid');
			var str="<a href='javascript:void(0);' id='yx_"+nextid+"' onclick=inter('yx',"+nextid+") class='W_btn_arrow tag'><span class='S_func1 S_func2'>"+mrdata[id]+"&nbsp;<em>×</em></span><em class='xxx'></em></a>"
			$('.xingqu').attr('nextid',parseInt(nextid)+1);
			$('.xingqu-t').append(str);
			
			var yx_inter=$('.xingqu').attr('yxdata');
			if(yx_inter){
				
				yx_inter=yx_inter+'|'+mrdata[id];
			}else{
				yx_inter=mrdata[id];
			}
			$('.xingqu').attr('yxdata',yx_inter);
			$('input[name=interest]').val(yx_inter);
		}
	}
}
//删除数组空值
function del_empty(arr){  
    var a = [];  
    $.each(arr,function(i,v){  
        var data = $.trim(v);//$.trim()函数来自jQuery  
        if('' != data){  
            a.push(data);  
        }  
    });  
    return a;  
}

function select_zhuan(zhuan){
	var Param_zhuan=zhuan;
	//alert(Param_zhuan);
	var Param_deng=getUrlParam('deng');
	if(!Param_deng){Param_deng=0;}
	
	var Param_ruan=getUrlParam('ruan');
	if(!Param_ruan){Param_ruan=0;}
	
	var Param_time=getUrlParam('time');
	if(!Param_time){Param_time=0;}

	// var Param_fang=getUrlParam('fang');
	// if(!Param_fang){Param_fang=0;}
	
	// var newurl='index.php?ac=kecheng_list&zhuan='+Param_zhuan+'&deng='+Param_deng+'&ruan='+Param_ruan+'&fang='+Param_fang;	
	var newurl='index.php?ac=kecheng_list&zhuan='+Param_zhuan+'&deng='+Param_deng+'&ruan='+Param_ruan+'&time='+Param_time;			
	location.href = newurl;	
}
function select_deng(deng){
	var Param_zhuan=getUrlParam('zhuan');

	if(!Param_zhuan){Param_zhuan=0;}
	
	var Param_deng=deng;
	
	var Param_ruan=getUrlParam('ruan');
	if(!Param_ruan){Param_ruan=0;}
	
	var Param_time=getUrlParam('time');
	if(!Param_time){Param_time=0;}

	// var Param_fang=getUrlParam('fang');
	// if(!Param_fang){Param_fang=0;}
	
	// var newurl='index.php?ac=kecheng_list&zhuan='+Param_zhuan+'&deng='+Param_deng+'&ruan='+Param_ruan+'&fang='+Param_fang;	
	var newurl='index.php?ac=kecheng_list&zhuan='+Param_zhuan+'&deng='+Param_deng+'&ruan='+Param_ruan+'&time='+Param_time;		
	location.href = newurl;	

}
function select_ruan(ruan){
	var Param_zhuan=getUrlParam('zhuan');
	if(!Param_zhuan){Param_zhuan=0;}
	
	var Param_deng=getUrlParam('deng');
	if(!Param_deng){Param_deng=0;}
	
	var Param_ruan=ruan;
	
	var Param_time=getUrlParam('time');
	if(!Param_time){Param_time=0;}

	// var Param_fang=getUrlParam('fang');
	// if(!Param_fang){Param_fang=0;}

	// var newurl='index.php?ac=kecheng_list&zhuan='+Param_zhuan+'&deng='+Param_deng+'&ruan='+Param_ruan+'&fang='+Param_fang;	
	var newurl='index.php?ac=kecheng_list&zhuan='+Param_zhuan+'&deng='+Param_deng+'&ruan='+Param_ruan+'&time='+Param_time;	
	location.href = newurl;
}
function select_time(time){
	var Param_zhuan=getUrlParam('zhuan');
	if(!Param_zhuan){Param_zhuan=0;}
	
	var Param_deng=getUrlParam('deng');
	if(!Param_deng){Param_deng=0;}
	
	var Param_ruan=getUrlParam('ruan');
	if(!Param_ruan){Param_ruan=0;}
	
	var Param_time=time;
	var newurl='index.php?ac=kecheng_list&zhuan='+Param_zhuan+'&deng='+Param_deng+'&ruan='+Param_ruan+'&time='+Param_time;		
	location.href = newurl;
}
// function select_fang(fang){
// 	var Param_zhuan=getUrlParam('zhuan');
// 	if(!Param_zhuan){Param_zhuan=0;}
	
// 	var Param_deng=getUrlParam('deng');
// 	if(!Param_deng){Param_deng=0;}
	
// 	var Param_ruan=getUrlParam('ruan');
// 	if(!Param_ruan){Param_ruan=0;}

// 	var Param_fang=fang;
	
// 	var newurl='index.php?ac=kecheng_list&zhuan='+Param_zhuan+'&deng='+Param_deng+'&ruan='+Param_ruan+'&fang='+Param_fang;		
// 	location.href = newurl;
// }

//获取url中的参数值
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
	var r = window.location.search.substr(1).match(reg);  //匹配目标参数
	if (r != null) return unescape(r[2]); return null; //返回参数值
}

//email验证
function checkEmail(email){
	var isEmail = /^[\w\-\.]+@[\w\-\.]+(\.\w+)+$/;
	if(isEmail.test(email)){        
		return true;
	}else{
		return false;
	}
}

//电话验证
function checkPhone(value){
	var isPhone =/^(\d{3,4}-)?\d{7,8}$/;
	var isMob=/^((\+?86)|(\(\+86\)))?(13[012356789][0-9]{8}|15[012356789][0-9]{8}|18[02356789][0-9]{8}|147[0-9]{8}|1349[0-9]{7})$/;
	if(isMob.test(value)||isPhone.test(value)){
		return true;
	}else{
		return false;
	}
}

//体系-人才培养
function onOver(over) {
	jQuery(over).children('a').children('h4').stop().animate({"top":"35px",}, 500).siblings('p').stop().animate({"top":"70px"}, 500).siblings('span').css("opacity","0.3");
	jQuery(over).children('.system-coursebtn').stop().animate({"opacity":"1","top":"115px"}, 500);
} 

function onOut(out) {
	jQuery(out).children('a').children('h4').stop().animate({"top":"55px",}, 500).siblings('p').stop().animate({"top":"90px"}, 500).siblings('span').css("opacity","0")
	jQuery(out).children('.system-coursebtn').stop().animate({"opacity":"0","top":"140px"}, 500);
}