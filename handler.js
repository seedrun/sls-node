module.exports.helloWorld = (event, context, callback) => {
  const response = {
    body: 'Hello world!',
  };

  callback(null, response);
};
