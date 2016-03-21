window.onload = function(){
	//alert();
	var $div = $("<div class='me'></div>").prependTo($(".about"));
	var str = "http://101.200.173.217:8080/FootBall"+localStorage.getItem("atarpath");
	var $p = $("<p class='ou'></p>").html(localStorage.getItem("signnature"));
	$p.prependTo($div);
	var $h5 = $("<h5 class='wo'></h5>").html(localStorage.getItem("nickname"));
	$h5.prependTo($div);
	var SpanImg  = $("<span class='touxiang'></span>").prependTo($div);
	var oImg = $("<img class='Icon'/>").prependTo(SpanImg);
	//--------粉丝
	$.ajax({
		type:"get",
		url:"http://localhost:8080/Proxy/FootBall/attention/json/queryall/fans.do",
		data:{
			"loginsuserid":localStorage.getItem("id")
		},
		success:function(data){
			console.log(data);
			var list = JSON.parse(data).data.userlist;
			console.log(list.length);
			$(".fensi").html(list.length);
		}
		
	});
	//----我关注的人
	$.ajax({
		type:"get",
		url:"http://localhost:8080/Proxy/FootBall/attention/json/queryall/followed.do",
		data:{
			"loginsuserid":localStorage.getItem("id")
		},
		success:function(data){
			console.log(data);
			var shuju = JSON.parse(data).data.userlist;
			$(".guanzhu").html(shuju.length);
		}
	})
}
