const url = "https://www.geeksforgeeks.org";
const request = require("request")
const cheerio = require("cheerio");
request(url, (err, res, html) => {
    if (!err) {
        scrap(html);
    } else {
        console.log(err)
    }
})
function scrap(html) {
    let $ = cheerio.load(html);
    let linkEl = $(".right-top .ql-list.recommended li a")
    let link = $(linkEl[1]).attr('href')
    console.log(link)
    request(link, (err, res, html) => {
        if (!err) {
            scrapAgain(html);
        } else {
            console.log(err)
        }
    })
}
function scrapAgain(html) {
    let $ = cheerio.load(html);
    let QuestionArr = $(" #post-153571 > div.text > ol:nth-child(11) li a");
    for (let i = 0; i < QuestionArr.length; i++) {
        let q = $(QuestionArr[i]).text();
        console.log(q)
    }
}