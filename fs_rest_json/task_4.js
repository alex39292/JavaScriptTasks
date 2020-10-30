"use strict";

const fetch = require("node-fetch");
const url = "http://www.groupkt.com/country/get/all";

async function getCountry() {
  const response = await fetch(url);

  if (response.ok) {
    const json = await response.json();
    json.RestResponse.result.forEach(value => {
      if (value.name === "Angola") {
        console.log(value.name, value.alpha2_code, value.alpha3_code);
        break;
      }
    });
  }
}

getCountry();