function batteryFn(){
	var remain = 0;
	var timer = setInterval(function(){
		remain++;
		var b_remain = parseInt(remain/10);
		for(i=0;i<b_remain;i++){
			$("#battery").children().eq(i).css("background","#0db1ff");
			$(".battery-number").html((i+1)*10 + "<span>%</span>");
		}
		if (b_remain > 10) {
			$("#battery").children().css("background","#fff");
			$(".battery-number").html("0<span>%</span>");
			remain = 0;
		}
	},80)
}
// these function just work for the test,you should close the interval in work
batteryFn();
weatherFn();

function pipeFn(){
	var p01_trans = 3;
	var p02_trans = 7;
	var p03_trans = 2;
	var p04_trans = 5;
	var timer = setInterval(function(){
		var img_src = "i/client/icon-arrow_02.png";
		var img_src_re = "i/client/icon-arrow_02_re.png";
		var img_attr = "i/client/icon-arrow_03.png";
		var img_attr_re = "i/client/icon-arrow_03_re.png";
		$(".pipe img").attr("src",img_src);
		$(".repipe img").attr("src",img_src_re);
		var weather = $("#weather span").html();
		if(weather === "sunny"){
			$("#pipe01").children().eq(p01_trans).attr("src",img_attr);
			$("#pipe03").children().eq(p03_trans).attr("src",img_attr_re);
			p01_trans--;
			p03_trans++;
			if (p01_trans < 0) {
				p01_trans = 3;
			}
			if(p03_trans > 2){
				p03_trans = 0;
			}
		}else{
			$("#pipe01 img").attr("src",img_src_re);
			$("#pipe03 img").attr("src",img_src);
			$("#pipe01").children().eq(p01_trans).attr("src",img_attr_re);
			$("#pipe03").children().eq(p03_trans).attr("src",img_attr);
			p01_trans++;
			p03_trans--;
			if (p01_trans > 3) {
				p01_trans = 0;
			}
			if(p03_trans < 0){
				p03_trans = 2;
			}
		}
		$("#pipe02").children().eq(p02_trans).attr("src",img_attr);
		if($("#time span:nth-child(2)").html() === "am"){
			$("#pipe04").children().eq(p04_trans).attr("src",img_attr);
			p04_trans--;
			if(p04_trans < 0){
				p04_trans = 5;
			}
			$("#bird").css("display","block");
		}else{
			$("#pipe04 img").attr("src","i/client/icon-arrow_01.png");
			$("#bird").css("display","none");
		}
		p02_trans--;
		if(p02_trans < 0){
			p02_trans = 7;
		}
	},200)
}
pipeFn();

function birdFn(){
	var i = 1;
	var timer = setInterval(function(){
		$("#bird").attr("src","i/client/bird_0"+i+".png");
		i++;
		if (i >2) {
			i = 1;
		}
	},1000)
}
birdFn()

function weatherFn(){
	var bol = false;
	var timer = setInterval(function(){
		bol = !bol;
		if(bol){
			$("#weather span").html("sunny");
			$("#time span:nth-child(2)").html("pm");
		}else{
			$("#weather span").html("cloudy");
			$("#time span:nth-child(2)").html("am");
		}

	},10000)
}

nextPagefn();
function nextPagefn(){
	$('body').on('keydown',function(e){
		// var e = event || window.event;
		switch(e.keyCode){
			case 13:
				console.log('test')
				window.location.href = "adminview.html";
			break;
		}
	});
}