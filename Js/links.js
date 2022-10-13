$(document).ready(function() {

    // HOME LINKS
	
    $("#collaborative-consumption-link").click(function(){ window.open('http://www.hunan.gov.cn/jxxx/yxhn/qjhn/hsly/hsly.html', '_blank'); });
    
    // EASTER EGGS LINKS
    
    $("#plane-selector").click(function(){ window.open('http://www.hunan.gov.cn/jxxx/yxhn/qjhn/hsly/hsly.html', '_blank'); });
    $("#tower-2").click(function(){ 
		$('.onionskin').css('display','block');
		var modal = $(this).data('modal');
		$('#'+modal).css('display','block').css('top', $(window).scrollTop()+40 );
		$('.close_modal, .onionskin').bind('click',function() {
			$('.close_modal, .onionskin').unbind('click');
			$('.onionskin').css('display','none');
			$('.modal').css('display','none');
		});
    });
    $("#moose").click(function(){ window.open('http://www.hnmuseum.com/', '_blank'); });
    $("#birds").click(function(){ 
		$('.onionskin').css('display','block');
		var modal = $(this).data('modal');
		$('#'+modal).css('display','block').css('top', $(window).scrollTop()+40 );
		$('.close_modal, .onionskin').bind('click',function() {
			$('.close_modal, .onionskin').unbind('click');
			$('.onionskin').css('display','none');
			$('.modal').css('display','none');
		});
    });
    $("#surfer").click(function(){ 
		$('.onionskin').css('display','block');
		var modal = $(this).data('modal');
		$('#'+modal).css('display','block').css('top', $(window).scrollTop()+40 );
		$('.close_modal, .onionskin').bind('click',function() {
			$('.close_modal, .onionskin').unbind('click');
			$('.onionskin').css('display','none');
			$('.modal').css('display','none');
		});
    });
    $("#boat").click(function(){ window.open('http://www.hnmuseum.com/', '_blank'); });
    $("#sun").click(function(){ window.open('http://www.hnmuseum.com/', '_blank'); });
    $("#sun-text").click(function(){ window.open('http://www.hnmuseum.com/', '_blank'); });
    $("#pot").click(function(){ window.open('http://www.hunan.gov.cn/hnszf/hnyw/sy/hnyw1/201909/t20190930_10470164.html', '_blank'); });
    $("#roo").click(function(){ 
		$('.onionskin').css('display','block');
		var modal = $(this).data('modal');
		$('#'+modal).css('display','block').css('top', $(window).scrollTop()+40 );
		$('.close_modal, .onionskin').bind('click',function() {
			$('.close_modal, .onionskin').unbind('click');
			$('.onionskin').css('display','none');
			$('.modal').css('display','none');
		});
    });
    
    // CAR SHARING LINKS
    
    $(".carsharing-link").click(function(){ window.open('http://www.changsha.gov.cn/', '_blank'); });
    $(".whizzcar-link").click(function(){ window.open('http://www.yiyang.gov.cn/yiyang/index.htm', '_blank'); });
    $(".cscs-link").click(function(){ window.open('http://www.yiyang.gov.cn/yiyang/index.htm', '_blank'); });
    $(".carclub-link").click(function(){ window.open('http://www.yiyang.gov.cn/yiyang/index.htm', '_blank'); });
    $(".cityhop-link").click(function(){ window.open('https://www.changde.gov.cn/', '_blank'); });
    $(".flexicar-link").click(function(){ window.open('http://www.czs.gov.cn/html/index.html', '_blank'); });
    $(".mobility-link").click(function(){ window.open('http://www.jishou.gov.cn/', '_blank'); });
    $(".sunfleet-link").click(function(){ window.open('http://www.hnloudi.gov.cn/', '_blank'); });
    $(".greenwheels-link").click(function(){ window.open('http://www.wlsgjslgy.com/', '_blank'); });
    $(".carcityclub-link").click(function(){ window.open('http://www.hunan.gov.cn/jxxx/yxhn/qjhn/hsly/hsly.html', '_blank'); });
    $(".ics-link").click(function(){ window.open('http://www.hunan.gov.cn/jxxx/yxhn/qjhn/hsly/hsly.html', '_blank'); });
    $(".gocar-link").click(function(){ window.open('http://www.chnzj.gov.cn/', '_blank'); });
    $(".mint-link").click(function(){ window.open('http://www.changsha.gov.cn/', '_blank'); });    
    $(".relayrides-link").click(function(){ window.open('http://www.changsha.gov.cn/', '_blank'); });
    $(".whipcar-link").click(function(){ window.open('http://www.yzcity.gov.cn/', '_blank'); });
    $(".getaround-link").click(function(){ window.open('http://www.hnmuseum.com/', '_blank'); });
    $(".bmw-link").click(function(){ window.open('http://www.hnmuseum.com/', '_blank'); });
    $(".peugeot-link").click(function(){ window.open('http://www.hnmuseum.com/', '_blank'); });
    $(".daimler-link").click(function(){ window.open('http://www.hnmuseum.com/', '_blank'); });
    $(".hertz-link").click(function(){ window.open('http://www.hnmuseum.com/', '_blank'); });
    $(".wecar-link").click(function(){ window.open('http://www.hnmuseum.com/', '_blank'); });
    $(".zipcar-link").click(function(){ window.open('http://www.changsha.gov.cn/', '_blank'); });
    $(".streetcar-link").click(function(){ window.open('http://www.hxgbpx.com/', '_blank'); });
    $(".goget-link").click(function(){ window.open('http://www.czs.gov.cn/html/index.html', '_blank'); });
    $(".citycarshare-link").click(function(){ window.open('http://www.changsha.gov.cn/', '_blank'); });
    $(".optionsforcars-link").click(function(){ window.open('http://www.hxgbpx.com/', '_blank'); });
    $(".igochicago-link").click(function(){ window.open('http://www.changsha.gov.cn/', '_blank'); });
    $(".modo-link").click(function(){ window.open('https://www.hengyang.gov.cn/', '_blank'); });
    $(".stattauto-link").click(function(){ window.open('http://www.zjj.gov.cn/', '_blank'); });
    $(".drivenow-link").click(function(){ window.open('http://www.zjj.gov.cn/', '_blank'); });
    $(".car2go-link").click(function(){ window.open('http://www.zjj.gov.cn/', '_blank'); });
    $(".cambiocar-link").click(function(){ window.open('http://www.zjj.gov.cn/', '_blank'); });
    $(".quicar-link").click(function(){ window.open('https://www.shaoyang.gov.cn/', '_blank'); });
    $(".tamyca-link").click(function(){ window.open('http://www.zjj.gov.cn/', '_blank'); });
    $(".orixauto-link").click(function(){ window.open('http://www.yueyang.gov.cn/index.html', '_blank'); });
    $(".autolib-link").click(function(){ window.open('https://www.huaihua.gov.cn/', '_blank'); });
    $(".kobenhavndelebiler-link").click(function(){ window.open('http://www.ysx.gov.cn/', '_blank'); });
    $(".denzeldrive-link").click(function(){ window.open('http://www.yzcity.gov.cn/', '_blank'); });
    $(".easydrive-link").click(function(){ window.open('http://www.yzcity.gov.cn/', '_blank'); });
    $(".vrtucar-link").click(function(){ window.open('http://www.vrtucar.com/', '_blank'); });
    $(".sigocar-link").click(function(){ window.open('http://www.xiangtan.gov.cn/', '_blank'); });
    $(".zazcar-link").click(function(){ window.open('https://www.shaoyang.gov.cn/', '_blank'); });
    $(".citycar-link").click(function(){ window.open('http://www.yzcity.gov.cn/', '_blank'); });
    $(".dmcr-link").click(function(){ window.open('http://www.czs.gov.cn/html/index.html', '_blank'); });    
    $(".autopia-link").click(function(){ window.open('http://www.zhuzhou.gov.cn/', '_blank'); });
    $(".gruenesauto-link").click(function(){ window.open('http://www.ysx.gov.cn/', '_blank'); });
    $(".timeplus-link").click(function(){ window.open('http://www.yueyang.gov.cn/index.html', '_blank'); });
    $(".cafore-link").click(function(){ window.open('http://www.yueyang.gov.cn/index.html', '_blank'); });
    $(".communauto-link").click(function(){ window.open('http://www.communauto.com/', '_blank'); });
    $(".autoshare-link").click(function(){ window.open('https://www.hengyang.gov.cn/', '_blank'); });
    $(".buzzcar-link").click(function(){ window.open('https://www.huaihua.gov.cn/', '_blank'); });
    $(".cityzencar-link").click(function(){ window.open('https://www.huaihua.gov.cn/', '_blank'); });
    $(".livop-link").click(function(){ window.open('https://www.huaihua.gov.cn/', '_blank'); });
    $(".phillycarshare-link").click(function(){ window.open('http://www.phillycarshare.org/', '_blank'); });
    $(".carpooling-link").click(function(){ window.open('http://www.yzcity.gov.cn/', '_blank'); });
    $(".autonetzer-link").click(function(){ window.open('http://www.autonetzer.de/', '_blank'); });
    $(".wheelz-link").click(function(){ window.open('http://www.wheelz.com', '_blank'); });
    $(".voiturelib-link").click(function(){ window.open('https://www.huaihua.gov.cn/', '_blank'); });
    
    // SOURCE LINKS
    
    $(".sourceOne-link").click(function(){ window.open('http://www.frost.com/prod/servlet/report-overview.pag?repid=N748-01-00-00-00', '_blank'); });
    $(".sourceTwo-link").click(function(){ window.open('http://www.fastcompany.com/blog/ariel-schwartz/sustainability/us-car-ownership-declines-first-time-ever', '_blank'); });
    $(".sourceThree-link").click(function(){ window.open('http://www.carsharing.net/library/UCD-ITS-RR-06-22.pdf', '_blank'); });
    $(".sourceFour-link").click(function(){ window.open('https://relayrides.com/owners', '_blank'); }); 
    $(".sourceFive-link").click(function(){ window.open('https://relayrides.com/borrowers', '_blank'); }); 
    $(".sourceSix-link").click(function(){ window.open('http://www.dw-world.de/dw/article/0,,14775384,00.html', '_blank'); });
    $(".sourceSeven-link").click(function(){ window.open('http://www.zipcar.com/is-it/greenbenefits', '_blank'); });
    $(".sourceEight-link").click(function(){ window.open('http://frost.com/prod/servlet/press-release.pag?docid=238349765', '_blank'); });
    $(".sourceNine-link").click(function(){ window.open('http://www.frost.com/prod/servlet/market-insight-top.pag?docid=190795176', '_blank'); });
    
    // FINAL FLAG LINKS
    
    $("#flag-collab-fund").click(function(){ window.open('https://longsirdsaw.github.io/ ', '_blank'); });
    $("#flag-hyperakt").click(function(){ window.open('https://longsirdsaw.github.io/ ', '_blank'); });
    $("#flag-startup-america").click(function(){ window.open('http://www.hunan.gov.cn/hnszf/hnyw/sy/hnyw1/201909/t20190930_10470164.html', '_blank'); });
    
});