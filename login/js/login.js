//js document
$(document).ready(function() {
	resizeScreen();
	//获取窗口大小
	$(window).resize(function(){
		resizeScreen();
	});
	//表单验证
	$(".login p").click(function(){
		var userVal = $(".user_name input").val();
		var pwdVal = $(".password input").val();
		var validateVal = $(".validate input").val();
		if(userVal == ""){
			$(".wrapper .footer").show();
			$(".prompt").text("登录名不能为空！");
			return false;
		}		
		if(pwdVal == ""){
			$(".wrapper .footer").show();
			$(".prompt").text("密码不能为空！");
			return false;
		}else if(pwdVal.length < 8){
			$(".wrapper .footer").show();
			$(".prompt").text("密码不能小于8位！");
			return false;	 
		}
		if($(".validate").is(":visible")){
			if(validateVal == ""){
				$(".wrapper .footer").show();
				$(".prompt").text("验证码不能为空！");
				return false;
			}
		}
	});
	//关闭提示框
	$(".closed").click(function(){
		$(".wrapper .footer").hide();
	});
});

function resizeScreen(){
	var w = $(window).width();
	var h = $(window).height();
	$(".wrapper").css({"width":w + "px","height":h + "px"});
}
