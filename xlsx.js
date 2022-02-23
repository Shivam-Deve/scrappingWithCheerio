const xlsx = require("xlsx")
let name = "exel"
let student = [{
    name: "shivam",
    stack: "javascript",
    extras: "docker"
}, {
    name: "rahul",
    stack: "javascript",
    extras: "docker"
}, {
    name: "rishi",
    stack: "javascript",
    extras: "docker"
}]
let newWorkBook = xlsx.utils.book_new();
let newWorkSheet = xlsx.utils.json_to_sheet(student)
xlsx.utils.book_append_sheet(newWorkBook, newWorkSheet, name);
xlsx.writeFile(newWorkBook, "exel.xlsx")