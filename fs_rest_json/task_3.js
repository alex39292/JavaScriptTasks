"use strict"

const path = require("path")
const fs = require("fs")

let inputPath
let outputPath

if (process.argv[2] === "--inputDir") {
    inputPath = process.argv[3]
} else {
    inputPath = path.join(__dirname, "/resources/task_3/jsonToXlsx.json")
}
if (process.argv[4] === "--outputDir") {
    inputPath = process.argv[5]
} else {
    outputPath = path.join(__dirname, "/resources/task_3/")
}

const json = require("./resources/task_3/jsonToXlsx.json")

function r(json) {
    for (let i in json) {
        if (typeof json[i] !== "object" || Array.isArray(json[i])) {
            console.log(i + " - " + json[i])
        } else {
            if (Array.isArray(json[i])) {
                r(json[i])
            }
            r(json[i])
        }
    }
}

r(json)
