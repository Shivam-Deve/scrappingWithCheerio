const url = "https://www.geeksforgeeks.org/amazon-interview-questions/";
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
    const $ = cheerio.load(html);
    let linkArr = $(".content.post-142257 ol li a")
    for (let i = 0; i < linkArr.length; i++) {
        let quest = $(linkArr[i]).text();
        console.log(quest)
    }
}