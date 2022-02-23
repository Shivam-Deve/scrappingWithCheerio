const cheerio = require("cheerio");
const fs = require("fs");
const pdfKit = require("pdfkit")
const path = require("path");
const request = require("request");
const url = "https://www.geeksforgeeks.org/"
request(url, (err, res, html) => {
    if (!err) {
        scrap(html)
    } else {
        console.log(err)
    }
})
function scrap(html) {
    let $ = cheerio.load(html)
    let link = $("#hslider > li:nth-child(11) > a").attr("href")
    request(link, (err, res, html1) => {
        if (!err) {
            scrapAgain(html1)
        } else {
            console.log(err)
        }
    })
}
function scrapAgain(html) {
    let $ = cheerio.load(html)
    for (let i = 0; i < 50; i++) {
        let q = $(`#post-147496 > div > ol:nth-child(5) > li:nth-child(${i}) > a`).text()
        console.log(q)
    }

}