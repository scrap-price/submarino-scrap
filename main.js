var request = require('request');
var cheerio = require('cheerio');

exports.getProduct = function(url, callback) {
    request(url, function(error, response, html) {
        if(!error) {
            var $ = cheerio.load(html);
            var product = {title:"", price:"", thumbnail:""};

            var details = $('.details-product');
            var mpTitle = details.children('.mp-title');
            var mpDetails = details.children('.mp-details');

            product.title = mpTitle.children('.prodTitle').children('span[itemprop=name]').text();

            product.price = $('.mp-pb-to').attr('data-partner-value');

            var mpPhotos = $('.mp-photos');
            product.thumbnail = mpPhotos.children('.carousel').children('.carousel-list').children().first().children('img[itemprop=thumbnail]').attr('data-szimg');
            if (product.thumbnail == null) {
                product.thumbnail = mpPhotos.children('.carousel').children('.carousel-list').children().first().children('img[itemprop=thumbnail]').attr('src');
            }

            callback(false, product);
        } else {
            callback(true, {error:"Cannot get product"});
        }
    });
};