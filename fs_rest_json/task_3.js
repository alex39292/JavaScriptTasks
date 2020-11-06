"use strict";

xlsxFromJson();

function xlsxFromJson() {
    const path = require("path");
    const fs = require("fs");
    const xlsx = require("node-xlsx");

    let inputPath;
    let outputPath;
    let files;
    let array = [...[]];

    if (process.argv[2] === "--inputDir") {
        inputPath = process.argv[3];
        files = findJsonFiles(inputPath);
    } else {
        inputPath = path.join(__dirname, "/resources/task_3/");
        files = findJsonFiles(inputPath);
    }
    if (process.argv[4] === "--outputDir") {
        inputPath = process.argv[5];
    } else {
        outputPath = path.join(__dirname, "/resources/task_3/");
    }

    for (let i in files) {
        const json = require(files[i]);
        traverse(json);
        const buffer = xlsx.build([{ name: "mySheetName", data: array }]);
        fs.writeFile(files[i].replace(/\.[^\.]+$/, '.xlsx'), buffer, (err) => {
            if (err) {
                throw err;
            }
        });

    }


    function traverse(obj) {
        let i;
        for (let k in obj) {
            i = obj[k];
            if (typeof i === "string" || typeof i === "number" || typeof i === "boolean") {
                array.push([], [k, i]);
            } else if (typeof i === "object") {
                array.push([], [k]);
                traverse(i);
            }
        }
    }

    function fromDir(startPath, filter, callback) {
        let filesArr = [];

        if (!fs.existsSync(startPath)) {
            console.log("no dir ", startPath);
            return;
        }

        var files = fs.readdirSync(startPath)
        for (let i = 0; i < files.length; i++) {
            let filename = path.join(startPath, files[i]);
            let stat = fs.lstatSync(filename);
            if (!stat.isDirectory()) {
                if (filter.test(filename)) {
                    callback(filename);
                }
            }
        }
    }

    function findJsonFiles(path) {
        let arr = [];
        fromDir(path, /\.json$/, function (filename) {
            arr.push(filename);
        })
        return arr;
    }
}