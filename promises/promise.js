"use strict";

function delay(ms) {
     return new Promise((resolve, reject) => {
        setTimeout(resolve, ms);
     });
}

delay(8000).then(() => console.info("Hello!"));