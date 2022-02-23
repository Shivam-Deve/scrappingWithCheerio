const pdfkit = require("pdfkit")
const fs = require("fs")

let doc = new pdfkit();
doc.pipe(fs.createWriteStream("Issues.pdf"));
doc.text("Hello from issues")
doc.end()