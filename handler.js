'use strict';

module.exports.main = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: `Hello ${process.env.PASSWORD}!\n`
  };

  callback(null, response);
};

