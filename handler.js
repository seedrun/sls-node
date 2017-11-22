'use strict';

module.exports.main = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: `Hello Mm!\n`
  };

  callback(null, response);
};
