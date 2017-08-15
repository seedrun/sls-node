module.exports.helloWorld = (event, context, callback) => {
  callback(null, {
//    body: process.env.MESSAGE + ' ' + '\n',
    body: `${process.env.MESSAGE} Secret ${process.env.MY_SECRET}\n`
  });
};
