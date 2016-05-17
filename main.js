var request = require('request');
var cheerio = require('cheerio');

exports.getProduct = function(url) {
    request(url, function(error, response, html) {
        if(!error) {
            var $ = cheerio.load(html);
            var details = $('.details-product');
            
            var mpTitle = details.children('.mp-title');
            var mpDetails = details.children('.mp-details');
            var ProdTitle = mpTitle.children('.prodTitle').children('span[itemprop=name]').text();

            var lowPrice = mpDetails.children('meta[itemprop=lowPrice]').attr('content');
            var highPrice = mpDetails.children('meta[itemprop=highPrice]').attr('content');

            var mpPhotos = $('.mp-photos');
            var imgUrl = mpPhotos.children('.carousel').children('.carousel-list').children().first().children('img[itemprop=thumbnail]').attr('data-szimg');

            console.log(imgUrl);
        }
    });
};