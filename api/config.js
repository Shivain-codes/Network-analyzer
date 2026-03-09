module.exports = function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  res.setHeader('Cache-Control', 'no-store');

  return res.status(200).json({
    GITHUB_TOKEN:      process.env.GITHUB_TOKEN      || '',
    YOUTUBE_KEY:       process.env.YOUTUBE_KEY        || '',
    INSTAGRAM_TOKEN:   process.env.INSTAGRAM_TOKEN    || '',
    INSTAGRAM_USER_ID: process.env.INSTAGRAM_USER_ID  || '',
  });
};
