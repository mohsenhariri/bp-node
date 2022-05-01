const root = (req, res) => {
  const ip =
    req.ip ||
    req.socket.remoteAddress ||
    req.headers['x-forwarded-for']?.split(/\s*,\s*/)[0]

  res.status(200).json({test: 'Everything is good :)', ip})
}

export default root
