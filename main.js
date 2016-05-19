'use strict';
require('es6-promise').polyfill();
var request = require('request'), cheerio = require('cheerio');

exports.getProduct = function(url) {
    return new Promise(function(fulfill, reject) {
        request(url, function(error, response, html) {
            if(!error) {
                var $ = cheerio.load(html),
        		product = {},
        		details = $('.details-product'),
        		mpTitle = details.children('.mp-title'),
        		mpPhotos = $('.mp-photos');

        		product.title = mpTitle.children('.prodTitle').children('span[itemprop=name]').text();
        		product.price = $('.mp-pb-to').attr('data-partner-value');
        		product.thumbnail = mpPhotos.children('.carousel').children('.carousel-list').children().first().children('img[itemprop=thumbnail]').attr('data-szimg');

                if (product.thumbnail === undefined) {
                    product.thumbnail = mpPhotos.children('.carousel').children('.carousel-list').children().first().children('img[itemprop=thumbnail]').attr('src');
                }

                fulfill(product);
            } else {
                reject({error:"Cannot get product"});
            }
        });
    });
};
