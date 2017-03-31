const express = require('express');
const rp = require('request-promise');

const request = (imagePath) => {
  return new Promise((resolve, reject) => {
    const options = {
    method: 'POST',
    uri: `http://api.kairos.com/?source=${imagePath}`,
    headers: {
      // app_id: process.env.API_ID,
      // app_key: process.env.API_KEY,
      app_id: '988ec441',
      app_key: '44ab978299df147fa20fa156cdfe6685',
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