const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs")
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595";
request(url, function (
    error,
    response,
    body
) {
    console.error("error:", error); // Print the error if one occurred
    console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
    if (!error) {
        scrap(body);
    }
    //console.log("body:", body); // Print the HTML for the Google homepage.
});
function scrap(html) {
    let selectTool = cheerio.load(html);
    let href = selectTool(`[data-hover="View All Results"]`).attr("href");
    href = "https://www.espncricinfo.com" + href
    console.log(href)
    request(href, function (
        error,
        response,
        html1
    ) {
        console.error("error:", error); // Print the error if one occurred
        console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
        if (!error) {

            scrapData(html1);
        }
        //console.log("body:", body); // Print the HTML for the Google homepage.
    });

}
function scrapData(html) {
    fs.writeFileSync("./index.html", html)
    let selectTool = cheerio.load(html);
    let cardsArr = selectTool(".match-info.match-info-FIXTURES div.status-text span")
    for (let i = 0; i < cardsArr.length; i++) {
        let x = selectTool(cardsArr[i]).text()
        console.log(x)
    }
    let t = selectTool(cardsArr[0]);
    console.log(t)

}