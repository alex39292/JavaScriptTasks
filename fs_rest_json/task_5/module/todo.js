"use strict";

const path = require("path");
const fs = require("fs");
const jsonPath = path.join(__dirname, "/notes/notes.json");

//Accepts arguments : add, list, read, remove. And only for start app runs without arguments
exports.start = () => {
    const command = process.argv[2];

    switch (command) {
        case undefined:
            createDirAndJson();
            break;
        case "add":
            add();
            break;
        case "list":
            list();
            break;
        case "read":
            read();
            break;
        case "remove":
            remove();
            break;
        default: console.log("There is no registred command in my app");
    }

}

//Create a directory and a JSNO file in the module package
function createDirAndJson() {
    fs.mkdir(path.join(__dirname, "notes"), (err) => {
        if (err) {
            throw err;
        }
    });
    fs.writeFile(jsonPath, "[]", (err) => {
        if (err) {
            throw err;
        }
    });
    console.log("App started");
}

//Function accepts 2 arguments : title and body of new Note
//If the note exists in json file it returns message
function add() {
    const json = require(jsonPath);
    const title = process.argv[3];
    const body = process.argv[4];

    if (findTitle(json, title) === -1) {
        const note = {
            "title": title,
            "body": body
        };
    
        json.push(note);
        fs.writeFile(jsonPath, JSON.stringify(json), (err) => {
            if (err) {
                throw err;
            }
        });
    
        console.log(`ADD : "${title}" : "${body}"`);
    } else {
        console.log("This note is already written");
    }
}

//Returns all notes from JSON file
function list() {
    const json = require(jsonPath);
    console.log("LIST");
    const ln = "<---------------------->";

    json.forEach(element => {
        console.log(`title : ${element.title}\nbody : ${element.body}\n${ln}`);
    });
}

//Read note with title
//Accepts argument title
function read() {
    const title = process.argv[3];
    console.log(`READ "${title}" `);
    const json = require(jsonPath);
    const ln = "<---------------------->";
    const index = findTitle(json, title);
    
    index !== -1 ? console.log(`title : ${json[index].title}\nbody : ${json[index].body}\n${ln}`) :
    console.log("There is no note");
}

//Remove note with title
//Accepts argument title
function remove() {
    const title = process.argv[3];
    console.log(`REMOVE "${title}" `);
    const json = require(jsonPath);
    const index = findTitle(json, title);

    if (index !== -1) {
        json.splice(index, 1);
        fs.writeFile(jsonPath, JSON.stringify(json), (err) => {
            if (err) {
                throw err;
            }
        });
        console.log(`Removed note : ${index}`);
    } else {
        console.log("There is no note");
    }
}

//Find and check note if it exists in JSON file
function findTitle(json, title) {
    return json.findIndex(elem => elem.title === title);
}