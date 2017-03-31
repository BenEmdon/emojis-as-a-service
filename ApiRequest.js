const express = require('express');
const rp = require('request-promise');

const request = (imagePath) => {
  return new Promise((resolve, reject) => {
    const options = {
    method: 'POST',
    uri: `http://api.kairos.com/?source=${imagePath}`,
    headers: {
      app_id: process.env.API_ID,
      app_key: process.env.API_KEY,
      }
    };
    console.log(options);
    rp(options)
    .then((response) => {
      resolve(response.frames[0].people)
    })
    .catch((error) => {
      reject(error);
    });
  });
};

module.exports = request;