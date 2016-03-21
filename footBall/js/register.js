$(function(){
	var flag;
	$("#regeter-name").on("blur",function(){
		//alert();
		var name = $(this).val();
		if( ! /^[1][3578]\d{9}$/.test(name)){
			alert("手机号码格式不正确")
			flag = false;
			//测试用
			//flag = true;
		}else{
			flag = true;
		}
	})
	var niFlag = true;
	$(".ni").on("blur",function(){
		var nicheng = $(this).val();
		if(nicheng.length > 20){
			alert("昵称的长度过长");
			niFlag = flase;
		}
	})
	//alert();
	$("button").on("click",function(e){
		e.preventDefault();
		//alert();
		if(flag = true && niFlag == true){
			$.ajax({
				url:"http://localhost:8080/Proxy/FootBall/user/json/reg.do",
				data:{
					"loginname":$("#regeter-name").val(),
					"password":$(".pwd").val(),
					"nickname":$(".ni").val()
					},
				success:function(data){
					console.log(data);
					var info = JSON.parse(data);
					console.log(info.ecode);
					if(info.ecode == 200){
						document.location.href = "login.html";
					}else{
						alert("用户名已经存在");
						document.location.href = "login.html";
					}
				}
			})	
		}
	})
})
 