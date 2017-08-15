module.exports.helloWorld = (event, context, callback) => {
  callback(null, {
    body: 'Go Serverless v1.0! Your function executed successfully!\n'
  });
};
