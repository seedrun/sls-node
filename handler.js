'use strict';

module.exports.helloWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: `This a Field test: ${process.env.MESSAGE}, secret is ${process.env.MY_SECRET}.\n`
  };

  callback(null, response);
};
