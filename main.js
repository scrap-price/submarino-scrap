var request = require('request');
var cheerio = require('cheerio');

exports.getProduct = function(url, callback) {
    request(url, function(error, response, html) {
        if(!error) {
            var $ = cheerio.load(html);
            var product = {title:"", lowPrice:"", highPrice:"", thumbnail:""};

            var details = $('.details-product');
            var mpTitle = details.children('.mp-title');
            var mpDetails = details.children('.mp-details');

            product.title = mpTitle.children('.prodTitle').children('span[itemprop=name]').text();

            product.lowPrice = mpDetails.children('meta[itemprop=lowPrice]').attr('content');
            product.highPrice = mpDetails.children('meta[itemprop=highPrice]').attr('content');

            var mpPhotos = $('.mp-photos');
            product.thumbnail = mpPhotos.children('.carousel').children('.carousel-list').children().first().children('img[itemprop=thumbnail]').attr('data-szimg');
            
            callback(product, false);
            
        } else {
            callback({erro:"Cannot get product"}, true);
        }
    });
};