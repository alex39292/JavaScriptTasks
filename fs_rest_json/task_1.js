"use strict";

const path = require("path");
const fs = require("fs");

const filePath = path.join(__dirname, "/resources/task_1/", "text.txt");

function readEvenLine(filePath) {
    fs.readFile(filePath, "utf-8", (err, content) => {
        if (err) {
            throw err;
        }

        let str = "";
        content = content.toString().split("\n");
        content = content.filter((line, index) => index % 2 === 1)
            .forEach(element => str += `${element} `);

        console.log(str);
    });
}

readEvenLine(filePath);