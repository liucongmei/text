	var flag;
window.onload = function(){
	/*$("#name").on("blur",function(){
		//alert();
		var name = $(this).val();
		if( ! /^[1][3578]\d{9}$/.test(name)){
			/*alert("手机号码格式不正确");*/
			/*flag = false;*/
			//测试用
			//flag = true;
		//}else{
			//flag = true;
		//}
	//})*/
	$("button").on("click",function(e){
		e.preventDefault();
		if(flag = true){
			$.ajax({
				url:"http://localhost:8080/Proxy/FootBall/user/json/login.do",
				data:{"loginname":$("#name").val(),"password":$("#pwd").val()},
				success:function(data){
					var mm = JSON.parse(data)
					console.log(data);
					if(mm.ecode == 200){
						var userInfo = mm.data.loginuser;
						console.log(userInfo);
						if(window.localStorage){
							localStorage.setItem("avatarId",userInfo.avatarId);
							localStorage.setItem("avatarpath",userInfo.avatarpath);
							localStorage.setItem("favoriteTeam",userInfo.favoriteTeam);
							localStorage.setItem("id",userInfo.id);
							localStorage.setItem("loginname",userInfo.loginname);
							localStorage.setItem("nickname",userInfo.nickname);
							localStorage.setItem("password",userInfo.password);
							localStorage.setItem("signnature",userInfo.signnature);
						
							console.log(localStorage.getItem("name"));
							console.log(localStorage.getItem("avatarpath"));
							console.log(localStorage.getItem("loginname"));
							console.log(localStorage.getItem("signnature"));
						}
						document.location.href="index.html";
					}
					else{
						alert("用户名或密码错误");
					}
				}
		
			});
		}
		
	})
}
function _checked(obj){
		/*alert()*/
		var name = obj.value;
		if( ! /^[1][3578]\d{9}$/.test(name)){
			alert("手机号码格式不正确");
			
			flag = false;
			//测试用
			//flag=true;
		}else{
			flag = true;
		}
	}	
