"use strict";

function checkJSON(jsonPath) {
    const fs = require("fs");
    const path = require("path");
    const json = require(jsonPath);

    const fileName = path.join(__dirname, "/resources/task_2/", "log.txt");
    const writeStream = fs.createWriteStream(fileName);

    const obj = {
        "flag": typeof json.flag === "boolean",
        "myPromises": Array.isArray(json.myPromises),
        "element": typeof json.element === "object",
        "screenshot": json.screenshot === null,
        "elementText": typeof json.elementText === "string",
        "counter": json.counter > 10,
        "config": json.config === "Common",
        "constant": json.const.toUpperCase().includes("FiRst".toUpperCase()),
        "parameters": json.parameters.length === 8,
        "description": json.description.length > 5 && json.description.length < 13,
    };

    let count = 0;
    for (let i in obj) {
        if (obj[i]) {
            count++;
            if (count === Object.keys(obj).length) {
                fs.unlink(fileName, (err) => {
                    if (err) {
                        throw err;
                    }
                });
                console.log("OK");
            }
        } else {
            writeStream.write(`Property "${i}" is incorrect: ${json[i]}\n`);
        }
    }
}

checkJSON("./resources/task_2/1.json");