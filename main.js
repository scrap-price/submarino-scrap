'use strict';

var request = require('request'),
	cheerio = require('cheerio');

exports.getProduct = function(url, callback) {

	request(url, function(error, response, body) {

		if (!error) {

			var $ = cheerio.load(body),
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

			callback(product, false);

		} else {

			callback({
				error: 'Cannot get product'
			}, true);

		}

	});

};
