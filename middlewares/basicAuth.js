/**
 * Basic Authentication
 * @param {*} req
 * @param {*} res
 * @param {*} next
 * @returns
 */
function basicAuth(req, res, next) {
  if (!req.headers.authorization) {
    res.setHeader("WWW-Authenticate", 'Basic realm="test_website"');
    res.status(401).end("Unauthorized");
    return;
  }

  const auth = Buffer.from(req.headers.authorization.substring(6), "base64")
    .toString()
    .split(":");

  if (
    !auth ||
    auth[0] !== process.env.USERNAME ||
    auth[1] !== process.env.PASSWORD
  ) {
    res.setHeader("WWW-Authenticate", 'Basic realm="test_website"');
    res.status(401).end("Unauthorized");
    return;
  }

  next();
}

module.exports = basicAuth;
