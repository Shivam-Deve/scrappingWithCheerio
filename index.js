const request = require("request");
const cheerio = require("cheerio");
const fs = require("fs")
const url = "https://www.espncricinfo.com/series/ipl-2020-21-1210595/match-results";
request(url, function (
  error,
  response,
  body
) {
  console.error("error:", error); // Print the error if one occurred
  console.log("statusCode:", response && response.statusCode); // Print the response status code if a response was received
  if (!error) {
    scrapData(body);
  }
});
function scrapData(html) {
  //fs.writeFileSync("./index.html", html)
  let $ = cheerio.load(html);
  let cardsArr = $(".match-info.match-info-FIXTURES div.status-text span")
  for (let i = 0; i < cardsArr.length; i++) {
    let x = $(cardsArr[i]).text()
    console.log(x)
  }
  // let t = selectTool(cardsArr[0]);
  // console.log(t)

}