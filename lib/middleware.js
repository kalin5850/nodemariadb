module.exports = {
  requestTime: (req, res, next) => {
    req.requestTime = Date.now();
    console.log("requstTime middleware: " + req.requestTime);
    next();
  },
  log: (req, res, next) => {
    console.log("Logging middleware......");
    next();
  },
  requireAuthenticatio: (req, res, next) => {
    console.log("Authenticatio middleware.......");
    next();
  },
};
