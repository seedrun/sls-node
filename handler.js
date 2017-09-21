'use strict';

module.exports.helloWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: `Frank's fork3: ${process.env.MESSAGE}, secret is ${process.env.MY_SECRET}.\n`
  };

  callback(null, response);
};
