$(function(){
//	console.log($(".main2-warp").css("display"));
	$(".header-wrap > span:eq("+1+")").on("click",function(){
	/*	console.log("aa");*/
		$.ajax({
			url:"http://localhost:8080/Proxy/FootBall/attention/json/queryall/followed.do",
			
			data:{
				"loginsuserid":localStorage.getItem("id")
			},
			success:function(data){
				//console.log(localStorage.getItem("id"));
				console.log(data);
			}
		})
		
	})
})
