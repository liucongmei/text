
window.onload = function(){
	$(".header-wrap > span").on("click",function(){
		$(this).addClass("active").siblings().removeClass("active");
		var index = $(this).index();
		//console.log(index);
		if(index==0){
			/*alert();*/
			$(".topic").show();
			$(".hh").hide();
			$(".hh").first().show();
			$(".main2-warp").hide();
		}else{
			$(".topic").hide();
			$(".hh").hide();
			$(".main2-warp").show();
		}
		
		//$(".hh:eq("+index+")").show();
		/*$(".hh").hide();*/
		
	});
	
	//iscroll
	var WindowH = $("body").height();
	var HeaderH = $(".header").height();
	var TopicH = $(".topic").height();
	var footerH = $(".footer").height();
/*	console.log(WindowH);
	console.log(HeaderH);
	console.log(TopicH);
	console.log(footerH);*/
	$("#srcoll").height(WindowH - HeaderH -TopicH - footerH -5);
	$("#srcoll-main2").height(WindowH - HeaderH -TopicH - footerH -5);
	$("#srcoll-main3").height(WindowH - HeaderH -TopicH - footerH -5);
    var myScroll = new iScroll('srcoll',{
    	hScrollbar: false, vScrollbar: false
    });
    var myScroll2 = new iScroll('srcoll-main2',{
    	hScrollbar: false, vScrollbar: false
    });
     var myScroll3 = new iScroll('srcoll-main3',{
    	hScrollbar: false, vScrollbar: false
    });
    $(".topic div").on("click",function(){
    	var Dindex = $(this).index();
    	console.log(Dindex);
    	$(this).addClass("border-width").siblings().removeClass();
    	$(".hh").hide();
    	$(".hh:eq("+Dindex+")").show();
    	$(".main:eq("+Dindex+")").empty();
		$.ajax({
			url:"http://localhost:8080/Proxy/FootBall/tweet/json/query/hotspot.do",
			data:{
				"category":Dindex+1
			},
			success:function(data){
    		//console.log(data);
				var shuju = JSON.parse(data);
				console.log(shuju);
				var list = shuju.data.tweetlist;
				console.log(list);
				console.log(list.length);
				for(var i =0;i<list.length;i++){
					//console.log("ddd");
					var str = "http://101.200.173.217:8080/FootBall"+
					list[i].defaultFilePath+list[i].thumbnailname;
					//console.log(list[i].defaultFileName);
					var oImg = $("<img class='main-pic'/>");
					oImg.attr("src",str)
					console.log(str);
					var $div = $("<div class='kong'></div>");
					var inDiv = $("<div class='pic1'></div>");
					var $p = $("<p class='dis'></p>");
					$p.html(list[i].content);
					$div.append(inDiv);
					inDiv.append(oImg);
					$div.append($p);
					$(".main:eq("+Dindex+")").append($div);
					oImg[0].onload = function(){
						if(Dindex==0){	
				    		myScroll.refresh();
				    	}else if(Dindex == 1){
				    		myScroll2.refresh();
				    	}else{
				    		myScroll3.refresh();
				    	}
					}
					
				}
    		
    	
    	}
    })
		
    	
    })
    $.ajax({
    	url:"http://localhost:8080/Proxy/FootBall/tweet/json/query/hotspot.do",
    	data:{
    		"category":1
    	},
    	
    	success:function(data){
    		//console.log(data);
    		var shuju = JSON.parse(data);
    		console.log(shuju);
    		var list = shuju.data.tweetlist;
    		console.log(list);
    		console.log(list.length);
    		for(var i =0;i<list.length;i++){
    			//console.log("ddd");
	    		var str = "http://101.200.173.217:8080/FootBall"+
	    		list[i].defaultFilePath+list[i].thumbnailname;
	    		//console.log(list[i].defaultFileName);
    			var oImg = $("<img class='main-pic'/>");
    			oImg.attr("src",str)
    			//console.log(str);
    			var $div = $("<div class='kong'></div>");
    			var inDiv = $("<div class='pic1'></div>");
    			var $p = $("<p class='dis'></p>");
    			$p.html(list[i].content);
    			$div.append(inDiv);
    			inDiv.append(oImg);
    			$div.append($p);
    			$(".main:eq("+0+")").append($div);
    			oImg[0].onload = function(){
		    		myScroll.refresh();
    				
    			}
    		}
    	}
    })
}
