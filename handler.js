module.exports.helloWorld = (event, context, callback) => {
  callback(null, {
    body: `Secret is ${process.env.MY_SECRET}.\n`
  });
};
