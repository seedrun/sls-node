module.exports.helloWorld = (event, context, callback) => {
  callback(null, {
    body: 'Hello World!\n'
  });
};
