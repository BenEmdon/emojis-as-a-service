const express = require('express');
const rp = require('request-promise');

const request = (imagePath) => {
  return new Promise((resolve, reject) => {
    console.log(`image path was passed at: ${imagePath}`);
    const options = {
    method: 'POST',
    uri: `http://api.kairos.com/?source=${imagePath}`,
    headers: {
      app_id: process.env.API_ID,
      app_key: process.env.API_KEY,
      }
    };
    console.log(`Options: ${JSON.stringify(options, ' ', null)}`);
    rp(options)
    .then((response) => {
      console.log(`response`);
      resolve(response.frames[0].people)
    })
    .catch((error) => {
      console.log(`error`);
      reject(error);
    });
  });
};

module.exports = request;