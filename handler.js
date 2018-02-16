'use strict';

module.exports.helloWorld = (event, context, callback) => {
  const response = {
    statusCode: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    body: `This is ready to go live: ${process.env.MESSAGE}, secret is ${process.env.MY_SECRET}.\n`
  };
  
  throw 'Error';

  callback(null, response);
};
