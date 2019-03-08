/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var urlmap = {};

var encode = function(longUrl) {
    let uniqueKey = Date.now().toString();
    urlmap[uniqueKey] = longUrl;
    return 'http://tinyurl.com/' + uniqueKey;
};

/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
    return urlmap[shortUrl.split('http://tinyurl.com/')[1]];
};

/**
 * Your functions will be called as such:
 * decode(encode(url));
 */
