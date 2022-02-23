const request = require("request");
const cheerio = require("cheerio");
const chalk = require("chalk");
request("https://www.worldometers.info/coronavirus/", function (
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
  let contentArr = selectTool(".maincounter-number span");
  let totalCases = selectTool(contentArr[0]).text();
  let deathCases = selectTool(contentArr[1]).text();
  let recoveredCases = selectTool(contentArr[2]).text();
  console.log("Total_Cases -> ", chalk.gray(totalCases));
  console.log("Death_Cases -> ", chalk.red(deathCases));
  console.log("Recovered_Cases -> ", chalk.green(recoveredCases));
}
