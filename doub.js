function doub() {
var res={};
var items=[];
refreshX5WebView('');
items.push({
	title: '',
    desc:'240&&float',
    url:'',
    col_type: 'x5_webview_single'
});
var html=getResCode();
try{
var thumb = parseDomForHtml(html,"rss&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net").replace("img.maccms.com","3.17kanju.com");if(MY_URL.indexOf("pangniaozyw")!=-1||MY_URL.indexOf("leshizyw")!=-1||MY_URL.indexOf("9191zy")!=-1){thumb="https://tu.tianzuida.com/pic/"+thumb;}else if(MY_URL.indexOf("lby")!=-1){thumb.indexOf("http")!=-1?thumb=thumb:thumb="http://cj.lby.pet/"+thumb};
items.push({title:'剧情简介：',
desc:parseDomForHtml(html,"rss&&des&&Text"),
pic_url:thumb,
url:thumb,
col_type:'pic_1'
});
var conts=parseDomForArray(html,'rss&&dl&&dd');
var url=parseDomForHtml(html,'rss&&id&&Text');
for(var i=0;i<conts.length;i++){
var list=conts[i].split(">\n")[1].split("\n<")[0].split("#");
var flag=parseDomForHtml(conts[i], "body&&dd&&flag");
if(list!=null){
items.push({
title:flag=='qdyun'?flag+" 不显示播放的需刷新一次网页才能播":flag,
col_type:'text_1'});
var url={};
for(var j=0;j<list.length;j++){
if(list[j].split('$')[1]!=null){url=list[j].split('$')[1];}else{url=list[j].split('$')[0];}
if(MY_URL.indexOf('leduozy')!=-1){url='https://api.leduotv.com/wp-api/glid.php?vid='+url}
if(flag=='ddyunp'){url='https://player.90mm.me/play.php?url='+url}
if(flag=='qdyun'){url='http://qdy.zt6a.cn/parse?resources='+url}
if(flag=='ppayun'||flag=='gangtiexia'){url=url.substring(0,4)=='http'?url.replace('683d2433ee134cde8063d50506c1a1b1','3bb24322f78b47dfb8723c13d46d45ee'):'https://wy.mlkioiy.cn/api/ShowVideoWy/3bb24322f78b47dfb8723c13d46d45ee/'+url}
if(flag=='tt10'){url='https://wy.mlkioiy.cn/api/ShowVideoMu/3bb24322f78b47dfb8723c13d46d45ee/'+url}
if(MY_URL.indexOf('yyid6080')!=-1||MY_URL.indexOf('p4kan')!=-1){if(flag=='xigua'||flag=='bjm3u8'){url='https://bbs.cnzv.cc/dp/mp4.php?url=http://list.47api.cn:90/qq/xigua.php?id='+url;}else if(flag=='qqkj'){url='https://bbs.cnzv.cc/dp/ck/ck.php?url=http://list.47api.cn:90/qq/mp4.php?id='+url;}else if(flag=='tudou'){url='https://sf1-ttcdn-tos.pstatp.com/obj/'+url+'#.mp4';}else{url=url};}
if(flag=='rrm3u8'){url='https://www.meiju11.com/ckplayerx/m3u8.php?url='+url}
if(flag=='xsp1'){url='https://jx.api.xhfhttc.cn/jx/?type=xsp1&url='+url}
if(flag=='bb'){url='https://jx.api.xhfhttc.cn/jx/?url='+url}
if(flag=='pll'){url='https://jx.baipiaozy.com/player/?url='+url}
if(flag=='msp'){url='https://titan.mgtv.com.bowang.tv/player/analysis.php?v='+url}
if(flag=='bilibili'){url='https://www.murl.us/?url='+url}
items.push({
title:list[j].split('$')[0].indexOf('http')!=-1?[j+1]:list[j].split('$')[0],
url:url.replace(/\n*/g,'')+`@lazyRule=.js:var src=input.replace(/amp;/g,"");if(src.indexOf("html")!=-1){var jiek="https://1717.ntryjd.net/0526/?url=";var fileUrl="https://cdn.jsdelivr.net/gh/lzk23559/Public_folder/parse.js";var js=fetch(fileUrl,{});eval(js);var url=yqjx.toUrl(jiek+src.split('"')[0]);url!=""?url:getUrl(jiek+src.split('"')[0]);}else if(src.indexOf("share")!=-1){var link=src.split("/share")[0];var fc=fetch(src,{}).replace("var purl","var main");if(fc.indexOf("main")!=-1){var mat=fc.match(/var main.*?;/)[0];eval(mat);main.indexOf("http")!=-1?main:link+main;}else{var main=fc.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];main.indexOf("http")!=-1?main:link+main};}else if(src.indexOf("meiju11")!=-1){fetch(input,{headers:{"Referer":"https://www.meiju11.com"}}).match(/url:.*?[\'\"](.*?)[\'\"]/)[1];}else if(src.indexOf("leduotv")!=-1){var pla=fetch(src,{}).split("var url=\'")[1].split("\'")[0];if(pla.indexOf("m3u8")!=-1){pla.split("=")[1]};}else if(src.indexOf("aHR0c")!=-1){decodeURIComponent(base64Decode(src.split("&")[0]));}else if(src.indexOf("haodanxia")!=-1||src.indexOf("cqzyw")!=-1){var ul=JSON.parse(fetch(src, {headers:{"User-Agent":"Dalvik/2.1.0"}, redirect:false, withStatusCode:true}));if(ul.statusCode=="302"){ul.headers.location[0];}else{src};}else if(src.indexOf("shenma4480")!=-1){var sm="https://www.shenma4480.com/"+fetch(src,{headers:{"Referer":"https://www.shenma4480.com"}}).match(/var u=\"(.*?)\"/)[1];fetch(sm,{headers:{"Referer":"https://www.shenma4480.com"}}).match(/url:.*?[\'\"](.*?)[\'\"]/)[1].replace(/[+]/g,"%20");}else if(src.indexOf("mlkioiy")!=-1){if(src.indexOf("ShowVideo")!=-1){var mlki=parseDomForHtml(fetch(src,{}),"body&&#dplayer&&result");var fileUrl ="https://cdn.jsdelivr.net/gh/lzk23559/rulehouse/pako-min.js";eval(fetch(fileUrl,{}));realUrl;}else{src+"#.mp4"};}else if(src.indexOf("ddyunp")!=-1||src.indexOf("90mm.me")!=-1){if(!fetch("hiker://files/rules/js/kem.js",{})){refreshX5WebView(src);"toast://请等待加载选集！";}else{var fileUrl="hiker://files/rules/js/kem.js";var ddjs=fetch(fileUrl,{});eval(ddjs);tools.DdyunPlayer.toUrl(src).replace("ddyunp.com","90mm.me")};}else if(src.indexOf("xsp1")!=-1){var pli=parseDomForHtml(fetch(src,{headers:{"Referer":"https://zz22x.com"}}),"body&&iframe&&src").split("url=")[1];var jiek="https://1717.ntryjd.net/0526/?url=";var fileUrl="https://cdn.jsdelivr.net/gh/lzk23559/Public_folder/parse.js";var js=fetch(fileUrl,{});eval(js);var url=yqjx.toUrl(jiek+pli);url!=""?url:getUrl(jiek+pli);}else if(src.indexOf("baipiaozy")!=-1||src.indexOf("bowang")!=-1){refreshX5WebView(src);"toast://请等待加载选集！";}else if(src.indexOf("murl")!=-1){refreshX5WebView(src);"toast://请等待加载选集！";}else if(src.indexOf("47api")!=-1){refreshX5WebView(src);"toast://请等待加载选集！";}else{src}`,
col_type:'text_2'});
}
}
}
}catch(e){}
res.data=items;
setHomeResult(res);
}
function doubss() {
var res = {};
var items = [];
refreshX5WebView("");
items.push({
	title: "",
	desc:"240&&float",
	url:"",
	col_type: "x5_webview_single"
	});
var html = getResCode();
//setError(html);
try{
var thumb = parseDomForHtml(html,"rss&&pic&&Text").replace("http://t.8kmm.com","https://www.wxtv.net").replace("img.maccms.com","3.17kanju.com");if(MY_URL.indexOf("pangniaozyw")!=-1||MY_URL.indexOf("leshizyw")!=-1||MY_URL.indexOf("9191zy")!=-1){thumb="https://tu.tianzuida.com/pic/"+thumb;}else if(MY_URL.indexOf("lby")!=-1){thumb.indexOf("http")!=-1?thumb=thumb:thumb="http://cj.lby.pet/"+thumb};
var typ = parseDomForHtml(html,"body&&type&&Text");
////
items.push({
title: '剧情简介：',
desc:parseDomForHtml(html, "rss&&des&&Text"),
pic_url:thumb,
url:thumb,
col_type: 'pic_1'
});
var conts=parseDomForArray(html,'rss&&dl&&dd');
var url=parseDomForHtml(html,'rss&&id&&Text');
for(var i = 0;i<conts.length;i++){
var list=conts[i].split(">\n")[1].split("\n<")[0].split("#");
var flag=parseDomForHtml(conts[i], "body&&dd&&flag");
if(list!=null){
items.push({
title:flag=='qdyun'?flag+" 不显示播放的需刷新一次网页才能播":flag,
col_type: 'text_1'
});
var url={};
for(var j = 0; j<list.length; j++){
if(list[j].split('$')[1]!=null){url=list[j].split('$')[1];}else{url=list[j].split('$')[0];}
if(MY_URL.indexOf('leduozy')!=-1){url='https://api.leduotv.com/wp-api/glid.php?vid='+url}
if(flag=='ddyunp'){url='https://player.90mm.me/play.php?url='+url}
if(flag=='qdyun'){url='http://qdy.zt6a.cn/parse?resources='+url}
if(flag=='ppayun'||flag=='gangtiexia'){url=url.substring(0,4)=='http'?url.replace('683d2433ee134cde8063d50506c1a1b1','3bb24322f78b47dfb8723c13d46d45ee'):'https://wy.mlkioiy.cn/api/ShowVideoWy/3bb24322f78b47dfb8723c13d46d45ee/'+url}
if(flag=='tt10'){url='https://wy.mlkioiy.cn/api/ShowVideoMu/3bb24322f78b47dfb8723c13d46d45ee/'+url}
if(MY_URL.indexOf('yyid6080')!=-1||MY_URL.indexOf('p4kan')!=-1){if(flag=='xigua'||flag=='bjm3u8'){url='https://bbs.cnzv.cc/dp/mp4.php?url=http://list.47api.cn:90/qq/xigua.php?id='+url;}else if(flag=='qqkj'){url='https://bbs.cnzv.cc/dp/ck/ck.php?url=http://list.47api.cn:90/qq/mp4.php?id='+url;}else if(flag=='tudou'){url='https://sf1-ttcdn-tos.pstatp.com/obj/'+url+'#.mp4';}else{url=url};}
if(flag=='rrm3u8'){url='https://www.meiju11.com/ckplayerx/m3u8.php?url='+url}
if(flag=='xsp1'){url='https://jx.api.xhfhttc.cn/jx/?type=xsp1&url='+url}
if(flag=='bb'){url='https://jx.api.xhfhttc.cn/jx/?url='+url}
if(flag=='pll'){url='https://jx.baipiaozy.com/player/?url='+url}
if(flag=='msp'){url='https://titan.mgtv.com.bowang.tv/player/analysis.php?v='+url}
if(flag=='bilibili'){url='https://www.murl.us/?url='+url}
items.push({
title:list[j].split('$')[0].indexOf('http')!=-1?[j+1]:list[j].split('$')[0],
url:url.replace(/\n*/g,'')+`@lazyRule=.js:var src=input.replace(/amp;/g,"");if(src.indexOf("html")!=-1){var jiek="https://1717.ntryjd.net/0526/?url=";var fileUrl="https://cdn.jsdelivr.net/gh/lzk23559/Public_folder/parse.js";var js=fetch(fileUrl,{});eval(js);var url=yqjx.toUrl(jiek+src.split('"')[0]);url!=""?url:getUrl(jiek+src.split('"')[0]);}else if(src.indexOf("share")!=-1){var link=src.split("/share")[0];var fc=fetch(src,{}).replace("var purl","var main");if(fc.indexOf("main")!=-1){var mat=fc.match(/var main.*?;/)[0];eval(mat);main.indexOf("http")!=-1?main:link+main;}else{var main=fc.match(/url:.*?[\'\"](.*?)[\'\"]/)[1];main.indexOf("http")!=-1?main:link+main};}else if(src.indexOf("meiju11")!=-1){fetch(input,{headers:{"Referer":"https://www.meiju11.com"}}).match(/url:.*?[\'\"](.*?)[\'\"]/)[1];}else if(src.indexOf("leduotv")!=-1){var pla=fetch(src,{}).split("var url=\'")[1].split("\'")[0];if(pla.indexOf("m3u8")!=-1){pla.split("=")[1]};}else if(src.indexOf("aHR0c")!=-1){decodeURIComponent(base64Decode(src.split("&")[0]));}else if(src.indexOf("haodanxia")!=-1||src.indexOf("cqzyw")!=-1){var ul=JSON.parse(fetch(src, {headers:{"User-Agent":"Dalvik/2.1.0"}, redirect:false, withStatusCode:true}));if(ul.statusCode=="302"){ul.headers.location[0];}else{src};}else if(src.indexOf("shenma4480")!=-1){var sm="https://www.shenma4480.com/"+fetch(src,{headers:{"Referer":"https://www.shenma4480.com"}}).match(/var u=\"(.*?)\"/)[1];fetch(sm,{headers:{"Referer":"https://www.shenma4480.com"}}).match(/url:.*?[\'\"](.*?)[\'\"]/)[1].replace(/[+]/g,"%20");}else if(src.indexOf("mlkioiy")!=-1){if(src.indexOf("ShowVideo")!=-1){var mlki=parseDomForHtml(fetch(src,{}),"body&&#dplayer&&result");var fileUrl ="https://cdn.jsdelivr.net/gh/lzk23559/rulehouse/pako-min.js";eval(fetch(fileUrl,{}));realUrl;}else{src+"#.mp4"};}else if(src.indexOf("ddyunp")!=-1||src.indexOf("90mm.me")!=-1){if(!fetch("hiker://files/rules/js/kem.js",{})){refreshX5WebView(src);"toast://请等待加载选集！";}else{var fileUrl="hiker://files/rules/js/kem.js";var ddjs=fetch(fileUrl,{});eval(ddjs);tools.DdyunPlayer.toUrl(src).replace("ddyunp.com","90mm.me")};}else if(src.indexOf("xsp1")!=-1){var pli=parseDomForHtml(fetch(src,{headers:{"Referer":"https://zz22x.com"}}),"body&&iframe&&src").split("url=")[1];var jiek="https://1717.ntryjd.net/0526/?url=";var fileUrl="https://cdn.jsdelivr.net/gh/lzk23559/Public_folder/parse.js";var js=fetch(fileUrl,{});eval(js);var url=yqjx.toUrl(jiek+pli);url!=""?url:getUrl(jiek+pli);}else if(src.indexOf("baipiaozy")!=-1||src.indexOf("bowang")!=-1){refreshX5WebView(src);"toast://请等待加载选集！";}else if(src.indexOf("murl")!=-1){refreshX5WebView(src);"toast://请等待加载选集！";}else if(src.indexOf("47api")!=-1){refreshX5WebView(src);"toast://请等待加载选集！";}else{src}`,
col_type: 'text_2'});
   }
  }
 }
////
} catch(e) {}
res.data=items;
setHomeResult(res);
}