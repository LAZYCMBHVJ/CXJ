var audioEle = document.getElementsByTagName("audio");
var timer = null;
var flag1 = true,
	flag2 = true,
	flag3 = true,
	flag4 = true,
	flag5 = true,
	flag6 = true;
var mySwiper = new Swiper('.swiper-container', {
	direction: "vertical",
	loop: false,
	initialSlide: 0,
	autoplayDisableOnInteraction: false,
	grabCursor: true,
	onInit: function(swiper) {
		swiperAnimateCache(swiper);
		swiperAnimate(swiper);
		//		alert(swiper.activeIndex);

	},
	onSlideChangeEnd: function(swiper) {
		swiperAnimate(swiper);
	
		if (swiper.activeIndex=="1") {
     	clearInterval(timer);
		$("#box").css({"display":"block"});
		var d=0;
		function amintate(){
		$("#box img").css("display","none");
		$("#box img").eq(d).css("display","block");
		if(d>46){
			d=0;
		}
			d++;
		}
		timer=setInterval(amintate,50);
     }
     if (swiper.activeIndex=="3") {
     	$(".outer").css({"display":"block"});
     } 

		if(swiper.activeIndex == 4) {
			$(".ward").eq(0).addClass("ward1")
			$(".ward").eq(1).addClass("ward2")
			$(".ward").eq(2).addClass("ward3")
			$(".ward").eq(3).addClass("ward4")
			$(".ward").eq(4).addClass("ward5")
			$(".ward").eq(5).addClass("ward6")
			$(".ward").eq(6).addClass("ward7")
			$(".ward").eq(7).addClass("ward8")
			$(".ward").eq(8).addClass("ward9")
			$(".ward").eq(9).addClass("ward10")
			$(".one .pic").css({
				animation: "one 0.2s linear forwards",
				animationDelay: "4.2s"
			})
			$(".one .shadow").css({
				animation: "shadow 0.5s linear forwards",
				animationDelay: "4.6s"
			})
			$(".two .pic").css({
				animation: "two 0.2s linear forwards",
				animationDelay: "4s"
			})
			$(".two .shadow").css({
				animation: "shadow 0.5s linear forwards",
				animationDelay: "4.4s"
			})
			$(".three .pic").css({
				animation: "three 0.2s linear forwards",
				animationDelay: "3.8s"
			})
			$(".three .shadow").css({
				animation: "shadow 0.5s linear forwards",
				animationDelay: "4.2s"
			})
			$(".four .pic").css({
				animation: "four 0.2s linear forwards",
				animationDelay: "3.6s"
			})
			$(".four .shadow").css({
				animation: "shadow 0.5s linear forwards",
				animationDelay: "4s"
			})
			$(".five .pic").css({
				animation: "five 0.2s linear forwards",
				animationDelay: "3.4s"
			})
			$(".five .shadow").css({
				animation: "shadow 0.5s linear forwards",
				animationDelay: "3.8s"
			})
			$(".six .pic").css({
				animation: "six 0.2s linear forwards",
				animationDelay: "3.2s"
			})
			$(".six .shadow").css({
				animation: "shadow 0.5s linear forwards",
				animationDelay: "3.6s"
			})
			$(".seven .pic").css({
				animation: "seven 0.2s linear forwards",
				animationDelay: "3s"
			})
			$(".seven .shadow").css({
				animation: "shadow 0.5s linear forwards",
				animationDelay: "3.4s"
			})
			$(".eight .pic").css({
				animation: "eight 0.2s linear forwards",
				animationDelay: "2.8s"
			})
			$(".eight .shadow").css({
				animation: "shadow 0.5s linear forwards",
				animationDelay: "3.2s"
			})
			$(".nine .pic").css({
				animation: "nine 0.2s linear forwards",
				animationDelay: "2.5s"
			})
			$(".nine .shadow").css({
				animation: "shadow 0.5s linear forwards",
				animationDelay: "3s"
			})
			$(".ten .pic").css({
				animation: "ten 0.2s linear forwards",
				animationDelay: "2.3s"
			})
			$(".ten .shadow").css({
				animation: "shadow 0.5s linear forwards",
				animationDelay: "2.8s"
			})
			$(".hand5 img").css({
				animation: "flash 1s linear infinite",
				animationDelay: "4.8s"
			})
		} else {
			$(".ward").eq(0).removeClass("ward1")
			$(".ward").eq(1).removeClass("ward2")
			$(".ward").eq(2).removeClass("ward3")
			$(".ward").eq(3).removeClass("ward4")
			$(".ward").eq(4).removeClass("ward5")
			$(".ward").eq(5).removeClass("ward6")
			$(".ward").eq(6).removeClass("ward7")
			$(".ward").eq(7).removeClass("ward8")
			$(".ward").eq(8).removeClass("ward9")
			$(".ward").eq(9).removeClass("ward10")
			$(".one .pic").css({
				animation: ""
			})
			$(".one .shadow").css({
				animation: ""
			})
			$(".two .pic").css({
				animation: ""
			})
			$(".two .shadow").css({
				animation: ""
			})
			$(".three .pic").css({
				animation: ""
			})
			$(".three .shadow").css({
				animation: ""
			})
			$(".four .pic").css({
				animation: ""
			})
			$(".four .shadow").css({
				animation: ""
			})
			$(".five .pic").css({
				animation: ""
			})
			$(".five .shadow").css({
				animation: ""
			})
			$(".six .pic").css({
				animation: ""
			})
			$(".six .shadow").css({
				animation: ""
			})
			$(".seven .pic").css({
				animation: ""
			})
			$(".seven .shadow").css({
				animation: ""
			})
			$(".eight .pic").css({
				animation: ""
			})
			$(".eight .shadow").css({
				animation: ""
			})
			$(".nine .pic").css({
				animation: ""
			})
			$(".nine .shadow").css({
				animation: ""
			})
			$(".ten .pic").css({
				animation: ""
			})
			$(".ten .shadow").css({
				animation: ""
			})
			$(".hand5 img").css({
				animation: ""
			})
		}

		if(swiper.activeIndex == 7) {
			$(".p81,.p82,.p83,.p84,.p85,.p86").css("display","block");
		}else{
			$(".p81,.p82,.p83,.p84,.p85,.p86").css("display","none");
		}
	}
});
$(".music").click(function() {
	if(flag3) {
		audioEle[0].pause();
		$(".music").removeClass("demo");
		$(".music img").get(0).src = "img/music_off.png";
		flag3 = false;
	} else {
		audioEle[0].play();
		//		audioEle[2].pause();
		$(".music").addClass("demo");
		$(".music img").get(0).src = "img/music_icon.png";
		flag3 = true;
		flag2 = true;
	}
});
//切换
var index=0;
var pareWidth =5.12;
function tab() {	
		$('.innter').animate({
			left: -pareWidth*index+"rem"
		})	
}
function next() {
	index++;
	if(index == $(".innter img").length){
	index = 0;
	$(".innter").css(
		{left: 0}
		)
	}
	else{
	tab();
	}
}
function prev() {
	index--;
	if(index < 0) {
		index=$(".innter img").length-1;
		$(".innter").css({
	    left: -pareWidth * index+"rem"
		})
	}
	else{
		tab();
	}	
}
$(".next").on("click", function() {
	next();					
});
$(".prev").on("click", function() {
	prev();					
});
$(".outer .btn").click(function(){
	index = $(".outer .btn").index($(this)[0]);
	tab();	
	$(".prev").css("display","block");
	$(".next").css("display","block");
	$(".outer_2").css("display","block");
	$(".x").css("display","block");
	$(".text3").css("display","none");
	$(".text1").css("display","none");
	$(".text2").css("display","none");
	$(".outer .btn").css("display","none");
	$(".outer_3 div").css("display","block");
	$(".outer_3").css("display","block");

});
$(".x").click(function(){
	$(".prev").css("display","none");
	$(".next").css("display","none");
	$(".outer_2").css("display","none");
	$(".x").css("display","none");
	$(".text3").css("display","block");
	$(".text1").css("display","block");
	$(".text2").css("display","block");
	$(".outer .btn").css("display","block");
	$(".outer_3 div").css("display","none");
	$(".outer_3").css("display","none");
})
$(".slide5 .pic").click(function() {
	$(".hand5 img").css({
		animation: ""
	})
})
$(".one .pic").click(function() {
	$(".detail-box img").eq(1).show(1000),
		$(".close img").eq(0).eq(0).show(1000)
})
$(".two .pic").click(function() {
	$(".detail-box img").eq(2).show(1000),
		$(".close img").eq(0).eq(0).show(1000)
})
$(".three .pic").click(function() {
	$(".detail-box img").eq(3).show(1000),
		$(".close img").eq(0).eq(0).show(1000)
})
$(".four .pic").click(function() {
	$(".detail-box img").eq(4).show(1000),
		$(".close img").eq(0).eq(0).show(1000)
})
$(".five .pic").click(function() {
	$(".detail-box img").eq(5).show(1000),
		$(".close img").eq(0).eq(0).show(1000)
})
$(".six .pic").click(function() {
	$(".detail-box img").eq(6).show(1000),
		$(".close img").eq(0).eq(0).show(1000)
})
$(".seven .pic").click(function() {
	$(".detail-box img").eq(7).show(1000),
		$(".close img").eq(0).eq(0).show(1000)
})
$(".eight .pic").click(function() {
	$(".detail-box img").eq(8).show(1000),
		$(".close img").eq(0).eq(0).show(1000)
})
$(".nine .pic").click(function() {
	$(".detail-box img").eq(9).show(1000),
		$(".close img").eq(0).show(1000)
})
$(".ten .pic").click(function() {
	$(".detail-box img").eq(10).show(1000),
		$(".close img").eq(0).show(1000)
})
$(".close img").click(function() {
	$(".detail-box img").hide(1000),
		$(".close img").eq(0).hide(1000)
})