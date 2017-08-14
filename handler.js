module.exports.helloWorld = (event, context, callback) => {
  const response = {
    body: 'Hello world!\n',
  };

  callback(null, response);
};
