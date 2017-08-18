module.exports.helloWorld = (event, context, callback) => {
  callback(null, {
    body: `${process.env.MESSAGE}.\n'
  });
};
