var SITE_TITLE = "喜欢玩";
var HOME_PATH = "h5.aikeke.com";
var GAME_URL = GAME_URL || window.location.href;
var PLAY_URL = PLAY_URL || "";
var GAME_ICON = PLAY_URL+"js11/icon.png";
var SHARE_TITLE = "最好玩的小游@戏就在喜欢玩";
var SHARE_DESC = "大量免费在线网页游@戏，不用下载，款款精品，快来跟你好友一起玩吧！";
var EXIT_TIPS_FLAG = true;
var FOLLOW_URL = "";
var RESOURCE_IMG_PATH = RESOURCE_IMG_PATH || "/images/";
var HORIZONTAL = false;
var COVER_SHOW_TIME = 3000;


function isWeixin(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		return true;
	} else {
		return false;
	}
}

function toggle(id) {
var el = document.getElementById(id);
var img = document.getElementById("arrow");
var box = el.getAttribute("class");
if(box == "hide"){
	el.setAttribute("class", "show");
	delay(img, RESOURCE_IMG_PATH + "arrowright.png", 400);
}
else{
	el.setAttribute("class", "hide");
	delay(img, RESOURCE_IMG_PATH + "arrowleft.png", 400);
}
}

function delay(elem, src, delayTime){
	window.setTimeout(function() {elem.setAttribute("src", src);}, delayTime);
}

function show_share(){
	show_share_page();	
	//toggle('play68box');
};

function box_show_share(){
	show_share_page();	
	//toggle('play68box');
};
function IOSplay68(){
	return navigator.userAgent.match(/IOSplay68/i);
}
function show_share_page(){
	if(window.Play68app){
	//安卓APP应用分亨
	// alert(GAME_URL+SHARE_DESC+SHARE_TITLE+GAME_ICON);
	 window.Play68app.WXShare(GAME_URL,SHARE_TITLE,SHARE_DESC,GAME_ICON);
	 
	}else{
		if(IOSplay68()){//苹果应用分亨
			 function loadUserInfoView(share_ios){
				window.location.hash="play68://"+share_ios+"&"+EncodeUtf8(GAME_URL)+"&"+EncodeUtf8(SHARE_TITLE)+"&"+EncodeUtf8(SHARE_DESC)+"&"+EncodeUtf8(GAME_ICON); 
			 }
			 loadUserInfoView('para1:para2:para3:para4:');
			
		}else{
			wxqrP3.innerHTML = "&quot;" + SHARE_TITLE + "&quot;";
			wxqrImg.src = GAME_ICON;
			config_jiathis_config();
	
		    if(isWeixin() == true) {
				
				document.getElementById("share-wx").style.display = 'block';
			}else {		
			
				document.getElementById("wx-qr").style.display = 'block';
			}
	    }
	}
}




function closeshare(){
	document.getElementById("share-wx").style.display = 'none';
	if($("#s1").is(":hidden")){
		$("#xiaz").hide();	
	 }else{
		 $("#xiaz").show().removeClass("b");	
		 }

	
}
function closewx(){
	document.getElementById("wx-qr").style.display = 'none';
	if($("#s1").is(":hidden")){
		$("#xiaz").hide();	
	 }else{
		 $("#xiaz").show();	
		 }
}

function addShareWX() {
	var shareDiv = document.createElement("div");
	shareDiv.id = "share-wx";
	shareDiv.style.cssText = "background:rgba(0,0,0,0.8); position:fixed;top:0px; left:0px; right:0px; bottom:0px; z-index:10000;"+
		"text-align: center;font-family: Helvetica, Arial, Verdana, Microsoft Yahei, 微软雅黑, STXihei, 华文细黑, sans-serif;display:none";
	shareDiv.onclick= closeshare;
	document.body.appendChild(shareDiv);
	
		var shareP = document.createElement("p");
		shareP.style.cssText = "text-align:right;padding-left:10px;";
		shareDiv.appendChild(shareP);
		
			var shareImg = document.createElement("img");
			shareImg.src = RESOURCE_IMG_PATH + "shhare.png";
			shareImg.id = "share-wx-img";
			shareImg.style.cssText = "max-width:280px;padding-right:25px;";
			shareP.appendChild(shareImg);
			
		addShareButtons(shareDiv);

}

function showShareWXCallback() {
	var share_div = document.getElementById("share-wx");
	if( share_div ) { share_div.style.display = "none"; }
	var div = document.getElementById("share-wx-callback");
	if ( div ) {
		div.style.display = 'block';
		return;
	}
	var div = document.createElement("div");
	div.style.cssText = "background:rgba(0,0,0,0.8); position:fixed;top:0px; left:0px; right:0px; bottom:0px; z-index:10000;"+
		"text-align: center;font-family: Helvetica, Arial, Verdana, Microsoft Yahei, 微软雅黑, STXihei, 华文细黑, sans-serif;";
	div.id = "share-wx-callback";
	div.onclick = function(){ div.style.display = 'none'; };

	var title = document.createElement("h1");
	title.innerText = "分亨成功";
	title.style.cssText = "color:#FF5F44;margin-top:1em;";
	div.appendChild(title);

	var desc = document.createElement("h3");
	desc.innerHTML = "你的好友很快就会来<br />和你一起玩！"; 
	desc.style.cssText = "color:#FFFFFF;margin:0.5em";
	div.appendChild(desc);

	//var btn1 = document.createElement("input");
	//btn1.setAttribute("value", "关注我");
	//btn1.setAttribute("type", "button");
	var btn1 = document.createElement("div");
	btn1.innerHTML = "<h3>关注我们</h3>";
	btn1.style.cssText = "border-radius: 10px;-moz-border-radius: 10px;-webkit-border-radius: 10px;width: 12em;height:3em;line-height:3em;"
		+ "text-align: center;margin:1.5em auto;background: #da4453;color: #FFFFFF;";
	btn1.onclick = function(){ window.location.href = FOLLOW_URL; };
	div.appendChild(btn1);

	var btn2 = document.createElement("div");
	btn2.innerHTML = "<h3>更多游@戏</h3>";
	btn2.style.cssText = "border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;width: 12em;height:3em;line-height:3em;"
		+ "text-align: center;margin:1.5em auto;background: #f6bb42;color: #FFFFFF;";
	btn2.onclick = function(){ window.location.href = HOME_PATH; };
	div.appendChild(btn2);	

	var btn3 = document.createElement("div");
	btn3.innerHTML = "<h3>继续游@戏</h3>";
	btn3.style.cssText = "border-radius:10px;-moz-border-radius:10px;-webkit-border-radius:10px;width: 14em;height:3em;line-height:3em;"
		+ "text-align: center;margin:3em auto;background: #37bc9b;color: #FFFFFF;";
	btn3.onclick = function(){ div.style.display = 'none'; };
	div.appendChild(btn3);

	document.body.appendChild(div);
}

function addWXQR() {
	var wxqrDiv = document.createElement("div");
	wxqrDiv.style.cssText = "background:rgba(0,0,0,0.8); position:fixed;top:0px; left:0px; width:100%; height:" + document.documentElement.clientHeight + "px; z-index:10000; display:none;"
	wxqrDiv.id = "wx-qr";
	wxqrDiv.onclick = closewx;
	document.body.appendChild(wxqrDiv);
	
		/* var */ wxqrP1 = document.createElement("p");
		wxqrP1.style.cssText = "text-align:center;width:220px;color:#fff;margin:50px auto 0px auto;font:bold 16px Arial,Helvetica,Microsoft Yahei,微软雅黑,STXihei,华文细黑,sans-serif;";
		wxqrP1.innerHTML = "分亨给好友一起玩！";
		wxqrDiv.appendChild(wxqrP1);

		addShareButtons(wxqrDiv);
}

var _bingShareAchi = false;
function addShareButtons(divToAddTo) {
	var wxqrP2 = document.createElement("p");
		wxqrP2.style.cssText = "text-align:center;margin:16px;";
		divToAddTo.appendChild(wxqrP2);
		
		
			/* var */ wxqrImg = document.createElement("img");
			wxqrImg.src = GAME_ICON;
			wxqrImg.id = "wx-qr-img";
			wxqrImg.style.cssText = "max-width:75px";
			if(!HORIZONTAL || !isMobile()) {
				wxqrP2.appendChild(wxqrImg);
			}
			
		wxqrP3 = document.createElement("p");
		var shareTextWidth = "210px";
		if(HORIZONTAL == true) {
			shareTextWidth = "400px";
		}
		wxqrP3.style.cssText = "text-align:center;width:" + shareTextWidth + ";color:#fff;padding-top:5px;margin:0 auto;font: bold 20px Arial, Helvetica, Microsoft Yahei, 微软雅黑, STXihei, 华文细黑, sans-serif";
		wxqrP3.innerHTML = "&quot;" + SHARE_TITLE + "&quot;";
		divToAddTo.appendChild(wxqrP3);
		
		wxqrP4 = document.createElement("p");
		if(!isMobile()) {
			wxqrP4.style.cssText = "text-align:center;width:265px;padding-top:20px;margin:0 auto;font: bold 20px Arial, Helvetica, sans-serif";
		}
		else {
			wxqrP4.style.cssText = "text-align:center;width:212px;padding-top:20px;margin:0 auto;font: bold 20px Arial, Helvetica, sans-serif";
		}
		divToAddTo.appendChild(wxqrP4);
		
		//JiaThis Button BEGIN
		var jiathisDiv = document.createElement("div");
		jiathisDiv.className = "jiathis_style_32x32";}
		
/**屏蔽jiathi分亨		
		
		//mibao api Button share
		if(typeof(window.isMibao) != 'undefined' && window.isMibao){
			var btn1 = document.createElement("div");
	      	btn1.innerHTML = "<div></div>";
	      	btn1.style.cssText = "border-radius: 10px;-moz-border-radius: 10px;-webkit-border-radius: 10px;width: 55px;height:55px;margin-top:5px;"
				+ "text-align: center;margin:0 auto;background:url("+RESOURCE_IMG_PATH+"wx.jpg);";
	   		btn1.onclick = function(){
		   		if( typeof(window.wechatShare) ){
		   			window.wechatShare.weChatShareOnAndroid(SHARE_TITLE,SHARE_DESC,GAME_ICON,GAME_URL);
		    	}
		    };
		    var _br = document.createElement("br");
	    	wxqrP4.appendChild(btn1);
	    	wxqrP4.appendChild(_br);
	
		}
		
		wxqrP4.appendChild(jiathisDiv);
				
		if(!isMobile()) {
			var sharelink1 = document.createElement("a");
			sharelink1.className = "jiathis_button_weixin";
			sharelink1.innerHTML = "&nbsp";
			jiathisDiv.appendChild(sharelink1);

		}
		
		var sharelink2 = document.createElement("a");
		
		sharelink2.className = "jiathis_button_tsina";
		sharelink2.innerHTML = "&nbsp";
		jiathisDiv.appendChild(sharelink2);
	
		var sharelink3 = document.createElement("a");
		sharelink3.className = "jiathis_button_qzone";
		sharelink3.innerHTML = "&nbsp";
		jiathisDiv.appendChild(sharelink3);
		
		var sharelink4 = document.createElement("a");
		sharelink4.className = "jiathis_button_tqq";
		sharelink4.innerHTML = "&nbsp";
		jiathisDiv.appendChild(sharelink4);
		
		var sharelink5 = document.createElement("a");
		sharelink5.className = "jiathis_button_renren";
		sharelink5.innerHTML = "&nbsp";
		jiathisDiv.appendChild(sharelink5);
		
		
		var jiathisJS = document.createElement("script");
		jiathisJS.type = "text/javascript";
		jiathisJS.src = "http://v3.jiathis.com/code/jia.js?uid=1399105943150378"
		jiathisJS.charset = "utf-8";
		document.body.appendChild(jiathisJS);

		// 分亨成就
		if(!_bingShareAchi){
			_bingShareAchi=true;
			$(".jiathis_style_32x32 a").click(function(){
		    	var img = new Image();
				img.src = '?r=shareGame/setshare';
		    });
		}
		var f = function(node, imgSrc){
			node.removeClass('jtico');
			node.css({'background':'url('+imgSrc+') no-repeat left','text-align':'left','overflow': 'hidden','display': 'block!important','height': '32px!important','line-height': '32px!important','padding-left': '36px!important','cursor':'pointer','width':'32px','margin-left':'15px'});
		}
		setTimeout(function(){
			//修改微信图标
			f($(".jiathis_button_weixin span"),"/images/button_weixin.png");
            //修改新浪图标
			f($(".jiathis_button_tsina span"),"/images/button_tsina.png");
			//修改QQ空间图标
			f($(".jiathis_button_qzone span"),"/images/button_qzone.png");
			//修改腾讯微博图标
			f($(".jiathis_button_tqq span"),"/images/button_tqq.png");
			//修改人人网图标
			f($(".jiathis_button_renren span"),"/images/button_renren.png");
		},1500);
		config_jiathis_config();
}
**/

function config_jiathis_config() {
	jiathis_config={
		summary: SHARE_DESC,
		title: SHARE_TITLE + " #"+SITE_TITLE+"#",
		url: GAME_URL,
		pic: GAME_ICON,
		ralateuid:{
			"tsina":"5133079826"
		},
		shortUrl:false,
		hideMore:true,
		
	}
}

function addSidebar() {
	var play68boxDiv = document.createElement("div");
	play68boxDiv.id = "play68box";
	play68boxDiv.className = "hide";
	document.body.appendChild(play68boxDiv);
	
		var play68boxUl = document.createElement("ul");
		play68boxUl.id = "tab";
		play68boxDiv.appendChild(play68boxUl);
		
			var play68boxLi = document.createElement("li");
			play68boxUl.appendChild(play68boxLi);
		
				var play68boxArrowImg = document.createElement("img");
				play68boxArrowImg.id = "arrow";
				play68boxArrowImg.onclick = function() { toggle('play68box'); };
				play68boxArrowImg.src = RESOURCE_IMG_PATH + "arrowleft.png";
				play68boxLi.appendChild(play68boxArrowImg);
		
		var play68boxLinksDiv = document.createElement("div");
		play68boxLinksDiv.id = "links";
		play68boxDiv.appendChild(play68boxLinksDiv);
		
			var play68boxDecoDiv = document.createElement("div");
			play68boxDecoDiv.id = "deco";
			play68boxLinksDiv.appendChild(play68boxDecoDiv);
				
				var play68boxLogoImg = document.createElement("img");
				play68boxLogoImg.src = RESOURCE_IMG_PATH + "play68.png";
				play68boxLogoImg.style.cssText = "margin:0 15px; width:71px";
				play68boxDecoDiv.appendChild(play68boxLogoImg);
				
				var play68boxBt1Div = document.createElement("div");
				play68boxBt1Div.className = "bt";
				play68boxDecoDiv.appendChild(play68boxBt1Div);
					
					var play68boxBt1A = document.createElement("a");
					//play68boxBt1A.href = "#";
					play68boxBt1A.onclick = function() { toggle('play68box'); };
					play68boxBt1A.innerHTML = "继续游@戏";
					play68boxBt1Div.appendChild(play68boxBt1A);
					
				var play68boxBt2Div = document.createElement("div");
				play68boxBt2Div.className = "bt";
				play68boxDecoDiv.appendChild(play68boxBt2Div);
					
					var play68boxBt2A = document.createElement("a");
					//play68boxBt2A.href = "#";
					play68boxBt2A.onclick = box_show_share;
					play68boxBt2A.innerHTML = "分亨";
					play68boxBt2Div.appendChild(play68boxBt2A);
					
				var play68boxBt3Div = document.createElement("div");
				play68boxBt3Div.className = "bt";
				play68boxDecoDiv.appendChild(play68boxBt3Div);
					
					var play68boxBt3A = document.createElement("a");
					play68boxBt3A.href = HOME_PATH;
					play68boxBt3A.innerHTML = "更多游@戏";
					play68boxBt3Div.appendChild(play68boxBt3A);
	
}

function isMobile(){
	return navigator.userAgent.match(/android|iphone|ipad|ipod|blackberry|meego|symbianos|windowsphone|ucbrowser/i);
}
function IOSplay68(){
	return navigator.userAgent.match(/IOSplay68/i);
}
function isIOS() {
	return navigator.userAgent.match(/iphone|ipad|ipod|ios/i);
}
function isAndroid() {
	return navigator.userAgent.match(/android/i);
}

if(isWeixin()) {
	addShareWX();
}
else {
	addWXQR();
}

/*---------------------------- sdk --------------------------*/

// 绑定事件
function addEvent( elm, evType, fn, useCapture ) {
    if ( elm.addEventListener ) {
        elm.addEventListener( evType, fn, useCapture );//DOM2.0
    }
    else if ( elm.attachEvent ) {
        elm.attachEvent( 'on' + evType, fn );//IE5+
    }
    else {
        elm['on' + evType] = fn;//DOM 0
    }
}

addEvent(window, 'load', pageInit, false);

function isWeixin(){
	var ua = navigator.userAgent.toLowerCase();
	if(ua.match(/MicroMessenger/i)=="micromessenger") {
		return true;
	} else {
		return false;
	}
}

function isIos() {
	return navigator.userAgent.match(/iphone|ipod|ios|ipad/i);
}

function pageInit() {
	//checkInstallable();
	//disable save page
	//addDisableSavePage();
	checkMobile();
}

function checkMobile() {
    if(isMobile()) {
        displayType = "none";
        var mysheet=document.styleSheets[0];
        var myrules= mysheet.cssRules ? mysheet.cssRules: mysheet.rules;
        for (i=0; i<myrules.length; i++){
            if(myrules[i].selectorText ==".hideMobile"){
                myrules[i].style["display"] = displayType;
                break;
            }
        }
    }
}

function isMobile(){
	return navigator.userAgent.match(/android|iphone|ipad|ipod|blackberry|meego|symbianos|windowsphone|ucbrowser/i);
}

function setShareInfo(data) {
    SHARE_DESC = data.desc || SHARE_DESC;
    SHARE_TITLE = data.title || SHARE_TITLE;
	document.title = SHARE_TITLE;
	
	if(SHARE_DESC.indexOf('-喜欢玩')>0){
	 
	}else{
	  SHARE_DESC=SHARE_DESC+'-喜欢玩';
	}
	

    var _t = Number(data.showShareTime);
    if ( _t != 'NaN' && _t == 0 ) {
        show_share_page();
    }
    else if ( _t != 'NaN' && _t > 0 ) {
        setTimeout(function(){ show_share_page(); }, _t);
    }
}
// data : {type:类型, level:关数, score:分数}
// type : 1分数类型 2闯关类型 3闯关分数类型 4时间类型
var _ranData = {};
function ranking(data) {
	
	

}
//弹出获奖信息通知
function winning_info_show(){


}

//不弹出推荐游@戏
function close_Recommend(){
 
    window.no_show_Recommend=true;	
 
}
//端午节游@戏
function festival_game(){
	
}
//弹出推荐游@戏
function show_Recommend(){

}
function setachievement(obj){
  var data=JSON.stringify(obj);
	$.ajax({
   type: "POST",
   url: "index.php?r=achievement/achieve",
   data: "data="+data+"&game_id="+GAMEID,
   success: function(msg){
   	alert(msg);
   }
});
}

function pay(data){
	if( window.Play68app){ // 68app
		if(window.Play68app.pay) {
			window.Play68app.pay(GAMEID, 1, data.itemid, data.itemname, data.price, data.count);
		}
		else{
			LoginUi.setFlowTips("请重启应用更新后才能支付");
		}
	}
	// 手机
	else if(/ios|iphone|android/i.test(navigator.userAgent)){
		//window.location.host
		
		/*
		window.location.href = "http://"+window.location.hostname+"/api/alipay?"
		+"gameid="+GAMEID+"&serverid=1&itemid="+data.itemid+"&itemname="+data.itemname
		+"&price="+data.price+"&count="+data.count;
		*/
		var url = "/?r=site/pay/gameid/"+GAMEID+"/serverid/1/itemid/"
			+ data.itemid + "/itemname/" + data.itemname
			+ "/price/" + data.price + "/count/" + data.count;
		$(".pay").show();
		$(".pay iframe").attr('src', url);
	}
	else{
		LoginUi.setFlowTips("请在手机中进行游@戏支付");
	}
}
function paysucc(){
	LoginUi.setFlowTips("支付成功");
	$(".pay").hide();
    $(".pay iframe").attr('src', '');
}
function paycencel(){
	$(".pay").hide();
    $(".pay iframe").attr('src', '');
}

function MoregameCallback(){
	if(isMobile()){
		if(!window.Play68app){//APP不显示下载引导
			if(isIos()){
				//苹果微信关注
			   	if(isWeixin()){
					   if(window.is_gongzhonghao){
						   //已经关注微信公众号跳转首页
							_czc.push(["_trackEvent","更多","更多点击","IOS老用户跳转首页","",""]);
							window.location.href='/';
					   }else{
					      _czc.push(["_trackEvent","更多","更多点击","同意关注公众号IOS","",""]);
						  window.location.href='/?lai=geyouc';
					   }
				
				}else{
					window.location.href='/';
				}
			}else{
				if(isWeixin()){
				      if(window.is_gongzhonghao){
						  //已经关注微信公众号跳转首页
					      _czc.push(["_trackEvent","更多","更多点击","Android老用户跳转首页","",""]);
						  window.location.href='/';
					  }else{
						 //微信关注公众号
						 _czc.push(["_trackEvent","更多","更多点击","同意关注公众号Android","",""]);
						 window.location.href='/?lai=geyouc';
					  }
				}else{
					//安卓机网页下载
	
						_czc.push(["_trackEvent","更多","更多点击","同意安卓机网页下载Android APP","",""]);
					 	window.location.href='http://game.0774.cc/play.apk';

				}
			} 
		}else{
			window.location.href='/';
		} 
	}else{
		    window.location.href='/';
		        /*
				//PC机直接弹出应用宝
				_czc.push(["_trackEvent","更多","更多点击","同意PC下载APP","",""]);
				window.location.href='http://a.app.qq.com/o/simple.jsp?pkgname=com.play68';
				*/
	}
	
}

function ly_set_share(data){
	SHARE_DESC = data.desc || SHARE_DESC;
    SHARE_TITLE = data.title || SHARE_TITLE;
	document.title = SHARE_TITLE;
	
	if(SHARE_DESC.indexOf('-喜欢玩')>0){
	 
	}else{
	  SHARE_DESC=SHARE_DESC+'-喜欢玩';
	}
	// spec param
	if( data.specParam && /^\w+$/.test(data.specParam) ) {
		window.SHARE_SPEC_PARAM = data.specParam;
    }
}

function ly_set_share(data){
	SHARE_DESC = data.desc || SHARE_DESC;
    SHARE_TITLE = data.title || SHARE_TITLE;
	document.title = SHARE_TITLE;
	
	if(SHARE_DESC.indexOf('-喜欢玩')>0){
	 
	}else{
	  SHARE_DESC=SHARE_DESC+'-喜欢玩';
	}
	// spec param
	if( data.specParam && /^\w+$/.test(data.specParam) ) {
		window.SHARE_SPEC_PARAM = data.specParam;
    }
}

// 接受sdk回调
function onmessage(e) {
    var _fns = {
        'go_home' : function() {MoregameCallback(); } ,
        'share'  : function() { show_share_page(); } ,
        'setShareInfo' : function(args) { setShareInfo(args); },
    	'setHorizontal' : function(args) { HORIZONTAL = args; },
    	'ranking' : function(args) { ranking(args); },
    	'pay' : function(args) { pay(args); },
    	'alipaysucc' : function(args) { paysucc(args); },
    	'alipaycencel' : function(args) { paycencel(args); },
    	'weixinpaysucc' : function(args) { paysucc(args); },
    	'weixinpaycencel' : function(args) { paycencel(args); },
    	'showRanking' : function(args) { showRanking(); },
		'closeRecommend':function(args){close_Recommend();},
		'festivalgame':function(args){festival_game();},
		'ly_set_share':function(args){ ly_set_share(args); },
		'setCrazycaitu':function(args){ setCrazycaitu(args); },
		'getCrazycaitu':function(args){ getCrazycaitu(); }
    };
   // console.log(e);
    switch( e.data.op_type ) {
    case 'fn':
        (_fns[e.data.value.fn]).apply(window, e.data.value.args);
        break;
    default:
        //console.log(e);
    }
}

addEvent( window, 'message', onmessage, false);

function EncodeUtf8(s1){  
		// escape函数用于对除英文字母外的字符进行编码。如“Visit W3School!”->"Visit%20W3School%21"  
		var s = escape(s1);  
		var sa = s.split("%");//sa[1]=u6211  
		var retV ="";  
		if(sa[0] != "")  
		{  
			retV = sa[0];  
		}  
		for(var i = 1; i < sa.length; i ++)  
		{  
			if(sa[i].substring(0,1) == "u")  
			{  
				retV += Hex2Utf8(Str2Hex(sa[i].substring(1,5)));  
				if(sa[i].length>=6)  
				{  
					retV += sa[i].substring(5);  
				}  
			}  
			else retV += "%" + sa[i];  
		}  
		return retV;  
}  

function Str2Hex(s){  
		var c = "";  
		var n;  
		var ss = "0123456789ABCDEF";  
		var digS = "";  
		for(var i = 0; i < s.length; i ++)  
		{  
			c = s.charAt(i);  
			n = ss.indexOf(c);  
			digS += Dec2Dig(eval(n));    
		}  
		return digS;  
} 
 
function Dec2Dig(n1){  
		var s = "";  
		var n2 = 0;  
		for(var i = 0; i < 4; i++)  
		{  
			n2 = Math.pow(2,3 - i);  
			if(n1 >= n2)  
			{  
				s += '1';  
				n1 = n1 - n2;  
			}  
			else  
			s += '0';  
			  
		}  
		return s;                   
}  

function Dig2Dec(s){  
		var retV = 0;  
		if(s.length == 4)  
		{  
			for(var i = 0; i < 4; i ++)  
			{  
				retV += eval(s.charAt(i)) * Math.pow(2, 3 - i);  
			}  
			return retV;  
		}  
		return -1;  
}
  
function Hex2Utf8(s){  
		var retS = "";  
		var tempS = "";  
		var ss = "";  
		if(s.length == 16)  
		{  
			tempS = "1110" + s.substring(0, 4);  
			tempS += "10" +  s.substring(4, 10);  
			tempS += "10" + s.substring(10,16);   
			var sss = "0123456789ABCDEF";   
			for(var i = 0; i < 3; i ++)   
			{   
				retS += "%";   
				ss = tempS.substring(i * 8, (eval(i)+1)*8);   
				retS += sss.charAt(Dig2Dec(ss.substring(0,4)));   
				retS += sss.charAt(Dig2Dec(ss.substring(4,8)));   
			}   
			return retS;   
		}   
		return "";   
}

function setCrazycaitu(id){

	res_level(id.id);
	
}

function getCrazycaitu(){
	
	var level=init_level();
	return level;
}



//记录《疯狂猜图之美剧》玩的关数,每进一关调用一次

function res_level(id){
   
	var game_url_crazy =GAME_URL.indexOf('?');
	if(game_url_crazy > 0){
		GAME_URL=GAME_URL.substr(0,game_url_crazy);
		GAME_URL=GAME_URL+"?crazy_id="+id+"&from_fri="+USERID+"&gameid="+GAMEID;
	}else{
		
		GAME_URL=GAME_URL+"?crazy_id="+id+"&from_fri="+USERID+"&gameid="+GAMEID;
	}
	

	
	
   
	
	$.ajax({
   		type: "POST",
  	    url: "?r=crazy_caitu/setlevel",
   		data:"gameid="+GAMEID+"&level="+id,
   		async:false,
   			success: function(msg){
   			
     			
   			}
	});
	
} 