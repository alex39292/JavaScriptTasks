"use strict"

const path = require("path")
const fs = require("fs")
const xlsx = require("node-xlsx")

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

let array = [...[]]
const json = require(inputPath)

traverse(json)

function traverse(o) {
    let i;
    for (let k in o) {
        i = o[k];
        if (typeof i === "string" || typeof i === "number" || typeof i === "boolean") {
            console.log(`${k} : ${i}`);
            array.push([], [k, i])
        } else if (typeof i === "object") {
            console.log(`${k} -->\n`)
            array.push([],[k])
            traverse(i);
        }
    }
}

const buffer = xlsx.build([{ name: "mySheetName", data: array }])

fs.writeFile(inputPath.replace(/\.[^\.]+$/, '.xlsx'), buffer, (err) => {
    if (err) {
        throw err
    }
})

function fromDir(startPath, filter, callback) {
    let filesArr = []

    if (!fs.existsSync(startPath)) {
        console.log("no dir ", startPath);
        return;
    }

    var files = fs.readdirSync(startPath)
    for (var i = 0; i < files.length; i++) {
        var filename = path.join(startPath, files[i])
        var stat = fs.lstatSync(filename)
        if (!stat.isDirectory()) {
            if (filter.test(filename)) {
                callback(filename)
            }
        }
    }
}

function findJsonFiles(path) {
    let arr = []
    fromDir(path, /\.json$/, function (filename) {
        arr.push(filename)
    })
    return arr
}