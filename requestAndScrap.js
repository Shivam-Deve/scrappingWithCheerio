const cheerio = require("cheerio");
const request = require("request");
function requestAndScrap(url, selector) {
    request(url, (err, res, html) => {
        if (!err) {
            scrap(html)
        } else {
            console.log(err)
        }
    })
    function scrap(html) {
        let $ = cheerio.load(html);
        return $(selector)
    }
}
let selector = `#js-pjax-container > div.container-lg.p-responsive.mt-6 > ul > li:nth-child(1) > div > a`
const url = "https://github.com/topics"
let x = requestAndScrap(url, selector);
console.log(x.attr("href"));