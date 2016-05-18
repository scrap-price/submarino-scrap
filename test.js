var sub = require('./main');
var url = "http://www.submarino.com.br/produto/124431005/smart-tv-led-65-samsung-65ju6000-ultra-hd-4k-com-conversor-digital-3-hdmi-2-usb-funcao-games-wi-fi?chave=Recviu-comprou_Hs14&nm_origem=rec_home_viu-comprou-1&nm_ranking_rec=3&WT.mc_id=HM_REC1_VT_2&DCSext.recom=Neemu_home_viu-comprou-2";

sub.getProduct(url).then(function(product) {
	console.log(product);
}, function(err) {
	console.log(err);
});