'use strict';

module.exports.helloWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: 'Go Serverless v1.0! Your function executed successfully!',
  };

  callback(null, response);
};
