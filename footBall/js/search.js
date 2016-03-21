window.onload = function(){
	$(".btn").on("click",function(e){
		//alert();
		e.preventDefault();
		//console.log(localStorage.getItem("id"));
		$.ajax({
			url:"http://localhost:8080/Proxy/FootBall/user/json/queryall.do",
			data:{
				"loginsuserid":localStorage.getItem("id"),
				"page.pageNo":2,
				/*"keyword":$(".nicheng-search").val()*/
				
			},
			success:function(data){
				//console.log($(".nicheng-search").val());
				
				var res = JSON.parse(data);
				console.log(res);
				if(res.ecode == 200){
					var list = res.data.userlist;
					$(".s-res").empty();
					for(var i = 0;i<list.length;i++){
						var $li = $("<li class='bder'></li>");
						$(".s-res").append($li);
						var $link = $("<a class='res'></a>");
						
						var img=$("<img/>");
						img.addClass("oImg");
						var str="http://101.200.173.217:8080/FootBall"+list[i].avatarpath;
						img.attr("src",str)
						var spanImg = $("<span class='userInfo'></span>");
						var $h5 = $("<h5 class='tit'></h5>");
						var $p = $("<p class='miao'></p>");
		var SpanLink = $("<span class='guan' userId='"+list[i].id+"'></span>");
						SpanLink.html("关注");
						$p.html(list[i].signnature);
						$h5.html(list[i].nickname);
						spanImg.append(img);
						$link.append(spanImg);
						$li.append($link);
						$link.append($h5);
						$link.append($p);
						$link.append(SpanLink);
					}
			    myScroll.refresh();
				}else{
					alert("没有相关的收索结果");
				}
				
			}
			
		})
	})
	
	
	
	var WindowH = $("body").height();
	var HeaderH = $("header").height();
	var SearchH = $(".search").height();
	var footerH = $(".footer").height();
	//console.log(WindowH);
	//console.log(HeaderH);
	//console.log(SearchH);
	$("#scroll-wrap").height(WindowH - HeaderH - SearchH - footerH- 5);
	//console.log($("#scroll-wrap").height());
	var ifBot = 0;//开关
	var ifTop = 0;//开关
	var j =2;//页数
	var myScroll = new iScroll('scroll-wrap', {
		hScrollbar: false,
		vScrollbar: false,
		onScrollMove:function(){
			//alert();
			if(this.y > 50){
				ifTop = 1;
				ifBot = 0;
			}else if(this.y <(this.maxScrollY - 50)){
				ifTop = 0;
				ifBot = 1;
			}else{
				ifBot = 0;
				ifTop = 0;
			}
		},
		onScrollEnd:function(){
			//alert();
			if(ifTop == 1){
				$.ajax({
					url:"http://localhost:8080/Proxy/FootBall/user/json/queryall.do",
					data:{
						"loginsuserid":localStorage.getItem("id"),
						"page.pageNo":j-1,
						"keyword":$(".nicheng-search").val()
					},
					success:function(data){
						//console.log(data);
						var da = JSON.parse(data).data.userlist;
						console.log(da);
						
						for(var i=0;i<da.length;i++){
							var $li = $("<li class='bder'></li>");
							
							$li.prependTo($(".s-res"));
							
							var $a = $("<a class='res'></a>");
							
							$a.prependTo($li)
							
							var $Imgwrap = $("<span class='userInfo'></span>");
							var arr ="http://101.200.173.217:8080/FootBall"+ da[i].avatarpath;
							var $pic = $("<img />");
							$pic.addClass("oImg");
							$pic.attr("src",arr);
							$pic.prependTo($Imgwrap);
							var $addH5 = $("<h5 class='tit'></h5>");
							$addH5.html(da[i].nickname);
							var $addP = $("<p class='miao'></p>");
							$addP.html(da[i].signnature);
							var $addGuan = $("<span class='guan' userId='"+da[i].id+"' ></span>");
							$addGuan.html("关注");
							
							$addGuan.prependTo($a);
							
							$addP.prependTo($a);
							$addH5.prependTo($a);
							$Imgwrap.prependTo($a);
						}
						myScroll.refresh();
						j--;
						if(j <0){
							alert("最后一页了")
						}else{
							
						}
						alert(j);
					}
				})
			}else if(ifBot == 1){
					$.ajax({
					url:"http://localhost:8080/Proxy/FootBall/user/json/queryall.do",
					data:{
						"loginsuserid":localStorage.getItem("id"),
						"page.pageNo":j+1,
						"keyword":$(".nicheng-search").val()
					},
					success:function(data){
						console.log(data);
						var da = JSON.parse(data).data.userlist;
						console.log(da);
						
						for(var i=0;i<da.length;i++){
							var $li = $("<li class='bder'></li>");
							
							$li.appendTo($(".s-res"));
							
							var $a = $("<a class='res'></a>");
							
							$a.appendTo($li)
							
							var $Imgwrap = $("<span class='userInfo'></span>");
							var arr ="http://101.200.173.217:8080/FootBall"+ da[i].avatarpath;
							var $pic = $("<img />");
							$pic.addClass("oImg");
							$pic.attr("src",arr);
							$pic.appendTo($Imgwrap);
							var $addH5 = $("<h5 class='tit'></h5>");
							$addH5.html(da[i].nickname);
							var $addP = $("<p class='miao'></p>");
							$addP.html(da[i].signnature);
							var $addGuan = $("<span class='guan' userId='"+da[i].id+"' ></span>");
							$addGuan.html("关注");
							$Imgwrap.appendTo($a);
							
							
							$addH5.appendTo($a);
							$addP.appendTo($a);
							$addGuan.appendTo($a);
						}
						myScroll.refresh();
					}
				})
			}
		}
		
	})
	//--------关注--------
	$(".s-res").delegate(".guan","click",function(e){
		//console.log($(this));
		//console.log($(this).attr("userId"));
		//console.log("aa");
		e.preventDefault();
		$.ajax({
			url:"http://localhost:8080/Proxy/FootBall/attention/json/follow.do",
			data:{
				"loginsuserid":localStorage.getItem("id"),
				"tagetuserid ":$(this).attr("userId")
			},
			success:function(data){
				
				console.log(data);
			}
		})
	})
}
